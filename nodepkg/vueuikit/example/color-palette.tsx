import { map } from "es-toolkit/compat";
import { component, ref } from "@innoai-tech/vuekit";
import { Palette } from "@innoai-tech/vueuikit";
import { Box } from "@innoai-tech/vueuikit";
import { DynamicThemingProvider } from "@webapp/vuekit/layout";
import copyToClipboard from "copy-to-clipboard";

export default component(() => {
  const p = DynamicThemingProvider.use();

  const el = ref(null);

  return () => {
    const pp = Palette.fromColors(p.value.seed);

    return (
      <Box ref={el} sx={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Box sx={{ display: "flex", gap: 56 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {map(p.value.seed, (color, name) => {
              return (
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <Box sx={{ flex: 1 }}>{name}</Box>
                  <input
                    type="color"
                    value={color}
                    onChange={(evt) => {
                      p.next((x) => {
                        (x.seed as any)[name] = (evt.target as HTMLInputElement)
                          .value as string;
                      });
                    }}
                  />
                </Box>
              );
            })}
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {map(p.value.rules, ([base, tone], role) => {
              return (
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "30%" }}
                >
                  <Box sx={{ flex: 1 }}>{role}</Box>
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      gap: 4,
                      "& input": {
                        width: "40%",
                        border: "1px solid",
                        borderColor: "sys.outline",
                      },
                    }}
                  >
                    <input
                      type="number"
                      value={tone}
                      max={100}
                      min={0}
                      style={{
                        backgroundColor: Palette.toHEX(
                          pp.seeds[base].tone(tone),
                        ),
                        color: tone > 50 ? "black" : "white",
                      }}
                      data-color={Palette.toHEX(pp.seeds[base].tone(tone))}
                      data-theme={"dark"}
                      onChange={(evt) => {
                        try {
                          const v = parseInt(
                            (evt.target as HTMLInputElement).value,
                          );
                          p.next((x) => {
                            (x.rules as any)[role] = [base, v, tone];
                          });
                        } catch (_) {}
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 16, "& > *": { flex: 1 } }}>
          <pre onClick={() => copyToClipboard(JSON.stringify(p.value))}>
            <code>{JSON.stringify(p.value, null, 2)}</code>
          </pre>
        </Box>
      </Box>
    );
  };
});
