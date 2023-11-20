import { type SerializedStyles } from "@emotion/serialize";
import { type EmotionCache, insertStyles } from "@emotion/utils";

export const useInsertStyles = (cache: EmotionCache) => {
	return (props: {
		withoutScoping?: boolean;
		isStringTag?: boolean;
		serialized?: SerializedStyles;
	}) => {
		if (!props.serialized) {
			return;
		}

		if (props.withoutScoping) {
			cache.insert("", props.serialized, cache.sheet, true);
		} else {
			insertStyles(cache, props.serialized, props.isStringTag ?? true);
		}
	};
};
