import { RuleTester } from 'eslint';
import xssVulnerabilitiesRule from '../lib/rules/xss-vulnerabilities.js';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
});

ruleTester.run('xss-vulnerabilities.js', xssVulnerabilitiesRule, {
  valid: [
    { code: '<div>Safe content</div>' },
    { code: '<div>{ "This is a safe string literal" }</div>' },
  ],
  invalid: [
    {
      code: '<div dangerouslySetInnerHTML={{ __html: userGeneratedContent }}></div>',
      errors: [{ message: 'Do not use dangerouslySetInnerHTML' }],
    },
    {
      code: 'element.innerHTML = userGeneratedContent;',
      errors: [{ message: 'Do not use innerHTML' }],
    },
  ],
});
