import { component } from "@innoai-tech/vuekit";
import { Markdown } from "@innoai-tech/vuemarkdown";
import { styled } from "@innoai-tech/vueuikit";
import type { VNodeChild } from "vue";

const StyledCode = styled<
  {
    $default?: VNodeChild;
  },
  "code"
>("code")({
  containerStyle: "sys.surface-container",
  py: 4,
  rounded: "xs",
});

export default component(() => {
  return () => (
    <>
      <StyledCode sx={{ px: 2 }}>123123</StyledCode>
      <Markdown text={"标题 1"} />
      <Markdown
        text={"`code`"}
        components={{
          code: StyledCode,
        }}
      />
    </>
  );
});
