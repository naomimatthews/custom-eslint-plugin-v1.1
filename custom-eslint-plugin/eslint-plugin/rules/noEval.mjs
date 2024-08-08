const noEval = (context) => {
    return {
      CallExpression: (node) => {
        if (node.callee.name === 'eval') {
          context.report({
            node,
            message: 'Avoid using eval to prevent XSS vulnerabilities.',
          });
        }
      },
    };
  };
  
  export default noEval;
  