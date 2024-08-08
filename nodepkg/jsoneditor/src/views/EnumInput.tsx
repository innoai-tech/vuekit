import {
  type AnyType,
  component$,
  type Context,
  rx
} from "@innoai-tech/vuekit";
import { JSONEditorProvider } from "../models";
import { set } from "@innoai-tech/lodash";
import { Menu, MenuItem, PopupStatus } from "./Menu.tsx";
import { ValueView } from "./TokenView.tsx";

export const EnumInput = component$<{
  ctx: Context;
  value: any;
  typedef: AnyType;
}>((props, { render }) => {
  const editor$ = JSONEditorProvider.use();
  const open$ = new PopupStatus(false);

  return rx(
    props.value$,
    render((value) => {
      const enumValues = props.typedef.getSchema<any[]>("enum") ?? [];
      const enumLabels = props.typedef.getMeta<any[]>("enumLabels") ?? [];

      return (
        <Menu
          open$={open$}
          onSelected={(value) => {
            editor$.next((values: any) => {
              set(values, props.ctx.path, value);
            });
          }}
          $content={
            <>
              {enumValues.map((v, i) => (
                <MenuItem data-value={v}>
                  <div>{v}</div>
                  {enumLabels[i] && <div>{enumLabels[i]}</div>}
                </MenuItem>
              ))}
            </>
          }
        >
          <div>
            <ValueView
              value={value}
              onClick={() => open$.show()}
            />
          </div>
        </Menu>
      );
    })
  );
});
