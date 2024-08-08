const noUntrustedHtmlAttributes = (context) => {
    return {
      JSXAttribute: (node) => {
        const unsafeAttributes = ['src', 'href', 'style'];
        if (unsafeAttributes.includes(node.name.name)) {
          if (node.value.expression && node.value.expression.type === 'Identifier') {
            context.report({
              node,
              message: `Avoid using untrusted data in HTML attribute ${node.name.name}.`,
            });
          }
        }
      },
    };
  };
  
  export default noUntrustedHtmlAttributes;
  