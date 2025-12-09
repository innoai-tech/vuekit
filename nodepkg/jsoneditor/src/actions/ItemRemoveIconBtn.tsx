import { component$ } from "@innoai-tech/vuekit";
import type { VNodeChild } from "vue";
import { ActionBtn, Tooltip } from "../views";
import { Icon } from "@innoai-tech/vuematerial";
import { mdiMinusBoxOutline } from "@mdi/js";

export const ItemRemoveIconBtn = component$<{
  $default?: VNodeChild;
  onRemove?: () => void;
}>((_, { emit }) => {
  return () => (
    <Tooltip $title={"移除项"}>
      <ActionBtn type={"button"} onClick={() => emit("remove")}>
        <Icon path={mdiMinusBoxOutline} />
      </ActionBtn>
    </Tooltip>
  );
});
