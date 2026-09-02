import { describe, expect, it } from "vitest";
import {
  aes_256_decrypt,
  aes_256_encrypt,
  chacha20_decrypt,
  chacha20_encrypt,
  generate_aes_256_key,
  generate_chacha20_key,
} from "@innoai-tech/crypto";

describe("crypto", () => {
  it("aes-256-cfb roundtrip", async () => {
    const key = await generate_aes_256_key("CFB");
    const plaintext = new TextEncoder().encode("hello crypto");

    const encrypted = await aes_256_encrypt(plaintext, key);
    const decrypted = await aes_256_decrypt(encrypted, key);

    expect(new TextDecoder().decode(decrypted)).toEqual("hello crypto");
  });

  it("aes-256-ctr roundtrip", async () => {
    const key = await generate_aes_256_key("CTR");
    const plaintext = new TextEncoder().encode("hello crypto");

    const encrypted = await aes_256_encrypt(plaintext, key);
    const decrypted = await aes_256_decrypt(encrypted, key);

    expect(new TextDecoder().decode(decrypted)).toEqual("hello crypto");
  });

  it("chacha20 roundtrip", async () => {
    const key = await generate_chacha20_key();
    const plaintext = new TextEncoder().encode("hello crypto");

    const encrypted = await chacha20_encrypt(plaintext, key);
    const decrypted = await chacha20_decrypt(encrypted, key);

    expect(new TextDecoder().decode(decrypted)).toEqual("hello crypto");
  });
});
