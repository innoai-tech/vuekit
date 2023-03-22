export const pseudoSelectors = {
  _: "&",

  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",

  _hover: "&:hover, &[data-hover], &.hover",
  _active: "&:active, &[data-active], &.active",
  _focus: "&:focus, &[data-focus], &.focus",
  _disabled:
    "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled], &.disabled",

  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible, &[data-focus-visible]",

  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly], &.readonly",

  _expanded: "&[aria-expanded=true], &[data-expanded], &.expanded",
  _checked: "&[aria-checked=true], &[data-checked], &.checked",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed], &.grabbed",
  _pressed: "&[aria-pressed=true], &[data-pressed], &.pressed",
  _invalid: "&[aria-invalid=true], &[data-invalid], &.invalid",
  _valid: "&[data-valid], &[data-state=valid], &.valid",
  _loading: "&[data-loading], &[aria-busy=true], &.loading",
  _selected: "&[aria-selected=true], &[data-selected], &.selected",
  _hidden: "&[hidden], &[data-hidden], &.hidden",

  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _firstLetter: "&::first-letter",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",

  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",

  _indeterminate:
    "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _placeholder: "&::placeholder",
  _placeholderShown: "&:placeholder-shown",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",

  _rtl: "[dir=rtl] &, &[dir=rtl]",
  _ltr: "[dir=ltr] &, &[dir=ltr]",

  _dark: "&[data-theme=dark]",
  _light: "&[data-theme=light]",
};

export type Pseudos = typeof pseudoSelectors;
