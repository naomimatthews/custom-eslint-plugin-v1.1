import securityRules from "./eslint-plugin/index.mjs";
import globals from "globals";

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest', 
      sourceType: 'module', 
      parserOptions: {
        ecmaFeatures: {
          jsx: true, 
        },
      },
      globals: {
        ...globals.browser, 
      },
    },
    files: ['src/**/*.{js,jsx}'],
    plugins: {
      securityRules,
    },
    rules: {
      'securityRules/no-dangerously-set-inner-html': 'error',
      'securityRules/no-inline-event-handlers': 'error',
      'securityRules/no-eval': 'error',
      'securityRules/no-untrusted-html-attributes': 'error',
      'securityRules/unsafe-properties-check': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'semi': ['error', 'always'],
    },
  },
];
