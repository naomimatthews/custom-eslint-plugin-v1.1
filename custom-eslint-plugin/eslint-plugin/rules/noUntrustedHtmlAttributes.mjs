const noUntrustedHtmlAttributes = (context) => {
    return {
      JSXAttribute: (node) => {
        const unsafeAttributes = ['src', 'href', 'style'];
        if (unsafeAttributes.includes(node.name.name)) {
          if (node.value.expression && node.value.expression.type === 'Identifier') {
            context.report({
              node,
              message: `Avoid setting untrusted content in '${node.name.name}' attributes as it can lead to security vulnerabilities.
          Consider validating or sanitizing the values before using them or using safer alternatives.`,
            });
          }
        }
      },
    };
  };
  
  export default noUntrustedHtmlAttributes;
  