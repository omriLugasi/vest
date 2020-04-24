'use strict';(function(m,p){"object"===typeof exports&&"undefined"!==typeof module?module.exports=p():"function"===typeof define&&define.amd?define(p):(m=m||self,m.vest=p())})(this,function(){function m(b,a){return a={exports:{}},b(a,a.exports),a.exports}function p(b){"@babel/helpers - typeof";p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};
return p(b)}function q(){q=Object.assign||function(b){for(var a=1;a<arguments.length;a++){var d=arguments[a],e;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b};return q.apply(this,arguments)}function w(b,a){if(null==a||a>b.length)a=b.length;for(var d=0,e=Array(a);d<a;d++)e[d]=b[d];return e}function r(b){l.use().ctx?q(l.use().ctx,this):l.use().ctx=this;q(l.use().ctx,b)}function t(b,a,d,e){q(this,{ctx:b,testFn:e,fieldName:a,statement:d,isWarning:!1,failed:!1})}var x="undefined"!==
typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},F=m(function(b,a){!function(a,e){b.exports=e()}(x,function(){var a=function(a){if("function"==typeof a)try{return b(a())}catch(h){return!1}return b(a)},b=function(a){return!!Array.isArray(a)||0!=a&&!!a};return function(){for(var b=arguments.length,e=Array(b),d=0;d<b;d++)e[d]=arguments[d];return e.some(a)}})}),z=m(function(b,a){!function(a,e){b.exports=e()}(x,function(){function a(){return(a=
Object.assign||function(a){for(var C=1;C<arguments.length;C++){var b,f=arguments[C];for(b in f)Object.prototype.hasOwnProperty.call(f,b)&&(a[b]=f[b])}return a}).apply(this,arguments)}function b(a){return!!Array.isArray(a)}function g(a){return"number"==typeof a}function h(a){return"string"==typeof a}function B(a,b){return b instanceof RegExp?b.test(a):"string"==typeof b&&(new RegExp(b)).test(a)}function l(a,b){return!!(Array.isArray(b)&&["string","number","boolean"].includes(p(a))||"string"==typeof b&&
"string"==typeof a)&&b.includes(a)}function k(a,b){return a===b}function c(a){return!(isNaN(parseFloat(a))||isNaN(Number(a))||!isFinite(a))}function f(a,b){return c(a)&&c(b)&&Number(a)===Number(b)}function n(a){return!a||(c(a)?0===a:Object.prototype.hasOwnProperty.call(a,"length")?0===a.length:"object"!=p(a)||0===Object.keys(a).length)}function D(a,b){return c(a)&&c(b)&&Number(a)>Number(b)}function m(a,b){return c(a)&&c(b)&&Number(a)>=Number(b)}function q(a,b){return c(a)&&c(b)&&Number(a)<Number(b)}
function r(a,b){return c(a)&&c(b)&&Number(a)<=Number(b)}function t(a,b){return a.length===b}function u(a){return!!a}function v(a,b){if("function"==typeof a){for(var f=arguments.length,c=Array(2<f?f-2:0),e=2;e<f;e++)c[e-2]=arguments[e];if(!0!==a.apply(void 0,[b].concat(c)))throw Error("[Enforce]: invalid "+p(b)+" value");}}function w(b){void 0===b&&(b={});var f=a({},A,{},b);if("function"==typeof z.Proxy)return function(a){var b=new Proxy(f,{get:function(f,e){if(x(f,e))return function(){for(var c=arguments.length,
n=Array(c),d=0;d<c;d++)n[d]=arguments[d];return v.apply(void 0,[f[e],a].concat(n)),b}}});return b};var e=Object.keys(f);return function(b){return e.reduce(function(e,c){var d;return a(e,a({},x(f,c)&&((d={})[c]=function(){for(var a=arguments.length,d=Array(a),n=0;n<a;n++)d[n]=arguments[n];return v.apply(void 0,[f[c],b].concat(d)),e},d)))},{})}}var x=function(a,b){return(a=Object.prototype.hasOwnProperty.call(a,b)&&"function"==typeof a[b])||function(a){setTimeout(function(){throw Error("[enforce]: "+
a);})}('Rule "'+b+'" was not found in rules object. Make sure you typed it correctly.'),a},z=Function("return this")();b.negativeForm="isNotArray";g.negativeForm="isNotNumber";h.negativeForm="isNotString";B.negativeForm="notMatches";l.negativeForm="notInside";k.negativeForm="notEquals";c.negativeForm="isNotNumeric";f.negativeForm="numberNotEquals";n.negativeForm="isNotEmpty";D.alias="gt";m.alias="gte";q.alias="lt";r.alias="lte";t.negativeForm="lengthNotEquals";u.negativeForm="isFalsy";var A=function(a){var b,
f=function(b){var f=a[b].negativeForm,e=a[b].alias;f&&(a[f]=function(){return!a[b].apply(a,arguments)});e&&(a[e]=a[b])};for(b in a)f(b);return a}({isArray:b,isNumber:g,isString:h,matches:B,inside:l,equals:k,numberEquals:f,isNumeric:c,isEmpty:n,greaterThan:D,greaterThanOrEquals:m,lessThan:q,lessThanOrEquals:r,longerThan:function(a,b){return a.length>b},longerThanOrEquals:function(a,b){return a.length>=b},shorterThan:function(a,b){return a.length<b},shorterThanOrEquals:function(a,b){return a.length<=
b},lengthEquals:t,isOdd:function(a){return!!c(a)&&0!=a%2},isEven:function(a){return!!c(a)&&0==a%2},isTruthy:u}),y=new w;return y.Enforce=w,y})}),u=Function("return this")(),k=function(b){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Error;return setTimeout(function(){throw new a("[Vest]: ".concat(b));})},v=Symbol["for"]("VEST#".concat("1")),G=function(){for(var b=arguments.length,a=Array(b),d=0;d<b;d++)a[d]=arguments[d];k("Multiple versions of Vest detected: (".concat(a.join(),").\n    Most features should work regularly, but for optimal feature compatibility, you should have all running instances use the same version."))},
A=function(){return u[v]},l={use:A,useContext:function(){return A().ctx},register:function(b){var a=u[v];a?a.VERSION!==b.VERSION&&G(b.VERSION,a.VERSION):u[v]=b;return u[v]}};r.prototype.setCurrentTest=function(b){this.currentTest=b};r.prototype.removeCurrentTest=function(){delete this.currentTest};r.clear=function(){l.use().ctx=null};var y=function(b,a){new r(b);b=a();r.clear();return b},E=function(b,a){var d=l.useContext();a&&(d?(d.exclusive=d.exclusive||{},[].concat(a).forEach(function(a){"string"===
typeof a&&(d.exclusive[b]=d.exclusive[b]||{},d.exclusive[b][a]=!0)})):k("".concat(b," ").concat("hook called outside of a running suite.")))};t.prototype.valueOf=function(){return!0!==this.failed};t.prototype.fail=function(){this.ctx.result.markFailure({fieldName:this.fieldName,statement:this.statement,isWarning:this.isWarning});this.failed=!0;return this};t.prototype.warn=function(){this.isWarning=!0;return this};var H=function(b){var a=b.testFn,d=b.statement,e=b.ctx,g=function(){return e.result.markAsDone(b)},
h=function(a){b.statement="string"===typeof a?a:d;b.fail();g()};e.setCurrentTest(b);try{a.then(g,h)}catch(B){h()}e.removeCurrentTest()},I=function(b){var a=[],d=[],e={},g=!1,h=function(b){a=a.filter(function(a){return a!==b})},l=function(b){return a.length?b?a.some(function(a){return a.fieldName===b}):!!a.length:!1},k=function(a){if(!a)return d.forEach(function(a){return a(c)});if(Array.isArray(e[a]))return e[a].forEach(function(a){return a(c)})},m=function(a){var b={},f;for(f in c.tests)c.tests[f]&&
c.tests[f][a]&&(b[f]=c.tests[f][a]);return b},c={name:b,errorCount:0,warnCount:0,testCount:0,tests:{},skipped:[],tested:[]};Object.defineProperties(c,{hasErrors:{value:function(a){var b,f;return a?!!(null===(b=c.tests)||void 0===b?0:null===(f=b[a])||void 0===f?0:f.errorCount):!!c.errorCount},writable:!0,configurable:!0,enumerable:!1},hasWarnings:{value:function(a){var b,f;return a?!!(null===(b=c.tests)||void 0===b?0:null===(f=b[a])||void 0===f?0:f.warnCount):!!c.warnCount},writable:!0,configurable:!0,
enumerable:!1},getErrors:{value:function(a){var b,f;return a?(null===(b=c.tests)||void 0===b?void 0:null===(f=b[a])||void 0===f?void 0:f.errors)||[]:m("errors")},writable:!0,configurable:!0,enumerable:!1},getWarnings:{value:function(a){var b,f;return a?(null===(b=c.tests)||void 0===b?void 0:null===(f=b[a])||void 0===f?void 0:f.warnings)||[]:m("warnings")},writable:!0,configurable:!0,enumerable:!1},done:{value:function(){for(var a=arguments.length,b=Array(a),h=0;h<a;h++)b[h]=arguments[h];h=b.length;
a=b[h-1];b=b[h-2];if("function"!==typeof a)return c;if(!g||b&&!l(b))return a(c),c;b?(e[b]=e[b]||[],e[b].push(a)):d.push(a);return c},writable:!0,configurable:!0,enumerable:!1},cancel:{value:function(){c.canceled=!0;return c},writable:!0,configurable:!0,enumerable:!1}});return{markTestRun:function(a){c.tests[a]||(c.tests[a]={testCount:0,errorCount:0,warnCount:0},c.tested.push(a));c.tests[a].testCount++;c.testCount++},markFailure:function(a){var b=a.fieldName,e=a.statement;if(c.tests[b]){if(a.isWarning){a=
"warnings";var d="warnCount"}else a="errors",d="errorCount";c.tests[b][a]=c.tests[b][a]||[];e&&c.tests[b][a].push(e);c[d]++;c.tests[b][d]++}},setPending:function(b){g=!0;a.push(b)},addToSkipped:function(a){!c.skipped.includes(a)&&c.skipped.push(a)},markAsDone:function(a){c.canceled||(a&&(h(a),l(a.fieldName)||k(a.fieldName)),l()||k())},pending:a,output:c}};return l.register({Enforce:z.Enforce,VERSION:"1.0.9",any:F,draft:function(){var b=l.useContext();if(b)return b.result.output;k("draft hook called outside of a running suite.")},
enforce:z,only:function(b){return E("only",b)},runWithContext:y,skip:function(b){return E("skip",b)},test:function(b){for(var a,d,e=arguments.length,g=Array(1<e?e-1:0),h=1;h<e;h++)g[h-1]=arguments[h];"string"===typeof g[0]?(a=g[0],d=g[1]):"function"===typeof g[0]&&(d=g[0]);if("function"===typeof d){a=new t(l.useContext(),b,a,d);d=a.ctx;g=a.fieldName;e=!1;if((h=l.useContext())&&h.exclusive&&(h.exclusive.skip&&h.exclusive.skip[g]||h.exclusive.only&&!h.exclusive.only[g]))d.result.addToSkipped(g);else{d.result.markTestRun(g);
a.ctx.setCurrentTest(a);try{var k=a.testFn.apply(a)}catch(J){k=!1}a.ctx.removeCurrentTest();!1===k&&a.fail();k&&"function"===typeof k.then&&(e=!0,a.testFn=k);e&&d.result.setPending(a)}return a}},validate:function(b,a){if("string"!==typeof b)return k("Suite initialization error. Expected name to be a string.",TypeError);if("function"!==typeof a)return k("Suite initialization error. Expected tests to be a function.",TypeError);var d=I(b);y({result:d},function(){a();var b=d.pending;var g=Array.isArray(b)?
w(b):void 0;g||(g="undefined"!==typeof Symbol&&Symbol.iterator in Object(b)?Array.from(b):void 0);if(!g)a:{if(b){if("string"===typeof b){g=w(b,void 0);break a}g=Object.prototype.toString.call(b).slice(8,-1);"Object"===g&&b.constructor&&(g=b.constructor.name);if("Map"===g||"Set"===g){g=Array.from(g);break a}if("Arguments"===g||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)){g=w(b,void 0);break a}}g=void 0}if(!(b=g))throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
b.forEach(H)});return d.output},warn:function(){var b=l.useContext();b?b.currentTest?b.currentTest.warn():k("warn hook called outside of a test callback. It won't have an effect."):k("warn hook called outside of a running suite.")}})})
