{
    "parserOptions": {
      "ecmaVersion": 2021,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "browser": true,
      "node": true
    },
    "plugins": [
      "eslint-plugin-security"
    ],
    "rules": {
      "security/xss-vulnerabilities": "error"
    }
  }
  