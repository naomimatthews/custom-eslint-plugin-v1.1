 module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow the use of `innerHTML`',
            category: 'Possible Errors',
            recommended: true,
        },
        message: 'Avoid using `innerHTML` to prevent XSS vulnerabilities',
    },
    create(context) {
        return {
          JSXAttribute(node) {
            if (node.name.name === 'dangerouslySetInnerHTML') {
              context.report({ node, message: 'Avoid using `dangerouslySetInnerHTML`' });
            }
          },
        };
      },
    };