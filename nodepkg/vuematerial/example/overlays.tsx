import { component } from "@innoai-tech/vuekit";
import {
  Icon,
  IconButton,
  mdiClose,
  Menu,
  MenuItem,
  SheetDialogContainer,
  SheetDialogContent,
  SheetDialogFooter,
  SheetDialogHeading,
  SheetDialogHeadingTitle,
  TextButton,
  Tooltip,
  useLeftSheetDialog,
  useTopSheetDialog,
} from "@innoai-tech/vuematerial";
import { Box } from "@innoai-tech/vueuikit";
import { Container } from "@webapp/vuekit/layout";

export default component(() => {
  const dialogInDialog$ = useTopSheetDialog(() => {
    return () => {
      return (
        <SheetDialogContainer sx={{ h: "auto", minH: 40 }}>
          <SheetDialogHeading>
            <SheetDialogHeadingTitle>我是对话框</SheetDialogHeadingTitle>
            <IconButton
              onClick={() => {
                dialogInDialog$.hide();
              }}
            >
              <Icon path={mdiClose} />
            </IconButton>
          </SheetDialogHeading>
        </SheetDialogContainer>
      );
    };
  });

  const dialog$ = useTopSheetDialog(() => {
    return () => {
      return (
        <SheetDialogContainer sx={{ h: "auto", minH: 40 }}>
          <SheetDialogHeading>
            <SheetDialogHeadingTitle>我是对话框</SheetDialogHeadingTitle>
            <IconButton
              onClick={() => {
                dialog$.hide();
              }}
            >
              <Icon path={mdiClose} />
            </IconButton>
          </SheetDialogHeading>
          <SheetDialogContent>xxx</SheetDialogContent>
          <SheetDialogFooter>
            <TextButton
              onClick={() => {
                dialogInDialog$.show();
              }}
            >
              Open Dialog
            </TextButton>
            {dialogInDialog$.$elem}
          </SheetDialogFooter>
        </SheetDialogContainer>
      );
    };
  });

  const dialog1$ = useLeftSheetDialog(() => {
    return () => {
      return (
        <SheetDialogContainer sx={{ h: "100vh", w: 300, maxH: "100vh" }}>
          <SheetDialogHeading>
            <SheetDialogHeadingTitle>我是对话框</SheetDialogHeadingTitle>
            <IconButton
              onClick={() => {
                dialog$.hide();
              }}
            >
              <Icon path={mdiClose} />
            </IconButton>
          </SheetDialogHeading>
        </SheetDialogContainer>
      );
    };
  });

  return () => (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <TextButton
          onClick={() => {
            dialog$.show();
          }}
        >
          Open Dialog
        </TextButton>
        {dialog$.$elem}
        <Tooltip title={"Tooltip"}>
          <TextButton>Hover me</TextButton>
        </Tooltip>
        <Tooltip title={"Menu"}>
          <Menu
            $menu={
              <>
                <MenuItem>选项一</MenuItem>
                <MenuItem
                  onClick={() => {
                    dialog1$.show();
                  }}
                >
                  选项二
                </MenuItem>
                {dialog1$.$elem}
                <Menu
                  placement={"right-start"}
                  $menu={
                    <>
                      <MenuItem>选项三.1</MenuItem>
                      <MenuItem>选项三.2</MenuItem>
                    </>
                  }
                >
                  <MenuItem>选项三</MenuItem>
                </Menu>
              </>
            }
          >
            <TextButton>Menu</TextButton>
          </Menu>
        </Tooltip>
      </Box>
    </Container>
  );
});
