import {
  type AnyType,
  component$,
  type Context,
  rx,
  type VNodeChild
} from "@innoai-tech/vuekit";
import { get, set } from "@innoai-tech/lodash";
import { Icon } from "@innoai-tech/vuematerial";
import { mdiMinusBoxOutline, mdiPlusBoxOutline } from "@mdi/js";
import { Block, Line, PropName } from "./TokenView.tsx";
import { JSONEditorProvider, JSONEditorSlotsProvider } from "../models";
import { ActionBtn, Actions } from "./Actions.tsx";
import { CopyAsJSONIconBtn, InputFromJSONRawIconBtn } from "./JSONRaw.tsx";
import { Tooltip } from "./Tooltip.tsx";


export const ArrayInput = component$<{
  ctx: Context;
  value: any[];
  typedef: AnyType;
}>((props, { render }) => {
  const editor$ = JSONEditorProvider.use();
  const slots = JSONEditorSlotsProvider.use();

  return rx(
    props.value$,
    render((value) => {
      return (
        <Block
          openToken={"["}
          closeToken={"]"}
          $leading={
            <Actions>
              <AddItemIconBtn
                onAdd={() => {
                  editor$.next((values: any) => {
                    const arr = get(values, props.ctx.path, []);

                    set(values, props.ctx.path, [...arr, undefined]);
                  });
                }}
              />
              <CopyAsJSONIconBtn value={value} />
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
          {[...props.typedef.entries(value, props.ctx)].map(
            ([idx, itemValue, propSchema]) => {
              const path = [...props.ctx.path, idx];

              return (
                <Line
                  dirty={editor$.isDirty(itemValue, path)}
                >
                  <PropName
                    sx={{ opacity: 0.3, mr: "0.5em" }}
                    $leading={
                      <RemoteItemIconBtn
                        onRemove={() => {
                          editor$.next((values: any) => {
                            let arr = get(values, props.ctx.path, [] as any[]);

                            set(
                              values,
                              props.ctx.path,
                              arr.filter((_: any, i: number) => i !== idx)
                            );
                          });
                        }}
                      />
                    }
                  >
                    {String(idx)}
                  </PropName>
                  {slots.$value?.(propSchema, itemValue, {
                    ...props.ctx,
                    path: path,
                    branch: [...props.ctx.branch, itemValue]
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

const AddItemIconBtn = component$<{
  $default?: VNodeChild;
  onAdd?: () => void;
}>(({}, { emit }) => {
  return () => (
    <Tooltip $title={"添加数组项"}>
      <ActionBtn onClick={() => emit("add")}>
        <Icon path={mdiPlusBoxOutline} />
      </ActionBtn>
    </Tooltip>
  );
});

const RemoteItemIconBtn = component$<{
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
