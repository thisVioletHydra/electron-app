// src/index.ts
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
export {
  config,
  src_default as default
};
//# sourceMappingURL=index.esm.js.map