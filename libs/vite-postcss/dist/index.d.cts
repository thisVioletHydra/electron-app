import { CSSOptions } from 'vite';

type Payload = {
    /**
     * @property Plugin to rebase the URLs.
     * @default true
     */
    rebaseUrl?: boolean;
    /**
     * @property Plugin the application is in development mode.
     * @default false
     */
    isDevelopmentMode?: boolean;
    /**
     * @deprecated The `kickCssnano` option is deprecated. Remove it.
     * @default false
     */
    kickCssnano?: boolean;
    /**
     * @property Plugin to run the speed test.
     * @default false
     */
    speedTest?: boolean;
    /**
     * @property Plugin to replace unset values
     * @default false
     */
    replaceUnset?: boolean;
    /**
     * @property Plugin to convert hex to rgba
     * @default false
     */
    hexToRgba?: boolean;
    /**
     * @property Using Variables/Custom Properties with var()
     * @default "customProperties"
     */
    customVariables?: 'cssVariables' | 'customProperties';
    /**
     * @property fallback for place property
     * @default false
     */
    placeProperty?: boolean;
    /**
     * @property  The files option determines which files to inject into PostCSS.
     *  files: [
     *  './src/css/variables.css',
     *   './src/css/media-queries.css',
     *  ],
     * @default false
     */
    globalCssData?: false | string[];
    /**
     * @property Plugin to use the declaration parser
     * @default 'declaration'
     */
    hardParser?: {
        name: 'declaration';
    } | {
        name: 'lightning';
        browserslist?: 'modern' | 'legacy' | undefined;
        minify?: boolean;
    };
    /**
     * @property PostCSS plugin to transform import rules by inlining content.
     * This plugin can consume local files, node modules or web_modules.
     * @default true
     */
    imports?: boolean;
    /**
     * @property Plugin to enable nesting
     * @default true
     *
     */
    nested?: boolean;
    /**
     * @property Plugin to enable z-index
     * @default true
     */
    zindex?: boolean;
    /**
     * @property Plugin to convert pixel to rem
     * @default true
     */
    pixelToRem?: boolean;
    /**
     * @property Plugin to report errors
     * @default false
     */
    reporter?: boolean;
};
type ClassicPostcss = ({ isDevelopmentMode, kickCssnano, speedTest, rebaseUrl, replaceUnset, hexToRgba, customVariables, hardParser, imports, nested, zindex, pixelToRem, reporter, }: Payload) => CSSOptions['postcss'];

declare const classicPostcss: ClassicPostcss;

export { classicPostcss, classicPostcss as default };
