import { type DefineComponent } from "vue";
import { type VElementType } from "@innoai-tech/vuekit";

export type Component<P extends {}, C extends VElementType> = DefineComponent<
  C extends string ? JSX.IntrinsicElements[C] & P : P
>;
