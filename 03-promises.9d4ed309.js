var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t),t("eWCmQ");const l=document.forms[0],i=l.elements.delay,s=l.elements.step,r=l.elements.amount;function d(e,o){return new Promise((e=>{const n=Math.random()>.3;setTimeout((()=>{n&&e(console.log("✅ Fulfilled"))}),o)}))}l.addEventListener("submit",(function(e){e.preventDefault();const o=s.value,n=i.value,t=r.value;console.log(`position ${o}, delay: ${n}, amount ${t}`),d(o,n)})),d().then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.9d4ed309.js.map
