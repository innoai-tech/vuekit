import { join } from "path";
import { type AppConfig } from "@innoai-tech/config";
import { camelCase } from "@innoai-tech/lodash";
import { readFile } from "fs/promises";
import fetch from "node-fetch";
import { ClientGen, type RequestCreator } from "./ClientGen";

export interface GenerateOptions {
	requestCreator: RequestCreator;
}

export interface Options extends GenerateOptions {
	id: string;
	uri: string;
	outDir: string;
}

const loadOpenAPI = async (uri: string): Promise<any> => {
	const u = new URL(uri);

	if (u.protocol === "files:") {
		const b = await readFile(u.pathname);
		return JSON.parse(`${b}`);
	}

	const res = await fetch(u.toString());
	return await res.json();
};

export const generateClient = async (opt: Options) => {
	const openapi = await loadOpenAPI(opt.uri);

	const g = new ClientGen(opt.id, openapi, opt.requestCreator);
	g.scan();
	return g.sync(join(opt.outDir, `${camelCase(opt.id)}.ts`));
};

export const generateClients = async (
	outDir: string,
	c: AppConfig & { metadata: Record<string, any> },
	options: GenerateOptions,
) => {
	for (const k in c.config) {
		if (c.metadata[k]?.api) {
			const { id, openapi } = c.metadata[k]?.api ?? {};

			const openapiURI = `${c.config[k]}${openapi}`;

			console.log(`generate client ${id} from ${openapiURI}`);

			await generateClient({
				...options,
				id,
				uri: openapiURI,
				outDir,
			});
		}
	}
};
