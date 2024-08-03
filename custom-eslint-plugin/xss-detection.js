const RuleTester = require('eslint').RuleTester;
const rule = require('./eslint-plugin-security/xss-vulnerabilities');

const ruleTester = new RuleTester();

ruleTester.run('xss-vulnerabilities', rule, {
  valid: [
    // Valid code examples
    'const element = <div>Safe content</div>;',
    '<div onClick={() => handleClick()}></div>'
  ],
  invalid: [
    {
      code: '<div dangerouslySetInnerHTML={{ __html: userGeneratedContent }}></div>',
      errors: [{ message: 'Avoid using `dangerouslySetInnerHTML` to prevent XSS vulnerabilities' }]
    },
    {
      code: '<div innerHTML="unsafe content"></div>',
      errors: [{ message: 'Avoid using `innerHTML` without a safe sanitizer' }]
    }
  ]
});

console.log(ruleTester.results);

ruleTester.runner.on('error', (error) => {
  console.error('Error running tests:', error);
});

