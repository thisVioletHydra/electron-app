"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  config: () => config,
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var init = {
  standard: {
    "color-function-notation": "legacy",
    "alpha-value-notation": "number",
    "function-name-case": "lower",
    "function-url-quotes": "always",
    "hue-degree-notation": "number",
    "media-feature-range-notation": "context",
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    /**
     * ❗use only null,
     * All empty lines create
     * conflict with eslint
     */
    "at-rule-empty-line-before": null,
    "comment-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "declaration-empty-line-before": null,
    "rule-empty-line-before": null
  },
  recommended: {
    "block-no-empty": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "for",
          "if",
          "else",
          "each",
          "mixin",
          "custom-media",
          "define-mixin",
          "include",
          "media",
          "rgba"
        ]
      }
    ],
    "named-grid-areas-no-invalid": null,
    "no-empty-source": null,
    "property-no-unknown": [
      true,
      { ignoreProperties: ["user-drag"] }
    ],
    "no-invalid-double-slash-comments": true,
    "function-calc-no-unspaced-operator": true,
    "media-feature-name-no-unknown": [
      true,
      { ignoreMediaFeatureNames: ["width"] }
    ]
  },
  vue: {}
};
var rules = {
  ...init.standard,
  ...init.recommended,
  ...init.vue
};
var config = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html/html",
    "stylelint-config-html/vue",
    "stylelint-config-recommended-vue"
  ],
  resolveNestedSelectors: true,
  fix: true,
  rules,
  ignoreFiles: [
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.d.ts",
    "**/*.tsx",
    "**/*.cjs",
    "**/*.mjs",
    "**/*.mts"
  ],
  formatter: "compact",
  overrides: [
    {
      files: ["**/*.vue"],
      customSyntax: "postcss-html",
      rules: {}
    }
  ]
};
var src_default = config;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config
});
//# sourceMappingURL=index.cjs.js.map