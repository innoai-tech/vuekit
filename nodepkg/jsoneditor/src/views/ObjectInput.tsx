import {
  type AnyType,
  component,
  component$,
  type Context,
  EmptyContext,
  rx,
  type VNodeChild
} from "@innoai-tech/vuekit";
import { get, set } from "@innoai-tech/lodash";
import { styled } from "@innoai-tech/vueuikit";
import { Icon } from "@innoai-tech/vuematerial";
import { mdiMinusBoxOutline, mdiPlusBoxOutline } from "@mdi/js";
import { Description, Block, Line, PropName, Token } from "./TokenView.tsx";
import { JSONEditorProvider, JSONEditorSlotsProvider } from "../models";
import { Menu, MenuItem, PopupStatus } from "./Menu.tsx";
import { ActionBtn, Actions } from "./Actions.tsx";
import { CopyAsJSONIconBtn, InputFromJSONRawIconBtn } from "./JSONRaw.tsx";
import { Tooltip } from "./Tooltip.tsx";

export const ObjectInput = component$<{
  ctx: Context;
  value: {};
  typedef: AnyType;
}>((props, { render }) => {
  const editor$ = JSONEditorProvider.use();
  const slots = JSONEditorSlotsProvider.use();

  return rx(
    props.value$,
    render((obj) => {
      return (
        <Block
          openToken={"{"}
          closeToken={"}"}
          $leading={
            <Actions>
              <AddPropIconBtn
                onAddProp={(propName) => {
                  editor$.next((values: any) => {
                    const p = [...props.ctx.path, propName];
                    set(values, p, get(values, p));
                  });
                }}
              >
                {[...props.typedef.entries(obj, EmptyContext)].map(
                  ([propName, _propValue, propSchema]) => {
                    if (!Object.hasOwn(obj, propName)) {
                      return (
                        <AddPropMenuItem
                          propName={String(propName)}
                          typedef={propSchema}
                        />
                      );
                    }
                    return null;
                  }
                )}
              </AddPropIconBtn>
              <CopyAsJSONIconBtn value={obj} />
              <InputFromJSONRawIconBtn
                onInput={(updated) => {
                  editor$.next((values: any) => {
                    if (props.ctx.path.length) {
                      set(values, props.ctx.path, updated);
                    } else {
                      Object.assign(values, updated);
                    }
                  });
                }}
              />
            </Actions>
          }
        >
          {[...props.typedef.entries(obj, props.ctx)].map(
            ([propName, propValue, propSchema]) => {
              if (!Object.hasOwn(obj, propName)) {
                return null;
              }

              const path = [...props.ctx.path, propName];

              return (
                <Line dirty={editor$.isDirty(propValue, path)}>
                  <PropName
                    deprecated={propSchema.getSchema("deprecated")}
                    description={propSchema.getMeta("description")}
                    $leading={
                      <RemotePropIconBtn
                        onRemove={() => {
                          editor$.next((values: any) => {
                            let v = values;
                            for (const k of props.ctx.path) {
                              v = v[k];
                            }
                            delete v[propName];
                          });
                        }}
                      />
                    }
                  >
                    {String(propName)}
                  </PropName>
                  <Token>{":"}&nbsp;</Token>
                  {slots.render(propSchema, propValue, {
                    ...props.ctx,
                    path: path,
                    branch: [...props.ctx.branch, propValue]
                  })}
                </Line>
              );
            }
          )}
        </Block>
      );
    })
  );
});

const RemotePropIconBtn = component$<{
  $default?: VNodeChild;
  onRemove?: () => void;
}>(({}, { emit }) => {
  return () => (
    <Tooltip $title={"移除节点"}>
      <ActionBtn onClick={() => emit("remove")}>
        <Icon path={mdiMinusBoxOutline} />
      </ActionBtn>
    </Tooltip>
  );
});

const AddPropIconBtn = component$<{
  $default?: VNodeChild;
  onAddProp?: (prop: string) => void;
}>(({}, { slots, emit }) => {
  const open$ = new PopupStatus(false);

  return () => {
    const children = slots.default?.().filter(n => n.type == AddPropMenuItem) ?? [];

    return children?.length > 0 ? (
      <Menu
        open$={open$}
        onSelected={(value) => {
          emit("add-prop", value);
        }}
        $content={children}
      >
        <Tooltip $title={"添加属性"}>
          <ActionBtn onClick={() => open$.show()}>
            <Icon path={mdiPlusBoxOutline} />
          </ActionBtn>
        </Tooltip>
      </Menu>
    ) : null;
  };
});

const AddPropMenuItem = component<{
  propName: string;
  typedef: AnyType;
}>((props) => {
  return () => {
    return (
      <AddPropMenuItemContainer data-value={props.propName}>
        <PropName optional={props.typedef.isOptional}>
          {props.propName}
        </PropName>
        <Description>
          {props.typedef.getMeta<string>("description")?.split("\n")?.[0] ?? ""}
        </Description>
      </AddPropMenuItemContainer>
    );
  };
});

const AddPropMenuItemContainer = styled(MenuItem)({
  width: 400,

  [`& ${PropName}`]: {
    width: "30%",
    textAlign: "left"
  }
});
