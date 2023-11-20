import { transition } from "../../Transition";
import { DesignToken } from "../token";

// https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
export const motion = {
	transitionDuration: DesignToken.transitionDuration(transition.duration),
	transitionTimingFunction: DesignToken.transitionTimingFunction({
		linear: transition.easing.linear.toString(),
		standard: transition.easing.standard.toString(),
		"standard-accelerate": transition.easing.standard.accelerate.toString(),
		"standard-decelerate": transition.easing.standard.decelerate.toString(),
		emphasized: transition.easing.emphasized.toString(),
		"emphasized-decelerate": transition.easing.emphasized.decelerate.toString(),
		"emphasized-accelerate": transition.easing.emphasized.accelerate.toString(),
		legacy: transition.easing.legacy.toString(),
		"legacy-decelerate": transition.easing.legacy.decelerate.toString(),
		"legacy-accelerate": transition.easing.legacy.accelerate.toString(),
	}),
};
