import { type SimplePseudos } from "@innoai-tech/csstype";

export const pseudoSelectors = {
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  _dark: "&[data-theme=dark]",
  _light: "&[data-theme=light]",
};

export type Pseudos = typeof pseudoSelectors;

type DistributePseudoElement<U> =
  U extends `::-${"moz" | "ms" | "khtml" | "webkit"}-${string}`
    ? never
    : U extends `::${string}`
      ? U
      : never;

type DistributePseudoClass<U> = U extends `::${string}`
  ? never
  : U extends `:-${"moz" | "ms" | "khtml" | "webkit"}-${string}`
    ? never
    : U extends `:${string}`
      ? U
      : never;

type PseudoElements = DistributePseudoElement<SimplePseudos>;
type PseudoClasses = DistributePseudoClass<SimplePseudos>;

type ToCamelCase<S> = S extends `${infer T}-${infer U}`
  ? `${T}${Capitalize<ToCamelCase<U>>}`
  : S;

type DistributePseudoElementNames<U> = U extends `::${infer N}` ? N : never;
type DistributePseudoClassNames<U> = U extends `:${infer N}` ? N : never;

export type PseudoElementAliases = {
  [K in DistributePseudoElementNames<PseudoElements> as K extends string
    ? `_$${ToCamelCase<K>}`
    : never]: K;
};

export type PseudoClassAliases = {
  [K in DistributePseudoClassNames<PseudoClasses> as K extends string
    ? `_${ToCamelCase<K>}`
    : never]: K;
};

export function getSupportedPseudoClasses(): {
  [K in DistributePseudoClassNames<PseudoClasses> as K extends string
    ? `${ToCamelCase<K>}`
    : never]: K;
} {
  return {
    active: "active",
    after: "after",
    anyLink: "any-link",
    before: "before",
    blank: "blank",
    checked: "checked",
    current: "current",
    default: "default",
    defined: "defined",
    disabled: "disabled",
    empty: "empty",
    enabled: "enabled",
    first: "first",
    firstChild: "first-child",
    firstLetter: "first-letter",
    firstLine: "first-line",
    firstOfType: "first-of-type",
    focus: "focus",
    focusVisible: "focus-visible",
    focusWithin: "focus-within",
    fullscreen: "fullscreen",
    future: "future",
    hover: "hover",
    inRange: "in-range",
    indeterminate: "indeterminate",
    invalid: "invalid",
    lastChild: "last-child",
    lastOfType: "last-of-type",
    left: "left",
    link: "link",
    localLink: "local-link",
    nthCol: "nth-col",
    nthLastCol: "nth-last-col",
    onlyChild: "only-child",
    onlyOfType: "only-of-type",
    optional: "optional",
    outOfRange: "out-of-range",
    past: "past",
    paused: "paused",
    pictureInPicture: "picture-in-picture",
    placeholderShown: "placeholder-shown",
    playing: "playing",
    readOnly: "read-only",
    readWrite: "read-write",
    required: "required",
    right: "right",
    root: "root",
    scope: "scope",
    target: "target",
    targetWithin: "target-within",
    userInvalid: "user-invalid",
    userValid: "user-valid",
    valid: "valid",
    visited: "visited",
  };
}
