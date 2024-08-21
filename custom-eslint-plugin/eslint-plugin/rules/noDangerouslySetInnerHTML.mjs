const noDangerouslySetInnerHTML = (context) => {
  return {
    AssignmentExpression: (node) => {
      if (
        node.left.type === 'MemberExpression' &&
        node.left.property.name === 'innerHTML'
      ) {
        context.report({
          node,
          message: `Avoid assigning directly to 'innerHTML' as it can introduce XSS vulnerabilities. Consider using 'textContent' or a safer method.`,
        });
      }
    },
  };
};

export default noDangerouslySetInnerHTML;