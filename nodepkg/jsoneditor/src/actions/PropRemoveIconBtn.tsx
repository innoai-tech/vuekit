import { component$, type VNodeChild } from "@innoai-tech/vuekit";
import { ActionBtn, Tooltip } from "../views";
import { Icon } from "@innoai-tech/vuematerial";
import { mdiMinusBoxOutline } from "@mdi/js";

export const PropRemoveIconBtn = component$<{
  $default?: VNodeChild;
  onRemove?: () => void;
}>((_, { emit }) => {
  return () => (
    <Tooltip $title={"删除属性"}>
      <ActionBtn type={"button"} onClick={() => emit("remove")}>
        <Icon path={mdiMinusBoxOutline} />
      </ActionBtn>
    </Tooltip>
  );
});
