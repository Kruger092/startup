(()=>{"use strict";var e,r={8138:()=>{const e={Android:()=>navigator.userAgent.match(/Android/i),BlackBerry:()=>navigator.userAgent.match(/BlackBerry/i),iOS:()=>navigator.userAgent.match(/iPhone|iPad|iPod/i),Opera:()=>navigator.userAgent.match(/Opera Mini/i),Windows:()=>navigator.userAgent.match(/IEMobile/i),any:()=>e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()};e.any()?document.body.classList.add("_touch"):document.body.classList.add("_pc");const r=document.querySelector(".menu__burger");if(r){const e=document.querySelector(".menu__list");r.addEventListener("click",(t=>{document.body.classList.toggle("_lock"),r.classList.toggle("_active"),e.classList.toggle("_active")}))}}},t={};function o(e){var a=t[e];if(void 0!==a)return a.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(r,t,a,n)=>{if(!t){var i=1/0;for(l=0;l<e.length;l++){for(var[t,a,n]=e[l],s=!0,c=0;c<t.length;c++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](t[c])))?t.splice(c--,1):(s=!1,n<i&&(i=n));s&&(e.splice(l--,1),r=a())}return r}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[t,a,n]},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={179:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var a,n,[i,s,c]=t,l=0;for(a in s)o.o(s,a)&&(o.m[a]=s[a]);for(c&&c(o),r&&r(t);l<i.length;l++)n=i[l],o.o(e,n)&&e[n]&&e[n][0](),e[i[l]]=0;o.O()},t=self.webpackChunkjs=self.webpackChunkjs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),o.O(void 0,[981],(()=>o(6981)));var a=o.O(void 0,[981],(()=>o(8138)));a=o.O(a)})();