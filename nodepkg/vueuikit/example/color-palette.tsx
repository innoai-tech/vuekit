import { component } from "@innoai-tech/vuekit";
import { Palette } from "@innoai-tech/vueuikit";
import { map } from "@innoai-tech/lodash";
import { ref } from "vue";
import { Box } from "@innoai-tech/vueuikit";
import copyToClipboard from "copy-to-clipboard";

export default component(() => {
  const seed = {
    primary: "#1270f5",
    secondary: "#8a90a5",
    tertiary: "#b58391",
    neutral: "#5e5e5e",
    neutralVariant: "#757780",
    error: "#d93f23",
    warning: "#e69c00",
    success: "#5ac220"
  };

  const p = ref({
    seed: {
      primary: "#1270f5",
      secondary: "#8a90a5",
      tertiary: "#b58391",
      neutral: "#5e5e5e",
      neutralVariant: "#757780",
      error: "#d93f23",
      warning: "#e69c00",
      success: "#5ac220"
    },
    rules: Palette.fromColors(seed).normalizeRoleRules()
  });

  return () => {
    const pp = Palette.fromColors(p.value.seed);

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Box sx={{ display: "flex" }}>
          {map(p.value.seed, (color, name) => {
            return (
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div>{name}</div>
                <input type="color" value={color} onInput={(evt) => {
                  p.value = {
                    ...p.value,
                    seed: {
                      ...p.value.seed,
                      [name]: (evt.target as HTMLInputElement).value as string
                    }
                  };
                }} />
              </Box>
            );
          })}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {map(p.value.rules, ([base, onDark, onLight], role) => {
            return (
              <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                <Box sx={{ flex: 1 }}>{role}</Box>
                <Box sx={{
                  flex: 1,
                  display: "flex",
                  gap: 4,
                  "& input": {
                    width: "40%",
                    border: "1px solid",
                    borderColor: "sys.outline"
                  }
                }}>
                  <input
                    type="number"
                    value={onDark}
                    max={100}
                    min={0}
                    style={{
                      backgroundColor: Palette.toHEX(pp.seeds[base].tone(onDark)),
                      color: onDark > 50 ? "black" : "white"
                    }}
                    data-color={Palette.toHEX(pp.seeds[base].tone(onDark))}
                    data-theme={"dark"}
                    onChange={(evt) => {
                      try {
                        const v = parseInt((evt.target as HTMLInputElement).value);
                        p.value = {
                          ...p.value,
                          rules: {
                            ...p.value.rules,
                            [role]: [base, v, onLight]
                          }
                        };
                      } catch (_) {
                      }
                    }}
                  />
                  <input
                    type="number"
                    max={100}
                    min={0}
                    value={onLight}
                    style={{
                      backgroundColor: Palette.toHEX(pp.seeds[base].tone(onLight)),
                      color: onLight > 50 ? "black" : "white"
                    }}
                    data-color={Palette.toHEX(pp.seeds[base].tone(onLight))}
                    data-theme={"light"}
                    onChange={(evt) => {
                      try {
                        const v = parseInt((evt.target as HTMLInputElement).value);

                        p.value = {
                          ...p.value,
                          rules: {
                            ...p.value.rules,
                            [role]: [base, onDark, v]
                          }
                        };
                      } catch (_) {
                      }
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ display: "flex", gap: 16, "& > *": { flex: 1 } }}>
           <pre onClick={() => copyToClipboard(JSON.stringify(pp.toTokenObject(p.value.rules)))}>
            <code>
              {JSON.stringify(pp.toTokenObject(p.value.rules), null, 2)}
            </code>
          </pre>
          <pre onClick={() => copyToClipboard(JSON.stringify(p.value))}>
          <code>
            {JSON.stringify(p.value, null, 2)}
          </code>
        </pre>
        </Box>
      </Box>
    );
  };
});
