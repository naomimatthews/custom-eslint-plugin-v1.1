module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow the use of `innerHTML` and `dangerouslySetInnerHTML` without a safe sanitizer',
      category: 'Possible Errors',
      recommended: true,
    },
    messages: {
      innerHTMLWithoutSanitizer: 'Avoid using `innerHTML` without a safe sanitizer',
      dangerouslySetInnerHTMLDisallowed: 'Avoid using `dangerouslySetInnerHTML` to prevent XSS vulnerabilities'
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name === 'innerHTML' || node.name.name === 'dangerouslySetInnerHTML') {
          context.report({ node, messageId: node.name.name === 'innerHTML' ? 'innerHTMLDisallowed' : 'dangerouslySetInnerHTMLDisallowed' });
          console.log(node, 'node!')
        }
      }
    };
  }
};
