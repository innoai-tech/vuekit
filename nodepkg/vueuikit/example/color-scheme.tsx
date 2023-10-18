import { component, Fragment } from "@innoai-tech/vuekit";
import { Box } from "@innoai-tech/vueuikit";
import { map, upperFirst } from "@innoai-tech/lodash";

const tones = {
  "0": true,
  "10": true,
  "20": true,
  "30": true,
  "40": true,
  "50": true,
  "60": true,
  "70": true,
  "80": true,
  "90": true,
  "95": true,
  "100": true,
} as const;

export default component(() => {
  return () => (
    <>
      {["light", "dark"].map((theme) => (
        <div data-theme={theme} key={theme}>
          <Box
            component={"h1"}
            sx={{
              textStyle: "sys.headline-medium",
              pb: 8,
              mt: 16,
            }}
          >
            {upperFirst(theme)} Scheme
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {[
                "primary",
                "secondary",
                "tertiary",
                "error",
                "warning",
                "success",
              ].map((keyColor) => {
                return (
                  <Box
                    key={keyColor}
                    sx={{
                      flex: 1,
                      minW: 1 / 4,
                      display: "flex",
                      alignItems: "stretch",
                    }}
                  >
                    <Box
                      sx={{ flex: 1, display: "flex", flexDirection: "column" }}
                    >
                      {["", "-container"].map((suffix) => (
                        <Fragment key={suffix}>
                          <Box
                            sx={{
                              bgColor: `sys.${keyColor}${suffix}` as any,
                              color: `sys.on-${keyColor}${suffix}` as any,
                              p: 8,
                              flex: 3,
                            }}
                          >
                            {`${keyColor}${suffix}`}
                          </Box>
                          <Box
                            sx={{
                              color: `sys.${keyColor}${suffix}` as any,
                              bgColor: `sys.on-${keyColor}${suffix}` as any,
                              p: 8,
                              flex: 1,
                            }}
                          >
                            {`on-${keyColor}${suffix}`}
                          </Box>
                        </Fragment>
                      ))}
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      {map(tones, (_, k) => (
                        <Box
                          sx={{
                            color: `${keyColor}.${
                              parseInt(k) > 50 ? 0 : 100
                            }` as any,
                            bgColor: `${keyColor}.${k}` as any,
                            w: 60,
                            p: 8,
                            textAlign: "right",
                          }}
                        >
                          .{k}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                );
              })}
            </Box>

            <div>
              <Box sx={{ display: "flex", "& > *": { width: 1 / 3 } }}>
                {["-dim", "", "-bright"].map((suffix) => (
                  <Box
                    sx={{
                      color: `sys.on-surface`,
                      bgColor: `sys.surface${suffix}` as any,
                      height: 80,
                      p: 8,
                    }}
                  >
                    {`surface${suffix}`}
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex", "& > *": { width: 1 / 4 } }}>
                {["-lowest", "-low", "", "-high", "-highest"].map((suffix) => (
                  <Box
                    sx={{
                      color: `sys.on-surface`,
                      bgColor: `sys.surface-container${suffix}` as any,
                      height: 80,
                      p: 8,
                    }}
                  >
                    {`surface-container${suffix}`}
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex", "& > *": { width: 1 / 4 } }}>
                {[
                  "on-surface",
                  "on-surface-variant",
                  "outline",
                  "outline-variant",
                ].map((color) => (
                  <Box
                    sx={{
                      color: color.includes("outline-variant")
                        ? "sys.inverse-surface"
                        : "sys.inverse-on-surface",
                      bgColor: `sys.${color}` as any,
                      height: 80,
                      p: 8,
                    }}
                  >
                    {color}
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex" }}>
                {map(tones, (_, k) => (
                  <Box
                    sx={{
                      color: `neutral.${parseInt(k) > 50 ? 0 : 100}` as any,
                      bgColor: `neutral.${k}` as any,
                      flex: 1,
                      p: 8,
                      textAlign: "right",
                    }}
                  >
                    .{k}
                  </Box>
                ))}
              </Box>
            </div>
          </Box>
        </div>
      ))}
    </>
  );
});
