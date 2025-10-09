import { map } from "es-toolkit/compat";
import { Fragment, component } from "@innoai-tech/vuekit";
import { Icon, TextField } from "@innoai-tech/vuematerial";
import { Box } from "@innoai-tech/vueuikit";
import { mdiAccount, mdiPlus } from "@mdi/js";
import { Container } from "@webapp/vuekit/layout";

export default component(() => {
  const stateProps = {
    Enabled: {},
    Focused: { focus: true },
    Invalid: { invalid: true },
    Disabled: { disabled: true },
  };

  const buttons = {
    TextField: TextField,
  };

  return () => (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {map(buttons, (TextField, name) => (
          <Box
            key={name}
            sx={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {[
              (props: any) => (
                <TextField {...props}>
                  <input data-input="" type="text" placeholder={"Type"} />
                </TextField>
              ),
              (props: any) => (
                <TextField {...props} valued={true}>
                  <input data-input="" type="text" value={"Username"} />
                </TextField>
              ),
              (props: any) => (
                <TextField {...props} $leading={<Icon path={mdiAccount} />}>
                  <input data-input="" type="text" />
                </TextField>
              ),
              (props: any) => (
                <TextField {...props} $trailing={<Icon path={mdiPlus} />}>
                  <input data-input="" type="text" />
                </TextField>
              ),
            ].map((render, i) => (
              <Fragment key={`${i}`}>
                <Box sx={{ display: "flex", gap: 16 }}>
                  {map(stateProps, (props) =>
                    render({
                      ...props,
                      $label: "Name",
                      $supporting: "Desc",
                    }),
                  )}
                </Box>
              </Fragment>
            ))}
          </Box>
        ))}
      </Box>
    </Container>
  );
});
