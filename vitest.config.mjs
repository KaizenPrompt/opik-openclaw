import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "openclaw/plugin-sdk": fileURLToPath(
        new URL("./.scripts/vitest-openclaw-plugin-sdk.mjs", import.meta.url),
      ),
    },
  },
});
