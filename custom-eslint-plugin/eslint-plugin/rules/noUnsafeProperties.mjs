const unsafeProperties = ["innerHTML", "outerHTML", "insertAdjacentHTML"];

const isUnsafeProperty = (property) => {
  return unsafeProperties.includes(property);
};

const createNoUnsafeProperties = (context) => {
  return {
    meta: {
      type: "problem",
      docs: {
        description: "Disallow assignment to or use of unsafe properties like innerHTML.",
        category: "Security",
        recommended: true,
      },
      schema: [], 
    },
    AssignmentExpression: (node) => {
      if (node.left.type === "MemberExpression") {
        const propertyName = node.left.property.name;
        if (isUnsafeProperty(propertyName)) {
          context.report({
            node,
            message: `Assignment to '${propertyName}' can cause XSS vulnerabilities. Avoid using '${propertyName}'. Consider using 'textContent' or a safer alternative.`,
          });
        }
      }
    },
    CallExpression: (node) => {
      if (
        node.callee.type === "MemberExpression" &&
        isUnsafeProperty(node.callee.property.name)
      ) {
        context.report({
          node,
          message: `Call to '${node.callee.property.name}' can cause XSS vulnerabilities. Avoid using '${node.callee.property.name}'. Consider using a safer alternative.`,
        });
      }
    },
  };
};

export default createNoUnsafeProperties;
