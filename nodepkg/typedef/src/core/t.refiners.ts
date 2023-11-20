import { Type, TypeWrapper } from "./Type";

export function pattern(pattern: RegExp, msg?: string) {
	return <T extends Type<string, any>>(type: T): Type<string, any> => {
		return TypeWrapper.refine(
			type,
			(value) => {
				return (
					pattern.test(value) ||
					(msg ??
						`Expected a ${type.type} matching \`/${pattern.source}/\` but received "${value}"`)
				);
			},
			{
				pattern,
			},
		);
	};
}
