import { component } from "@innoai-tech/vuekit";
import { Box } from "@innoai-tech/vueuikit";
import {
  Dialog,
  Tooltip,
  TextButton,
  Menu,
  ListItem,
  DialogContainer,
  Icon,
  IconButton,
  mdiClose,
} from "@innoai-tech/vuematerial";
import { Container } from "@webapp/vuekit/layout";
import { ref } from "vue";

export default component(() => {
  const dialogIsOpen = ref(false);
  const dialogIsOpen1 = ref(false);
  const dialogIsOpen2 = ref(false);

  return () => (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <TextButton
          onClick={() => {
            dialogIsOpen1.value = true;
          }}
        >
          Open Dialog
        </TextButton>
        <Dialog
          isOpen={dialogIsOpen1.value}
          onClose={() => {
            dialogIsOpen1.value = false;
          }}
        >
          <DialogContainer sx={{ minH: "40vh" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 16,
                textStyle: "sys.title-large",
              }}
            >
              <Box sx={{ flex: 1 }}>我是对话框</Box>
              <IconButton
                onClick={() => {
                  dialogIsOpen1.value = false;
                }}
              >
                <Icon path={mdiClose} />
              </IconButton>
            </Box>

            <TextButton
              onClick={() => {
                dialogIsOpen2.value = true;
              }}
            >
              Open Dialog In Dialog
            </TextButton>

            <Dialog
              isOpen={dialogIsOpen2.value}
              onClose={() => {
                dialogIsOpen2.value = false;
              }}
            >
              <DialogContainer sx={{ minH: "40vh" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 16,
                    textStyle: "sys.title-large",
                  }}
                >
                  <Box sx={{ flex: 1 }}>我是对话框 2</Box>
                  <IconButton
                    onClick={() => {
                      dialogIsOpen2.value = false;
                    }}
                  >
                    <Icon path={mdiClose} />
                  </IconButton>
                </Box>
              </DialogContainer>
            </Dialog>
          </DialogContainer>
        </Dialog>

        <Tooltip title={"Tooltip"}>
          <TextButton>Hover me</TextButton>
        </Tooltip>

        <Tooltip title={"Menu"}>
          <Menu
            $menu={
              <>
                <ListItem>选项一</ListItem>

                <ListItem
                  onClick={() => {
                    dialogIsOpen.value = true;
                  }}
                >
                  选项二
                </ListItem>
                <Dialog
                  isOpen={dialogIsOpen.value}
                  onClose={() => {
                    dialogIsOpen.value = false;
                  }}
                >
                  <DialogContainer sx={{ minH: "40vh" }}>
                    我是对话框
                  </DialogContainer>
                </Dialog>
                <Menu
                  placement={"right-start"}
                  $menu={
                    <>
                      <ListItem>选项三.1</ListItem>
                      <ListItem>选项三.2</ListItem>
                    </>
                  }
                >
                  <ListItem>选项三</ListItem>
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
