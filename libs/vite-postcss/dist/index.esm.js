var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __glob = (map) => (path2) => {
  var fn = map[path2];
  if (fn) return fn();
  throw new Error("Module not found in bundle: " + path2);
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// ../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.47.11_@types+node@22.9.0__jiti@2.3.3_postcss@8.4.48_tsx_dm736rusbtjq7bsypwcstiz4xu/node_modules/tsup/assets/esm_shims.js
import { fileURLToPath } from "url";
import path from "path";
var init_esm_shims = __esm({
  "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.47.11_@types+node@22.9.0__jiti@2.3.3_postcss@8.4.48_tsx_dm736rusbtjq7bsypwcstiz4xu/node_modules/tsup/assets/esm_shims.js"() {
    "use strict";
  }
});

// ../../node_modules/.pnpm/css-declaration-sorter@7.2.0_postcss@8.4.48/node_modules/css-declaration-sorter/src/orders/alphabetical.mjs
var alphabetical_exports = {};
__export(alphabetical_exports, {
  properties: () => properties
});
var properties;
var init_alphabetical = __esm({
  "../../node_modules/.pnpm/css-declaration-sorter@7.2.0_postcss@8.4.48/node_modules/css-declaration-sorter/src/orders/alphabetical.mjs"() {
    "use strict";
    init_esm_shims();
    properties = [
      "all",
      "-webkit-line-clamp",
      "-webkit-text-fill-color",
      "-webkit-text-stroke",
      "-webkit-text-stroke-color",
      "-webkit-text-stroke-width",
      "accent-color",
      "align-content",
      "align-items",
      "align-self",
      "animation",
      "animation-composition",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "appearance",
      "ascent-override",
      "aspect-ratio",
      "backdrop-filter",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-repeat",
      "background-size",
      "baseline-source",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-end-end-radius",
      "border-end-start-radius",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-start-end-radius",
      "border-start-start-radius",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip-path",
      "color",
      "color-interpolation",
      "color-scheme",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "contain-intrinsic-height",
      "contain-intrinsic-size",
      "contain-intrinsic-width",
      "container",
      "container-name",
      "container-type",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "counter-set",
      "cursor",
      "descent-override",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-optical-sizing",
      "font-palette",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-synthesis-position",
      "font-synthesis-small-caps",
      "font-synthesis-style",
      "font-synthesis-weight",
      "font-variant",
      "font-variant-alternates",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-emoji",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "forced-color-adjust",
      "gap",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphenate-character",
      "hyphens",
      "image-orientation",
      "image-rendering",
      "inline-size",
      "inset",
      "inset-block",
      "inset-block-end",
      "inset-block-start",
      "inset-inline",
      "inset-inline-end",
      "inset-inline-start",
      "isolation",
      "justify-content",
      "justify-items",
      "justify-self",
      "left",
      "letter-spacing",
      "line-break",
      "line-gap-override",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "mask",
      "mask-border",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "math-depth",
      "math-style",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "object-fit",
      "object-position",
      "offset",
      "offset-anchor",
      "offset-distance",
      "offset-path",
      "offset-position",
      "offset-rotate",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-anchor",
      "overflow-block",
      "overflow-clip-margin",
      "overflow-inline",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "overscroll-behavior",
      "overscroll-behavior-block",
      "overscroll-behavior-inline",
      "overscroll-behavior-x",
      "overscroll-behavior-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "paint-order",
      "perspective",
      "perspective-origin",
      "place-content",
      "place-items",
      "place-self",
      "pointer-events",
      "position",
      "print-color-adjust",
      "quotes",
      "resize",
      "right",
      "rotate",
      "row-gap",
      "ruby-position",
      "scale",
      "scroll-behavior",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "size-adjust",
      "src",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-skip-ink",
      "text-decoration-style",
      "text-decoration-thickness",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-offset",
      "text-underline-position",
      "text-wrap",
      "top",
      "touch-action",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-behavior",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "translate",
      "unicode-bidi",
      "unicode-range",
      "user-select",
      "vertical-align",
      "visibility",
      "white-space",
      "white-space-collapse",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "writing-mode",
      "z-index"
    ];
  }
});

// ../../node_modules/.pnpm/css-declaration-sorter@7.2.0_postcss@8.4.48/node_modules/css-declaration-sorter/src/orders/concentric-css.mjs
var concentric_css_exports = {};
__export(concentric_css_exports, {
  properties: () => properties2
});
var properties2;
var init_concentric_css = __esm({
  "../../node_modules/.pnpm/css-declaration-sorter@7.2.0_postcss@8.4.48/node_modules/css-declaration-sorter/src/orders/concentric-css.mjs"() {
    "use strict";
    init_esm_shims();
    properties2 = [
      "all",
      "display",
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "offset",
      "offset-anchor",
      "offset-distance",
      "offset-path",
      "offset-position",
      "offset-rotate",
      "grid",
      "grid-template-rows",
      "grid-template-columns",
      "grid-template-areas",
      "grid-auto-rows",
      "grid-auto-columns",
      "grid-auto-flow",
      "column-gap",
      "row-gap",
      "grid-area",
      "grid-row",
      "grid-row-start",
      "grid-row-end",
      "grid-column",
      "grid-column-start",
      "grid-column-end",
      "grid-template",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-wrap",
      "box-decoration-break",
      "place-content",
      "align-content",
      "justify-content",
      "place-items",
      "align-items",
      "justify-items",
      "place-self",
      "align-self",
      "justify-self",
      "vertical-align",
      "baseline-source",
      "order",
      "float",
      "clear",
      "shape-margin",
      "shape-outside",
      "shape-image-threshold",
      "orphans",
      "gap",
      "columns",
      "column-fill",
      "column-rule",
      "column-rule-width",
      "column-rule-style",
      "column-rule-color",
      "column-width",
      "column-span",
      "column-count",
      "break-before",
      "break-after",
      "break-inside",
      "page",
      "page-break-before",
      "page-break-after",
      "page-break-inside",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "translate",
      "rotate",
      "scale",
      "perspective",
      "perspective-origin",
      "appearance",
      "visibility",
      "content-visibility",
      "opacity",
      "z-index",
      "paint-order",
      "mix-blend-mode",
      "backface-visibility",
      "backdrop-filter",
      "clip-path",
      "mask",
      "mask-border",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-image",
      "mask-mode",
      "mask-position",
      "mask-size",
      "mask-repeat",
      "mask-origin",
      "mask-clip",
      "mask-composite",
      "mask-type",
      "filter",
      "animation",
      "animation-composition",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-fill-mode",
      "animation-play-state",
      "animation-name",
      "transition",
      "transition-behavior",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "will-change",
      "counter-increment",
      "counter-reset",
      "counter-set",
      "cursor",
      "box-sizing",
      "contain",
      "contain-intrinsic-height",
      "contain-intrinsic-size",
      "contain-intrinsic-width",
      "container",
      "container-name",
      "container-type",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "margin-inline",
      "margin-inline-start",
      "margin-inline-end",
      "margin-block",
      "margin-block-start",
      "margin-block-end",
      "inset",
      "inset-block",
      "inset-block-end",
      "inset-block-start",
      "inset-inline",
      "inset-inline-end",
      "inset-inline-start",
      "outline",
      "outline-color",
      "outline-style",
      "outline-width",
      "outline-offset",
      "box-shadow",
      "border",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-color",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-radius",
      "border-top-right-radius",
      "border-top-left-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-inline",
      "border-inline-width",
      "border-inline-style",
      "border-inline-color",
      "border-inline-start",
      "border-inline-start-width",
      "border-inline-start-style",
      "border-inline-start-color",
      "border-inline-end",
      "border-inline-end-width",
      "border-inline-end-style",
      "border-inline-end-color",
      "border-block",
      "border-block-width",
      "border-block-style",
      "border-block-color",
      "border-block-start",
      "border-block-start-width",
      "border-block-start-style",
      "border-block-start-color",
      "border-block-end",
      "border-block-end-width",
      "border-block-end-style",
      "border-block-end-color",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "border-collapse",
      "border-spacing",
      "border-start-start-radius",
      "border-start-end-radius",
      "border-end-start-radius",
      "border-end-end-radius",
      "background",
      "background-image",
      "background-position",
      "background-size",
      "background-repeat",
      "background-origin",
      "background-clip",
      "background-attachment",
      "background-color",
      "background-blend-mode",
      "background-position-x",
      "background-position-y",
      "isolation",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "padding-inline",
      "padding-inline-start",
      "padding-inline-end",
      "padding-block",
      "padding-block-start",
      "padding-block-end",
      "image-orientation",
      "image-rendering",
      "aspect-ratio",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "-webkit-line-clamp",
      "-webkit-text-fill-color",
      "-webkit-text-stroke",
      "-webkit-text-stroke-color",
      "-webkit-text-stroke-width",
      "inline-size",
      "min-inline-size",
      "max-inline-size",
      "block-size",
      "min-block-size",
      "max-block-size",
      "table-layout",
      "caption-side",
      "empty-cells",
      "overflow",
      "overflow-anchor",
      "overflow-block",
      "overflow-clip-margin",
      "overflow-inline",
      "overflow-x",
      "overflow-y",
      "overscroll-behavior",
      "overscroll-behavior-block",
      "overscroll-behavior-inline",
      "overscroll-behavior-x",
      "overscroll-behavior-y",
      "resize",
      "object-fit",
      "object-position",
      "scroll-behavior",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "touch-action",
      "pointer-events",
      "content",
      "quotes",
      "hanging-punctuation",
      "color",
      "color-interpolation",
      "accent-color",
      "print-color-adjust",
      "forced-color-adjust",
      "color-scheme",
      "caret-color",
      "font",
      "font-style",
      "font-variant",
      "font-weight",
      "font-stretch",
      "font-size",
      "size-adjust",
      "line-height",
      "src",
      "font-family",
      "font-display",
      "font-kerning",
      "font-language-override",
      "font-optical-sizing",
      "font-palette",
      "font-size-adjust",
      "font-synthesis",
      "font-synthesis-weight",
      "font-synthesis-style",
      "font-synthesis-small-caps",
      "font-synthesis-position",
      "font-variant-alternates",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-emoji",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-feature-settings",
      "ascent-override",
      "descent-override",
      "line-gap-override",
      "hyphens",
      "hyphenate-character",
      "letter-spacing",
      "line-break",
      "list-style",
      "list-style-type",
      "list-style-image",
      "list-style-position",
      "writing-mode",
      "direction",
      "unicode-bidi",
      "unicode-range",
      "user-select",
      "ruby-position",
      "math-depth",
      "math-style",
      "text-combine-upright",
      "text-align",
      "text-align-last",
      "text-decoration",
      "text-decoration-line",
      "text-decoration-style",
      "text-decoration-color",
      "text-decoration-thickness",
      "text-decoration-skip-ink",
      "text-emphasis",
      "text-emphasis-style",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-indent",
      "text-justify",
      "text-underline-position",
      "text-underline-offset",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-wrap",
      "white-space",
      "white-space-collapse",
      "word-break",
      "word-spacing",
      "overflow-wrap",
      "tab-size",
      "widows"
    ];
  }
});

// ../../node_modules/.pnpm/css-declaration-sorter@7.2.0_postcss@8.4.48/node_modules/css-declaration-sorter/src/orders/smacss.mjs
var smacss_exports = {};
__export(smacss_exports, {
  properties: () => properties3
});
var properties3;
var init_smacss = __esm({
  "../../node_modules/.pnpm/css-declaration-sorter@7.2.0_postcss@8.4.48/node_modules/css-declaration-sorter/src/orders/smacss.mjs"() {
    "use strict";
    init_esm_shims();
    properties3 = [
      "all",
      "box-sizing",
      "contain",
      "contain-intrinsic-height",
      "contain-intrinsic-size",
      "contain-intrinsic-width",
      "container",
      "container-name",
      "container-type",
      "display",
      "appearance",
      "visibility",
      "content-visibility",
      "z-index",
      "paint-order",
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "offset",
      "offset-anchor",
      "offset-distance",
      "offset-path",
      "offset-position",
      "offset-rotate",
      "grid",
      "grid-template-rows",
      "grid-template-columns",
      "grid-template-areas",
      "grid-auto-rows",
      "grid-auto-columns",
      "grid-auto-flow",
      "column-gap",
      "row-gap",
      "grid-area",
      "grid-row",
      "grid-row-start",
      "grid-row-end",
      "grid-column",
      "grid-column-start",
      "grid-column-end",
      "grid-template",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-wrap",
      "box-decoration-break",
      "place-content",
      "place-items",
      "place-self",
      "align-content",
      "align-items",
      "align-self",
      "justify-content",
      "justify-items",
      "justify-self",
      "order",
      "aspect-ratio",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "-webkit-line-clamp",
      "-webkit-text-fill-color",
      "-webkit-text-stroke",
      "-webkit-text-stroke-color",
      "-webkit-text-stroke-width",
      "inline-size",
      "min-inline-size",
      "max-inline-size",
      "block-size",
      "min-block-size",
      "max-block-size",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "margin-inline",
      "margin-inline-start",
      "margin-inline-end",
      "margin-block",
      "margin-block-start",
      "margin-block-end",
      "inset",
      "inset-block",
      "inset-block-end",
      "inset-block-start",
      "inset-inline",
      "inset-inline-end",
      "inset-inline-start",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "padding-inline",
      "padding-inline-start",
      "padding-inline-end",
      "padding-block",
      "padding-block-start",
      "padding-block-end",
      "float",
      "clear",
      "overflow",
      "overflow-anchor",
      "overflow-block",
      "overflow-clip-margin",
      "overflow-inline",
      "overflow-x",
      "overflow-y",
      "overscroll-behavior",
      "overscroll-behavior-block",
      "overscroll-behavior-inline",
      "overscroll-behavior-x",
      "overscroll-behavior-y",
      "orphans",
      "gap",
      "columns",
      "column-fill",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-count",
      "column-width",
      "object-fit",
      "object-position",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "translate",
      "rotate",
      "scale",
      "border",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-radius",
      "border-top-right-radius",
      "border-top-left-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-inline",
      "border-inline-color",
      "border-inline-style",
      "border-inline-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-block",
      "border-block-color",
      "border-block-style",
      "border-block-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-collapse",
      "border-spacing",
      "border-start-start-radius",
      "border-start-end-radius",
      "border-end-start-radius",
      "border-end-end-radius",
      "outline",
      "outline-color",
      "outline-style",
      "outline-width",
      "outline-offset",
      "backdrop-filter",
      "backface-visibility",
      "background",
      "background-image",
      "background-position",
      "background-size",
      "background-repeat",
      "background-origin",
      "background-clip",
      "background-attachment",
      "background-color",
      "background-blend-mode",
      "background-position-x",
      "background-position-y",
      "box-shadow",
      "isolation",
      "content",
      "quotes",
      "hanging-punctuation",
      "color",
      "color-interpolation",
      "accent-color",
      "print-color-adjust",
      "forced-color-adjust",
      "color-scheme",
      "caret-color",
      "font",
      "font-style",
      "font-variant",
      "font-weight",
      "src",
      "font-stretch",
      "font-size",
      "size-adjust",
      "line-height",
      "font-family",
      "font-display",
      "font-kerning",
      "font-language-override",
      "font-optical-sizing",
      "font-palette",
      "font-size-adjust",
      "font-synthesis",
      "font-synthesis-weight",
      "font-synthesis-style",
      "font-synthesis-small-caps",
      "font-synthesis-position",
      "font-variant-alternates",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-emoji",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-feature-settings",
      "ascent-override",
      "descent-override",
      "line-gap-override",
      "hyphens",
      "hyphenate-character",
      "letter-spacing",
      "line-break",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "direction",
      "text-align",
      "text-align-last",
      "text-decoration",
      "text-decoration-line",
      "text-decoration-style",
      "text-decoration-color",
      "text-decoration-thickness",
      "text-decoration-skip-ink",
      "text-emphasis",
      "text-emphasis-style",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-indent",
      "text-justify",
      "text-underline-position",
      "text-underline-offset",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-wrap",
      "vertical-align",
      "baseline-source",
      "white-space",
      "white-space-collapse",
      "word-break",
      "word-spacing",
      "overflow-wrap",
      "animation",
      "animation-composition",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-fill-mode",
      "animation-play-state",
      "animation-name",
      "mix-blend-mode",
      "break-before",
      "break-after",
      "break-inside",
      "page",
      "page-break-before",
      "page-break-after",
      "page-break-inside",
      "caption-side",
      "clip-path",
      "counter-increment",
      "counter-reset",
      "counter-set",
      "cursor",
      "empty-cells",
      "filter",
      "image-orientation",
      "image-rendering",
      "mask",
      "mask-border",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "opacity",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "resize",
      "scroll-behavior",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "tab-size",
      "table-layout",
      "ruby-position",
      "math-depth",
      "math-style",
      "text-combine-upright",
      "touch-action",
      "transition",
      "transition-behavior",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "will-change",
      "unicode-bidi",
      "unicode-range",
      "user-select",
      "widows",
      "writing-mode"
    ];
  }
});

// ../../node_modules/.pnpm/postcss-pxtorem@6.1.0_postcss@8.4.48/node_modules/postcss-pxtorem/lib/pixel-unit-regex.js
var require_pixel_unit_regex = __commonJS({
  "../../node_modules/.pnpm/postcss-pxtorem@6.1.0_postcss@8.4.48/node_modules/postcss-pxtorem/lib/pixel-unit-regex.js"(exports, module) {
    "use strict";
    init_esm_shims();
    module.exports = (unit) => new RegExp(
      `"[^"]+"|'[^']+'|url\\([^)]+\\)|var\\([^)]+\\)|(\\d*\\.?\\d+)${unit}`,
      "g"
    );
  }
});

// ../../node_modules/.pnpm/postcss-pxtorem@6.1.0_postcss@8.4.48/node_modules/postcss-pxtorem/lib/filter-prop-list.js
var require_filter_prop_list = __commonJS({
  "../../node_modules/.pnpm/postcss-pxtorem@6.1.0_postcss@8.4.48/node_modules/postcss-pxtorem/lib/filter-prop-list.js"(exports, module) {
    "use strict";
    init_esm_shims();
    module.exports = {
      exact: (list) => list.filter((m4) => m4.match(/^[^*!]+$/)),
      contain: (list) => list.filter((m4) => m4.match(/^\*.+\*$/)).map((m4) => m4.substr(1, m4.length - 2)),
      endWith: (list) => list.filter((m4) => m4.match(/^\*[^*]+$/)).map((m4) => m4.substr(1)),
      startWith: (list) => list.filter((m4) => m4.match(/^[^*!]+\*$/)).map((m4) => m4.substr(0, m4.length - 1)),
      notExact: (list) => list.filter((m4) => m4.match(/^![^*].*$/)).map((m4) => m4.substr(1)),
      notContain: (list) => list.filter((m4) => m4.match(/^!\*.+\*$/)).map((m4) => m4.substr(2, m4.length - 3)),
      notEndWith: (list) => list.filter((m4) => m4.match(/^!\*[^*]+$/)).map((m4) => m4.substr(2)),
      notStartWith: (list) => list.filter((m4) => m4.match(/^![^*]+\*$/)).map((m4) => m4.substr(1, m4.length - 2))
    };
  }
});

// ../../node_modules/.pnpm/postcss-pxtorem@6.1.0_postcss@8.4.48/node_modules/postcss-pxtorem/lib/type.js
var require_type = __commonJS({
  "../../node_modules/.pnpm/postcss-pxtorem@6.1.0_postcss@8.4.48/node_modules/postcss-pxtorem/lib/type.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var type = (s5) => Object.prototype.toString.call(s5).slice(8, -1).toLowerCase();
    var types = [
      "String",
      "Array",
      "Undefined",
      "Boolean",
      "Number",
      "Function",
      "Symbol",
      "Object"
    ];
    module.exports = types.reduce((acc, str) => {
      acc["is" + str] = (val) => type(val) === str.toLowerCase();
      return acc;
    }, {});
  }
});

// ../../node_modules/.pnpm/postcss-pxtorem@6.1.0_postcss@8.4.48/node_modules/postcss-pxtorem/index.js
var require_postcss_pxtorem = __commonJS({
  "../../node_modules/.pnpm/postcss-pxtorem@6.1.0_postcss@8.4.48/node_modules/postcss-pxtorem/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var pxRegex = require_pixel_unit_regex();
    var filterPropList = require_filter_prop_list();
    var type = require_type();
    var defaults = {
      rootValue: 16,
      unitPrecision: 5,
      selectorBlackList: [],
      propList: ["font", "font-size", "line-height", "letter-spacing"],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: null,
      unit: "px"
    };
    var legacyOptions = {
      root_value: "rootValue",
      unit_precision: "unitPrecision",
      selector_black_list: "selectorBlackList",
      prop_white_list: "propList",
      media_query: "mediaQuery",
      propWhiteList: "propList"
    };
    function convertLegacyOptions(options) {
      if (typeof options !== "object") return;
      if ((typeof options["prop_white_list"] !== "undefined" && options["prop_white_list"].length === 0 || typeof options.propWhiteList !== "undefined" && options.propWhiteList.length === 0) && typeof options.propList === "undefined") {
        options.propList = ["*"];
        delete options["prop_white_list"];
        delete options.propWhiteList;
      }
      Object.keys(legacyOptions).forEach((key) => {
        if (Reflect.has(options, key)) {
          options[legacyOptions[key]] = options[key];
          delete options[key];
        }
      });
    }
    function createPxReplace(rootValue, unitPrecision, minPixelValue) {
      return (m4, $1) => {
        if (!$1) return m4;
        const pixels = parseFloat($1);
        if (pixels < minPixelValue) return m4;
        const fixedVal = toFixed(pixels / rootValue, unitPrecision);
        return fixedVal === 0 ? "0" : fixedVal + "rem";
      };
    }
    function toFixed(number, precision) {
      const multiplier = Math.pow(10, precision + 1), wholeNumber = Math.floor(number * multiplier);
      return Math.round(wholeNumber / 10) * 10 / multiplier;
    }
    function declarationExists(decls, prop, value) {
      return decls.some((decl) => decl.prop === prop && decl.value === value);
    }
    function blacklistedSelector(blacklist, selector) {
      if (typeof selector !== "string") return;
      return blacklist.some((regex) => {
        if (typeof regex === "string") {
          return selector.indexOf(regex) !== -1;
        }
        return selector.match(regex);
      });
    }
    function createPropListMatcher(propList) {
      const hasWild = propList.indexOf("*") > -1;
      const matchAll = hasWild && propList.length === 1;
      const lists = {
        exact: filterPropList.exact(propList),
        contain: filterPropList.contain(propList),
        startWith: filterPropList.startWith(propList),
        endWith: filterPropList.endWith(propList),
        notExact: filterPropList.notExact(propList),
        notContain: filterPropList.notContain(propList),
        notStartWith: filterPropList.notStartWith(propList),
        notEndWith: filterPropList.notEndWith(propList)
      };
      return (prop) => {
        if (matchAll) return true;
        return (hasWild || lists.exact.indexOf(prop) > -1 || lists.contain.some(function(m4) {
          return prop.indexOf(m4) > -1;
        }) || lists.startWith.some(function(m4) {
          return prop.indexOf(m4) === 0;
        }) || lists.endWith.some(function(m4) {
          return prop.indexOf(m4) === prop.length - m4.length;
        })) && !(lists.notExact.indexOf(prop) > -1 || lists.notContain.some(function(m4) {
          return prop.indexOf(m4) > -1;
        }) || lists.notStartWith.some(function(m4) {
          return prop.indexOf(m4) === 0;
        }) || lists.notEndWith.some(function(m4) {
          return prop.indexOf(m4) === prop.length - m4.length;
        }));
      };
    }
    module.exports = (options = {}) => {
      convertLegacyOptions(options);
      const opts = Object.assign({}, defaults, options);
      const satisfyPropList = createPropListMatcher(opts.propList);
      const exclude = opts.exclude;
      let isExcludeFile = false;
      let pxReplace;
      return {
        postcssPlugin: "postcss-pxtorem",
        Once(css) {
          const filePath = css.source.input.file;
          if (exclude && (type.isFunction(exclude) && exclude(filePath) || type.isString(exclude) && filePath.indexOf(exclude) !== -1 || filePath.match(exclude) !== null)) {
            isExcludeFile = true;
          } else {
            isExcludeFile = false;
          }
          const rootValue = typeof opts.rootValue === "function" ? opts.rootValue(css.source.input) : opts.rootValue;
          pxReplace = createPxReplace(
            rootValue,
            opts.unitPrecision,
            opts.minPixelValue
          );
        },
        Declaration(decl) {
          if (isExcludeFile) return;
          if (decl.value.indexOf(opts.unit) === -1 || !satisfyPropList(decl.prop) || blacklistedSelector(opts.selectorBlackList, decl.parent.selector))
            return;
          const value = decl.value.replace(pxRegex(opts.unit), pxReplace);
          if (declarationExists(decl.parent, decl.prop, value)) return;
          if (opts.replace) {
            decl.value = value;
          } else {
            decl.cloneAfter({ value });
          }
        },
        AtRule(atRule) {
          if (isExcludeFile) return;
          if (opts.mediaQuery && atRule.name === "media") {
            if (atRule.params.indexOf(opts.unit) === -1) return;
            atRule.params = atRule.params.replace(pxRegex(opts.unit), pxReplace);
          }
        }
      };
    };
    module.exports.postcss = true;
  }
});

// ../../node_modules/.pnpm/postcss-zindex@7.0.0_postcss@8.4.48/node_modules/postcss-zindex/src/lib/layerCache.js
var require_layerCache = __commonJS({
  "../../node_modules/.pnpm/postcss-zindex@7.0.0_postcss@8.4.48/node_modules/postcss-zindex/src/lib/layerCache.js"(exports, module) {
    "use strict";
    init_esm_shims();
    function LayerCache() {
      this._values = /* @__PURE__ */ new Map();
    }
    function ascending(a5, b2) {
      return a5 - b2;
    }
    LayerCache.prototype.optimizeValues = function(startIndex) {
      const sortedValues = Array.from(this._values.keys()).sort(ascending);
      for (let i4 = 0; i4 < sortedValues.length; i4++) {
        this._values.set(sortedValues[i4], i4 + startIndex);
      }
    };
    LayerCache.prototype.addValue = function(value) {
      let parsedValue = parseInt(value, 10);
      if (!parsedValue || parsedValue < 0) {
        return;
      }
      this._values.set(parsedValue, parsedValue);
    };
    LayerCache.prototype.getValue = function(value) {
      let parsedValue = parseInt(value, 10);
      return this._values.get(parsedValue) || value;
    };
    module.exports = LayerCache;
  }
});

// ../../node_modules/.pnpm/postcss-zindex@7.0.0_postcss@8.4.48/node_modules/postcss-zindex/src/index.js
var require_src = __commonJS({
  "../../node_modules/.pnpm/postcss-zindex@7.0.0_postcss@8.4.48/node_modules/postcss-zindex/src/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var LayerCache = require_layerCache();
    function pluginCreator(opts = {}) {
      return {
        postcssPlugin: "postcss-zindex",
        prepare() {
          const cache = new LayerCache();
          return {
            OnceExit(css) {
              const nodes = [];
              let abort = false;
              css.walkDecls(/z-index/i, (decl) => {
                if (decl.value[0] === "-") {
                  abort = true;
                  return false;
                }
                nodes.push(decl);
                cache.addValue(decl.value);
              });
              if (abort || !nodes.length) {
                return;
              }
              cache.optimizeValues(opts.startIndex || 1);
              nodes.forEach((decl) => {
                decl.value = cache.getValue(decl.value).toString();
              });
            }
          };
        }
      };
    }
    pluginCreator.postcss = true;
    module.exports = pluginCreator;
  }
});

// src/index.ts
init_esm_shims();

// ../../node_modules/.pnpm/@csstools+postcss-global-data@3.0.0_postcss@8.4.48/node_modules/@csstools/postcss-global-data/dist/index.mjs
init_esm_shims();
import e from "node:path";
import s from "node:fs";
import r from "node:module";
function parseImport(t6, o5, a5, n3) {
  let c4 = "";
  try {
    if (a5.startsWith("node_modules://")) {
      c4 = r.createRequire(process.cwd()).resolve(a5.slice(15));
    } else if (a5.startsWith("node_modules:")) {
      c4 = r.createRequire(process.cwd()).resolve(a5.slice(13));
    } else c4 = e.resolve(a5);
  } catch (e7) {
    throw new Error(`Failed to read ${a5} with error ${e7 instanceof Error ? e7.message : e7}`);
  }
  if (n3.has(c4)) return false;
  n3.add(c4), o5.result.messages.push({ type: "dependency", plugin: "postcss-global-data", file: c4, parent: t6.source?.input?.file });
  const l4 = s.readFileSync(c4, "utf8");
  return o5.postcss.parse(l4, { from: c4 });
}
var creator = (e7) => {
  const s5 = Object.assign({ files: [] }, e7);
  return { postcssPlugin: "postcss-global-data", prepare() {
    let e8 = /* @__PURE__ */ new Set(), r6 = /* @__PURE__ */ new Set();
    return { postcssPlugin: "postcss-global-data", Once(t6, o5) {
      s5.files.forEach((s6) => {
        if (e8.has(s6)) return;
        const a5 = parseImport(t6, o5, s6, e8);
        a5 && a5.each((e9) => {
          t6.append(e9), r6.add(e9);
        });
      });
    }, OnceExit() {
      r6.forEach((e9) => {
        e9.remove();
      }), r6 = /* @__PURE__ */ new Set(), e8 = /* @__PURE__ */ new Set();
    } };
  } };
};
creator.postcss = true;

// ../../node_modules/.pnpm/@csstools+postcss-rebase-url@2.0.4_postcss@8.4.48/node_modules/@csstools/postcss-rebase-url/dist/index.mjs
init_esm_shims();
import { tokenize as e2, isTokenURL as r2, isTokenString as t } from "@csstools/css-tokenizer";
import { parseCommaSeparatedListOfComponentValues as s2, replaceComponentValues as i, isTokenNode as o, isFunctionNode as a, isWhitespaceNode as n, isCommentNode as u, stringify as l } from "@csstools/css-parser-algorithms";
import c from "node:path";
var f = /^([-_a-z0-9]+:)?\/\//i;
function rebase(e7, r6, t6) {
  if (e7.startsWith("data:")) return false;
  if (f.test(e7)) return false;
  if (e7.startsWith("/")) return e7;
  if (e7.startsWith("#")) return e7;
  try {
    const r7 = new URL(e7);
    if (r7.port || r7.protocol) return false;
  } catch {
  }
  const s5 = c.posix.resolve(c.posix.join(r6, e7));
  return c.posix.relative(t6, s5);
}
function serializeString(e7) {
  let r6 = "";
  for (const t6 of e7) {
    const e8 = t6.codePointAt(0);
    if (void 0 !== e8) switch (e8) {
      case 0:
        r6 += String.fromCodePoint(65533);
        break;
      case 127:
        r6 += `\\${e8.toString(16)}`;
        break;
      case 34:
      case 39:
      case 92:
        r6 += `\\${t6}`;
        break;
      default:
        if (1 <= e8 && e8 <= 31) {
          r6 += `\\${e8.toString(16)} `;
          break;
        }
        r6 += t6;
    }
    else r6 += String.fromCodePoint(65533);
  }
  return r6;
}
function normalizedDir(e7) {
  return c.parse(c.resolve(e7.trim())).dir.split(c.sep).join(c.posix.sep);
}
var p = /^initial-value$/i;
var v = /^property$/i;
var m = /^syntax$/i;
var d = /url\(/i;
var b = /^url$/i;
var g = /<url>/i;
var creator2 = () => ({ postcssPlugin: "postcss-rebase-url", prepare() {
  const c4 = /* @__PURE__ */ new WeakSet(), f3 = /* @__PURE__ */ new Set();
  return { postcssPlugin: "postcss-rebase-url", Once(e7) {
    e7.walkAtRules(v, (e8) => {
      if (!e8.nodes) return;
      const r6 = e8.nodes.find((e9) => {
        if ("decl" === e9.type && m.test(e9.prop)) return true;
      });
      r6 && g.test(r6.value) && f3.add(e8.params.trim());
    });
  }, Declaration(m4, { result: g3 }) {
    if (c4.has(m4)) return;
    if (m4.variable && !f3.has(m4.prop)) return;
    if (p.test(m4.prop) && "atrule" === m4.parent?.type && v.test(m4.parent.name)) return;
    const { from: h2 } = g3.opts;
    if (!h2) return;
    if (!m4.source?.input.from) return;
    if (!d.test(m4.value)) return;
    const S = normalizedDir(h2), $ = m4.source.input.from.trim();
    if (!$) return;
    const k = normalizedDir($), z = s2(e2({ css: m4.value })), x = i(z, (e7) => {
      if (o(e7) && r2(e7.value)) {
        const r6 = rebase(e7.value[4].value.trim(), k, S);
        if (r6) return e7.value[4].value = r6, e7.value[1] = `url(${serializeString(r6)})`, e7;
      }
      if (a(e7) && b.test(e7.getName())) {
        for (const r6 of e7.value) if (!n(r6) && !u(r6) && o(r6) && t(r6.value)) {
          const t6 = rebase(r6.value[4].value.trim(), k, S);
          if (t6) return r6.value[4].value = t6, r6.value[1] = `"${serializeString(t6)}"`, e7;
          break;
        }
      }
    }), w2 = l(x);
    w2 !== m4.value && (m4.value = w2, c4.add(m4));
  } };
} });
creator2.postcss = true;

// ../../node_modules/.pnpm/@csstools+postcss-slow-plugins@2.0.0_postcss@8.4.48/node_modules/@csstools/postcss-slow-plugins/dist/index.mjs
init_esm_shims();
var creator3 = (s5) => {
  const o5 = s5?.ignore ?? [];
  return { postcssPlugin: "postcss-slow-plugins", async Once(s6, { result: n3, postcss: t6 }) {
    console.log("Analyzing with file:\n  " + s6.source?.input.from + "\n");
    const e7 = s6.source?.input.css ?? "", i4 = [...n3.processor.plugins.filter((s7) => "postcssPlugin" in s7 && "postcss-slow-plugins" !== s7.postcssPlugin)], p4 = (await t6(i4).process(e7 ?? "", n3.opts)).css.length / 1024, medianDuration = async (s7) => {
      const o6 = [];
      for (let n4 = 0; n4 < 21; n4++) {
        const n5 = performance.now();
        await s7(), o6.push(performance.now() - n5);
      }
      return o6.sort((s8, o7) => s8 - o7), o6[10];
    }, r6 = await medianDuration(async () => {
      await t6(i4).process(e7 ?? "", n3.opts);
    });
    {
      const s7 = [];
      for (let l4 = 0; l4 < i4.length; l4++) {
        const c4 = "postcssPlugin" in i4[l4] ? i4[l4].postcssPlugin : "unknown plugin";
        if (o5.includes(c4)) continue;
        const u4 = i4.filter((s8) => s8 !== i4[l4]), a5 = await medianDuration(async () => {
          await t6(u4).process(e7 ?? "", n3.opts);
        }), d3 = r6 - a5;
        s7.push({ duration: `${a5.toFixed(2)}ms`, "kb's per ms": `${(p4 / a5).toFixed(2)}kb/ms`, drop: d3, name: c4, "index in plugins list": l4 });
      }
      s7.sort((s8, o6) => Number(o6.drop) - Number(s8.drop)), s7.splice(0, 0, { duration: `${r6.toFixed(2)}ms`, "kb's per ms": `${(p4 / r6).toFixed(2)}kb/ms`, drop: "--", name: "-- all plugins --", "index in plugins list": "--" }), s7.map((s8) => ("string" == typeof s8.drop || (s8.drop = `${s8.drop.toFixed(2)}ms`), s8)), console.log("Most impactful to improve, ordered by drop in duration when excluded:"), console.table(s7.slice(0, 11));
    }
    {
      const s7 = [];
      for (let l4 = 0; l4 < i4.length; l4++) {
        const c4 = "postcssPlugin" in i4[l4] ? i4[l4].postcssPlugin : "unknown plugin";
        if (o5.includes(c4)) continue;
        const u4 = [...i4.filter((s8) => s8 === i4[l4] || "postcssPlugin" in s8 && o5.includes(s8.postcssPlugin))], a5 = await medianDuration(async () => {
          await t6(u4).process(e7 ?? "", n3.opts);
        }), d3 = r6 - a5;
        s7.push({ duration: `${a5.toFixed(2)}ms`, "kb's per ms": `${(p4 / a5).toFixed(2)}kb/ms`, drop: d3, name: c4, "index in plugins list": l4 });
      }
      s7.sort((s8, o6) => Number(s8.drop) - Number(o6.drop)), s7.map((s8) => (delete s8.drop, s8)), console.log("Most impactful to improve, ordered by increase in duration when running alone:"), console.table(s7.slice(0, 11));
    }
  } };
};
creator3.postcss = true;

// ../../node_modules/.pnpm/@csstools+postcss-unset-value@4.0.0_postcss@8.4.48/node_modules/@csstools/postcss-unset-value/dist/index.mjs
init_esm_shims();
var e3 = /* @__PURE__ */ new Set(["block-ellipsis", "border-boundary", "border-collapse", "border-spacing", "box-snap", "caption-side", "caret", "caret-shape", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "cursor", "direction", "dominant-baseline", "empty-cells", "fill", "fill-color", "fill-image", "fill-opacity", "fill-position", "fill-repeat", "fill-rule", "fill-size", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-palette", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-emoji", "font-variant-ligatures", "font-weight", "forced-color-adjust", "hyphenate-character", "hyphenate-limit-chars", "hyphenate-limit-last", "hyphenate-limit-lines", "hyphenate-limit-zone", "hyphens", "image-orientation", "image-rendering", "image-resolution", "initial-letter-wrap", "letter-spacing", "line-break", "line-height", "line-padding", "line-snap", "list-style", "list-style-image", "list-style-position", "list-style-type", "marker", "marker-end", "marker-mid", "marker-side", "marker-start", "orphans", "overflow-wrap", "paint-order", "pointer-events", "print-color-adjust", "quotes", "ruby-merge", "ruby-overhang", "ruby-position", "shape-rendering", "speak", "speak-as", "stroke", "stroke-align", "stroke-alignment", "stroke-color", "stroke-dash-corner", "stroke-dash-justify", "stroke-dashadjust", "stroke-dasharray", "stroke-dashcorner", "stroke-dashoffset", "stroke-image", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-position", "stroke-repeat", "stroke-size", "stroke-width", "tab-size", "text-align", "text-align-all", "text-align-last", "text-anchor", "text-combine-upright", "text-decoration-skip", "text-decoration-skip-box", "text-decoration-skip-inset", "text-decoration-skip-self", "text-decoration-skip-spaces", "text-edge", "text-emphasis-color", "text-emphasis-position", "text-emphasis-skip", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-rendering", "text-shadow", "text-size-adjust", "text-space-collapse", "text-spacing", "text-transform", "text-underline-position", "text-wrap", "visibility", "voice-balance", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "word-boundary-detection", "word-boundary-expansion", "word-break", "word-spacing", "word-wrap", "writing-mode"]);
var t2 = /* @__PURE__ */ new Set(["align-content", "align-items", "align-self", "alignment-baseline", "animation", "animation-composition", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timeline", "animation-timing-function", "appearance", "backdrop-filter", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-position-block", "background-position-inline", "background-position-x", "background-position-y", "background-repeat", "background-size", "baseline-shift", "baseline-source", "block-step", "block-step-align", "block-step-insert", "block-step-round", "block-step-size", "bookmark-label", "bookmark-level", "bookmark-state", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-clip", "border-clip-bottom", "border-clip-left", "border-clip-right", "border-clip-top", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-limit", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "clear", "clip", "clip-path", "color-adjust", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain-intrinsic-block-size", "contain-intrinsic-height", "contain-intrinsic-inline-size", "contain-intrinsic-width", "container", "container-name", "container-type", "content", "continue", "copy-into", "corner-shape", "corners", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cx", "cy", "d", "display", "fill-break", "fill-origin", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-defer", "float-offset", "float-reference", "flood-color", "flood-opacity", "flow-from", "flow-into", "footnote-display", "footnote-policy", "gap", "glyph-orientation-vertical", "grid-auto-columns", "grid-auto-rows", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "initial-letter", "inline-sizing", "input-security", "isolation", "justify-content", "justify-items", "justify-self", "leading-trim", "left", "lighting-color", "line-clamp", "line-grid", "margin", "margin-bottom", "margin-break", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-image", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-height", "max-lines", "max-width", "min-height", "min-intrinsic-sizing", "min-width", "mix-blend-mode", "nav-down", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "place-content", "position", "r", "region-fragment", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "rx", "ry", "scroll-snap-type", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "shape-padding", "shape-subtract", "spatial-navigation-action", "spatial-navigation-contain", "spatial-navigation-function", "stop-color", "stop-opacity", "string-set", "stroke-break", "stroke-origin", "table-layout", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-group-align", "text-overflow", "text-space-trim", "top", "touch-action", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "user-select", "vector-effect", "vertical-align", "voice-duration", "width", "will-change", "wrap-after", "wrap-before", "wrap-flow", "wrap-inside", "wrap-through", "x", "y", "z-index"]);
var creator4 = (o5) => {
  const i4 = Object.assign({ preserve: false }, o5);
  return { postcssPlugin: "postcss-unset-value", Declaration(o6) {
    if ("unset" !== o6.value.toLowerCase()) return;
    let r6 = false;
    e3.has(o6.prop.toLowerCase()) ? r6 = "inherit" : t2.has(o6.prop.toLowerCase()) && (r6 = "initial"), r6 && (o6.cloneBefore({ prop: o6.prop, value: r6 }), i4.preserve || o6.remove());
  } };
};
creator4.postcss = true;

// ../../node_modules/.pnpm/css-declaration-sorter@7.2.0_postcss@8.4.48/node_modules/css-declaration-sorter/src/core/main.mjs
init_esm_shims();

// ../../node_modules/.pnpm/css-declaration-sorter@7.2.0_postcss@8.4.48/node_modules/css-declaration-sorter/src/core/shorthand-data.mjs
init_esm_shims();
var shorthandData = {
  "animation": [
    "animation-name",
    "animation-duration",
    "animation-timing-function",
    "animation-delay",
    "animation-iteration-count",
    "animation-direction",
    "animation-fill-mode",
    "animation-play-state"
  ],
  "background": [
    "background-image",
    "background-size",
    "background-position",
    "background-repeat",
    "background-origin",
    "background-clip",
    "background-attachment",
    "background-color"
  ],
  "columns": [
    "column-width",
    "column-count"
  ],
  "column-rule": [
    "column-rule-width",
    "column-rule-style",
    "column-rule-color"
  ],
  "flex": [
    "flex-grow",
    "flex-shrink",
    "flex-basis"
  ],
  "flex-flow": [
    "flex-direction",
    "flex-wrap"
  ],
  "font": [
    "font-style",
    "font-variant",
    "font-weight",
    "font-stretch",
    "font-size",
    "font-family",
    "line-height"
  ],
  "gap": [
    "column-gap",
    "row-gap"
  ],
  "grid": [
    "grid-template-rows",
    "grid-template-columns",
    "grid-template-areas",
    "grid-auto-rows",
    "grid-auto-columns",
    "grid-auto-flow",
    "column-gap",
    "row-gap"
  ],
  "grid-area": [
    "grid-row-start",
    "grid-column-start",
    "grid-row-end",
    "grid-column-end"
  ],
  "grid-column": [
    "grid-column-start",
    "grid-column-end"
  ],
  "grid-row": [
    "grid-row-start",
    "grid-row-end"
  ],
  "grid-template": [
    "grid-template-columns",
    "grid-template-rows",
    "grid-template-areas"
  ],
  "list-style": [
    "list-style-type",
    "list-style-position",
    "list-style-image"
  ],
  "offset": [
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate"
  ],
  "padding": [
    "padding-block",
    "padding-block-start",
    "padding-block-end",
    "padding-inline",
    "padding-inline-start",
    "padding-inline-end",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left"
  ],
  "padding-block": [
    "padding-block-start",
    "padding-block-end",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left"
  ],
  "padding-block-start": [
    "padding-top",
    "padding-right",
    "padding-left"
  ],
  "padding-block-end": [
    "padding-right",
    "padding-bottom",
    "padding-left"
  ],
  "padding-inline": [
    "padding-inline-start",
    "padding-inline-end",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left"
  ],
  "padding-inline-start": [
    "padding-top",
    "padding-right",
    "padding-left"
  ],
  "padding-inline-end": [
    "padding-right",
    "padding-bottom",
    "padding-left"
  ],
  "margin": [
    "margin-block",
    "margin-block-start",
    "margin-block-end",
    "margin-inline",
    "margin-inline-start",
    "margin-inline-end",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left"
  ],
  "margin-block": [
    "margin-block-start",
    "margin-block-end",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left"
  ],
  "margin-inline": [
    "margin-inline-start",
    "margin-inline-end",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left"
  ],
  "margin-inline-start": [
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left"
  ],
  "margin-inline-end": [
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left"
  ],
  "border": [
    "border-top",
    "border-right",
    "border-bottom",
    "border-left",
    "border-width",
    "border-style",
    "border-color",
    "border-top-width",
    "border-right-width",
    "border-bottom-width",
    "border-left-width",
    "border-inline-start-width",
    "border-inline-end-width",
    "border-block-start-width",
    "border-block-end-width",
    "border-top-style",
    "border-right-style",
    "border-bottom-style",
    "border-left-style",
    "border-inline-start-style",
    "border-inline-end-style",
    "border-block-start-style",
    "border-block-end-style",
    "border-top-color",
    "border-right-color",
    "border-bottom-color",
    "border-left-color",
    "border-inline-start-color",
    "border-inline-end-color",
    "border-block-start-color",
    "border-block-end-color",
    "border-block",
    "border-block-start",
    "border-block-end",
    "border-block-width",
    "border-block-style",
    "border-block-color",
    "border-inline",
    "border-inline-start",
    "border-inline-end",
    "border-inline-width",
    "border-inline-style",
    "border-inline-color"
  ],
  "border-top": [
    "border-width",
    "border-style",
    "border-color",
    "border-top-width",
    "border-top-style",
    "border-top-color"
  ],
  "border-right": [
    "border-width",
    "border-style",
    "border-color",
    "border-right-width",
    "border-right-style",
    "border-right-color"
  ],
  "border-bottom": [
    "border-width",
    "border-style",
    "border-color",
    "border-bottom-width",
    "border-bottom-style",
    "border-bottom-color"
  ],
  "border-left": [
    "border-width",
    "border-style",
    "border-color",
    "border-left-width",
    "border-left-style",
    "border-left-color"
  ],
  "border-color": [
    "border-top-color",
    "border-bottom-color",
    "border-left-color",
    "border-right-color",
    "border-inline-start-color",
    "border-inline-end-color",
    "border-block-start-color",
    "border-block-end-color"
  ],
  "border-width": [
    "border-top-width",
    "border-bottom-width",
    "border-left-width",
    "border-right-width",
    "border-inline-start-width",
    "border-inline-end-width",
    "border-block-start-width",
    "border-block-end-width"
  ],
  "border-style": [
    "border-top-style",
    "border-bottom-style",
    "border-left-style",
    "border-right-style",
    "border-inline-start-style",
    "border-inline-end-style",
    "border-block-start-style",
    "border-block-end-style"
  ],
  "border-radius": [
    "border-top-right-radius",
    "border-top-left-radius",
    "border-bottom-right-radius",
    "border-bottom-left-radius",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-start-end-radius",
    "border-start-start-radius"
  ],
  "border-block": [
    "border-block-start",
    "border-block-end",
    "border-block-width",
    "border-width",
    "border-block-style",
    "border-style",
    "border-block-color",
    "border-color"
  ],
  "border-block-start": [
    "border-block-start-width",
    "border-width",
    "border-block-start-style",
    "border-style",
    "border-block-start-color",
    "border-color"
  ],
  "border-block-end": [
    "border-block-end-width",
    "border-width",
    "border-block-end-style",
    "border-style",
    "border-block-end-color",
    "border-color"
  ],
  "border-inline": [
    "border-inline-start",
    "border-inline-end",
    "border-inline-width",
    "border-width",
    "border-inline-style",
    "border-style",
    "border-inline-color",
    "border-color"
  ],
  "border-inline-start": [
    "border-inline-start-width",
    "border-width",
    "border-inline-start-style",
    "border-style",
    "border-inline-start-color",
    "border-color"
  ],
  "border-inline-end": [
    "border-inline-end-width",
    "border-width",
    "border-inline-end-style",
    "border-style",
    "border-inline-end-color",
    "border-color"
  ],
  "border-image": [
    "border-image-source",
    "border-image-slice",
    "border-image-width",
    "border-image-outset",
    "border-image-repeat"
  ],
  "mask": [
    "mask-image",
    "mask-mode",
    "mask-position",
    "mask-size",
    "mask-repeat",
    "mask-origin",
    "mask-clip",
    "mask-composite"
  ],
  "inline-size": [
    "width",
    "height"
  ],
  "block-size": [
    "width",
    "height"
  ],
  "max-inline-size": [
    "max-width",
    "max-height"
  ],
  "max-block-size": [
    "max-width",
    "max-height"
  ],
  "inset": [
    "inset-block",
    "inset-block-start",
    "inset-block-end",
    "inset-inline",
    "inset-inline-start",
    "inset-inline-end",
    "top",
    "right",
    "bottom",
    "left"
  ],
  "inset-block": [
    "inset-block-start",
    "inset-block-end",
    "top",
    "right",
    "bottom",
    "left"
  ],
  "inset-inline": [
    "inset-inline-start",
    "inset-inline-end",
    "top",
    "right",
    "bottom",
    "left"
  ],
  "outline": [
    "outline-color",
    "outline-style",
    "outline-width"
  ],
  "overflow": [
    "overflow-x",
    "overflow-y"
  ],
  "place-content": [
    "align-content",
    "justify-content"
  ],
  "place-items": [
    "align-items",
    "justify-items"
  ],
  "place-self": [
    "align-self",
    "justify-self"
  ],
  "text-decoration": [
    "text-decoration-color",
    "text-decoration-style",
    "text-decoration-line"
  ],
  "transition": [
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function"
  ],
  "text-emphasis": [
    "text-emphasis-style",
    "text-emphasis-color"
  ],
  "font-synthesis": [
    "font-synthesis-weight",
    "font-synthesis-style",
    "font-synthesis-small-caps",
    "font-synthesis-position"
  ]
};

// ../../node_modules/.pnpm/css-declaration-sorter@7.2.0_postcss@8.4.48/node_modules/css-declaration-sorter/src/core/bubble-sort.mjs
init_esm_shims();
function bubbleSort(list, comparator) {
  let upperIndex = list.length - 1;
  while (upperIndex > 0) {
    let swapIndex = 0;
    for (let i4 = 0; i4 < upperIndex; i4 += 1) {
      if (comparator(list[i4], list[i4 + 1]) > 0) {
        const temp = list[i4 + 1];
        list[i4 + 1] = list[i4];
        list[i4] = temp;
        swapIndex = i4;
      }
    }
    upperIndex = swapIndex;
  }
  return list;
}

// import("../orders/**/*.mjs") in ../../node_modules/.pnpm/css-declaration-sorter@7.2.0_postcss@8.4.48/node_modules/css-declaration-sorter/src/core/main.mjs
var globImport_orders_mjs = __glob({
  "../orders/alphabetical.mjs": () => Promise.resolve().then(() => (init_alphabetical(), alphabetical_exports)),
  "../orders/concentric-css.mjs": () => Promise.resolve().then(() => (init_concentric_css(), concentric_css_exports)),
  "../orders/smacss.mjs": () => Promise.resolve().then(() => (init_smacss(), smacss_exports))
});

// ../../node_modules/.pnpm/css-declaration-sorter@7.2.0_postcss@8.4.48/node_modules/css-declaration-sorter/src/core/main.mjs
var builtInOrders = [
  "alphabetical",
  "concentric-css",
  "smacss"
];
var cssDeclarationSorter = ({ order = "alphabetical", keepOverrides = false } = {}) => ({
  postcssPlugin: "css-declaration-sorter",
  OnceExit(css) {
    let withKeepOverrides = (comparator) => comparator;
    if (keepOverrides) {
      withKeepOverrides = withOverridesComparator(shorthandData);
    }
    if (typeof order === "function") {
      return processCss({ css, comparator: withKeepOverrides(order) });
    }
    if (!builtInOrders.includes(order))
      return Promise.reject(
        Error([
          `Invalid built-in order '${order}' provided.`,
          `Available built-in orders are: ${builtInOrders}`
        ].join("\n"))
      );
    return globImport_orders_mjs(`../orders/${order}.mjs`).then(({ properties: properties4 }) => processCss({
      css,
      comparator: withKeepOverrides(orderComparator(properties4))
    }));
  }
});
cssDeclarationSorter.postcss = true;
function processCss({ css, comparator }) {
  const comments = [];
  const rulesCache = [];
  css.walk((node) => {
    const nodes = node.nodes;
    const type = node.type;
    if (type === "comment") {
      const isNewlineNode = node.raws.before && node.raws.before.includes("\n");
      const lastNewlineNode = isNewlineNode && !node.next();
      const onlyNode = !node.prev() && !node.next() || !node.parent;
      if (lastNewlineNode || onlyNode || node.parent.type === "root") {
        return;
      }
      if (isNewlineNode) {
        const pairedNode = node.next() || node.prev();
        if (pairedNode) {
          comments.unshift({
            "comment": node,
            "pairedNode": pairedNode,
            "insertPosition": node.next() ? "Before" : "After"
          });
          node.remove();
        }
      } else {
        const pairedNode = node.prev() || node.next();
        if (pairedNode) {
          comments.push({
            "comment": node,
            "pairedNode": pairedNode,
            "insertPosition": "After"
          });
          node.remove();
        }
      }
      return;
    }
    const isRule = type === "rule" || type === "atrule";
    if (isRule && nodes && nodes.length > 1) {
      rulesCache.push(nodes);
    }
  });
  rulesCache.forEach((nodes) => {
    sortCssDeclarations({ nodes, comparator });
  });
  comments.forEach((node) => {
    const pairedNode = node.pairedNode;
    node.comment.remove();
    pairedNode.parent && pairedNode.parent["insert" + node.insertPosition](pairedNode, node.comment);
  });
}
function sortCssDeclarations({ nodes, comparator }) {
  bubbleSort(nodes, (a5, b2) => {
    if (a5.type === "decl" && b2.type === "decl") {
      return comparator(a5.prop, b2.prop);
    } else {
      return compareDifferentType(a5, b2);
    }
  });
}
function withOverridesComparator(shorthandData2) {
  return function(comparator) {
    return function(a5, b2) {
      a5 = removeVendorPrefix(a5);
      b2 = removeVendorPrefix(b2);
      if (shorthandData2[a5] && shorthandData2[a5].includes(b2)) return 0;
      if (shorthandData2[b2] && shorthandData2[b2].includes(a5)) return 0;
      return comparator(a5, b2);
    };
  };
}
function orderComparator(order) {
  return function(a5, b2) {
    const bIndex = order.indexOf(b2);
    if (bIndex === -1) {
      return 0;
    }
    return order.indexOf(a5) - bIndex;
  };
}
function compareDifferentType(a5, b2) {
  if (b2.type === "atrule" || a5.type === "atrule") {
    return 0;
  }
  return a5.type === "decl" ? -1 : b2.type === "decl" ? 1 : 0;
}
function removeVendorPrefix(property) {
  return property.replace(/^-\w+-/, "");
}

// ../../node_modules/.pnpm/postcss-color-hex-alpha@10.0.0_postcss@8.4.48/node_modules/postcss-color-hex-alpha/dist/index.mjs
init_esm_shims();
import e4 from "postcss-value-parser";

// ../../node_modules/.pnpm/@csstools+utilities@2.0.0_postcss@8.4.48/node_modules/@csstools/utilities/dist/index.mjs
init_esm_shims();
function hasFallback(e7) {
  const t6 = e7.parent;
  if (!t6) return false;
  const r6 = e7.prop.toLowerCase(), o5 = t6.index(e7);
  for (let e8 = 0; e8 < o5; e8++) {
    const o6 = t6.nodes[e8];
    if ("decl" === o6.type && o6.prop.toLowerCase() === r6) return true;
  }
  return false;
}
function hasSupportsAtRuleAncestor(e7, t6) {
  let r6 = e7.parent;
  for (; r6; ) if ("atrule" === r6.type && "supports" === r6.name.toLowerCase()) {
    if (t6.test(r6.params)) return true;
    r6 = r6.parent;
  } else r6 = r6.parent;
  return false;
}

// ../../node_modules/.pnpm/postcss-color-hex-alpha@10.0.0_postcss@8.4.48/node_modules/postcss-color-hex-alpha/dist/index.mjs
var creator5 = (a5) => {
  const o5 = Object.assign({ preserve: false }, a5);
  return { postcssPlugin: "postcss-color-hex-alpha", Declaration(a6) {
    if (!t3.test(a6.value)) return;
    if (hasFallback(a6)) return;
    const { value: l4 } = a6, n3 = e4(l4);
    n3.walk((e7) => {
      if ("function" === e7.type && "url" === e7.value) return false;
      "word" === e7.type && r3.test(e7.value) && hexa2rgba(e7);
    });
    const c4 = n3.toString();
    c4 !== l4 && (a6.cloneBefore({ value: c4 }), o5.preserve || a6.remove());
  } };
};
creator5.postcss = true;
var t3 = /#[0-9a-f]{4}(?:[0-9a-f]{4})?\b/i;
var r3 = /^#[0-9a-f]{4}(?:[0-9a-f]{4})?$/i;
var a2 = 1e5;
var o2 = /[0-9a-f]/gi;
function hexa2rgba(e7) {
  const s5 = e7.value, t6 = `0x${5 === s5.length ? s5.slice(1).replace(o2, "$&$&") : s5.slice(1)}`, [r6, l4, n3, c4] = [parseInt(t6.slice(2, 4), 16), parseInt(t6.slice(4, 6), 16), parseInt(t6.slice(6, 8), 16), Math.round(parseInt(t6.slice(8, 10), 16) / 255 * a2) / a2];
  e7.value = `rgba(${r6},${l4},${n3},${c4})`;
}

// src/index.ts
import cssVariables from "postcss-css-variables";

// ../../node_modules/.pnpm/postcss-custom-properties@14.0.4_postcss@8.4.48/node_modules/postcss-custom-properties/dist/index.mjs
init_esm_shims();

// ../../node_modules/.pnpm/@csstools+cascade-layer-name-parser@2.0.4_@csstools+css-parser-algorithms@3.0.4_@csstools+css_bfltai7up2hnijicrbms7zmmwq/node_modules/@csstools/cascade-layer-name-parser/dist/index.mjs
init_esm_shims();
import { isTokenIdent as e5, TokenType as t4, isTokenDelim as r4, stringify as n2, ParseError as a3, isTokenWhiteSpaceOrComment as s3, tokenize as o3, isTokenWhitespace as l2, isTokenComment as i2 } from "@csstools/css-tokenizer";
import { parseCommaSeparatedListOfComponentValues as c2, isTokenNode as m2, isCommentNode as u2, isWhitespaceNode as p2 } from "@csstools/css-parser-algorithms";
var LayerName = class _LayerName {
  parts;
  constructor(e7) {
    this.parts = e7;
  }
  tokens() {
    return [...this.parts];
  }
  slice(t6, r6) {
    const n3 = [];
    for (let t7 = 0; t7 < this.parts.length; t7++) e5(this.parts[t7]) && n3.push(t7);
    const a5 = n3.slice(t6, r6);
    return new _LayerName(this.parts.slice(a5[0], a5[a5.length - 1] + 1));
  }
  concat(n3) {
    const a5 = [t4.Delim, ".", -1, -1, { value: "." }];
    return new _LayerName([...this.parts.filter((t6) => e5(t6) || r4(t6)), a5, ...n3.parts.filter((t6) => e5(t6) || r4(t6))]);
  }
  segments() {
    return this.parts.filter((t6) => e5(t6)).map((e7) => e7[4].value);
  }
  name() {
    return this.parts.filter((t6) => e5(t6) || r4(t6)).map((e7) => e7[1]).join("");
  }
  equal(e7) {
    const t6 = this.segments(), r6 = e7.segments();
    if (t6.length !== r6.length) return false;
    for (let e8 = 0; e8 < t6.length; e8++) {
      if (t6[e8] !== r6[e8]) return false;
    }
    return true;
  }
  toString() {
    return n2(...this.parts);
  }
  toJSON() {
    return { parts: this.parts, segments: this.segments(), name: this.name() };
  }
};
function addLayerToModel(e7, t6) {
  t6.forEach((t7) => {
    const r6 = t7.segments();
    e: for (let n3 = 0; n3 < r6.length; n3++) {
      const r7 = t7.slice(0, n3 + 1), a5 = r7.segments();
      let s5 = -1, o5 = 0;
      for (let t8 = 0; t8 < e7.length; t8++) {
        const r8 = e7[t8].segments();
        let n4 = 0;
        t: for (let e8 = 0; e8 < r8.length; e8++) {
          const t9 = r8[e8], s6 = a5[e8];
          if (s6 === t9 && e8 + 1 === a5.length) continue e;
          if (s6 !== t9) {
            if (s6 !== t9) break t;
          } else n4++;
        }
        n4 >= o5 && (s5 = t8, o5 = n4);
      }
      -1 === s5 ? e7.push(r7) : e7.splice(s5 + 1, 0, r7);
    }
  });
}
function parseFromTokens(t6, n3) {
  const o5 = c2(t6, { onParseError: n3?.onParseError }), f3 = n3?.onParseError ?? (() => {
  }), h2 = ["6.4.2. Layer Naming and Nesting", "Layer name syntax", "<layer-name> = <ident> [ '.' <ident> ]*"], d3 = t6[0][2], y = t6[t6.length - 1][3], g3 = [];
  for (let t7 = 0; t7 < o5.length; t7++) {
    const n4 = o5[t7];
    for (let e7 = 0; e7 < n4.length; e7++) {
      const t8 = n4[e7];
      if (!m2(t8) && !u2(t8) && !p2(t8)) return f3(new a3(`Invalid cascade layer name. Invalid layer name part "${t8.toString()}"`, d3, y, h2)), [];
    }
    const c4 = n4.flatMap((e7) => e7.tokens());
    let w2 = false, v3 = false, L = null;
    for (let t8 = 0; t8 < c4.length; t8++) {
      const n5 = c4[t8];
      if (!(s3(n5) || e5(n5) || r4(n5) && "." === n5[4].value)) return f3(new a3(`Invalid cascade layer name. Invalid character "${n5[1]}"`, d3, y, h2)), [];
      if (!w2 && r4(n5)) return f3(new a3("Invalid cascade layer name. Layer names can not start with a dot.", d3, y, h2)), [];
      if (w2) {
        if (l2(n5)) {
          v3 = true;
          continue;
        }
        if (v3 && i2(n5)) continue;
        if (v3) return f3(new a3("Invalid cascade layer name. Encountered unexpected whitespace between layer name parts.", d3, y, h2)), [];
        if (e5(L) && e5(n5)) return f3(new a3("Invalid cascade layer name. Layer name parts must be separated by dots.", d3, y, h2)), [];
        if (r4(L) && r4(n5)) return f3(new a3("Invalid cascade layer name. Layer name parts must not be empty.", d3, y, h2)), [];
      }
      e5(n5) && (w2 = true), (e5(n5) || r4(n5)) && (L = n5);
    }
    if (!L) return f3(new a3("Invalid cascade layer name. Empty layer name.", d3, y, h2)), [];
    if (r4(L)) return f3(new a3("Invalid cascade layer name. Layer name must not end with a dot.", d3, y, h2)), [];
    g3.push(new LayerName(c4));
  }
  return g3;
}
function parse(e7, t6) {
  return parseFromTokens(o3({ css: e7 }, { onParseError: t6?.onParseError }), t6);
}

// ../../node_modules/.pnpm/postcss-custom-properties@14.0.4_postcss@8.4.48/node_modules/postcss-custom-properties/dist/index.mjs
import r5 from "postcss-value-parser";
var o4 = parse("csstools-implicit-layer")[0];
function collectCascadeLayerOrder(r6) {
  const n3 = /* @__PURE__ */ new Map(), s5 = /* @__PURE__ */ new Map(), a5 = [];
  r6.walkAtRules((r7) => {
    if ("layer" !== r7.name.toLowerCase()) return;
    {
      let e7 = r7.parent;
      for (; e7; ) {
        if ("atrule" !== e7.type || "layer" !== e7.name.toLowerCase()) {
          if (e7 === r7.root()) break;
          return;
        }
        e7 = e7.parent;
      }
    }
    let i5;
    if (r7.nodes) i5 = normalizeLayerName(r7.params, 1);
    else {
      if (!r7.params.trim()) return;
      i5 = r7.params;
    }
    let l4 = parse(i5);
    if (l4?.length) {
      {
        let e7 = r7.parent;
        for (; e7 && "atrule" === e7.type && "layer" === e7.name.toLowerCase(); ) {
          const t6 = s5.get(e7);
          t6 ? (l4 = l4.map((e8) => t6.concat(e8)), e7 = e7.parent) : e7 = e7.parent;
        }
      }
      if (addLayerToModel(a5, l4), r7.nodes) {
        const e7 = l4[0].concat(o4);
        n3.set(r7, e7), s5.set(r7, l4[0]);
      }
    }
  });
  for (const e7 of n3.values()) addLayerToModel(a5, [e7]);
  const i4 = /* @__PURE__ */ new WeakMap();
  for (const [e7, t6] of n3) i4.set(e7, a5.findIndex((e8) => t6.equal(e8)));
  return i4;
}
function normalizeLayerName(e7, t6) {
  return e7.trim() ? e7 : "csstools-anon-layer--" + t6++;
}
var s4 = /(?:!\s*)?postcss-custom-properties:\s*off\b/i;
var a4 = /* @__PURE__ */ new WeakMap();
function isBlockIgnored(e7) {
  if (!e7 || !e7.nodes) return false;
  if (a4.has(e7)) return a4.get(e7);
  const t6 = e7.some((e8) => isIgnoreComment(e8, s4));
  return a4.set(e7, t6), t6;
}
var i3 = /(?:!\s*)?postcss-custom-properties:\s*ignore\s+next\b/i;
function isDeclarationIgnored(e7) {
  return !!e7 && (!!isBlockIgnored(e7.parent) || isIgnoreComment(e7.prev(), i3));
}
function isIgnoreComment(e7, t6) {
  return !!e7 && "comment" === e7.type && t6.test(e7.text);
}
var l3 = /* @__PURE__ */ new Set(["layer"]);
function isProcessableRule(e7) {
  let t6 = e7.parent;
  for (; t6; ) {
    if ("atrule" === t6.type && !l3.has(t6.name.toLowerCase())) return false;
    t6 = t6.parent;
  }
  return true;
}
var c3 = /^html$/i;
var u3 = /^:where\(html\)$/i;
var p3 = /^:root$/i;
var f2 = /^:where\(:root\)$/i;
var d2 = /(html|:root)/i;
var m3 = /^var$/i;
function isVarFunction(e7) {
  return "function" === e7.type && m3.test(e7.value) && e7.nodes?.length > 0;
}
var v2 = /\bvar\(/i;
function parseOrCached(e7, t6) {
  let n3 = t6.get(e7);
  return n3 || (n3 = r5(e7), t6.set(e7, n3), n3);
}
function toposort(e7, t6) {
  let r6 = e7.length;
  const n3 = new Array(r6), o5 = {};
  let s5 = r6;
  const a5 = makeOutgoingEdges(t6), i4 = makeNodesHash(e7);
  for (; s5--; ) o5[s5] || visit(e7[s5], s5, /* @__PURE__ */ new Set());
  return n3;
  function visit(e8, t7, s6) {
    if (s6.has(e8)) {
      let t8;
      try {
        t8 = ", node was:" + JSON.stringify(e8);
      } catch {
        t8 = "";
      }
      throw new Error("Cyclic dependency" + t8);
    }
    if (!i4.has(e8)) throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(e8));
    if (o5[t7]) return;
    o5[t7] = true;
    const l4 = Array.from(a5.get(e8) || /* @__PURE__ */ new Set());
    if (t7 = l4.length) {
      s6.add(e8);
      do {
        const e9 = l4[--t7];
        visit(e9, i4.get(e9), s6);
      } while (t7);
      s6.delete(e8);
    }
    n3[--r6] = e8;
  }
}
function removeCyclicReferences(e7, t6) {
  const r6 = /* @__PURE__ */ new Set();
  for (; e7.size > 0; ) {
    const n3 = findCyclicNode(Array.from(e7.keys()), t6);
    if (!n3) return r6;
    e7.delete(n3), r6.add(n3), t6 = t6.filter((e8) => -1 === e8.indexOf(n3));
  }
  return r6;
}
function findCyclicNode(e7, t6) {
  let r6 = e7.length;
  const n3 = new Array(r6), o5 = {};
  let s5 = r6;
  const a5 = makeOutgoingEdges(t6), i4 = makeNodesHash(e7);
  for (; s5--; ) if (!o5[s5]) {
    const t7 = visit(e7[s5], s5, /* @__PURE__ */ new Set());
    if (!t7) continue;
    return t7;
  }
  function visit(e8, t7, s6) {
    if (s6.has(e8)) return e8;
    if (!i4.has(e8)) return;
    if (o5[t7]) return;
    o5[t7] = true;
    const l4 = Array.from(a5.get(e8) || /* @__PURE__ */ new Set());
    if (t7 = l4.length) {
      s6.add(e8);
      do {
        const e9 = l4[--t7], r7 = visit(e9, i4.get(e9), s6);
        if (r7) return r7;
      } while (t7);
      s6.delete(e8);
    }
    n3[--r6] = e8;
  }
}
function makeOutgoingEdges(e7) {
  const t6 = /* @__PURE__ */ new Map();
  for (let r6 = 0, n3 = e7.length; r6 < n3; r6++) {
    const n4 = e7[r6];
    t6.has(n4[0]) || t6.set(n4[0], /* @__PURE__ */ new Set()), t6.has(n4[1]) || t6.set(n4[1], /* @__PURE__ */ new Set()), t6.get(n4[0]).add(n4[1]);
  }
  return t6;
}
function makeNodesHash(e7) {
  const t6 = /* @__PURE__ */ new Map();
  for (let r6 = 0, n3 = e7.length; r6 < n3; r6++) t6.set(e7[r6], r6);
  return t6;
}
function parseVarFunction(e7) {
  let t6, r6, n3 = false;
  for (const o5 of e7.nodes) if (t6 || "word" !== o5.type) if (!t6 || n3 || "div" !== o5.type || "," !== o5.value) {
    if (n3 && Array.isArray(r6)) r6.push(o5);
    else if ("space" !== o5.type && ("div" !== o5.type || "" !== o5.value.trim())) return;
  } else n3 = true, r6 = [];
  else t6 = o5;
  if (t6) return { name: t6, fallback: r6 };
}
function transformValueAST(e7, t6) {
  return e7.nodes?.length ? (walk(e7.nodes, (e8, n3, o5) => {
    if (!isVarFunction(e8)) return;
    const s5 = parseVarFunction(e8);
    if (!s5) return;
    let a5 = false;
    s5.fallback && r5.walk(s5.fallback, (e9) => {
      if (!isVarFunction(e9)) return;
      const r6 = parseVarFunction(e9);
      return r6 ? r6.fallback || t6.has(r6.name.value) ? void 0 : (a5 = true, false) : void 0;
    });
    let i4 = t6.get(s5.name.value)?.nodes;
    i4 || !s5.fallback || a5 || (i4 = s5.fallback), void 0 !== i4 && (i4.length ? o5.splice(n3, 1, ...i4) : o5.splice(n3, 1, { type: "div", value: " ", before: "", after: "", sourceIndex: e8.sourceIndex, sourceEndIndex: e8.sourceEndIndex }));
  }), r5.stringify(e7.nodes)) : "";
}
function walk(e7, t6) {
  let r6, n3, o5;
  for (r6 = 0, n3 = e7.length; r6 < n3; r6 += 1) o5 = e7[r6], "function" === o5.type && Array.isArray(o5.nodes) && walk(o5.nodes, t6), t6(o5, r6, e7), n3 = e7.length;
}
var w = /^initial$/i;
function isInitial(e7) {
  const t6 = e7.nodes.filter((e8) => "comment" !== e8.type && "space" !== e8.type);
  return 1 === t6.length && ("word" === t6[0].type && w.test(t6[0].value));
}
function buildCustomPropertiesMap(e7, t6, n3) {
  if (!e7.size) return t6;
  const o5 = new Map(t6);
  {
    const s5 = [];
    for (const [a5, i4] of e7.entries()) {
      const l4 = parseOrCached(i4, n3);
      let c4 = false;
      r5.walk(l4.nodes, (r6) => {
        if (!isVarFunction(r6)) return;
        const n4 = parseVarFunction(r6);
        n4 && (n4.fallback || e7.has(n4.name.value) || t6.has(n4.name.value) ? s5.push([n4.name.value, a5]) : c4 = true);
      }), c4 || o5.set(a5, l4);
    }
    removeCyclicReferences(o5, s5);
  }
  {
    const e8 = [];
    for (const [t8, n4] of o5.entries()) r5.walk(n4.nodes, (r6) => {
      if (!isVarFunction(r6)) return;
      const n5 = parseVarFunction(r6);
      n5 && (n5.fallback || o5.has(n5.name.value) ? e8.push([n5.name.value, t8]) : o5.delete(t8));
    });
    for (let t8 = 0; t8 < e8.length; t8++) {
      const [r6, n4] = e8[t8];
      o5.has(r6) && o5.has(n4) || e8.splice(t8--, 1);
    }
    const t7 = toposort(Array.from(o5.keys()), e8);
    for (const e9 of t7) {
      const t8 = o5.get(e9);
      if (!t8) continue;
      const r6 = parseOrCached(transformValueAST(t8, o5), n3);
      o5.set(e9, r6);
    }
  }
  for (const [e8, t7] of o5.entries()) isInitial(t7) && o5.delete(e8);
  return o5;
}
function getCustomPropertiesFromRoot(e7, t6) {
  const r6 = /* @__PURE__ */ new Map(), n3 = /* @__PURE__ */ new Map(), o5 = collectCascadeLayerOrder(e7);
  return e7.walkRules((e8) => {
    d2.test(e8.selector) && e8.nodes?.length && isProcessableRule(e8) && (isBlockIgnored(e8) || e8.selectors.forEach((t7) => {
      let s5 = -1;
      if (u3.test(t7) || f2.test(t7)) s5 = 0;
      else if (c3.test(t7)) s5 = 1;
      else {
        if (!p3.test(t7)) return;
        s5 = 2;
      }
      const a5 = (l4 = o5, ((i4 = e8).parent && "atrule" === i4.parent.type && "layer" === i4.parent.name.toLowerCase() ? l4.has(i4.parent) ? l4.get(i4.parent) + 1 : 0 : 1e7) + 10 + s5);
      var i4, l4;
      e8.each((e9) => {
        if ("decl" !== e9.type) return;
        if (!e9.variable || isDeclarationIgnored(e9)) return;
        if ("initial" === e9.value.toLowerCase().trim()) return;
        const t8 = n3.get(e9.prop) ?? -1;
        a5 >= t8 && (n3.set(e9.prop, a5), r6.set(e9.prop, e9.value));
      });
    }));
  }), buildCustomPropertiesMap(r6, /* @__PURE__ */ new Map(), t6);
}
function getCustomPropertiesFromSiblings(e7, t6, r6) {
  if (!e7.parent) return t6;
  const n3 = /* @__PURE__ */ new Map();
  return e7.parent.each((t7) => {
    "decl" === t7.type && t7.variable && e7 !== t7 && (isDeclarationIgnored(t7) || n3.set(t7.prop, t7.value));
  }), n3.size ? buildCustomPropertiesMap(n3, t6, r6) : t6;
}
function transformProperties(e7, t6, n3) {
  if (isTransformableDecl(e7) && !isDeclarationIgnored(e7)) {
    const o5 = e7.value, s5 = transformValueAST(r5(o5), t6);
    if (s5 === o5) return;
    if (parentHasExactFallback(e7, s5)) return void (n3.preserve || e7.remove());
    if (n3.preserve) {
      const t7 = e7.cloneBefore({ value: s5 });
      hasTrailingComment(t7) && t7.raws?.value && (t7.raws.value.value = t7.value.replace(g2, "$1"), t7.raws.value.raw = t7.raws.value.value + t7.raws.value.raw.replace(g2, "$2"));
    } else e7.value = s5, hasTrailingComment(e7) && e7.raws?.value && (e7.raws.value.value = e7.value.replace(g2, "$1"), e7.raws.value.raw = e7.raws.value.value + e7.raws.value.raw.replace(g2, "$2"));
  }
}
var isTransformableDecl = (e7) => !e7.variable && e7.value.includes("--") && e7.value.toLowerCase().includes("var(");
var hasTrailingComment = (e7) => "value" in Object(Object(e7.raws).value) && "raw" in (e7.raws?.value ?? {}) && g2.test(e7.raws.value?.raw ?? "");
var g2 = /^([\W\w]+)(\s*\/\*[\W\w]+?\*\/)$/;
function parentHasExactFallback(e7, t6) {
  if (!e7 || !e7.parent) return false;
  let r6 = false;
  const n3 = e7.parent.index(e7);
  return e7.parent.each((o5, s5) => o5 !== e7 && (!(s5 >= n3) && void ("decl" === o5.type && o5.prop.toLowerCase() === e7.prop.toLowerCase() && o5.value === t6 && (r6 = true)))), r6;
}
var h = /\bvar\(|\(top: var\(--f\)/i;
var creator6 = (e7) => {
  const t6 = !("preserve" in Object(e7)) || Boolean(e7?.preserve);
  if ("importFrom" in Object(e7)) throw new Error('[postcss-custom-properties] "importFrom" is no longer supported');
  if ("exportTo" in Object(e7)) throw new Error('[postcss-custom-properties] "exportTo" is no longer supported');
  return { postcssPlugin: "postcss-custom-properties", prepare() {
    let e8 = /* @__PURE__ */ new Map();
    const r6 = /* @__PURE__ */ new WeakMap(), o5 = /* @__PURE__ */ new Map();
    return { postcssPlugin: "postcss-custom-properties", Once(t7) {
      e8 = getCustomPropertiesFromRoot(t7, o5);
    }, Declaration(s5) {
      if (!v2.test(s5.value)) return;
      if (hasSupportsAtRuleAncestor(s5, h)) return;
      let a5 = e8;
      t6 && s5.parent && (a5 = r6.get(s5.parent) ?? getCustomPropertiesFromSiblings(s5, e8, o5), r6.set(s5.parent, a5)), transformProperties(s5, a5, { preserve: t6 });
    } };
  } };
};
creator6.postcss = true;

// src/index.ts
import postcssImport from "postcss-import";
import postcssLightningcss from "postcss-lightningcss";
import postcssNested from "postcss-nested";

// ../../node_modules/.pnpm/postcss-place@10.0.0_postcss@8.4.48/node_modules/postcss-place/dist/index.mjs
init_esm_shims();
import e6 from "postcss-value-parser";
function onCSSDeclaration(o5, r6, s5) {
  const n3 = o5.prop.match(t5)?.[1].toLowerCase();
  if (!n3) return;
  let a5;
  try {
    a5 = e6(o5.value);
  } catch {
    o5.warn(r6, `Failed to parse value '${o5.value}'. Leaving the original value intact.`);
  }
  if (void 0 === a5) return;
  let i4 = [];
  i4 = a5.nodes.length ? a5.nodes.filter((e7) => "word" === e7.type || "function" === e7.type).map((t6) => e6.stringify(t6)) : [e6.stringify(a5.nodes)], o5.cloneBefore({ prop: `align-${n3}`, value: i4[0] }), o5.cloneBefore({ prop: `justify-${n3}`, value: i4[1] || i4[0] }), s5.preserve || o5.remove();
}
var t5 = /^place-(content|items|self)/i;
var creator7 = (e7) => {
  const o5 = Object.assign({ preserve: true }, e7);
  return { postcssPlugin: "postcss-place", Declaration(e8, { result: r6 }) {
    t5.test(e8.prop) && onCSSDeclaration(e8, r6, o5);
  } };
};
creator7.postcss = true;

// src/index.ts
var import_postcss_pxtorem = __toESM(require_postcss_pxtorem(), 1);
var import_postcss_zindex = __toESM(require_src(), 1);
import postcssReporter from "postcss-reporter";
import postcssSortMediaQueries from "postcss-sort-media-queries";
function customVariablesMixin(customVariables) {
  switch (customVariables) {
    case "cssVariables": {
      return cssVariables({ preserve: true });
    }
    case "customProperties": {
      return creator6({ preserve: true });
    }
    default: {
      throw new Error(`customVariables must be 'cssVariables' or 'customProperties'`);
    }
  }
}
function browserslistMixin(browserslist) {
  switch (browserslist) {
    case "modern": {
      return ["defaults and fully supports es6-module, not dead"];
    }
    case "legacy": {
      return [">0.07%, IE 11, Chrome 50, Firefox 36, Safari 10, iOS 10, ChromeAndroid 100, dead"];
    }
    default: {
      throw new Error(`browserslist must be 'modern' or 'legacy'`);
    }
  }
}
function nanoMixin(hardParser) {
  switch (hardParser?.name) {
    case "declaration": {
      return cssDeclarationSorter({ order: "smacss" });
    }
    case "lightning": {
      return postcssLightningcss(
        {
          browsers: browserslistMixin(hardParser.browserslist || "modern"),
          lightningcssOptions: {
            drafts: { nesting: false },
            minify: Boolean(hardParser.minify)
          }
        }
      );
    }
    default: {
      throw new Error("hardParser must be 'declaration' or 'lightning'");
    }
  }
}
var state = (property, callback) => {
  return property === void 0 || property === false ? () => {
  } : callback;
};
var classicPostcss = ({
  /**
   * @deprecated The `kickCssnano` option is deprecated. Remove it.
   */
  kickCssnano = false,
  rebaseUrl = true,
  isDevelopmentMode = false,
  speedTest = false,
  replaceUnset = false,
  hexToRgba = false,
  customVariables = "customProperties",
  placeProperty = false,
  globalCssData = false,
  hardParser = { name: "declaration" },
  imports = true,
  nested = true,
  zindex = true,
  pixelToRem = true,
  reporter = true
}) => {
  let plugins = [];
  const production = [postcssSortMediaQueries({ sort: "desktop-first" })];
  const development = [
    state(speedTest, creator3()),
    nanoMixin(hardParser),
    state(imports, postcssImport()),
    state(nested, postcssNested()),
    Array.isArray(globalCssData) ? state(globalCssData, creator({ files: globalCssData })) : () => {
    },
    state(replaceUnset, creator4({ preserve: true })),
    state(hexToRgba, creator5({ preserve: false })),
    state(placeProperty, creator7({ preserve: false })),
    state(rebaseUrl, creator2()),
    state(zindex, (0, import_postcss_zindex.default)()),
    state(pixelToRem, (0, import_postcss_pxtorem.default)({
      mediaQuery: false,
      minPixelValue: 0,
      propList: [
        "*",
        "!line-height",
        "!font-weight",
        "!border",
        "!border-*",
        "!*-shadow"
      ],
      replace: true,
      rootValue: 16,
      unitPrecision: 2
    })),
    customVariablesMixin(customVariables),
    state(reporter, postcssReporter())
  ];
  plugins = isDevelopmentMode ? development : [...development, ...production];
  return { plugins };
};
var src_default = classicPostcss;
export {
  classicPostcss,
  src_default as default
};
//# sourceMappingURL=index.esm.js.map