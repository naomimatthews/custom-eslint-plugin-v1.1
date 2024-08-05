module.exports = {
    env: {
      node: true,
      mocha: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true, 
      },
    },
    plugins: [
        'mocha', // if using ESLint plugin for Mocha
        'import', // if using ESLint plugin for import rules
      ]
  };
  
  