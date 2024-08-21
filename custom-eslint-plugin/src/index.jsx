// valid test cases

// Rule: no-dangerously-set-inner-html
const setSafeContent = (element, content) => {
  element.textContent = content; 
};
setSafeContent(document.getElementById("test"), "Hello World");

// Rule: no-inline-event-handlers
const handleSafeClick = () => {
  console.log("Clicked");
};
document.getElementById("test").addEventListener("click", handleSafeClick);

// Rule: no-eval
const calculateSafely = (expression) => {
  // Using a safe alternative to eval
  return new Function(`return ${expression}`)();
};
console.log(calculateSafely("2 + 2"));

// Rule: no-untrusted-html-attributes
const safeUrl = 'https://example.com';
const SafeLink = () => <a href={safeUrl}>Click here</a>;

// Rule: unsafe-properties-check
const updateClassName = (element, className) => {
  element.className = className; 
};
updateClassName(document.getElementById("test"), "active");

// invalid test cases

// Rule: no-dangerously-set-inner-html
const setInnerHtml = (element, content) => {
  element.innerHTML = content; 
};
setInnerHtml(document.getElementById("test"), "<script>alert('XSS');</script>");

// Rule: no-inline-event-handlers
const element = document.getElementById('test');
element.onclick = function() {
  alert('Clicked!');
};

// Rule: no-eval
const evaluateExpressionUnsafely = (expression) => {
  return eval(expression); // Unsafe usage of eval
};
console.log(evaluateExpressionUnsafely("2 + 2"));

// Rule: no-untrusted-html-attributes
const unsafeUrl = 'javascript:alert("XSS")';
const UnsafeLink = () => <a href={unsafeUrl}>Click here</a>;

// Rule: unsafe-properties-check
const appendHtmlUnsafely = (element, html) => {
  element.insertAdjacentHTML('beforeend', html); 
};
appendHtmlUnsafely(document.getElementById("test"), "<div>Unsafe content</div>");
