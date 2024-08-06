"use strict";

import { rules } from '../lib/index.js';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      security: {
        rules,
      },
    },
    rules: {
      'security/xss-vulnerabilities': 'error',
    },
  },
];
