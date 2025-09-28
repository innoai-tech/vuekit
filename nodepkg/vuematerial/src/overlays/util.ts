import { size } from "@floating-ui/dom";

export const sameWidth = size({
  apply({ elements, rects }) {
    Object.assign(elements.floating.style, {
      width: `${rects.reference.width}px`,
    });
  },
});
