import { map } from "@innoai-tech/lodash";
import { Fragment, component } from "@innoai-tech/vuekit";
import {
  ElevatedButton,
  FilledButton,
  Icon,
  OutlinedButton,
  TextButton,
  TonalButton,
} from "@innoai-tech/vuematerial";
import { Box } from "@innoai-tech/vueuikit";
import { mdiPlus, mdiSend } from "@mdi/js";
import { Container } from "@webapp/vuekit/layout";

export default component(() => {
  const stateProps = {
    Enabled: {},
    Disabled: { disabled: true },
    Hovered: { hover: true },
    Focused: { focus: true },
    Pressed: { active: true },
  };

  const buttons = {
    ElevatedButton: ElevatedButton,
    FilledButton: FilledButton,
    TonalButton: TonalButton,
    OutlinedButton: OutlinedButton,
    TextButton: TextButton,
  };

  return () => (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {map(buttons, (Button, name) => (
          <Box
            key={name}
            sx={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {[
              (v: string) => v,
              (v: string) => (
                <>
                  <Icon path={mdiPlus} placement={"start"} />
                  {v}
                </>
              ),
              (v: string) => (
                <>
                  {v}
                  <Icon path={mdiSend} placement={"end"} />
                </>
              ),
            ].map((render, i) => (
              <Fragment key={`${i}`}>
                <Box sx={{ display: "flex", gap: 16 }}>
                  {map(stateProps, (props, name) => (
                    <Button {...props}>{render(name)}</Button>
                  ))}
                </Box>
              </Fragment>
            ))}
          </Box>
        ))}
      </Box>
    </Container>
  );
});
