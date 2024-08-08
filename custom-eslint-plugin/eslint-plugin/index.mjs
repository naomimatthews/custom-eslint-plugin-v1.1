import noUnsafeProperties from './rules/noUnsafeProperties.mjs'
import noDangerouslySetInnerHTML from './rules/noDangerouslySetInnerHTML.mjs';
import noInlineEventHandlers from './rules/noInlineEventHandlers.mjs';
import noEval from './rules/noEval.mjs';
import noUntrustedHtmlAttributes from './rules/noUntrustedHtmlAttributes.mjs';

const plugin = {
  meta: {
    name: "react-eslint-plugin",
    version: "0.0.1",
  },
  rules: {
    'unsafe-properties-check': {
      create: noUnsafeProperties,
    },
    'no-dangerously-set-inner-html': {
      create: noDangerouslySetInnerHTML,
    },
    'no-inline-event-handlers': {
      create: noInlineEventHandlers,
    },
    'no-eval': {
      create: noEval,
    },
    'no-untrusted-html-attributes': {
      create: noUntrustedHtmlAttributes,
    },
  },
};

export default plugin;

