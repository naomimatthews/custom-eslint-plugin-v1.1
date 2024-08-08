const noInlineEventHandlers = (context) => {
    return {
      JSXAttribute: (node) => {
        const eventHandlerRegex = /^on[A-Z].*/;
        if (eventHandlerRegex.test(node.name.name)) {
          if (node.value.expression && node.value.expression.type === 'Literal') {
            context.report({
              node,
              message: 'Avoid using inline event handlers to prevent XSS vulnerabilities.',
            });
          }
        }
      },
    };
  };
  
  export default noInlineEventHandlers;
  