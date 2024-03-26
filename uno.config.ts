import { defineConfig, presetUno, transformerVariantGroup } from "unocss";
import { BREAKPOINTS } from "./src/utils/constants";

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerVariantGroup()],

  theme: {
    breakpoints: BREAKPOINTS
  }
});
