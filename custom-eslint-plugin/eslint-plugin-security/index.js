const xssVulnerabilities = require('./xss-vulnerabilities')

module.exports = {
    rules: {
        'xss-vulnerabilities': xssVulnerabilities
    }
}

console.log(xssVulnerabilities)