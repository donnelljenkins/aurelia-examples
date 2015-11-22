System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties",
      "runtime"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "app-build": [
      "address",
      "address.html!github:systemjs/plugin-text@0.0.2",
      "app",
      "app.html!github:systemjs/plugin-text@0.0.2",
      "demo-tabs",
      "demo-tabs.html!github:systemjs/plugin-text@0.0.2",
      "filterer",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "main",
      "navigation-menu.html!github:systemjs/plugin-text@0.0.2",
      "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "npm:aurelia-binding@1.0.0-beta.1.0.1/aurelia-binding",
      "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "npm:aurelia-dependency-injection@1.0.0-beta.1/aurelia-dependency-injection",
      "npm:aurelia-framework@1.0.0-beta.1.0.1",
      "npm:aurelia-framework@1.0.0-beta.1.0.1/aurelia-framework",
      "npm:aurelia-loader@1.0.0-beta.1",
      "npm:aurelia-loader@1.0.0-beta.1/aurelia-loader",
      "npm:aurelia-logging@1.0.0-beta.1",
      "npm:aurelia-logging@1.0.0-beta.1/aurelia-logging",
      "npm:aurelia-metadata@1.0.0-beta.1",
      "npm:aurelia-metadata@1.0.0-beta.1/aurelia-metadata",
      "npm:aurelia-pal@1.0.0-beta.1",
      "npm:aurelia-pal@1.0.0-beta.1/aurelia-pal",
      "npm:aurelia-path@1.0.0-beta.1",
      "npm:aurelia-path@1.0.0-beta.1/aurelia-path",
      "npm:aurelia-task-queue@1.0.0-beta.1",
      "npm:aurelia-task-queue@1.0.0-beta.1/aurelia-task-queue",
      "npm:aurelia-templating@1.0.0-beta.1",
      "npm:aurelia-templating@1.0.0-beta.1/aurelia-templating",
      "npm:aurelia-validation@0.6.0",
      "npm:aurelia-validation@0.6.0/debouncer",
      "npm:aurelia-validation@0.6.0/decorators",
      "npm:aurelia-validation@0.6.0/index",
      "npm:aurelia-validation@0.6.0/path-observer",
      "npm:aurelia-validation@0.6.0/strategies/twbootstrap-view-strategy",
      "npm:aurelia-validation@0.6.0/utilities",
      "npm:aurelia-validation@0.6.0/validate-custom-attribute",
      "npm:aurelia-validation@0.6.0/validation",
      "npm:aurelia-validation@0.6.0/validation-config",
      "npm:aurelia-validation@0.6.0/validation-group",
      "npm:aurelia-validation@0.6.0/validation-group-builder",
      "npm:aurelia-validation@0.6.0/validation-locale",
      "npm:aurelia-validation@0.6.0/validation-property",
      "npm:aurelia-validation@0.6.0/validation-result",
      "npm:aurelia-validation@0.6.0/validation-rules",
      "npm:aurelia-validation@0.6.0/validation-rules-collection",
      "npm:aurelia-validation@0.6.0/validation-view-strategy",
      "npm:core-js@0.9.18",
      "npm:core-js@0.9.18/client/shim.min",
      "npm:core-js@1.2.6",
      "npm:core-js@1.2.6/index",
      "npm:core-js@1.2.6/modules/$",
      "npm:core-js@1.2.6/modules/$.a-function",
      "npm:core-js@1.2.6/modules/$.add-to-unscopables",
      "npm:core-js@1.2.6/modules/$.an-object",
      "npm:core-js@1.2.6/modules/$.array-copy-within",
      "npm:core-js@1.2.6/modules/$.array-fill",
      "npm:core-js@1.2.6/modules/$.array-includes",
      "npm:core-js@1.2.6/modules/$.array-methods",
      "npm:core-js@1.2.6/modules/$.array-species-create",
      "npm:core-js@1.2.6/modules/$.classof",
      "npm:core-js@1.2.6/modules/$.cof",
      "npm:core-js@1.2.6/modules/$.collection",
      "npm:core-js@1.2.6/modules/$.collection-strong",
      "npm:core-js@1.2.6/modules/$.collection-to-json",
      "npm:core-js@1.2.6/modules/$.collection-weak",
      "npm:core-js@1.2.6/modules/$.core",
      "npm:core-js@1.2.6/modules/$.ctx",
      "npm:core-js@1.2.6/modules/$.defined",
      "npm:core-js@1.2.6/modules/$.descriptors",
      "npm:core-js@1.2.6/modules/$.dom-create",
      "npm:core-js@1.2.6/modules/$.enum-keys",
      "npm:core-js@1.2.6/modules/$.export",
      "npm:core-js@1.2.6/modules/$.fails",
      "npm:core-js@1.2.6/modules/$.fails-is-regexp",
      "npm:core-js@1.2.6/modules/$.fix-re-wks",
      "npm:core-js@1.2.6/modules/$.flags",
      "npm:core-js@1.2.6/modules/$.for-of",
      "npm:core-js@1.2.6/modules/$.get-names",
      "npm:core-js@1.2.6/modules/$.global",
      "npm:core-js@1.2.6/modules/$.has",
      "npm:core-js@1.2.6/modules/$.hide",
      "npm:core-js@1.2.6/modules/$.html",
      "npm:core-js@1.2.6/modules/$.invoke",
      "npm:core-js@1.2.6/modules/$.iobject",
      "npm:core-js@1.2.6/modules/$.is-array",
      "npm:core-js@1.2.6/modules/$.is-array-iter",
      "npm:core-js@1.2.6/modules/$.is-integer",
      "npm:core-js@1.2.6/modules/$.is-object",
      "npm:core-js@1.2.6/modules/$.is-regexp",
      "npm:core-js@1.2.6/modules/$.iter-call",
      "npm:core-js@1.2.6/modules/$.iter-create",
      "npm:core-js@1.2.6/modules/$.iter-define",
      "npm:core-js@1.2.6/modules/$.iter-detect",
      "npm:core-js@1.2.6/modules/$.iter-step",
      "npm:core-js@1.2.6/modules/$.iterators",
      "npm:core-js@1.2.6/modules/$.keyof",
      "npm:core-js@1.2.6/modules/$.library",
      "npm:core-js@1.2.6/modules/$.math-expm1",
      "npm:core-js@1.2.6/modules/$.math-log1p",
      "npm:core-js@1.2.6/modules/$.math-sign",
      "npm:core-js@1.2.6/modules/$.microtask",
      "npm:core-js@1.2.6/modules/$.object-assign",
      "npm:core-js@1.2.6/modules/$.object-define",
      "npm:core-js@1.2.6/modules/$.object-sap",
      "npm:core-js@1.2.6/modules/$.object-to-array",
      "npm:core-js@1.2.6/modules/$.own-keys",
      "npm:core-js@1.2.6/modules/$.partial",
      "npm:core-js@1.2.6/modules/$.path",
      "npm:core-js@1.2.6/modules/$.property-desc",
      "npm:core-js@1.2.6/modules/$.redefine",
      "npm:core-js@1.2.6/modules/$.redefine-all",
      "npm:core-js@1.2.6/modules/$.replacer",
      "npm:core-js@1.2.6/modules/$.same-value",
      "npm:core-js@1.2.6/modules/$.set-proto",
      "npm:core-js@1.2.6/modules/$.set-species",
      "npm:core-js@1.2.6/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/modules/$.shared",
      "npm:core-js@1.2.6/modules/$.species-constructor",
      "npm:core-js@1.2.6/modules/$.strict-new",
      "npm:core-js@1.2.6/modules/$.string-at",
      "npm:core-js@1.2.6/modules/$.string-context",
      "npm:core-js@1.2.6/modules/$.string-pad",
      "npm:core-js@1.2.6/modules/$.string-repeat",
      "npm:core-js@1.2.6/modules/$.string-trim",
      "npm:core-js@1.2.6/modules/$.task",
      "npm:core-js@1.2.6/modules/$.to-index",
      "npm:core-js@1.2.6/modules/$.to-integer",
      "npm:core-js@1.2.6/modules/$.to-iobject",
      "npm:core-js@1.2.6/modules/$.to-length",
      "npm:core-js@1.2.6/modules/$.to-object",
      "npm:core-js@1.2.6/modules/$.to-primitive",
      "npm:core-js@1.2.6/modules/$.uid",
      "npm:core-js@1.2.6/modules/$.wks",
      "npm:core-js@1.2.6/modules/core.delay",
      "npm:core-js@1.2.6/modules/core.dict",
      "npm:core-js@1.2.6/modules/core.function.part",
      "npm:core-js@1.2.6/modules/core.get-iterator",
      "npm:core-js@1.2.6/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/modules/core.is-iterable",
      "npm:core-js@1.2.6/modules/core.log",
      "npm:core-js@1.2.6/modules/core.number.iterator",
      "npm:core-js@1.2.6/modules/core.object.classof",
      "npm:core-js@1.2.6/modules/core.object.define",
      "npm:core-js@1.2.6/modules/core.object.is-object",
      "npm:core-js@1.2.6/modules/core.object.make",
      "npm:core-js@1.2.6/modules/core.string.escape-html",
      "npm:core-js@1.2.6/modules/core.string.unescape-html",
      "npm:core-js@1.2.6/modules/es5",
      "npm:core-js@1.2.6/modules/es6.array.copy-within",
      "npm:core-js@1.2.6/modules/es6.array.fill",
      "npm:core-js@1.2.6/modules/es6.array.find",
      "npm:core-js@1.2.6/modules/es6.array.find-index",
      "npm:core-js@1.2.6/modules/es6.array.from",
      "npm:core-js@1.2.6/modules/es6.array.iterator",
      "npm:core-js@1.2.6/modules/es6.array.of",
      "npm:core-js@1.2.6/modules/es6.array.species",
      "npm:core-js@1.2.6/modules/es6.function.has-instance",
      "npm:core-js@1.2.6/modules/es6.function.name",
      "npm:core-js@1.2.6/modules/es6.map",
      "npm:core-js@1.2.6/modules/es6.math.acosh",
      "npm:core-js@1.2.6/modules/es6.math.asinh",
      "npm:core-js@1.2.6/modules/es6.math.atanh",
      "npm:core-js@1.2.6/modules/es6.math.cbrt",
      "npm:core-js@1.2.6/modules/es6.math.clz32",
      "npm:core-js@1.2.6/modules/es6.math.cosh",
      "npm:core-js@1.2.6/modules/es6.math.expm1",
      "npm:core-js@1.2.6/modules/es6.math.fround",
      "npm:core-js@1.2.6/modules/es6.math.hypot",
      "npm:core-js@1.2.6/modules/es6.math.imul",
      "npm:core-js@1.2.6/modules/es6.math.log10",
      "npm:core-js@1.2.6/modules/es6.math.log1p",
      "npm:core-js@1.2.6/modules/es6.math.log2",
      "npm:core-js@1.2.6/modules/es6.math.sign",
      "npm:core-js@1.2.6/modules/es6.math.sinh",
      "npm:core-js@1.2.6/modules/es6.math.tanh",
      "npm:core-js@1.2.6/modules/es6.math.trunc",
      "npm:core-js@1.2.6/modules/es6.number.constructor",
      "npm:core-js@1.2.6/modules/es6.number.epsilon",
      "npm:core-js@1.2.6/modules/es6.number.is-finite",
      "npm:core-js@1.2.6/modules/es6.number.is-integer",
      "npm:core-js@1.2.6/modules/es6.number.is-nan",
      "npm:core-js@1.2.6/modules/es6.number.is-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.max-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.min-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.parse-float",
      "npm:core-js@1.2.6/modules/es6.number.parse-int",
      "npm:core-js@1.2.6/modules/es6.object.assign",
      "npm:core-js@1.2.6/modules/es6.object.freeze",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-names",
      "npm:core-js@1.2.6/modules/es6.object.get-prototype-of",
      "npm:core-js@1.2.6/modules/es6.object.is",
      "npm:core-js@1.2.6/modules/es6.object.is-extensible",
      "npm:core-js@1.2.6/modules/es6.object.is-frozen",
      "npm:core-js@1.2.6/modules/es6.object.is-sealed",
      "npm:core-js@1.2.6/modules/es6.object.keys",
      "npm:core-js@1.2.6/modules/es6.object.prevent-extensions",
      "npm:core-js@1.2.6/modules/es6.object.seal",
      "npm:core-js@1.2.6/modules/es6.object.set-prototype-of",
      "npm:core-js@1.2.6/modules/es6.object.to-string",
      "npm:core-js@1.2.6/modules/es6.promise",
      "npm:core-js@1.2.6/modules/es6.reflect.apply",
      "npm:core-js@1.2.6/modules/es6.reflect.construct",
      "npm:core-js@1.2.6/modules/es6.reflect.define-property",
      "npm:core-js@1.2.6/modules/es6.reflect.delete-property",
      "npm:core-js@1.2.6/modules/es6.reflect.enumerate",
      "npm:core-js@1.2.6/modules/es6.reflect.get",
      "npm:core-js@1.2.6/modules/es6.reflect.get-own-property-descriptor",
      "npm:core-js@1.2.6/modules/es6.reflect.get-prototype-of",
      "npm:core-js@1.2.6/modules/es6.reflect.has",
      "npm:core-js@1.2.6/modules/es6.reflect.is-extensible",
      "npm:core-js@1.2.6/modules/es6.reflect.own-keys",
      "npm:core-js@1.2.6/modules/es6.reflect.prevent-extensions",
      "npm:core-js@1.2.6/modules/es6.reflect.set",
      "npm:core-js@1.2.6/modules/es6.reflect.set-prototype-of",
      "npm:core-js@1.2.6/modules/es6.regexp.constructor",
      "npm:core-js@1.2.6/modules/es6.regexp.flags",
      "npm:core-js@1.2.6/modules/es6.regexp.match",
      "npm:core-js@1.2.6/modules/es6.regexp.replace",
      "npm:core-js@1.2.6/modules/es6.regexp.search",
      "npm:core-js@1.2.6/modules/es6.regexp.split",
      "npm:core-js@1.2.6/modules/es6.set",
      "npm:core-js@1.2.6/modules/es6.string.code-point-at",
      "npm:core-js@1.2.6/modules/es6.string.ends-with",
      "npm:core-js@1.2.6/modules/es6.string.from-code-point",
      "npm:core-js@1.2.6/modules/es6.string.includes",
      "npm:core-js@1.2.6/modules/es6.string.iterator",
      "npm:core-js@1.2.6/modules/es6.string.raw",
      "npm:core-js@1.2.6/modules/es6.string.repeat",
      "npm:core-js@1.2.6/modules/es6.string.starts-with",
      "npm:core-js@1.2.6/modules/es6.string.trim",
      "npm:core-js@1.2.6/modules/es6.symbol",
      "npm:core-js@1.2.6/modules/es6.weak-map",
      "npm:core-js@1.2.6/modules/es6.weak-set",
      "npm:core-js@1.2.6/modules/es7.array.includes",
      "npm:core-js@1.2.6/modules/es7.map.to-json",
      "npm:core-js@1.2.6/modules/es7.object.entries",
      "npm:core-js@1.2.6/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@1.2.6/modules/es7.object.values",
      "npm:core-js@1.2.6/modules/es7.regexp.escape",
      "npm:core-js@1.2.6/modules/es7.set.to-json",
      "npm:core-js@1.2.6/modules/es7.string.at",
      "npm:core-js@1.2.6/modules/es7.string.pad-left",
      "npm:core-js@1.2.6/modules/es7.string.pad-right",
      "npm:core-js@1.2.6/modules/es7.string.trim-left",
      "npm:core-js@1.2.6/modules/es7.string.trim-right",
      "npm:core-js@1.2.6/modules/js.array.statics",
      "npm:core-js@1.2.6/modules/web.dom.iterable",
      "npm:core-js@1.2.6/modules/web.immediate",
      "npm:core-js@1.2.6/modules/web.timers",
      "npm:core-js@1.2.6/shim",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "phone-number.html!github:systemjs/plugin-text@0.0.2"
    ],
    "system": [
      "github:Semantic-Org/Semantic-UI@2.1.6",
      "github:Semantic-Org/Semantic-UI@2.1.6/semantic",
      "github:Semantic-Org/Semantic-UI@2.1.6/semantic.css!github:systemjs/plugin-css@0.1.19",
      "github:components/jquery@2.1.4",
      "github:components/jquery@2.1.4/jquery",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "github:twbs/bootstrap@3.3.5",
      "github:twbs/bootstrap@3.3.5/js/bootstrap",
      "npm:lodash@3.10.1",
      "npm:lodash@3.10.1/index",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser"
    ],
    "aurelia": [
      "github:donnelljenkins/aurelia-datagrid@0.1.2",
      "github:donnelljenkins/aurelia-datagrid@0.1.2/aurelia-grid",
      "github:donnelljenkins/aurelia-datagrid@0.1.2/grid/grid-configuration",
      "github:donnelljenkins/aurelia-semantic-datatable@master",
      "github:donnelljenkins/aurelia-semantic-datatable@master/aurelia-semantic-datatable",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "npm:aurelia-binding@1.0.0-beta.1.0.1/aurelia-binding",
      "npm:aurelia-bootstrapper@1.0.0-beta.1",
      "npm:aurelia-bootstrapper@1.0.0-beta.1/aurelia-bootstrapper",
      "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "npm:aurelia-dependency-injection@1.0.0-beta.1/aurelia-dependency-injection",
      "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "npm:aurelia-event-aggregator@1.0.0-beta.1/aurelia-event-aggregator",
      "npm:aurelia-history-browser@1.0.0-beta.1",
      "npm:aurelia-history-browser@1.0.0-beta.1/aurelia-history-browser",
      "npm:aurelia-history@1.0.0-beta.1",
      "npm:aurelia-history@1.0.0-beta.1/aurelia-history",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.1/aurelia-loader-default",
      "npm:aurelia-loader@1.0.0-beta.1",
      "npm:aurelia-loader@1.0.0-beta.1/aurelia-loader",
      "npm:aurelia-logging-console@1.0.0-beta.1",
      "npm:aurelia-logging-console@1.0.0-beta.1/aurelia-logging-console",
      "npm:aurelia-logging@1.0.0-beta.1",
      "npm:aurelia-logging@1.0.0-beta.1/aurelia-logging",
      "npm:aurelia-metadata@1.0.0-beta.1",
      "npm:aurelia-metadata@1.0.0-beta.1/aurelia-metadata",
      "npm:aurelia-pal-browser@1.0.0-beta.1",
      "npm:aurelia-pal-browser@1.0.0-beta.1/aurelia-pal-browser",
      "npm:aurelia-pal@1.0.0-beta.1",
      "npm:aurelia-pal@1.0.0-beta.1/aurelia-pal",
      "npm:aurelia-path@1.0.0-beta.1",
      "npm:aurelia-path@1.0.0-beta.1/aurelia-path",
      "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "npm:aurelia-route-recognizer@1.0.0-beta.1/aurelia-route-recognizer",
      "npm:aurelia-router@1.0.0-beta.1",
      "npm:aurelia-router@1.0.0-beta.1/aurelia-router",
      "npm:aurelia-task-queue@1.0.0-beta.1",
      "npm:aurelia-task-queue@1.0.0-beta.1/aurelia-task-queue",
      "npm:aurelia-templating-binding@1.0.0-beta.1",
      "npm:aurelia-templating-binding@1.0.0-beta.1/aurelia-templating-binding",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/array-collection-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/aurelia-templating-resources",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/collection-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/collection-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/compile-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/compose",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/css-resource",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/dynamic-element",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/focus",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/if",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/map-collection-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/number-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/repeat",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/replaceable",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/show",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/view-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/with",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.1",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.1/aurelia-templating-router",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.1/route-href",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.1/route-loader",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.1/router-view",
      "npm:aurelia-templating@1.0.0-beta.1",
      "npm:aurelia-templating@1.0.0-beta.1/aurelia-templating",
      "npm:aurelia-validation@0.6.0",
      "npm:aurelia-validation@0.6.0/debouncer",
      "npm:aurelia-validation@0.6.0/decorators",
      "npm:aurelia-validation@0.6.0/index",
      "npm:aurelia-validation@0.6.0/path-observer",
      "npm:aurelia-validation@0.6.0/strategies/twbootstrap-view-strategy",
      "npm:aurelia-validation@0.6.0/utilities",
      "npm:aurelia-validation@0.6.0/validate-custom-attribute",
      "npm:aurelia-validation@0.6.0/validation",
      "npm:aurelia-validation@0.6.0/validation-config",
      "npm:aurelia-validation@0.6.0/validation-group",
      "npm:aurelia-validation@0.6.0/validation-group-builder",
      "npm:aurelia-validation@0.6.0/validation-locale",
      "npm:aurelia-validation@0.6.0/validation-property",
      "npm:aurelia-validation@0.6.0/validation-result",
      "npm:aurelia-validation@0.6.0/validation-rules",
      "npm:aurelia-validation@0.6.0/validation-rules-collection",
      "npm:aurelia-validation@0.6.0/validation-view-strategy",
      "npm:core-js@0.9.18",
      "npm:core-js@0.9.18/client/shim.min",
      "npm:core-js@1.2.6",
      "npm:core-js@1.2.6/index",
      "npm:core-js@1.2.6/modules/$",
      "npm:core-js@1.2.6/modules/$.a-function",
      "npm:core-js@1.2.6/modules/$.add-to-unscopables",
      "npm:core-js@1.2.6/modules/$.an-object",
      "npm:core-js@1.2.6/modules/$.array-copy-within",
      "npm:core-js@1.2.6/modules/$.array-fill",
      "npm:core-js@1.2.6/modules/$.array-includes",
      "npm:core-js@1.2.6/modules/$.array-methods",
      "npm:core-js@1.2.6/modules/$.array-species-create",
      "npm:core-js@1.2.6/modules/$.classof",
      "npm:core-js@1.2.6/modules/$.cof",
      "npm:core-js@1.2.6/modules/$.collection",
      "npm:core-js@1.2.6/modules/$.collection-strong",
      "npm:core-js@1.2.6/modules/$.collection-to-json",
      "npm:core-js@1.2.6/modules/$.collection-weak",
      "npm:core-js@1.2.6/modules/$.core",
      "npm:core-js@1.2.6/modules/$.ctx",
      "npm:core-js@1.2.6/modules/$.defined",
      "npm:core-js@1.2.6/modules/$.descriptors",
      "npm:core-js@1.2.6/modules/$.dom-create",
      "npm:core-js@1.2.6/modules/$.enum-keys",
      "npm:core-js@1.2.6/modules/$.export",
      "npm:core-js@1.2.6/modules/$.fails",
      "npm:core-js@1.2.6/modules/$.fails-is-regexp",
      "npm:core-js@1.2.6/modules/$.fix-re-wks",
      "npm:core-js@1.2.6/modules/$.flags",
      "npm:core-js@1.2.6/modules/$.for-of",
      "npm:core-js@1.2.6/modules/$.get-names",
      "npm:core-js@1.2.6/modules/$.global",
      "npm:core-js@1.2.6/modules/$.has",
      "npm:core-js@1.2.6/modules/$.hide",
      "npm:core-js@1.2.6/modules/$.html",
      "npm:core-js@1.2.6/modules/$.invoke",
      "npm:core-js@1.2.6/modules/$.iobject",
      "npm:core-js@1.2.6/modules/$.is-array",
      "npm:core-js@1.2.6/modules/$.is-array-iter",
      "npm:core-js@1.2.6/modules/$.is-integer",
      "npm:core-js@1.2.6/modules/$.is-object",
      "npm:core-js@1.2.6/modules/$.is-regexp",
      "npm:core-js@1.2.6/modules/$.iter-call",
      "npm:core-js@1.2.6/modules/$.iter-create",
      "npm:core-js@1.2.6/modules/$.iter-define",
      "npm:core-js@1.2.6/modules/$.iter-detect",
      "npm:core-js@1.2.6/modules/$.iter-step",
      "npm:core-js@1.2.6/modules/$.iterators",
      "npm:core-js@1.2.6/modules/$.keyof",
      "npm:core-js@1.2.6/modules/$.library",
      "npm:core-js@1.2.6/modules/$.math-expm1",
      "npm:core-js@1.2.6/modules/$.math-log1p",
      "npm:core-js@1.2.6/modules/$.math-sign",
      "npm:core-js@1.2.6/modules/$.microtask",
      "npm:core-js@1.2.6/modules/$.object-assign",
      "npm:core-js@1.2.6/modules/$.object-define",
      "npm:core-js@1.2.6/modules/$.object-sap",
      "npm:core-js@1.2.6/modules/$.object-to-array",
      "npm:core-js@1.2.6/modules/$.own-keys",
      "npm:core-js@1.2.6/modules/$.partial",
      "npm:core-js@1.2.6/modules/$.path",
      "npm:core-js@1.2.6/modules/$.property-desc",
      "npm:core-js@1.2.6/modules/$.redefine",
      "npm:core-js@1.2.6/modules/$.redefine-all",
      "npm:core-js@1.2.6/modules/$.replacer",
      "npm:core-js@1.2.6/modules/$.same-value",
      "npm:core-js@1.2.6/modules/$.set-proto",
      "npm:core-js@1.2.6/modules/$.set-species",
      "npm:core-js@1.2.6/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/modules/$.shared",
      "npm:core-js@1.2.6/modules/$.species-constructor",
      "npm:core-js@1.2.6/modules/$.strict-new",
      "npm:core-js@1.2.6/modules/$.string-at",
      "npm:core-js@1.2.6/modules/$.string-context",
      "npm:core-js@1.2.6/modules/$.string-pad",
      "npm:core-js@1.2.6/modules/$.string-repeat",
      "npm:core-js@1.2.6/modules/$.string-trim",
      "npm:core-js@1.2.6/modules/$.task",
      "npm:core-js@1.2.6/modules/$.to-index",
      "npm:core-js@1.2.6/modules/$.to-integer",
      "npm:core-js@1.2.6/modules/$.to-iobject",
      "npm:core-js@1.2.6/modules/$.to-length",
      "npm:core-js@1.2.6/modules/$.to-object",
      "npm:core-js@1.2.6/modules/$.to-primitive",
      "npm:core-js@1.2.6/modules/$.uid",
      "npm:core-js@1.2.6/modules/$.wks",
      "npm:core-js@1.2.6/modules/core.delay",
      "npm:core-js@1.2.6/modules/core.dict",
      "npm:core-js@1.2.6/modules/core.function.part",
      "npm:core-js@1.2.6/modules/core.get-iterator",
      "npm:core-js@1.2.6/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/modules/core.is-iterable",
      "npm:core-js@1.2.6/modules/core.log",
      "npm:core-js@1.2.6/modules/core.number.iterator",
      "npm:core-js@1.2.6/modules/core.object.classof",
      "npm:core-js@1.2.6/modules/core.object.define",
      "npm:core-js@1.2.6/modules/core.object.is-object",
      "npm:core-js@1.2.6/modules/core.object.make",
      "npm:core-js@1.2.6/modules/core.string.escape-html",
      "npm:core-js@1.2.6/modules/core.string.unescape-html",
      "npm:core-js@1.2.6/modules/es5",
      "npm:core-js@1.2.6/modules/es6.array.copy-within",
      "npm:core-js@1.2.6/modules/es6.array.fill",
      "npm:core-js@1.2.6/modules/es6.array.find",
      "npm:core-js@1.2.6/modules/es6.array.find-index",
      "npm:core-js@1.2.6/modules/es6.array.from",
      "npm:core-js@1.2.6/modules/es6.array.iterator",
      "npm:core-js@1.2.6/modules/es6.array.of",
      "npm:core-js@1.2.6/modules/es6.array.species",
      "npm:core-js@1.2.6/modules/es6.function.has-instance",
      "npm:core-js@1.2.6/modules/es6.function.name",
      "npm:core-js@1.2.6/modules/es6.map",
      "npm:core-js@1.2.6/modules/es6.math.acosh",
      "npm:core-js@1.2.6/modules/es6.math.asinh",
      "npm:core-js@1.2.6/modules/es6.math.atanh",
      "npm:core-js@1.2.6/modules/es6.math.cbrt",
      "npm:core-js@1.2.6/modules/es6.math.clz32",
      "npm:core-js@1.2.6/modules/es6.math.cosh",
      "npm:core-js@1.2.6/modules/es6.math.expm1",
      "npm:core-js@1.2.6/modules/es6.math.fround",
      "npm:core-js@1.2.6/modules/es6.math.hypot",
      "npm:core-js@1.2.6/modules/es6.math.imul",
      "npm:core-js@1.2.6/modules/es6.math.log10",
      "npm:core-js@1.2.6/modules/es6.math.log1p",
      "npm:core-js@1.2.6/modules/es6.math.log2",
      "npm:core-js@1.2.6/modules/es6.math.sign",
      "npm:core-js@1.2.6/modules/es6.math.sinh",
      "npm:core-js@1.2.6/modules/es6.math.tanh",
      "npm:core-js@1.2.6/modules/es6.math.trunc",
      "npm:core-js@1.2.6/modules/es6.number.constructor",
      "npm:core-js@1.2.6/modules/es6.number.epsilon",
      "npm:core-js@1.2.6/modules/es6.number.is-finite",
      "npm:core-js@1.2.6/modules/es6.number.is-integer",
      "npm:core-js@1.2.6/modules/es6.number.is-nan",
      "npm:core-js@1.2.6/modules/es6.number.is-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.max-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.min-safe-integer",
      "npm:core-js@1.2.6/modules/es6.number.parse-float",
      "npm:core-js@1.2.6/modules/es6.number.parse-int",
      "npm:core-js@1.2.6/modules/es6.object.assign",
      "npm:core-js@1.2.6/modules/es6.object.freeze",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.6/modules/es6.object.get-own-property-names",
      "npm:core-js@1.2.6/modules/es6.object.get-prototype-of",
      "npm:core-js@1.2.6/modules/es6.object.is",
      "npm:core-js@1.2.6/modules/es6.object.is-extensible",
      "npm:core-js@1.2.6/modules/es6.object.is-frozen",
      "npm:core-js@1.2.6/modules/es6.object.is-sealed",
      "npm:core-js@1.2.6/modules/es6.object.keys",
      "npm:core-js@1.2.6/modules/es6.object.prevent-extensions",
      "npm:core-js@1.2.6/modules/es6.object.seal",
      "npm:core-js@1.2.6/modules/es6.object.set-prototype-of",
      "npm:core-js@1.2.6/modules/es6.object.to-string",
      "npm:core-js@1.2.6/modules/es6.promise",
      "npm:core-js@1.2.6/modules/es6.reflect.apply",
      "npm:core-js@1.2.6/modules/es6.reflect.construct",
      "npm:core-js@1.2.6/modules/es6.reflect.define-property",
      "npm:core-js@1.2.6/modules/es6.reflect.delete-property",
      "npm:core-js@1.2.6/modules/es6.reflect.enumerate",
      "npm:core-js@1.2.6/modules/es6.reflect.get",
      "npm:core-js@1.2.6/modules/es6.reflect.get-own-property-descriptor",
      "npm:core-js@1.2.6/modules/es6.reflect.get-prototype-of",
      "npm:core-js@1.2.6/modules/es6.reflect.has",
      "npm:core-js@1.2.6/modules/es6.reflect.is-extensible",
      "npm:core-js@1.2.6/modules/es6.reflect.own-keys",
      "npm:core-js@1.2.6/modules/es6.reflect.prevent-extensions",
      "npm:core-js@1.2.6/modules/es6.reflect.set",
      "npm:core-js@1.2.6/modules/es6.reflect.set-prototype-of",
      "npm:core-js@1.2.6/modules/es6.regexp.constructor",
      "npm:core-js@1.2.6/modules/es6.regexp.flags",
      "npm:core-js@1.2.6/modules/es6.regexp.match",
      "npm:core-js@1.2.6/modules/es6.regexp.replace",
      "npm:core-js@1.2.6/modules/es6.regexp.search",
      "npm:core-js@1.2.6/modules/es6.regexp.split",
      "npm:core-js@1.2.6/modules/es6.set",
      "npm:core-js@1.2.6/modules/es6.string.code-point-at",
      "npm:core-js@1.2.6/modules/es6.string.ends-with",
      "npm:core-js@1.2.6/modules/es6.string.from-code-point",
      "npm:core-js@1.2.6/modules/es6.string.includes",
      "npm:core-js@1.2.6/modules/es6.string.iterator",
      "npm:core-js@1.2.6/modules/es6.string.raw",
      "npm:core-js@1.2.6/modules/es6.string.repeat",
      "npm:core-js@1.2.6/modules/es6.string.starts-with",
      "npm:core-js@1.2.6/modules/es6.string.trim",
      "npm:core-js@1.2.6/modules/es6.symbol",
      "npm:core-js@1.2.6/modules/es6.weak-map",
      "npm:core-js@1.2.6/modules/es6.weak-set",
      "npm:core-js@1.2.6/modules/es7.array.includes",
      "npm:core-js@1.2.6/modules/es7.map.to-json",
      "npm:core-js@1.2.6/modules/es7.object.entries",
      "npm:core-js@1.2.6/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@1.2.6/modules/es7.object.values",
      "npm:core-js@1.2.6/modules/es7.regexp.escape",
      "npm:core-js@1.2.6/modules/es7.set.to-json",
      "npm:core-js@1.2.6/modules/es7.string.at",
      "npm:core-js@1.2.6/modules/es7.string.pad-left",
      "npm:core-js@1.2.6/modules/es7.string.pad-right",
      "npm:core-js@1.2.6/modules/es7.string.trim-left",
      "npm:core-js@1.2.6/modules/es7.string.trim-right",
      "npm:core-js@1.2.6/modules/js.array.statics",
      "npm:core-js@1.2.6/modules/web.dom.iterable",
      "npm:core-js@1.2.6/modules/web.immediate",
      "npm:core-js@1.2.6/modules/web.timers",
      "npm:core-js@1.2.6/shim",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser"
    ]
  },

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.0.1",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
    "aurelia-bundler": "npm:aurelia-bundler@0.1.9",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.1",
    "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.1",
    "aurelia-validation": "npm:aurelia-validation@0.6.0",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "clean-css": "npm:clean-css@3.4.8",
    "core-js": "npm:core-js@0.9.18",
    "donnelljenkins/aurelia-datagrid": "github:donnelljenkins/aurelia-datagrid@0.1.2",
    "donnelljenkins/aurelia-semantic-datatable": "github:donnelljenkins/aurelia-semantic-datatable@master",
    "fetch": "github:github/fetch@0.9.0",
    "font-awesome": "npm:font-awesome@4.4.0",
    "jquery": "github:components/jquery@2.1.4",
    "lodash": "npm:lodash@3.10.1",
    "polymer/mutationobservers": "github:polymer/mutationobservers@0.4.2",
    "semantic-ui": "github:Semantic-Org/Semantic-UI@2.1.6",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:Semantic-Org/Semantic-UI@2.1.6": {
      "css": "github:systemjs/plugin-css@0.1.19",
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:donnelljenkins/aurelia-datagrid@0.1.2": {
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.1",
      "lodash": "npm:lodash@3.10.1"
    },
    "github:donnelljenkins/aurelia-semantic-datatable@master": {
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.1",
      "semantic-ui": "github:Semantic-Org/Semantic-UI@2.1.6"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:CSSselect@0.4.1": {
      "CSSwhat": "npm:CSSwhat@0.4.7",
      "domutils": "npm:domutils@1.4.3"
    },
    "npm:CSSwhat@0.4.7": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:array-union@1.0.1": {
      "array-uniq": "npm:array-uniq@1.0.2"
    },
    "npm:asn1.js@4.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.1.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.1.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:async@0.9.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:async@1.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1"
    },
    "npm:aurelia-binding@1.0.0-beta.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-bundler@0.1.9": {
      "babel-core": "npm:babel-core@5.8.34",
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "bluebird": "npm:bluebird@2.10.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "globby": "npm:globby@2.1.0",
      "jspm": "npm:jspm@0.16.15",
      "lodash": "npm:lodash@3.10.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "rev-hash": "npm:rev-hash@1.0.0",
      "rev-path": "npm:rev-path@1.0.0",
      "systemjs-builder": "npm:systemjs-builder@0.14.11",
      "whacko": "npm:whacko@0.18.1"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1"
    },
    "npm:aurelia-fetch-client@1.0.0-beta.1": {
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-framework@1.0.0-beta.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.0.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-router@1.0.0-beta.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1"
    },
    "npm:aurelia-templating@1.0.0-beta.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-validation@0.6.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1"
    },
    "npm:aws-sign2@0.5.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bl@0.9.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:block-stream@0.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:bluebird@2.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:boom@2.10.1": {
      "hoek": "npm:hoek@2.16.3",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:brace-expansion@1.1.1": {
      "balanced-match": "npm:balanced-match@0.2.1",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.9.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:combined-stream@0.0.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@0.0.5",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.6.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:cryptiles@2.0.5": {
      "boom": "npm:boom@2.10.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:ctype@0.5.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:d@0.1.1": {
      "es5-ext": "npm:es5-ext@0.10.8"
    },
    "npm:delayed-stream@0.0.5": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:dom-serializer@0.1.0": {
      "domelementtype": "npm:domelementtype@1.1.3",
      "entities": "npm:entities@1.1.1"
    },
    "npm:domutils@1.4.3": {
      "domelementtype": "npm:domelementtype@1.1.3"
    },
    "npm:domutils@1.5.1": {
      "dom-serializer": "npm:dom-serializer@0.1.0",
      "domelementtype": "npm:domelementtype@1.1.3"
    },
    "npm:elliptic@6.0.2": {
      "bn.js": "npm:bn.js@4.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:es5-ext@0.10.8": {
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-iterator@2.0.0": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.8",
      "es6-symbol": "npm:es6-symbol@3.0.1"
    },
    "npm:es6-module-loader@0.17.8": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "when": "npm:when@3.7.5"
    },
    "npm:es6-symbol@3.0.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.8"
    },
    "npm:es6-template-strings@2.0.0": {
      "es5-ext": "npm:es5-ext@0.10.8",
      "esniff": "npm:esniff@1.0.0"
    },
    "npm:esniff@1.0.0": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.8"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:expand-tilde@1.2.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:fd-slicer@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "pend": "npm:pend@1.2.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:findup-sync@0.3.0": {
      "glob": "npm:glob@5.0.15",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:flagged-respawn@0.3.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "npm:forever-agent@0.5.2": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@0.2.0": {
      "async": "npm:async@0.9.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@0.0.7",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.0.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@1.0.0-rc3": {
      "async": "npm:async@1.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fstream@1.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "inherits": "npm:inherits@2.0.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.4.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:glob@4.3.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.10",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@4.5.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.10",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globby@2.1.0": {
      "array-union": "npm:array-union@1.0.1",
      "async": "npm:async@1.5.0",
      "glob": "npm:glob@5.0.15",
      "object-assign": "npm:object-assign@3.0.0"
    },
    "npm:graceful-fs@3.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:graceful-fs@4.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:har-validator@1.8.0": {
      "bluebird": "npm:bluebird@2.10.2",
      "chalk": "npm:chalk@1.1.1",
      "commander": "npm:commander@2.9.0",
      "is-my-json-valid": "npm:is-my-json-valid@2.12.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hawk@2.3.1": {
      "boom": "npm:boom@2.10.1",
      "cryptiles": "npm:cryptiles@2.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-signature@0.10.1": {
      "asn1": "npm:asn1@0.1.11",
      "assert-plus": "npm:assert-plus@0.1.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "ctype": "npm:ctype@0.5.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-signature@0.11.0": {
      "asn1": "npm:asn1@0.1.11",
      "assert-plus": "npm:assert-plus@0.1.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "ctype": "npm:ctype@0.5.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-absolute@0.1.7": {
      "is-relative": "npm:is-relative@0.1.3"
    },
    "npm:is-my-json-valid@2.12.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "jsonpointer": "npm:jsonpointer@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jsonpointer@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jspm-github@0.13.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "expand-tilde": "npm:expand-tilde@1.2.0",
      "graceful-fs": "npm:graceful-fs@3.0.8",
      "mkdirp": "npm:mkdirp@0.5.1",
      "netrc": "npm:netrc@0.1.4",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "request": "npm:request@2.53.0",
      "rimraf": "npm:rimraf@2.3.4",
      "rsvp": "npm:rsvp@3.1.0",
      "semver": "npm:semver@5.1.0",
      "tar": "npm:tar@2.2.1",
      "which": "npm:which@1.2.0",
      "yauzl": "npm:yauzl@2.3.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:jspm-npm@0.25.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@3.0.8",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "request": "npm:request@2.58.0",
      "resolve": "npm:resolve@1.1.6",
      "rmdir": "npm:rmdir@1.1.0",
      "rsvp": "npm:rsvp@3.1.0",
      "semver": "npm:semver@5.1.0",
      "systemjs-builder": "npm:systemjs-builder@0.14.11",
      "tar": "npm:tar@1.0.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "which": "npm:which@1.2.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:jspm-registry@0.4.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "graceful-fs": "npm:graceful-fs@3.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.4.4",
      "rsvp": "npm:rsvp@3.1.0",
      "semver": "npm:semver@4.3.6"
    },
    "npm:jspm@0.16.15": {
      "chalk": "npm:chalk@1.1.1",
      "core-js": "npm:core-js@0.9.18",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@3.0.8",
      "jspm-github": "npm:jspm-github@0.13.9",
      "jspm-npm": "npm:jspm-npm@0.25.3",
      "jspm-registry": "npm:jspm-registry@0.4.0",
      "liftoff": "npm:liftoff@2.2.0",
      "minimatch": "npm:minimatch@2.0.10",
      "mkdirp": "npm:mkdirp@0.5.1",
      "ncp": "npm:ncp@2.0.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "request": "npm:request@2.58.0",
      "rimraf": "npm:rimraf@2.4.4",
      "rsvp": "npm:rsvp@3.1.0",
      "semver": "npm:semver@5.1.0",
      "systemjs": "npm:systemjs@0.19.6",
      "systemjs-builder": "npm:systemjs-builder@0.14.11",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "traceur": "npm:traceur@0.0.92",
      "uglify-js": "npm:uglify-js@2.4.24"
    },
    "npm:liftoff@2.2.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "extend": "npm:extend@2.0.1",
      "findup-sync": "npm:findup-sync@0.3.0",
      "flagged-respawn": "npm:flagged-respawn@0.3.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rechoir": "npm:rechoir@0.6.2",
      "resolve": "npm:resolve@1.1.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@2.4.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.12.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-db@1.19.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.0.14": {
      "mime-db": "npm:mime-db@1.12.0"
    },
    "npm:mime-types@2.1.7": {
      "mime-db": "npm:mime-db@1.19.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:modify-filename@1.1.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:ncp@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:netrc@0.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-uuid@1.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:node.extend@1.0.8": {
      "is": "npm:is@0.2.7",
      "object-keys": "npm:object-keys@0.4.0"
    },
    "npm:node.flow@1.2.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "node.extend": "npm:node.extend@1.0.8"
    },
    "npm:oauth-sign@0.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:oauth-sign@0.8.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.0.0",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse5@1.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pend@1.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:rechoir@0.6.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve": "npm:resolve@1.1.6"
    },
    "npm:request@2.53.0": {
      "aws-sign2": "npm:aws-sign2@0.5.0",
      "bl": "npm:bl@0.9.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.9.0",
      "combined-stream": "npm:combined-stream@0.0.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "forever-agent": "npm:forever-agent@0.5.2",
      "form-data": "npm:form-data@0.2.0",
      "hawk": "npm:hawk@2.3.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@0.10.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.0.14",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "node-uuid": "npm:node-uuid@1.4.7",
      "oauth-sign": "npm:oauth-sign@0.6.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@2.3.3",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.2.1",
      "tunnel-agent": "npm:tunnel-agent@0.4.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:request@2.58.0": {
      "aws-sign2": "npm:aws-sign2@0.5.0",
      "bl": "npm:bl@0.9.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.10.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@2.0.1",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@1.0.0-rc3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@1.8.0",
      "hawk": "npm:hawk@2.3.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@0.11.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.0.14",
      "node-uuid": "npm:node-uuid@1.4.7",
      "oauth-sign": "npm:oauth-sign@0.8.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@3.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.2.1",
      "tunnel-agent": "npm:tunnel-agent@0.4.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:resolve@1.1.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:rev-hash@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:rev-path@1.0.0": {
      "modify-filename": "npm:modify-filename@1.1.0"
    },
    "npm:rimraf@2.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.5.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rimraf@2.4.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rmdir@1.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "node.flow": "npm:node.flow@1.2.3"
    },
    "npm:rsvp@3.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@2.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@4.3.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@5.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map-support@0.2.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.1.32"
    },
    "npm:source-map@0.1.32": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.34": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.33"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:systemjs-builder@0.14.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "es6-template-strings": "npm:es6-template-strings@2.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rsvp": "npm:rsvp@3.1.0",
      "source-map": "npm:source-map@0.4.4",
      "systemjs": "npm:systemjs@0.19.6",
      "traceur": "npm:traceur@0.0.92",
      "uglify-js": "npm:uglify-js@2.4.24",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:systemjs@0.19.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "es6-module-loader": "npm:es6-module-loader@0.17.8",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "when": "npm:when@3.7.5"
    },
    "npm:tar@1.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "block-stream": "npm:block-stream@0.0.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.8",
      "inherits": "npm:inherits@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:tar@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "block-stream": "npm:block-stream@0.0.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.8",
      "inherits": "npm:inherits@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.2"
    },
    "npm:tough-cookie@2.2.1": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:traceur@0.0.92": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.3.5",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rsvp": "npm:rsvp@3.1.0",
      "semver": "npm:semver@2.3.2",
      "source-map-support": "npm:source-map-support@0.2.10",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:tunnel-agent@0.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:uglify-js@2.4.24": {
      "async": "npm:async@0.2.10",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.34",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0",
      "yargs": "npm:yargs@3.5.4"
    },
    "npm:uglify-to-browserify@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:user-home@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:whacko@0.18.1": {
      "CSSselect": "npm:CSSselect@0.4.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "domutils": "npm:domutils@1.5.1",
      "lodash": "npm:lodash@2.4.2",
      "parse5": "npm:parse5@1.5.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:when@3.7.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:which@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-absolute": "npm:is-absolute@0.1.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:window-size@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:yargs@3.5.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "decamelize": "npm:decamelize@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "window-size": "npm:window-size@0.1.0",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:yauzl@2.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fd-slicer": "npm:fd-slicer@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "pend": "npm:pend@1.2.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    }
  }
});
