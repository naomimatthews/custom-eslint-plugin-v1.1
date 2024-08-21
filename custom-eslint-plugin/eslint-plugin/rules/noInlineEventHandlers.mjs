export default function noInlineEventHandlers(context) {
  return {
    AssignmentExpression(node) {
      console.log("Node being checked:", node.left.property.name);
      if (
        node.left.type === 'MemberExpression' &&
        node.left.property.type === 'Identifier' &&
        /^on/.test(node.left.property.name)
      ) {
        context.report({
          node,
          message: `Avoid using inline event handlers like '${node.left.property.name}' as they can introduce security vulnerabilities. Use 'addEventListener' instead.`,
        });
      }
    }
  };
}
