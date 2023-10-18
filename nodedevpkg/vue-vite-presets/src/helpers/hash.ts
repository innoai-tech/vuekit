import { createHash } from "crypto";

export const getHash = (text: string) => {
  return createHash("sha256").update(text).digest("hex").substring(0, 8);
};
