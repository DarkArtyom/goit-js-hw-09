function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var l=r("eWCmQ");const i=document.forms[0],s=i.elements.delay,u=i.elements.step,a=i.elements.amount;i.addEventListener("submit",(function(t){t.preventDefault();let o=Number(u.value),n=Number(s.value);const r=Number(a.value);o>=0&&n>=0&&r>=0?setTimeout((()=>{for(let t=0;t<r;t+=1)console.log(`i ${t}, firstDelayForm: ${n} `),function(e,t){const o=t,n=Math.random()>.3;return new Promise(((r,l)=>{setTimeout((()=>{n?r({i:e,delayStepForm:t}):l({i:e,delayStepForm:t})}),o)}))}(t+1,n).then((({i:t,delayStepForm:o})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({i:t,delayStepForm:o})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),n+=o})):e(l).Notify.failure("Please fill numbers > 0 ");i.reset()}));
//# sourceMappingURL=03-promises.000cf22a.js.map