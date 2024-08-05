export default {
  meta: {
    type: 'problem',
    messages: {
      dangerouslySetInnerHTML: 'Use of dangerouslySetInnerHTML is potentially dangerous.',
      innerHTMLAssignment: 'Assignment to innerHTML is potentially dangerous.'
    }
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name === 'dangerouslySetInnerHTML') {
          context.report({
            node,
            messageId: 'dangerouslySetInnerHTML'
          });
        }
      },
      AssignmentExpression(node) {
        if (node.left.property && node.left.property.name === 'innerHTML') {
          context.report({
            node,
            messageId: 'innerHTMLAssignment'
          });
        }
      }
    };
  }
};
