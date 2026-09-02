import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  applyRequestInterceptors,
  createDefaultFetcher,
  type RequestConfig,
  type UploadProgress,
} from "..";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST",
  "Access-Control-Allow-Headers": "Content-Type",
};

const startServer = async () => {
  const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const u = new URL(req.url ?? "/", "http://localhost");

    if (u.pathname === "/api/status" && req.method === "GET") {
      res.writeHead(200, {
        "Content-Type": "application/json",
        ...CORS_HEADERS,
      });
      res.end(
        JSON.stringify({
          ready: true,
          params: Object.fromEntries(u.searchParams),
        }),
      );
      return;
    }

    if (u.pathname === "/uploads") {
      if (req.method === "OPTIONS") {
        res.writeHead(204, CORS_HEADERS);
        res.end();
        return;
      }
      if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk;
        });
        req.on("end", () => {
          res.writeHead(200, {
            "Content-Type": "application/json",
            ...CORS_HEADERS,
          });
          res.end(JSON.stringify({ uploaded: body.length }));
        });
        return;
      }
    }

    res.writeHead(404);
    res.end();
  });

  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));

  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 0;

  return {
    url: `http://127.0.0.1:${port}`,
    stop: () => {
      server.close();
    },
  };
};

describe("GIVEN a server", () => {
  let server: Awaited<ReturnType<typeof startServer>>;

  beforeAll(async () => {
    server = await startServer();
  });

  afterAll(() => {
    server.stop();
  });

  describe("GIVEN create fetcher", () => {
    const fetcher = applyRequestInterceptors((requestConfig: RequestConfig<any>) => {
      const remoteURL = new URL(server.url);

      requestConfig.url = `${remoteURL.origin}${requestConfig.url}`;
      return requestConfig;
    })(createDefaultFetcher());

    it("WHEN request to server", async () => {
      const resp = await fetcher.request({
        method: "GET",
        url: "/api/status",
        params: {
          q: "s",
        },
      });

      expect(resp.status).toBe(200);
      expect(resp.headers["content-type"] ?? "").toContain("application/json");
      expect(resp.body).toEqual({
        ready: true,
        params: { q: "s" },
      });
    });

    it("WHEN uploads to server", async () => {
      const resp = await fetcher.request({
        method: "POST",
        url: "/uploads",
        headers: {
          "Content-Type": "application/octet-stream",
        },
        body: 123,
      });

      expect(resp.status).toBe(200);
      expect(resp.body).toEqual({ uploaded: 3 });
    });

    it("WHEN uploads to server with handling progress", async () => {
      const data = "1".repeat(1024 * 1024);

      const resp = await fetcher.request({
        method: "POST",
        url: "/uploads",
        headers: {
          "Content-Type": "application/octet-stream",
        },
        body: new TextEncoder().encode(data),
        onUploadProgress: (p: UploadProgress) => {
          console.log(p.loaded, p.total);
        },
      });

      expect(resp.status).toBe(200);
      expect(resp.body).toEqual({ uploaded: data.length });
    });
  });
});
