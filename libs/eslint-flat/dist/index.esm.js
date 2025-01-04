// src/index.ts
import antfu from "@antfu/eslint-config";

// src/stages.ts
import { deepMerge } from "@typescript-eslint/utils/eslint-utils";

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
import { GLOB_EXCLUDE } from "@antfu/eslint-config";
var GLOB_USER_IGNORES = [
  "**/fixtures",
  "**/cypress",
  "**/debug",
  "**/backup"
];
function userIgnores() {
  return [
    ...GLOB_EXCLUDE,
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
  return deepMerge(
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
var eslintFlatConfig = antfu(
  ...eslintFlat()
);
var src_default = eslintFlatConfig;
export {
  src_default as default,
  eslintFlatConfig
};
//# sourceMappingURL=index.esm.js.map