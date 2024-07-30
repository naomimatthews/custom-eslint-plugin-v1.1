module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    plugins: ['security'],
    extends: 'standard',
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs'
            ],
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        "security/xss-vulnerabilities": "error"
    }
}