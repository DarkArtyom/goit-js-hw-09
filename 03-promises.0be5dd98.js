!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("iU1Pc");var i=document.forms[0],l=i.elements.delay,a=i.elements.step,c=i.elements.amount;function r(e,n){return new Promise((function(e){var o=Math.random()>.3;setTimeout((function(){o&&e(console.log("✅ Fulfilled"))}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();var n=a.value,o=l.value,t=c.value;console.log("position ".concat(n,", delay: ").concat(o,", amount ").concat(t)),r(n,o)})),r().then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}();
//# sourceMappingURL=03-promises.0be5dd98.js.map