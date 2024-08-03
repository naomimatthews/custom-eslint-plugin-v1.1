module.exports = {
  meta: {
      type: 'problem',
      docs: {
          description: 'Disallow potential XSS vulnerabilities',
          category: 'Security',
          recommended: true
      },
      schema: [] // no options
  },
  create(context) {
      return {
          JSXAttribute(node) {
              if (
                  (node.name.name === 'dangerouslySetInnerHTML') ||
                  (node.name.name === 'innerHTML')
              ) {
                  context.report({
                      node,
                      message: 'Avoid using `{{name}}` to prevent XSS vulnerabilities',
                      data: {
                          name: node.name.name
                      }
                  });
              }
          }
      };
  }
};
