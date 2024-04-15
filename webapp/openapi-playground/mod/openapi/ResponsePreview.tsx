import { component$, rx, t, render } from "@innoai-tech/vuekit";
import { styled } from "@innoai-tech/vueuikit";
import { OpenAPIProvider } from "./OpenAPIProvider.tsx";
import { HTTPResponse } from "./HTTPViews.tsx";


export const ResponsePreview = component$({
  operationID: t.string()
}, (props) => {
  const openapi$ = OpenAPIProvider.use();

  return rx(
    openapi$.response$(props.operationID),
    render((resp) => {
      return (
        <ResponseSection>
          <HTTPResponse response={resp} />
        </ResponseSection>
      );
    })
  );
});

const ResponseSection = styled("section")({
  maxHeight: "40vh",
  overflow: "auto"
});

