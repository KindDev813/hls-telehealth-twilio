(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{10918:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/provider",function(){return n(20870)}])},1438:function(e,t,n){"use strict";n.d(t,{lA:function(){return o},J$:function(){return r},j4:function(){return i},p8:function(){return a},Do:function(){return c},sL:function(){return u},LX:function(){return s},bo:function(){return d},Y8:function(){return f},l4:function(){return l},aE:function(){return p},DF:function(){return v}});var o={width:1280,height:720,frameRate:24},r="TwilioVideoApp-selectedAudioInput",i="TwilioVideoApp-selectedAudioOutput",a="TwilioVideoApp-selectedVideoInput",c="TwilioVideoApp-selectedBackgroundSettings",u="TelehealthUser",s="TelehealthVisit",d="CurrentVisitId",f="PatientInfo",l="HealthInfo",p="audio/*, image/*, text/*, video/*, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document .xslx, .ppt, .pdf, .key, .svg, .csv",v={trackSwitchOffMode:void 0,dominantSpeakerPriority:"standard",bandwidthProfileMode:"collaboration",maxAudioBitrate:"16000",contentPreferencesMode:"auto",clientTrackSwitchOffControl:"auto",roomType:"group"}},20870:function(e,t,n){"use strict";n.r(t);var o=n(85893),r=n(11163),i=n(67294),a=n(93709),c=n(51502),u=n(1438);t.default=function(){var e=(0,r.useRouter)();return(0,i.useEffect)((function(){var t=e.query.token;t&&a.Z.authenticatePractitioner(t).then((function(t){c.Z.saveToStorage(u.sL,t),e.push("/provider/dashboard")}))}),[e]),(0,o.jsx)("p",{children:"Please wait Provider Person! You will be redirected to the Dashboard"})}},93709:function(e,t,n){"use strict";function o(e){this.message=e}n.d(t,{Z:function(){return f}}),o.prototype=new Error,o.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new o("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,i=0,a=0,c="";r=t.charAt(a++);~r&&(n=i%4?64*n+r:r,i++%4)?c+=String.fromCharCode(255&n>>(-2*i&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return c};function i(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return r(t)}}function a(e){this.message=e}a.prototype=new Error,a.prototype.name="InvalidTokenError";var c=function(e,t){if("string"!=typeof e)throw new a("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(i(e.split(".")[n]))}catch(e){throw new a("Invalid token specified: "+e.message)}},u=n(43820);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){s(e,t,n[t])}))}return e}var f={authenticateVisitorOrPatient:function(e){return fetch(u.X.get(u.X.visits.token),{method:"POST",body:JSON.stringify({action:"TOKEN",passcode:e}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=c(e.token);return d({},t,{isAuthenticated:!0,token:e.token,name:t.id})}))},authenticatePractitioner:function(e){return fetch(u.X.get(u.X.visits.token),{method:"POST",body:JSON.stringify({action:"TOKEN",passcode:e}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=c(e.token);return d({},t,{isAuthenticated:!0,token:e.token,name:t.id})}))}}},51502:function(e,t){"use strict";t.Z={getFromStorage:function(e,t){try{var n=window.localStorage.getItem(e);if(n){var o=JSON.parse(n);return Promise.resolve(o)}}catch(r){return console.log(r),Promise.resolve(t)}},saveToStorage:function(e,t){return null==t?window.localStorage.removeItem(e):window.localStorage.setItem(e,JSON.stringify(t)),Promise.resolve()},removeFromStorage:function(e,t){if(e)try{return Array.isArray(e)&&e.length?e.forEach((function(e){window.localStorage.removeItem(e)})):window.localStorage.removeItem(e),Promise.resolve()}catch(n){console.log("Failed to Remove Key from localStorage: ",n),Promise.resolve(t)}}}},43820:function(e,t,n){"use strict";n.d(t,{X:function(){return o}});var o={backendRoot:"",token:{get:"/visit/token",validate:"/token/validate"},visits:{list:"/visits",get:"/visits/{id}",token:"/visit/token",invite:"/visit/invite",patientRoomToken:"/visit/room",providerRoomToken:"/visit/provider-room",recording:"/visit/recording"},sms:"/send-sms",get:function(e){return"".concat(o.backendRoot).concat(e)}}},11163:function(e,t,n){e.exports=n(90387)}},function(e){e.O(0,[774,888,179],(function(){return t=10918,e(e.s=t);var t}));var t=e.O();_N_E=t}]);