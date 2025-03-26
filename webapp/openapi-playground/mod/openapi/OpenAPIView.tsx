import {
  component$,
  ImmerBehaviorSubject,
  observableRef,
  render,
  RouterLink,
  RouterView,
  rx,
  subscribeOnMountedUntilUnmount,
  subscribeUntilUnmount,
} from "@innoai-tech/vuekit";
import { Box, styled } from "@innoai-tech/vueuikit";
import { OpenAPIProvider } from "./OpenAPIProvider.tsx";
import { debounceTime, EMPTY, Observable, Subject, switchMap, tap } from "rxjs";

export const OpenAPIView = component$(({}, {}) => {
  const openapi$ = OpenAPIProvider.use();

  const filters$ = new ImmerBehaviorSubject({
    operationId: undefined as string | undefined,
  });

  const operationIDInput = new Subject<string>();

  rx(
    operationIDInput,
    debounceTime(200),
    tap((v: string) => {
      filters$.next((filters) => {
        filters.operationId = `*${v ?? ""}`;
      });
    }),
    subscribeUntilUnmount(),
  );

  const scrollContainerEl$ = observableRef<HTMLDivElement | null>(null);

  rx(
    scrollContainerEl$,
    switchMap((scrollContainerEl) => {
      if (scrollContainerEl) {
        const scrollTo = (item: HTMLElement | null) => {
          if (item) {
            scrollContainerEl.scrollTo({
              top: item.offsetTop - scrollContainerEl.offsetTop,
            });
          }
        };

        return new Observable(() => {
          const observer = new MutationObserver((mutationList) => {
            for (const mutation of mutationList) {
              if (mutation.type === "attributes") {
                const target = mutation.target as HTMLDivElement;

                if (target.classList.contains("router-link-active")) {
                  scrollTo(target);
                }
              }
            }
          });

          observer.observe(scrollContainerEl, {
            attributes: true,
            subtree: true,
          });

          // wait all inserted
          setTimeout(() => {
            scrollTo(
              scrollContainerEl.querySelector<HTMLElement>(
                ".router-link-active",
              ),
            );
          }, 100);

          return () => {
            observer.disconnect();
          };
        });
      }

      return EMPTY;
    }),
    subscribeOnMountedUntilUnmount(),
  );

  const $nav = rx(
    filters$,
    switchMap((filters) => {
      return openapi$.operations$(filters);
    }),
    render((operations) => {
      const grouped = Object.groupBy(operations, (v) => v.group);

      return (
        <NavContainer>
          <NavSearchBox>
            <input
              type="text"
              placeholder={"请输入 operationId 查询"}
              onInput={(e) => {
                operationIDInput.next((e.target as HTMLInputElement).value);
              }}
            />
          </NavSearchBox>
          <Nav sx={{ flex: 1, overflow: "scroll" }} ref={scrollContainerEl$}>
            {Object.entries(grouped)
              .toSorted()
              .map(([group, operations]) => {
                return (
                  <div data-nav-group>
                    <div data-nav-group-heading>{group}</div>
                    <div data-nav-group-contents>
                      {operations?.map((op) => {
                        return (
                          <OperationListItem
                            component={RouterLink}
                            to={`/operations/${op.operationId}`}
                          >
                            <Box
                              data-operation-method
                              sx={{
                                color:
                                  (
                                    {
                                      get: "sys.primary",
                                      post: "sys.success",
                                      put: "sys.warning",
                                      delete: "sys.error",
                                    } as const
                                  )[op.method] ?? "sys.secondary",
                              }}
                            >
                              {op.method}
                            </Box>
                            <div data-operation-desc>
                              <div data-operation-id>{op.operationId}</div>
                              {op.summary ? (
                                <div data-operation-summary>
                                  {op.summary != op.operationId ? (
                                    op.summary
                                  ) : (
                                    <span>&nbsp;</span>
                                  )}
                                </div>
                              ) : undefined}
                            </div>
                          </OperationListItem>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </Nav>
        </NavContainer>
      );
    }),
  );

  return () => {
    return (
      <Container>
        {$nav}
        <Main>
          <RouterView />
        </Main>
      </Container>
    );
  };
});

const Container = styled("div")({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
});

const NavContainer = styled("aside")({
  width: 240,
  py: 4,
  display: "flex",
  flexDirection: "column",
  gap: 4,
  height: "100%",
  overflow: "hidden",

  borderRight: "1px solid",
  borderColor: "sys.outline",
});

const NavSearchBox = styled("div")({
  input: {
    py: 10,
    px: 12,
    border: "none",
    width: "100%",
    outline: 0,
  },

  borderBottom: "1px solid",
  borderColor: "sys.outline",
});

const Nav = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 4,

  $data_nav_group_heading: {
    px: 12,
    py: 4,
    textStyle: "sys.label-small",
    containerStyle: "sys.secondary-container",
  },
});

const Main = styled("main")({
  flex: 1,
  overflow: "hidden",
});

const OperationListItem = styled("a")({
  px: 12,
  py: 8,
  pos: "relative",
  overflow: "hidden",
  width: 240,

  display: "flex",
  alignItems: "center",
  gap: 8,
  flexDirection: "row-reverse",

  textDecoration: "none",

  $data_operation_method: {
    textTransform: "uppercase",
    fontSize: 18,
    fontFamily: "code",
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
  },

  $data_operation_desc: {
    flex: 1,
    overflow: "hidden",
  },

  $data_operation_id: {
    textStyle: "sys.label-large",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },

  $data_operation_summary: {
    opacity: 0.7,
    textStyle: "sys.body-small",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },

  "&.router-link-active": {
    containerStyle: "sys.surface-container",
  },
});
