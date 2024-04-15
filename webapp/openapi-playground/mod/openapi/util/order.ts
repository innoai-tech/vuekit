export const ascBy = <T extends {}>(prop: keyof T) => {
  return (a: T, b: T): number => {
    if (a[prop] == b[prop]) {
      return 0;
    }
    if ((a[prop] < b[prop])) {
      return -1;
    }
    return 1;
  };
};

export const descBy = <T extends {}>(prop: keyof T) => {
  return (a: T, b: T): number => {
    if (a[prop] == b[prop]) {
      return 0;
    }
    if ((a[prop] > b[prop])) {
      return -1;
    }
    return 1;
  };
};

export const order = <T extends {}>(...compares: Array<(a: T, b: T) => number>) => {
  return (a: T, b: T): number => {
    for (const compare of compares) {
      let ret = compare(a, b);
      // first return not equal 0
      if (ret != 0) {
        return ret;
      }
    }
    return 0;
  };
};
