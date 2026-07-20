import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // support.js / image-slot.js are the original Claude Design tool runtime,
    // kept for reference but not part of this Next.js app.
    ignores: [".next/**", "node_modules/**", "next-env.d.ts", "support.js", "image-slot.js"],
  },
];

export default eslintConfig;
