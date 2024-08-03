import globals from 'globals';
import js from '@eslint/js';
import securityPlugin from 'eslint-plugin-security';

export default [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: globals.browser
        },
        plugins: {
            security: securityPlugin
        },
        rules: {
            'security/xss-vulnerabilities': 'error'
        }
    }
];
