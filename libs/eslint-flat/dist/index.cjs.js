"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  eslintFlatConfig: () => eslintFlatConfig
});
module.exports = __toCommonJS(src_exports);
var import_eslint_config2 = __toESM(require("@antfu/eslint-config"), 1);

// src/stages.ts
var import_eslint_utils = require("@typescript-eslint/utils/eslint-utils");

// src/overrides/logic.ts
function optionalExtendRules(configs = []) {
  const result = configs.reduce((accumulator, config) => {
    const disabledRules = {};
    const rules = { ...config.rules };
    for (const rule of config.disabled) {
      if (rule in rules) {
        disabledRules[rule] = [0];
        delete rules[rule];
      } else {
        disabledRules[rule] = [0];
      }
    }
    const mergedRules = { ...rules, ...disabledRules };
    accumulator[config.name] = { overrides: mergedRules };
    return accumulator;
  }, {});
  console.log(`[LOG] result`, `<${typeof result}>`, result);
  return result;
}
function configExtractor(obj) {
  const { rules = {}, disabled = [] } = obj;
  if (disabled.length === 0) {
    throw new Error(`${typeof disabled} disabled cant be empty`);
  }
  const end = disabled.reduce(
    (acc, f) => {
      acc[f] = [0];
      return acc;
    },
    rules
  );
  return Object.fromEntries(
    Object.entries(end).filter(([KEY]) => Boolean(KEY))
  );
}
function firstArgInEslintRules(config = {}) {
  return {
    react: false,
    svelte: false,
    unocss: false,
    solid: false,
    astro: false,
    ...config
  };
}

// src/overrides/styleOv.ts
function styleOv() {
  return {
    name: "stylistic",
    rules: {
      "style/semi": [1, "always"],
      "style/padding-line-between-statements": [
        1,
        { blankLine: "always", prev: ["*"], next: ["return"] }
      ],
      "style/arrow-parens": [1, "always"],
      "style/brace-style": [1, "1tbs", { allowSingleLine: false }],
      "style/no-tabs": [1]
    },
    disabled: []
  };
}

// src/overrides/tsOv.ts
function tsOv() {
  return {
    name: "typescript",
    rules: {},
    disabled: [
      "ts/explicit-member-accessibility",
      "ts/prefer-regexp-exec",
      "ts/consistent-type-definitions"
    ]
  };
}

// src/overrides/unicornOv.ts
function unicornOv() {
  return {
    name: "unicorn",
    rules: {
      "unicorn/consistent-empty-array-spread": [1]
    },
    disabled: ["unicorn/prevent-abbreviations"]
  };
}

// src/overrides/vueOv.ts
function vueOv() {
  return {
    name: "vue",
    rules: {
      "vue/block-order": [1, {
        order: [
          "template",
          "script",
          "style"
        ]
      }],
      "vue/block-tag-newline": [1, {
        multiline: "always",
        singleline: "always"
      }],
      "vue/html-indent": [1, 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }],
      "vue/script-indent": [1, 2, {
        baseIndent: 1,
        switchCase: 1
      }],
      "vue/html-self-closing": [1, {
        html: {
          component: "always",
          normal: "never",
          void: "never"
        },
        svg: "always",
        math: "always"
      }]
    },
    disabled: [
      "indent",
      "style/indent"
    ]
  };
}

// src/userIgnores.ts
var import_eslint_config = require("@antfu/eslint-config");
var GLOB_USER_IGNORES = [
  "**/fixtures",
  "**/cypress",
  "**/debug",
  "**/backup"
];
function userIgnores() {
  return [
    ...import_eslint_config.GLOB_EXCLUDE,
    // ...[GLOB_STYLE],
    // ...[GLOB_POSTCSS],
    ...GLOB_USER_IGNORES
  ];
}

// src/stages.ts
function dontMoveMeConfig() {
  const settings = {
    formatters: {
      css: "prettier",
      html: "prettier",
      prettierOptions: {
        arrowParens: "always",
        bracketSpacing: true,
        endOfLine: "lf",
        htmlWhitespaceSensitivity: "css",
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 120,
        proseWrap: "preserve",
        quoteProps: "as-needed",
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false,
        vueIndentScriptAndStyle: true
      }
    },
    vue: true,
    unicorn: true,
    stylistic: true,
    typescript: {
      tsconfigPath: "tsconfig.json",
      /**
       * ❗TypeAware правила с глубоким анализом типов
       * перезаписывать\добавлять\удалять
       * только тут?
       */
      overridesTypeAware: {
        "ts/prefer-reduce-type-parameter": [1]
      }
    },
    ignores: userIgnores()
  };
  const overrideSettings = [
    vueOv(),
    tsOv(),
    styleOv()
    /**
     * no have override config
     * unicornOv(),
     */
  ];
  return (0, import_eslint_utils.deepMerge)(
    firstArgInEslintRules(settings),
    optionalExtendRules(overrideSettings)
  );
}
function nextStageConfig() {
  return [
    {
      // GLOBAL RULES
      name: "antfu/globally/rules",
      rules: configExtractor({
        rules: { "no-plusplus": [1] },
        disabled: ["no-console"]
      })
    },
    {
      // UNICORN RULES
      name: "antfu/unicorn/rules",
      rules: configExtractor(unicornOv())
    }
  ];
}

// src/main.ts
function eslintFlat() {
  const finalRestConfig = [
    dontMoveMeConfig(),
    ...nextStageConfig()
  ];
  console.log(`[LOG] finalRestConfig`, `<${typeof finalRestConfig}>`, finalRestConfig);
  return finalRestConfig;
}

// src/index.ts
var eslintFlatConfig = (0, import_eslint_config2.default)(
  ...eslintFlat()
);
var src_default = eslintFlatConfig;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  eslintFlatConfig
});
//# sourceMappingURL=index.cjs.js.map