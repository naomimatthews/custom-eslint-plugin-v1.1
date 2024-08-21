const noEval = (context) => {
    return {
      CallExpression: (node) => {
        if (node.callee.name === 'eval') {
          context.report({
            node,
            message: `Avoid using 'eval' as it can lead to serious security vulnerabilities such as remote code execution.
          Consider using safer alternatives such as JSON.parse() or Function constructors depending on your use case.`,
          });
        }
      },
    };
  };
  
  export default noEval;
  