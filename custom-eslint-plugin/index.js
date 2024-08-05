import { xssVulnerabilities } from './eslint-plugin-security/xss-vulnerabilities.js';

const rules = {
  'xss-vulnerabilities': xssVulnerabilities
};

console.log(xssVulnerabilities);

export { rules };