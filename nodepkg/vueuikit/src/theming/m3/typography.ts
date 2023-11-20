import { DesignToken } from "../token";

export const typography = {
	font: DesignToken.font({
		brand: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		plain: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		code: [
			`'Lucida Console'`,
			"Consolas",
			"Monaco",
			`'Andale Mono'`,
			`'Ubuntu Mono'`,
			"monospace",
		].join(","),
	}),

	fontWeight: DesignToken.fontWeight({
		regular: 400,
		medium: 500,
		bold: 700,
	}),

	textStyle: DesignToken.customMixin("textStyle", {
		sys: {
			"display-large": DesignToken.mixin({
				lineHeight: 64,
				fontSize: 57,
				letterSpacing: -0.25,
				fontWeight: "regular",
				font: "brand",
			}),
			"display-medium": DesignToken.mixin({
				lineHeight: 52,
				fontSize: 45,
				letterSpacing: 0,
				fontWeight: "regular",
				font: "brand",
			}),
			"display-small": DesignToken.mixin({
				lineHeight: 44,
				fontSize: 36,
				letterSpacing: 0,
				fontWeight: "regular",
				font: "brand",
			}),

			"headline-large": DesignToken.mixin({
				lineHeight: 40,
				fontSize: 32,
				letterSpacing: 0,
				fontWeight: "regular",
				font: "brand",
			}),
			"headline-medium": DesignToken.mixin({
				lineHeight: 36,
				fontSize: 28,
				letterSpacing: 0,
				fontWeight: "regular",
				font: "brand",
			}),
			"headline-small": DesignToken.mixin({
				lineHeight: 32,
				fontSize: 24,
				letterSpacing: 0,
				fontWeight: "regular",
				font: "plain",
			}),

			"title-large": DesignToken.mixin({
				lineHeight: 28,
				fontSize: 22,
				letterSpacing: 0,
				fontWeight: "regular",
				font: "brand",
			}),
			"title-medium": DesignToken.mixin({
				lineHeight: 24,
				fontSize: 16,
				letterSpacing: 0.15,
				fontWeight: "medium",
				font: "plain",
			}),
			"title-small": DesignToken.mixin({
				lineHeight: 20,
				fontSize: 14,
				letterSpacing: 0.1,
				fontWeight: "medium",
				font: "plain",
			}),
			"label-large": DesignToken.mixin({
				lineHeight: 20,
				fontSize: 14,
				letterSpacing: 0.1,
				fontWeight: "medium",
				font: "plain",
			}),
			"label-medium": DesignToken.mixin({
				lineHeight: 16,
				fontSize: 12,
				letterSpacing: 0.5,
				fontWeight: "medium",
				font: "plain",
			}),
			"label-small": DesignToken.mixin({
				lineHeight: 16,
				fontSize: 11,
				letterSpacing: 0.5,
				fontWeight: "medium",
				font: "plain",
			}),

			"body-large": DesignToken.mixin({
				lineHeight: 24,
				fontSize: 16,
				letterSpacing: 0.5,
				fontWeight: "regular",
				font: "plain",
			}),
			"body-medium": DesignToken.mixin({
				lineHeight: 20,
				fontSize: 14,
				letterSpacing: 0.25,
				fontWeight: "regular",
				font: "plain",
			}),
			"body-small": DesignToken.mixin({
				lineHeight: 16,
				fontSize: 12,
				letterSpacing: 0.4,
				fontWeight: "regular",
				font: "plain",
			}),
		},
	}),
};
