import crypto from "crypto";

export function encrypt(plain: string, salt?: string) {
  salt = salt ?? crypto.randomBytes(16).toString("hex");
  const password = crypto
    .pbkdf2Sync(plain, salt, 1000, 64, "sha512")
    .toString("hex");
  return { salt, password };
}
