function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,v=Math.max,d=Math.min,m=function(){return l.Date.now()};function p(t,e,n){var i,o,r,u,f,a,c=0,l=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=i,r=o;return i=o=void 0,c=e,u=t.apply(r,n)}function j(t){return c=t,f=setTimeout(h,e),l?g(t):u}function O(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=r}function h(){var t=m();if(O(t))return T(t);f=setTimeout(h,function(t){var n=e-(t-a);return s?d(n,r-(t-c)):n}(t))}function T(t){return f=void 0,p&&i?g(t):(i=o=void 0,u)}function w(){var t=m(),n=O(t);if(i=arguments,o=this,a=t,n){if(void 0===f)return j(a);if(s)return f=setTimeout(h,e),g(a)}return void 0===f&&(f=setTimeout(h,e)),u}return e=b(e)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?v(b(n.maxWait)||0,e):r,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=o=f=void 0},w.flush=function(){return void 0===f?u:T(m())},w}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=r.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(t,e,{leading:i,maxWait:e,trailing:o})};var g,j=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,T=/^0o[0-7]+$/i,w=parseInt,x="object"==typeof n&&n&&n.Object===Object&&n,S="object"==typeof self&&self&&self.Object===Object&&self,N=x||S||Function("return this")(),E=Object.prototype.toString,$=Math.max,I=Math.min,M=function(){return N.Date.now()};function W(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function k(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==E.call(t)}(t))return NaN;if(W(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=W(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(j,"");var n=h.test(t);return n||T.test(t)?w(t.slice(2),n?2:8):O.test(t)?NaN:+t}g=function(t,e,n){var i,o,r,u,f,a,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=i,r=o;return i=o=void 0,c=e,u=t.apply(r,n)}function m(t){return c=t,f=setTimeout(y,e),l?d(t):u}function p(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=r}function y(){var t=M();if(p(t))return b(t);f=setTimeout(y,function(t){var n=e-(t-a);return s?I(n,r-(t-c)):n}(t))}function b(t){return f=void 0,v&&i?d(t):(i=o=void 0,u)}function g(){var t=M(),n=p(t);if(i=arguments,o=this,a=t,n){if(void 0===f)return m(a);if(s)return f=setTimeout(y,e),d(a)}return void 0===f&&(f=setTimeout(y,e)),u}return e=k(e)||0,W(n)&&(l=!!n.leading,r=(s="maxWait"in n)?$(k(n.maxWait)||0,e):r,v="trailing"in n?!!n.trailing:v),g.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=o=f=void 0},g.flush=function(){return void 0===f?u:b(M())},g};const q=document.querySelector("form"),D=document.querySelector('[type="email"]'),L=document.querySelector('[name="message"]'),F=t(e)((function(){const t={email:D.value,message:L.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500);q.addEventListener("input",t(g)((t=>{F()}),1500)),window.addEventListener("load",(function(){const t=localStorage.getItem("feedback-form-state");if(t){const{email:e,message:n}=JSON.parse(t);D.value=e,L.value=n}})),q.addEventListener("submit",(function(t){t.preventDefault();const e={email:D.value,message:L.value};localStorage.removeItem("feedback-form-state"),console.log(e),D.value="",L.value=""}));
//# sourceMappingURL=03-feedback.a1438fdd.js.map
