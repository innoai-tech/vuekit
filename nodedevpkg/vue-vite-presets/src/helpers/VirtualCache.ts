import type { ViteDevServer } from "vite";

export class VirtualCache {
  private files = new Map<string, string>();

  constructor() {
  }

  private server?: ViteDevServer;

  bindDevServer(server: ViteDevServer) {
    this.server = server;
  }

  store(id: string, code: string) {
    const finalID = `virtual:cache:${id}`;

    if (this.server) {
      const mod = this.server.moduleGraph.getModuleById(finalID);
      if (mod) {
        this.server.moduleGraph.invalidateModule(mod, undefined, undefined, true);
      }
    }

    this.files.set(finalID, code);
    return finalID;
  }

  has(id: string) {
    return this.files.has(id);
  }

  get(id: string) {
    return this.files.get(id);
  }
}