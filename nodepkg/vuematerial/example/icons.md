直接使用沿用 [mid](https://pictogrammers.com/library/mdi/)

```tsx live
import { component } from "@innoai-tech/vuekit";
import { mdiSend } from "@mdi/js";
import { Icon } from "@innoai-tech/vuematerial";

export default component(() => {
  return () => <Icon path={mdiSend} />;
});
```

### 和 Button 一起使用

```tsx live
import { component } from "@innoai-tech/vuekit";
import { mdiSend } from "@mdi/js";
import { Icon } from "@innoai-tech/vuematerial";
import { IconButton, FilledButton } from "@innoai-tech/vuematerial";
import { Box } from "@innoai-tech/vueuikit";

export default component(() => {
  return () => (
    <Box sx={{ display: "flex", gap: 8 }}>
      <IconButton active onClick={() => console.log(1)}>
        <Icon path={mdiSend} />
      </IconButton>
      <FilledButton
        active={false}
      >
        Send
        <Icon path={mdiSend} placement="end" />
      </FilledButton>
    </Box>
  );
});
```