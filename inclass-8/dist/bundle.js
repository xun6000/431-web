!function(t){function r(n){if(e[n])return e[n].exports;var i=e[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}var e={};return r.m=t,r.c=e,r.p="",r(0)}([function(t,r,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=function(){function t(t,r){var e=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return e}return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return t(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=e(1),a=n(o);window.onload=function(){var t=document.getElementById("app"),r=t.getContext("2d"),e=function(t){var r=function r(e){requestAnimationFrame(r);var n=~~(e-(r.lastTime||0));t(n),r.lastTime=e};r()},n=function e(n){n||(e.x=30,e.y=t.height);var i=16;r.font=i+"px Courier",r.fillStyle="white",r.fillText(n,e.x,e.y),e.y=e.y-(4+i)},u=Array(5).fill(!0).map(function(){return(0,a.default)()});e(function(e){u=u.map(function(r){return(0,o.update)(r,e,t)}),n(),r.fillStyle="#000",r.fillRect(0,0,t.width,t.height),u.forEach(function(t){var e=t.position,o=t.mass,a=i(e,2),u=a[0],l=a[1];r.fillStyle="red",r.beginPath(),r.arc(u,l,o,0,2*Math.PI),r.fill(),n("("+o.toFixed(2)+") @ ("+u.toFixed(6)+", "+l.toFixed(6)+")")})})}},function(t,r){"use strict"}]);
//# sourceMappingURL=bundle.js.map