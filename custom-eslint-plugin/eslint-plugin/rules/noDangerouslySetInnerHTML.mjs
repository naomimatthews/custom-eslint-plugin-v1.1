const noDangerouslySetInnerHTML = (context) => {
    return {
      JSXAttribute: (node) => {
        if (node.name.name === 'dangerouslySetInnerHTML') {
          context.report({
            node,
            message: 'Avoid using dangerouslySetInnerHTML to prevent XSS vulnerabilities.',
          });
        }
      },
    };
  };
  
  export default noDangerouslySetInnerHTML;
  