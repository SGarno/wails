!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e),t.d(e,"Init",(function(){return T}));var r={};t.r(r),t.d(r,"Debug",(function(){return l})),t.d(r,"Info",(function(){return s})),t.d(r,"Warning",(function(){return d})),t.d(r,"Error",(function(){return f})),t.d(r,"Fatal",(function(){return w}));var o={};t.r(o),t.d(o,"OpenURL",(function(){return b})),t.d(o,"OpenFile",(function(){return y}));var i={};t.r(i),t.d(i,"New",(function(){return k}));var a=[];function c(n,e,t){var r={type:n,callbackID:t,payload:e};!function(n){if(window.wailsbridge?window.wailsbridge.websocket.send(n):window.external.invoke(n),a.length>0)for(var e=0;e<a.length;e++)a[e](n)}(JSON.stringify(r))}function u(n,e){c("log",{level:n,message:e})}function l(n){u("debug",n)}function s(n){u("info",n)}function d(n){u("warning",n)}function f(n){u("error",n)}function w(n){u("fatal",n)}var p,v={};function g(n,e,t){return null==t&&(t=0),new Promise((function(r,o){var i;do{i=n+"-"+p()}while(v[i]);if(t>0)var a=setTimeout((function(){o(Error("Call to "+n+" timed out. Request ID: "+i))}),t);v[i]={timeoutHandle:a,reject:o,resolve:r};try{c("call",{bindingName:n,data:JSON.stringify(e)},i)}catch(n){console.error(n)}}))}function h(n,e){return g(".wails."+n,e)}function b(n){return h("Browser.OpenURL",n)}function y(n){return h("Browser.OpenFile",n)}p=window.crypto?function(){var n=new Uint32Array(1);return window.crypto.getRandomValues(n)[0]}:function(){return 9007199254740991*Math.random()};var m=function n(e,t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),t=t||-1,this.Callback=function(n){return e.apply(null,n),-1!==t&&0===(t-=1)}},E={};function O(n,e,t){E[n]=E[n]||[];var r=new m(e,t);E[n].push(r)}function S(n){var e=JSON.stringify([].slice.apply(arguments).slice(1)),t={name:n,data:e};c("event",t)}var j={};function N(n){try{return new Function("var "+n),!0}catch(n){return!1}}function k(n,e){var t,r=this;if(!window.wails)throw Error("Wails is not initialised");var o=[];return this.subscribe=function(n){o.push(n)},this.set=function(e){t=e,window.wails.Events.Emit("wails:sync:store:updatedbyfrontend:"+n,JSON.stringify(t)),o.forEach((function(n){n(t)}))},this.update=function(n){var e=n(t);r.set(e)},window.wails.Events.On("wails:sync:store:updatedbybackend:"+n,(function(n){n=JSON.parse(n),t=n,o.forEach((function(n){n(t)}))})),e&&this.set(e),this}function C(){return(C=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}window.backend={},window.wails=window.wails||{},window.backend={};var I={NewBinding:function(n){var e=[].concat(n.split(".").splice(1)),t=window.backend;if(e.length>1)for(var r=0;r<e.length-1;r+=1){var o=e[r];if(!N(o))return new Error("".concat(o," is not a valid javascript identifier."));t[o]||(t[o]={}),t=t[o]}var i=e.pop();if(!N(i))return new Error("".concat(i," is not a valid javascript identifier."));t[i]=function(){var e=0;function t(){var t=[].slice.call(arguments);return g(n,t,e)}return t.setTimeout=function(n){e=n},t.getTimeout=function(){return e},t}()},Callback:function(n){var e;n=decodeURIComponent(n.replace(/\s+/g,"").replace(/[0-9a-f]{2}/g,"%$&"));try{e=JSON.parse(n)}catch(e){var t="Invalid JSON passed to callback: ".concat(e.message,". Message: ").concat(n);throw l(t),new Error(t)}var r=e.callbackid,o=v[r];if(!o){var i="Callback '".concat(r,"' not registed!!!");throw console.error(i),new Error(i)}clearTimeout(o.timeoutHandle),delete v[r],e.error?o.reject(e.error):o.resolve(e.data)},Notify:function(n,e){if(E[n]){for(var t=E[n].slice(),r=0;r<E[n].length;r+=1){var o=E[n][r],i=[];if(e)try{i=JSON.parse(e)}catch(e){f("Invalid JSON data sent to notify. Event name = "+n)}o.Callback(i)&&t.splice(r,1)}E[n]=t}},AddScript:function(n,e){var t=document.createElement("script");t.text=n,document.body.appendChild(t),e&&S(e)},InjectCSS:function(n){var e=document.createElement("style");e.setAttribute("type","text/css"),e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e)},Init:T,AddIPCListener:function(n){a.push(n)}},L={Log:r,Browser:o,Events:{On:function(n,e){O(n,e)},OnMultiple:O,Emit:S,Heartbeat:function(n,e,t){var r=null;j[n]=function(){clearInterval(r),t()},r=setInterval((function(){S(n)}),e)},Acknowledge:function(n){if(!j[n])throw new f("Cannot acknowledge unknown heartbeat '".concat(n,"'"));j[n]()}},Store:i,_:I};function T(n){n()}C(window.wails,L),window.onerror=function(n,e,t,r,o){window.wails.Log.Error("**** Caught Unhandled Error ****"),window.wails.Log.Error("Message: "+n),window.wails.Log.Error("URL: "+e),window.wails.Log.Error("Line No: "+t),window.wails.Log.Error("Column No: "+r),window.wails.Log.Error("error: "+o)},window.usefirebug&&function(){document.getElementsByTagName("html")[0].setAttribute("debug","true");var n=document.createElement("script");n.src="https://wails.app/assets/js/firebug-lite.js#startOpened=true,disableWhenFirebugActive=false",n.type="application/javascript",document.head.appendChild(n),window.wails.Log.Info("Injected firebug")}(),S("wails:loaded")}]);