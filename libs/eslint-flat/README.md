## [Info - 1:37:40 PM] ESLint version 8.57.0 supports flat config without experimental opt-in. The 'eslint.experimental.useFlatConfig' setting can be removed.

## Vscode extension
 
> need 3 version or greater!

## Create file in root directory

```
eslint.config.js
```

```js
export { eslintFlatConfig as default } from '@blitz/eslint-flat';
```

## Install

```cmd
@blitz/eslint-flat @antfu/eslint-config eslint-plugin-format eslint-plugin-perfectionist eslint-plugin-unicorn eslint-plugin-promise @typescript-eslint/parser vue-eslint-parser eslint -D
```

## Conf `Vscode`

```js
// Enable the ESlint flat config support
"editor.formatOnSave": true,
"editor.formatOnSaveMode": "modificationsIfAvailable",
// Auto fix
// Silent the stylistic rules in you IDE, but still auto fix them
"eslint.rules.customizations": [
  {
    "rule": "*no-unused*",
    "severity": "off"
  },
  {
    "rule": "*eol-*",
    "severity": "off"
  },
  {
    "rule": "*-trailing-*",
    "severity": "off"
  },
  {
    "rule": "format/*",
    "severity": "off"
  },
  {
    "rule": "*-block*",
    "severity": "off"
  },
  {
    "rule": "*-trailing-*",
    "severity": "off"
  },
],

// Enable eslint for all supported languages
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact",
  "vue",
  "html",
  "markdown",
  "json",
  "jsonc",
  "yaml",
  "toml"
],
// stylelint
"stylelint.enable": true,
"stylelint.validate": [
  "vue",
  "postcss",
  "pcss",
  "css",
  "html"
],
"editor.autoIndent": "full",
"editor.codeActionsOnSave": {
  "source.fixAll": "always",
  "source.fixAll.stylelint": "always",
  "source.fixAll.eslint": "always",
  "source.addMissingImports": "never",
  "source.organizeImports": "never"
}
```

### DEBUG

```txt
"devDependencies": {
  "@antfu/eslint-config": "^2.17.0",
  "@typescript-eslint/parser": "^7.8.0",
  "eslint-plugin-format": "^0.1.1",
  "eslint-plugin-perfectionist": "^2.10.0",
  "eslint-plugin-promise": "^6.1.1",
  "eslint-plugin-unicorn": "^53.0.0",
  "vue-eslint-parser": "^9.4.2"
}
```