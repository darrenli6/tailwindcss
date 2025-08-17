import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 禁用 TypeScript 相关规则
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn", // 改为警告而不是错误
      
      // 禁用 React 相关规则
      "react/no-unescaped-entities": "off",
      "react/jsx-no-comment-textnodes": "off",
      
      // 禁用 Next.js 图片优化警告（开发阶段）
      "@next/next/no-img-element": "warn", // 改为警告
    }
  }
];
export default eslintConfig;
