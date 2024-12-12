export const sortedRoutes = (children: Array<{ component: string, name: string, path?: string }> = []) => {
  return children.toSorted((a, b) => {
    if (!a.path || !b.path) {
      if (!a.path) {
        return -1;
      }
      return 0;
    }
    if (a.component < b.component) {
      return -1;
    }
    return 0;
  });
};
