!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var i,r,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,f=setTimeout(j,t),s?y(e):a}function T(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function j(){var e=g();if(T(e))return E(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?p(n,u-(e-c)):n}(e))}function E(e){return f=void 0,v&&i?y(e):(i=r=void 0,a)}function h(){var e=g(),n=T(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(j,t),y(l)}return void 0===f&&(f=setTimeout(j,t)),a}return t=O(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(O(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},h.flush=function(){return void 0===f?a:E(g())},h}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var S,T,j=document.querySelector(".feedback-form"),E={};j.addEventListener("input",e(t)((function(e){var t=e.target,n=t.value;localStorage.setItem("STORAGE_KEY",JSON.stringify(E)),E[t.name]=n}),1e4)),j.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("STORAGE_KEY"),j.reset(),console.log(E)})),S=localStorage.getItem("STORAGE_KEY"),T=JSON.parse(S),S&&(j.elements.email.value=T.email||"",j.elements.message.value=T.message||"")}();
//# sourceMappingURL=03-feedback.7e7db85c.js.map
