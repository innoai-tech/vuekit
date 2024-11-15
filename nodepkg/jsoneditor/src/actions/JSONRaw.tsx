import { component$ } from "@innoai-tech/vuekit";
import { Icon } from "@innoai-tech/vuematerial";
import copyToClipboard from "copy-to-clipboard";
import { mdiContentCopy } from "@mdi/js";
import { ActionBtn, Tooltip } from "../views";

export const CopyAsJSONIconBtn = component$<{
  value?: any;
}>((props, {}) => {
  return () => (
    <Tooltip $title={"复制当前节点为 JSON 字符串"}>
      <ActionBtn
        type={"button"}
        onClick={() => copyToClipboard(JSON.stringify(props.value, null, 2))}
      >
        <Icon path={mdiContentCopy} />
      </ActionBtn>
    </Tooltip>
  );
});
