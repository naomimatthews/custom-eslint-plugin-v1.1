import { RuleTester } from 'eslint';
import rule from './eslint-plugin-security/xss-vulnerabilities.mjs';

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2021, sourceType: 'module' }
});

ruleTester.run('xss-vulnerabilities', rule, {
  valid: [
    { code: '<div>Safe content</div>' },
    { code: '<div>{ "This is a safe string literal" }</div>' }
  ],
  invalid: [
    {
      code: '<div dangerouslySetInnerHTML={{ __html: userGeneratedContent }}></div>',
      errors: [{ messageId: 'dangerouslySetInnerHTML' }]
    },
    {
      code: 'element.innerHTML = userGeneratedContent;',
      errors: [{ messageId: 'innerHTMLAssignment' }]
    }
  ]
});
