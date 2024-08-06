export default {
  meta: {
    type: 'BIG :PROBLEM',
    docs: {
      description: 'disallow usage of innerHTML and dangerouslySetInnerHTML',
      category: 'Possible Errors',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.property &&
          (node.property.name === 'innerHTML' || node.property.name === 'dangerouslySetInnerHTML')
        ) {
          context.report({
            node,
            message: `Do not use ${node.property.name}`,
          });
        }
      },
    };
  },
};
