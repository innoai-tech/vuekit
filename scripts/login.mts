import { writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const token = process.env["INNOAI_TECH_REGISTRY_AUTH_TOKEN"];
if (!token) {
  console.error("INNOAI_TECH_REGISTRY_AUTH_TOKEN is required");
  process.exit(1);
}

// pnpm publish 拒绝脏 working tree，认证 token 写到全局 ~/.npmrc
// @innoai-tech 依赖只在 GitHub Packages，scope registry 一并配置
writeFileSync(join(homedir(), ".npmrc"), `//npm.pkg.github.com/:_authToken=${token}`);
