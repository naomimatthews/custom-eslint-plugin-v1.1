const unsafeProperties = ["innerHTML", "outerHTML", "insertAdjacentHTML"];

const isUnsafeProperty = (property) => {
  return unsafeProperties.includes(property);
};

const createNoUnsafeProperties = (context) => {
  return {
    AssignmentExpression: (node) => {
      if (node.left.type === "MemberExpression") {
        const propertyName = node.left.property.name;
        if (isUnsafeProperty(propertyName)) {
          context.report(
            node,
            `Assignment to '${propertyName}' can cause XSS vulnerabilities. Avoid using '${propertyName}'.`
          );
        }
      }
    },
    CallExpression: (node) => {
      if (
        node.callee.type === "MemberExpression" &&
        isUnsafeProperty(node.callee.property.name)
      ) {
        context.report(
          node,
          `Call to '${node.callee.property.name}' can cause XSS vulnerabilities. Avoid using '${node.callee.property.name}'.`
        );
      }
    },
  };
};

export default createNoUnsafeProperties;