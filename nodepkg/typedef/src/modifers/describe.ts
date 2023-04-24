import { meta } from "./meta";

export function describe(description: string, metadata?: Record<string, any>) {
  return meta({
    ...metadata,
    description
  });
}
