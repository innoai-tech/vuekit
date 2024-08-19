import {
  type AnyType,
  type Context,
  createProvider,
  ImmerBehaviorSubject,
  type Infer,
  t,
  Type
} from "@innoai-tech/vuekit";
import { get, isPlainObject, isUndefined } from "@innoai-tech/lodash";

export class JSONEditor<T extends Type> extends ImmerBehaviorSubject<Infer<T>> {
  static of<T extends Type>(typedef: T, initials?: Partial<Infer<T>>) {
    return new JSONEditor(
      typedef,
      initials ?? (typedef.type == "array" ? [] : {})
    );
  }

  constructor(
    public typedef: T,
    protected initials: Infer<T>
  ) {
    super(initials);
  }

  isDirty(value: any, path: any[]) {
    if (!isPlainObject(value)) {
      const v = get(this.initials, path);

      return isUndefined(v) || v !== value;
    }
    return false;
  }
}

export const JSONEditorProvider = createProvider(
  () => new JSONEditor<AnyType>(t.object(), {})
);

export const JSONEditorSlotsProvider = createProvider(() => {
  return {} as {
    $value?: (_t: AnyType, _value: any, _ctx: Context) => JSX.Element | null | undefined,
  };
});
