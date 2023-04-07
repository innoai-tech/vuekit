import { component, z } from "@innoai-tech/vuekit";
import { type SerializedStyles } from "@emotion/serialize";
import { insertStyles } from "@emotion/utils";
import { CacheProvider } from "./CacheProvider";
import { watch } from "vue";

export const Insertion = component({
  withoutScoping: z.boolean().optional(),
  isStringTag: z.boolean().optional(),
  serialized: z.custom<SerializedStyles>()
}, (props, {}) => {
  const cache = CacheProvider.use();

  const insert = () => {
    if (props.withoutScoping) {
      cache.insert("", props.serialized, cache.sheet, true);
    } else {
      insertStyles(cache, props.serialized, props.isStringTag ?? true);
    }
  };

  watch(() => props.serialized, () => insert());
  insert();

  return () => {
    return null;
  };
});