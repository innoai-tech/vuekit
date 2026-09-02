import init, {
  aes_256_decrypt as _aes_256_decrypt,
  aes_256_encrypt as _aes_256_encrypt,
  chacha20_decrypt as _chacha20_decrypt,
  chacha20_encrypt as _chacha20_encrypt,
  generate_aes_256_key as _generate_aes_256_key,
  generate_chacha20_key as _generate_chacha20_key,
  rsa_oaep_encrypt as _rsa_oaep_encrypt,
} from "./pkg/crypto.js";

const isNode =
  typeof process !== "undefined" && process.versions != null && process.versions.node != null;

// vite 会静态分析 `new URL(..., import.meta.url)` 并作为资源引用处理
const wasmURL = new URL("./pkg/crypto_bg.wasm", import.meta.url);

// 间接引用避免 vite 在浏览器构建时静态 externalize node 内置模块
const nodeFs = "node:fs/promises";

const ready = isNode
  ? import(/* @vite-ignore */ nodeFs).then(({ readFile }) =>
      readFile(wasmURL).then((bytes) => init({ module_or_path: bytes })),
    )
  : init({ module_or_path: wasmURL });

export const generate_aes_256_key = async (mode = "CFB") => {
  await ready;
  return _generate_aes_256_key(mode);
};

export const generate_chacha20_key = async () => {
  await ready;
  return _generate_chacha20_key("");
};

export const rsa_oaep_encrypt = async (payload, key) => {
  await ready;
  return _rsa_oaep_encrypt(payload, JSON.stringify(key));
};

export const aes_256_decrypt = async (payload, key) => {
  await ready;
  return _aes_256_decrypt(payload, key);
};

export const aes_256_encrypt = async (payload, key) => {
  await ready;
  return _aes_256_encrypt(payload, key);
};

export const chacha20_encrypt = async (payload, key) => {
  await ready;
  return _chacha20_encrypt(payload, key);
};

export const chacha20_decrypt = async (payload, key) => {
  await ready;
  return _chacha20_decrypt(payload, key);
};

// aliases
export const aes_256_cfb_decrypt = aes_256_decrypt;
export const aes_256_cfb_encrypt = aes_256_encrypt;
