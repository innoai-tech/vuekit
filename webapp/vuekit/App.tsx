import { groupBy, last, map, partition } from "es-toolkit/compat";
import {
  component,
  RouterLink,
  RouterView,
  t,
  useRouter,
} from "@innoai-tech/vuekit";
import {
  Icon,
  IconButton,
  mdiGithub,
  mdiWeatherNight,
  mdiWhiteBalanceSunny,
  TextButton,
  Tooltip,
} from "@innoai-tech/vuematerial";
import {
  Box,
  CacheProvider,
  CSSReset,
  defaultTheme,
  GlobalStyle,
  Palette,
  ThemeProvider,
  Theming,
} from "@innoai-tech/vueuikit";
// @ts-ignore
import normalizeCss from "normalize.css/normalize.css?raw";
import { ref, type VNodeChild, watch } from "vue";
import { Container, DynamicThemingProvider } from "./layout";

export const Nav = component(() => {
  const r = useRouter();

  const groups = groupBy(
    r.options.routes.filter((p) => p.path !== "/"),
    (route) => route.path.split("/")[1],
  );

  return () => {
    return (
      <Box sx={{ py: 16, px: 0, textTransform: "capitalize" }}>
        {map(groups, (routes, group) => {
          const [index, subRoutes] = partition(
            routes,
            (r) => r.path === `/${group}`,
          );

          return (
            <Box key={group} sx={{ px: 8 }}>
              {index[0] ? (
                <TextButton
                  component={RouterLink}
                  sx={{
                    width: "100%",
                    justifyContent: "flex-start",
                  }}
                  activeClass={"active"}
                  to={index[0]?.path}
                >
                  {group}
                </TextButton>
              ) : (
                <TextButton
                  sx={{
                    width: "100%",
                    justifyContent: "flex-start",
                  }}
                >
                  {group}
                </TextButton>
              )}
              <Box sx={{ pl: 16 }}>
                {map(subRoutes, (subRoute) => (
                  <TextButton
                    key={subRoute.name}
                    component={RouterLink}
                    activeClass={"active"}
                    to={subRoute.path}
                    sx={{
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    {last(subRoute.path.split("/"))?.replaceAll("-", " ")}
                  </TextButton>
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>
    );
  };
});

export const Scaffold = component(
  {
    $default: t.custom<VNodeChild>().optional(),
  },
  (_, { slots }) => {
    const themeMode = ref("light");

    return () => (
      <Box
        data-theme={themeMode.value}
        sx={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          containerStyle: "sys.surface",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "280px",
            height: "100vh",
            borderRightRadius: "lg",
            overflowY: "auto",
            containerStyle: "sys.surface-container-low",

            elevation: "0",
            _hover: {
              elevation: "2",
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
            }}
          >
            <Nav />
          </Box>

          <Box sx={{ p: 16, display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              component={"a"}
              target={"_blank"}
              sx={{ color: "sys.on-surface-variant" }}
              href={"//github.com/innoai-tech/vuekit"}
            >
              <Icon path={mdiGithub} />
            </IconButton>
            <Tooltip
              title={`切换到${themeMode.value === "light" ? "深色模式" : "浅色模式"}`}
            >
              <Box
                component={IconButton}
                data-test={true}
                sx={{ color: "sys.on-surface-variant" }}
                onClick={() => {
                  themeMode.value =
                    themeMode.value === "light" ? "dark" : "light";
                }}
              >
                <Icon
                  path={
                    themeMode.value === "light"
                      ? mdiWeatherNight
                      : mdiWhiteBalanceSunny
                  }
                />
              </Box>
            </Tooltip>
          </Box>
        </Box>
        <Box sx={{ flex: 1, overflow: "auto" }}>
          <Container>{slots.default?.()}</Container>
        </Box>
      </Box>
    );
  },
);

export const App = component(() => {
  const x = DynamicThemingProvider.use();
  const cache = CacheProvider.use();

  watch([() => x.value.seed, () => x.value.rules], ([seed, rules]) => {
    x.next((x) => {
      x.theming = Theming.create(
        {
          ...defaultTheme,
          ...Palette.fromColors(seed).toDesignTokens(rules),
        },
        { varPrefix: "vk" },
      );
    });
  });

  return () => {
    const theming = x.value.theming;

    // to set hash
    const v = theming.unstable_css(cache, { ":root": theming.rootCSSVars });

    return (
      <DynamicThemingProvider value={x}>
        <ThemeProvider value={theming} key={v.name}>
          <CSSReset />
          <GlobalStyle styles={normalizeCss} />
          <Scaffold>
            <RouterView />
          </Scaffold>
        </ThemeProvider>
      </DynamicThemingProvider>
    );
  };
});
