const { RuleTester } = require('eslint');
const rule = require('../eslint-plugin-security/xss-vulnerabilities');

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    }
});

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
