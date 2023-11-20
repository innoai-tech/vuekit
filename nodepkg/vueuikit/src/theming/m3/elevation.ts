import { DesignToken } from "../token";

export const elevation = {
	shadow: DesignToken.shadow({
		"0": {
			_default:
				"0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)",
			_dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)",
		},
		"1": {
			_default:
				"0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
			_dark:
				"0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
		},
		"2": {
			_default:
				"0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
			_dark:
				"0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
		},
		"3": {
			_default:
				"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
			_dark:
				"0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
		},
		"4": {
			_default:
				"0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
			_dark:
				"0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
		},
		"5": {
			_default:
				"0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
			_dark:
				"0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
		},
	}),
	elevation: DesignToken.customMixin("elevation", {
		"0": DesignToken.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "0",

			_hover: {
				shadow: "1",
			},
		}),
		"1": DesignToken.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "1",

			_hover: {
				shadow: "2",
			},
		}),
		"2": DesignToken.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "2",

			_hover: {
				shadow: "3",
			},
		}),
		"3": DesignToken.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "3",

			_hover: {
				shadow: "4",
			},
		}),
		"4": DesignToken.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "4",
			_hover: {
				shadow: "5",
			},
		}),
	}),
};
