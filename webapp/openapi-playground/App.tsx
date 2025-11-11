import {
  RouterView,
  component,
  rx,
  subscribeOnMountedUntilUnmount,
} from "@innoai-tech/vuekit";
import {
  createFetcher,
  paramsSerializer,
  transformRequestBody,
} from "@innoai-tech/fetcher";

import { CSSReset, GlobalStyle, ThemeProvider } from "@innoai-tech/vueuikit";

// @ts-ignore
import normalizeCss from "normalize.css/normalize.css?raw";

import conf, { CONFIG } from "./config";
import { ManifestProvider } from "./common";
import { OpenAPIProvider } from "./mod/openapi";
import { from, tap } from "rxjs";
import type { OpenAPIObject } from "./mod/openapi/models";

const fixBaseURL = (baseURL: string) => {
  if (baseURL) {
    if (baseURL.startsWith("//")) {
      return `${location.protocol}${baseURL}`;
    }
    if (baseURL.startsWith("/")) {
      return `${location.origin}${baseURL}`;
    }
    return baseURL;
  }
  return location.origin;
};

export const App = component(() => {
  const c = conf();
  const openapi$ = OpenAPIProvider.use();

  const fetcher = createFetcher({
    paramsSerializer,
    transformRequestBody,
  });

  console.log(fixBaseURL(c.OPENAPI));

  const url = new URL(fixBaseURL(c.OPENAPI));

  rx(
    from(
      fetcher.request({
        method: "GET",
        url: url.toString(),
        inputs: null,
      }),
    ),
    tap((resp) => {
      openapi$.next((o) => {
        Object.assign(o, resp.body as OpenAPIObject);

        if (!o.servers) {
          // default server
          o.servers = [
            {
              url: url.origin,
            },
          ];
        }
      });
    }),
    subscribeOnMountedUntilUnmount(),
  );

  return () => {
    return (
      <ThemeProvider>
        <CSSReset />
        <GlobalStyle styles={normalizeCss} />
        <ManifestProvider
          value={{
            name: c.name,
            description: CONFIG.manifest["description"],
          }}
        >
          <CSSReset />
          <GlobalStyle styles={normalizeCss} />
          <RouterView />
        </ManifestProvider>
      </ThemeProvider>
    );
  };
});
