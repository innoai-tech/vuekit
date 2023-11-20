import { basename, extname } from "path";
import { camelCase, upperFirst } from "@innoai-tech/lodash";
import { type Plugin, createFilter } from "vite";
import { getHash } from "../helpers";

export interface VueJsxHmrOptions {
	include?: string[];
	exclude?: string[];
}

export interface ModuleExport {
	exported: string;
	id: string;
}

export interface Module {
	code: string;
	exports: Map<string, ModuleExport>;
}

export const exportScanner = (id: string, filename = id) => {
	const re =
		/export (const (?<name>\w+) =|default) (?<defn>define[A-Z]|styled|component\$?)/;

	return {
		scan(code: string): Module {
			const ret = {
				code: "",
				exports: new Map<string, ModuleExport>(),
			};
			let src = code;
			let m: RegExpMatchArray | null = null;
			while (true) {
				m = src.match(re);

				if (m === null) {
					break;
				}

				const defn = m.groups?.["defn"] ?? "";

				const exported = m.groups?.["name"] ?? "default";
				const local =
					exported !== "default"
						? `__${exported}`
						: upperFirst(
								camelCase(`${basename(filename, extname(filename))}Default`),
						  );

				const range = {
					start: m.index ?? 0,
					length: m[0].length,
				};

				ret.exports.set(local, { exported, id: getHash(`${id}#${exported}`) });

				ret.code += `${src.slice(0, range.start)}const ${local} = ${defn}`;

				src = src.slice(range.start + range.length);
			}

			ret.code += src;

			return ret;
		},
	};
};

export const viteVueComponentPatcher = (
	options: VueJsxHmrOptions = {},
): Plugin => {
	const filter = createFilter(
		options.include || [/\.tsx$/, /\.mdx?$/],
		options.exclude,
	);

	let hmrEnabled = false;

	return {
		name: "vite-plugin/vue-component-patcher",

		config(_, env) {
			hmrEnabled = env.command === "serve";
		},

		async transform(code, id) {
			const [filepath] = id.split("?");

			if (filter(id) || filter(filepath)) {
				const m = exportScanner(id, filepath).scan(code);
				let patched = m.code;
				patched += exportWithDisplayName(m);
				if (hmrEnabled) {
					patched += hmrPatch(m);
				}
				return patched;
			}

			return null;
		},
	};
};

function exportWithDisplayName(m: Module) {
	let code = "";

	m.exports.forEach(({ exported }, local) => {
		if (exported === "default") {
			code += `
export default `;
		} else {
			code += `
export const ${exported} = `;
		}

		code += `Object.assign(${local}, { displayName: "${
			exported === "default" ? local : exported
		}" });
`;
	});

	return code;
}

function hmrPatch(m: Module) {
	let code = "";
	let callbackBlock = "";

	m.exports.forEach(({ exported, id }, local) => {
		const ident = exported === "default" ? local : exported;

		code += `
${ident}.__hmrId = "${id}"
__VUE_HMR_RUNTIME__.createRecord(${ident}.__hmrId, ${ident});
`;
		callbackBlock += `__VUE_HMR_RUNTIME__.reload(exports.${exported}.__hmrId, exports.${exported});
`;
	});

	if (callbackBlock) {
		code += `
import.meta.hot?.accept((exports) => {
${callbackBlock}
})
`;
	}

	return code;
}
