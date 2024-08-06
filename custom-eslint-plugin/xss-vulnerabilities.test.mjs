import { RuleTester } from 'eslint';
import xssVulnerabilitiesRule from './eslint-plugin-security/xss-vulnerabilities';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  }
});

ruleTester.run('xss-vulnerabilities', xssVulnerabilitiesRule, {
  valid: [
    { code: '<div>Safe content</div>' },
    { code: '<div>{ "This is a safe string literal" }</div>' }
  ],
  invalid: [
    {
      code: '<div dangerouslySetInnerHTML={{ __html: userGeneratedContent }}></div>',
      errors: [{ message: 'Do not use dangerouslySetInnerHTML' }]
    },
    {
      code: 'element.innerHTML = userGeneratedContent;',
      errors: [{ message: 'Do not use innerHTML' }]
    }
  ]
});

