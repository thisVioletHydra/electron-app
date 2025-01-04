## Name: Postcss rules

# PostCSS Config

Проект содержит конфигурацию PostCSS для обработки CSS-кода в вашем проекте.

## v2 install

```sh
@blitz/vite-postcss postcss-import postcss-lightningcss postcss-nested postcss-reporter postcss-sort-media-queries postcss-css-variables postcss -D
```

## Установка

Чтобы установить необходимые зависимости, вы можете использовать следующую команду:

```sh
@blitz/vite-postcss postcss-import postcss-lightningcss postcss-nested postcss-reporter postcss-sort-media-queries postcss -D
```

```sh
npm install postcss
```

## Использование

Чтобы использовать эту конфигурацию в вашем проекте, вам необходимо импортировать ее в файл конфигурации вашего проекта. Например, в файле `vite.config.js`:

```js
import { defineConfig } from 'vite';
import { vitePostcss } from '@blitz/vite-postcss';

export default defineConfig({
  css: {
    postcss: vitePostcss(),
  },
});
```

## Типизация

```ts
type VitePostcss = ({
  isDevelopmentMode,
  kickCssnano,
  speedTest,
  minify,
  rebaseUrl,
}: {

  /**
   * @property Whether to rebase the URLs.
   */
  rebaseUrl?: boolean

  /**
   * @property Whether to minify the CSS.
   */
  minify?: boolean

  /**
   * @property Whether the application is in development mode.
   */
  isDevelopmentMode?: boolean

  /**
   * @deprecated The `kickCssnano` option is deprecated. Remove it.
   */
  kickCssnano?: boolean

  /**
   * @property Whether to run the speed test.
   */
  speedTest?: boolean
}) => CSSOptions['postcss'];
```

## Конфигурация

В этом проекте используются следующие плагины PostCSS:

- `@csstools/postcss-media-minmax` - преобразует устаревшие префиксы `min-` и `max-` в (`a.ka max-width`)
- `@csstools/postcss-rebase-url` - перезаписывает URL-адреса относительно нового корневого каталога
- `@csstools/postcss-slow-plugins` - набор медленных плагинов PostCSS для оптимизации CSS
- `cssnano` - минификатор CSS
- `postcss-calc` - позволяет использовать вычисления в CSS
- `postcss-combine-duplicated-selectors` - объединяет дублирующиеся селекторы
- `postcss-custom-properties` - позволяет использовать пользовательские свойства в CSS
- `postcss-discard-comments` - удаляет комментарии из CSS
- `postcss-each` - позволяет использовать цикл `each` в CSS
- `postcss-for` - позволяет использовать цикл `for` в CSS
- `postcss-hexrgba` - преобразует цвета HEX в формат RGBA
- `postcss-import` - позволяет импортировать CSS-файлы в другие CSS-файлы
- `postcss-logical` - преобразует логические свойства и значения в физические
- `postcss-merge-rules` - объединяет дублирующиеся правила
- `postcss-nested` - позволяет использовать вложенные правила в CSS
- `postcss-normalize-repeat-style` - нормализует значения `repeat` для свойства `background`
- `postcss-normalize-timing-functions` - нормализует значения `cubic-bezier` для свойств `transition` и `animation`
- `postcss-preset-env` - предоставляет набор плагинов PostCSS для преобразования новых свойств и значений CSS в старые
- `postcss-pxtorem` - преобразует пиксели в `rem`
- `postcss-rename` - переименовывает свойства и значения в CSS
- `postcss-reporter` - выводит отчет об ошибках в консоль
- `postcss-responsive-type` - позволяет использовать отзывчивый шрифт в CSS
- `postcss-sort-media-queries` - сортирует медиа-запросы
- `postcss-sorting` - сортирует свойства и значения в CSS
- `postcss-zindex` - предоставляет утилиты для работы со значениями `z-index`