"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{8225:function(e,n,t){t.d(n,{p:function(){return u},a:function(){return s}});var r=t(85893),i=t(67294),o=t(67893),a=t(15428);function c(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=(0,i.createContext)(null),s=function(e){var n=e.children,t=(0,a.Z)(),s=t.room,l=t.onError,f=(0,i.useState)(!1),d=f[0],v=f[1],m=(0,i.useState)(null),p=m[0],h=m[1],b=(0,i.useState)([]),g=b[0],y=b[1],w=(0,i.useState)(!1),x=w[0],k=w[1],j=(0,i.useState)(null),S=j[0],O=j[1],P=(0,i.useRef)(!1),C=(0,i.useCallback)((function(e){var n=new o.KU(e);window.chatClient=n,O(n)}),[]);return(0,i.useEffect)((function(){if(p){var e=function(e){return y((function(n){return c(n).concat([e])}))};return p.getMessages().then((function(e){return y(e.items)})),p.on("messageAdded",e),function(){p.off("messageAdded",e)}}}),[p]),(0,i.useEffect)((function(){!P.current&&g.length&&k(!0)}),[g]),(0,i.useEffect)((function(){P.current=d,d&&k(!1)}),[d]),(0,i.useEffect)((function(){s&&S&&S.getConversationByUniqueName(s.sid).then((function(e){window.chatConversation=e,h(e)})).catch((function(){l(new Error("Error getting conversation for this room"))}))}),[s,S,l]),(0,r.jsx)(u.Provider,{value:{isChatWindowOpen:d,setIsChatWindowOpen:v,hasUnreadMessages:x,connect:C,messages:g,conversation:p},children:n})}},610:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),i=t(8225);function o(){var e=(0,r.useContext)(i.p);if(!e)throw new Error("useChatContext must be used within a ChatProvider");return e}},76595:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(85893),i=t(67294),o=t(328),a=t(97811),c=t(53352);function u(e){var n=e.publication,t=e.isLocalParticipant,i=e.videoOnly,u=e.videoPriority,s=(0,o.Z)(n);if(!s)return null;switch(s.kind){case"video":return(0,r.jsx)(c.Z,{track:s,priority:u,isLocal:s.name.includes("camera")&&t});case"audio":return i?null:(0,r.jsx)(a.Z,{track:s});default:return null}}var s=t(2654);function l(e){var n=e.participant,t=e.videoOnly,o=e.enableScreenShare,a=e.videoPriority,c=e.isLocalParticipant,l=(0,s.Z)(n),f=(0,i.useState)([]),d=f[0],v=f[1];return(0,i.useEffect)((function(){o&&l.some((function(e){return e.trackName.includes("screen")}))?v(l.filter((function(e){return!e.trackName.includes("camera")}))):v(l.filter((function(e){return!e.trackName.includes("screen")})))}),[l]),(0,r.jsx)(r.Fragment,{children:d.map((function(e){return(0,r.jsx)(u,{publication:e,participant:n,isLocalParticipant:c,videoOnly:t,videoPriority:a},e.kind)}))})}},97811:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(67294),i=t(1438),o=t(45067);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e){var n=e.track,t=a(function(){var e=(0,o.Z)().audioOutputDevices,n=(0,r.useState)("default"),t=n[0],a=n[1],c=(0,r.useCallback)((function(e){window.localStorage.setItem(i.j4,e),a(e)}),[]);return(0,r.useEffect)((function(){var n=window.localStorage.getItem(i.j4);e.some((function(e){return n&&e.deviceId===n}))&&a(n)}),[e]),[t,c]}(),1)[0],c=(0,r.useRef)();return(0,r.useEffect)((function(){return c.current=n.attach(),c.current.setAttribute("data-cy-audio-track-name",n.name),document.body.appendChild(c.current),function(){return n.detach().forEach((function(e){e.remove(),e.srcObject=null}))}}),[n]),(0,r.useEffect)((function(){var e,n;null===(e=c.current)||void 0===e||null===(n=e.setSinkId)||void 0===n||n.call(e,t)}),[t]),null}},53352:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(85893),i=t(67294),o=t(5909);function a(e){var n,t,a=e.track,c=e.isLocal,u=e.priority,s=(0,i.useRef)(null),l=(0,o.Z)(a),f=function(e){var n=(0,i.useState)(null===e||void 0===e?void 0:e.dimensions),t=n[0],r=n[1];return(0,i.useEffect)((function(){if(r(null===e||void 0===e?void 0:e.dimensions),e){var n=function(e){return r({width:e.dimensions.width,height:e.dimensions.height})};return e.on("dimensionsChanged",n),function(){e.off("dimensionsChanged",n)}}}),[e]),t}(a),d=(null!==(n=null===f||void 0===f?void 0:f.height)&&void 0!==n?n:0)>(null!==(t=null===f||void 0===f?void 0:f.width)&&void 0!==t?t:0);(0,i.useEffect)((function(){var e=s.current;return e.muted=!0,a.setPriority&&u&&a.setPriority(u),a.attach(e),function(){a.detach(e),e.srcObject=null,a.setPriority&&u&&a.setPriority(null)}}),[a,u]);var v="environment"!==(null===l||void 0===l?void 0:l.getSettings().facingMode),m={transform:c&&v?"rotateY(180deg)":"",objectFit:d||a.name.includes("screen")?"contain":"cover",maxWidth:"none",height:"inherit",width:"inherit"};return(0,r.jsx)("video",{ref:s,style:m})}},5909:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294);function i(e){var n=(0,r.useState)(null===e||void 0===e?void 0:e.mediaStreamTrack),t=n[0],i=n[1];return(0,r.useEffect)((function(){if(i(null===e||void 0===e?void 0:e.mediaStreamTrack),e){var n=function(){return i(e.mediaStreamTrack)};return e.on("started",n),function(){e.off("started",n)}}}),[e]),t}},328:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294);function i(e){var n=(0,r.useState)(e&&e.track),t=n[0],i=n[1];return(0,r.useEffect)((function(){if(i(e&&e.track),e){var n=function(){return i(null)};return e.on("subscribed",i),e.on("unsubscribed",n),function(){e.off("subscribed",i),e.off("unsubscribed",n)}}}),[e]),t}},2654:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294);function i(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e){var n=(0,r.useState)([]),t=n[0],o=n[1];return(0,r.useEffect)((function(){o(Array.from(e.tracks.values()));var n=function(e){return o((function(n){return i(n).concat([e])}))},t=function(e){return o((function(n){return n.filter((function(n){return n!==e}))}))};return e.on("trackPublished",n),e.on("trackUnpublished",t),function(){e.off("trackPublished",n),e.off("trackUnpublished",t)}}),[e]),t}},50784:function(e,n,t){t.d(n,{l:function(){return w},Z:function(){return x}});var r=t(85893),i=t(67294),o=t(7035);var a=t(35666),c=t.n(a),u=t(1438),s=t(48847),l=t(98445),f=t.n(l);function d(e,n,t,r,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function v(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){d(o,r,i,a,c,"next",e)}function c(e){d(o,r,i,a,c,"throw",e)}a(void 0)}))}}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){m(e,n,t[n])}))}return e}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,n,t){var r=(0,i.useState)(null),o=r[0],a=r[1],c=(0,i.useState)(!1),u=c[0],d=c[1],v=(0,i.useState)(!1),m=v[0],p=v[1],g=(0,i.useRef)(t);return(0,i.useEffect)((function(){window.TwilioVideo||(window.TwilioVideo=f()),g.current=t}),[t]),{room:o,isConnecting:u,isRecording:m,connect:(0,i.useCallback)((function(t){return d(!0),f().connect(t,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}({},g.current,{tracks:b(e).concat([new l.LocalDataTrack])})).then((function(e){a(e);var n=function(){return e.disconnect()};e.setMaxListeners(15),e.on("disconnected",(function(){setTimeout((function(){return a(null)})),window.removeEventListener("beforeunload",n),s.tq&&window.removeEventListener("pagehide",n)})),p(e.isRecording),e.on("recordingStarted",(function(){return p(!0)})),e.on("recordingStopped",(function(){return p(!1)})),window.twilioRoom=e,e.localParticipant.videoTracks.forEach((function(e){return e.setPriority("low")})),d(!1),window.addEventListener("beforeunload",n),s.tq&&window.addEventListener("pagehide",n)}),(function(e){n(e),d(!1),p(!1)}))}),[e,n])}}function y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=(0,i.createContext)(null);function x(e){var n=e.options,t=e.children,a=e.onError,l=void 0===a?function(){}:a,d=(0,i.useCallback)((function(e){console.log("ERROR: ".concat(e.message),e),l(e)}),[l]),m=function(){var e=(0,i.useState)(),n=e[0],t=e[1],r=(0,i.useState)(),o=r[0],a=r[1],l=(0,i.useState)(!1),d=l[0],m=l[1],h=(0,i.useCallback)((function(e){var n={};return e&&(n.deviceId={exact:e}),f().createLocalAudioTrack(n).then((function(e){return t(e),e}))}),[]),b=(0,i.useCallback)(v(c().mark((function e(){var n,t,r,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.localStorage.getItem(u.p8),e.next=3,(0,s.dz)();case 3:return t=e.sent.videoInputDevices,r=t.some((function(e){return n&&e.deviceId===n})),i=p({},u.lA,{name:"camera-".concat(Date.now())},r&&{deviceId:{exact:n}}),e.abrupt("return",f().createLocalVideoTrack(i).then((function(e){return a(e),e})));case 7:case"end":return e.stop()}}),e)}))),[]),g=(0,i.useCallback)((function(){n&&(n.stop(),t(void 0))}),[n]),y=(0,i.useCallback)((function(){o&&(o.stop(),a(void 0))}),[o]),w=(0,i.useCallback)(v(c().mark((function e(){var r,i,l,v,h,b,g,y,w,x,k,j,S;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.dz)();case 2:if(r=e.sent,i=r.audioInputDevices,l=r.videoInputDevices,v=r.hasAudioInputDevices,h=r.hasVideoInputDevices,v||h){e.next=9;break}return e.abrupt("return",Promise.resolve());case 9:if(!(d||n||o)){e.next=11;break}return e.abrupt("return",Promise.resolve());case 11:return m(!0),b=window.localStorage.getItem(u.J$),g=window.localStorage.getItem(u.p8),y=i.some((function(e){return b&&e.deviceId===b})),w=l.some((function(e){return g&&e.deviceId===g})),e.next=18,(0,s.$l)("camera");case 18:return x=e.sent,e.next=21,(0,s.$l)("microphone");case 21:return k=e.sent,j=v&&!k,S={video:h&&!x&&p({},u.lA,{name:"camera-".concat(Date.now())},w&&{deviceId:{exact:g}}),audio:j&&(y?{deviceId:{exact:b}}:v)},e.abrupt("return",f().createLocalTracks(S).then((function(e){var n,r=e.find((function(e){return"video"===e.kind})),i=e.find((function(e){return"audio"===e.kind}));if(r&&(a(r),window.localStorage.setItem(u.p8,null!==(n=r.mediaStreamTrack.getSettings().deviceId)&&void 0!==n?n:"")),i&&t(i),x&&k){var o=new Error;throw o.name="NotAllowedError",o}if(x)throw new Error("CameraPermissionsDenied");if(k)throw new Error("MicrophonePermissionsDenied")})).finally((function(){return m(!1)})));case 26:case"end":return e.stop()}}),e)}))),[n,o,d]);return{localTracks:[n,o].filter((function(e){return void 0!==e})),getLocalVideoTrack:b,getLocalAudioTrack:h,isAcquiringLocalTracks:d,removeLocalAudioTrack:g,removeLocalVideoTrack:y,getAudioAndVideoTracks:w}}(),h=m.localTracks,b=m.getLocalVideoTrack,x=m.getLocalAudioTrack,k=m.isAcquiringLocalTracks,j=m.removeLocalAudioTrack,S=m.removeLocalVideoTrack,O=m.getAudioAndVideoTracks,P=g(h,d,n),C=P.room,A=P.isConnecting,E=P.isRecording,N=P.connect,T=y(function(e,n){var t=(0,i.useState)(!1),r=t[0],o=t[1],a=(0,i.useRef)(null),c=(0,i.useCallback)((function(){navigator.mediaDevices.getDisplayMedia({audio:!1,video:{frameRate:10,height:1080,width:1920}}).then((function(t){var r=t.getTracks()[0];e.localParticipant.publishTrack(r,{name:"screen",priority:"low"}).then((function(n){a.current=function(){e.localParticipant.unpublishTrack(r),e.localParticipant.emit("trackUnpublished",n),r.stop(),o(!1)},r.onended=a.current,o(!0)})).catch(n)})).catch((function(e){"AbortError"!==e.name&&"NotAllowedError"!==e.name&&n(e)}))}),[e,n]),u=(0,i.useCallback)((function(){e&&(r?a.current():c(),console.log(r))}),[r,c,e]);return[r,u]}(C,l),2),I=T[0],D=T[1];!function(e,n,t,r,o,a){(0,i.useEffect)((function(){if(e){var i=function(e,i){i&&n(i),t(),r(),o&&a()};return e.on("disconnected",i),function(){e.off("disconnected",i)}}}),[e,n,t,r,o,a])}(C,l,j,S,I,D),function(e,n){(0,i.useEffect)((function(){if(e)return e.localParticipant.on("trackPublicationFailed",n),function(){e.localParticipant.off("trackPublicationFailed",n)}}),[e,n])}(C,l),function(e){var n=e.find((function(e){return"audio"===e.kind}));(0,i.useEffect)((function(){var e=function(){"ended"===(null===n||void 0===n?void 0:n.mediaStreamTrack.readyState)&&n.restart({})};return navigator.mediaDevices.addEventListener("devicechange",e),function(){navigator.mediaDevices.removeEventListener("devicechange",e)}}),[n])}(h);var Z=(0,i.useState)(!1),V=Z[0],L=Z[1];h.find((function(e){return e.name.includes("camera")}));return(0,r.jsx)(w.Provider,{value:{room:C,localTracks:h,isConnecting:A,onError:d,getLocalVideoTrack:b,getLocalAudioTrack:x,connect:N,isAcquiringLocalTracks:k,removeLocalVideoTrack:S,isSharingScreen:I,toggleScreenShare:D,getAudioAndVideoTracks:O,isBackgroundSelectionOpen:V,setIsBackgroundSelectionOpen:L,isRecording:E},children:(0,r.jsx)(o.Z,{room:C,children:t})})}},45067:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),i=t(48847);function o(){var e=(0,r.useState)({audioInputDevices:[],videoInputDevices:[],audioOutputDevices:[],hasAudioInputDevices:!1,hasVideoInputDevices:!1}),n=e[0],t=e[1];return(0,r.useEffect)((function(){var e=function(){return(0,i.dz)().then((function(e){return t(e)}))};return navigator.mediaDevices.addEventListener("devicechange",e),e(),function(){navigator.mediaDevices.removeEventListener("devicechange",e)}}),[]),n}},17624:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294);function i(e){var n=(0,r.useState)(!!e&&e.isEnabled),t=n[0],i=n[1];return(0,r.useEffect)((function(){if(i(!!e&&e.isEnabled),e){var n=function(){return i(!0)},t=function(){return i(!1)};return e.on("enabled",n),e.on("disabled",t),function(){e.off("enabled",n),e.off("disabled",t)}}}),[e]),t}},40720:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294),i=t(17624),o=t(15428);function a(){var e=(0,o.Z)().localTracks.find((function(e){return"audio"===e.kind}));return[(0,i.Z)(e),(0,r.useCallback)((function(){e&&(e.isEnabled?e.disable():e.enable())}),[e])]}},32291:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),i=t(15428);function o(){var e=(0,i.Z)(),n=e.room,t=e.localTracks,o=e.getLocalVideoTrack,a=e.removeLocalVideoTrack,c=e.onError,u=null===n||void 0===n?void 0:n.localParticipant,s=t.find((function(e){return e.name.includes("camera")})),l=(0,r.useState)(!1),f=l[0],d=l[1],v=(0,r.useCallback)((function(){if(!f)if(s){var e=null===u||void 0===u?void 0:u.unpublishTrack(s);null===u||void 0===u||u.emit("trackUnpublished",e),a()}else d(!0),o().then((function(e){return null===u||void 0===u?void 0:u.publishTrack(e,{priority:"low"})})).catch(c).finally((function(){d(!1)}))}),[s,u,o,f,c,a]);return[!!s,v]}},6857:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(15428),i=t(8229);function o(){var e=(0,i.Z)(),n=(0,r.Z)().room,t=null===n||void 0===n?void 0:n.localParticipant;return(e!==t?e:null)||t}},4051:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294),i=t(15428);function o(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(){var e,n=(0,i.Z)().room,t=(0,r.useState)(Array.from(null!==(e=null===n||void 0===n?void 0:n.participants.values())&&void 0!==e?e:[])),a=t[0],c=t[1];return(0,r.useEffect)((function(){if(n){c(Array.from(null===n||void 0===n?void 0:n.participants.values()));var e=function(e){c((function(n){return o(n).concat([e])}))},t=function(e){c((function(n){return n.filter((function(n){return n!==e}))}))};return n.on("participantConnected",e),n.on("participantDisconnected",t),function(){n.off("participantConnected",e),n.off("participantDisconnected",t)}}}),[n]),a}},8229:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),i=t(15428);function o(){var e=(0,i.Z)().room,n=(0,r.useState)(),t=n[0],o=n[1];return(0,r.useEffect)((function(){if(e){var n=function(){o(Array.from(e.participants.values()).concat(e.localParticipant).find((function(e){return Array.from(e.tracks.values()).find((function(e){return e.trackName.includes("screen")}))})))};return n(),e.on("trackPublished",n),e.on("trackUnpublished",n),e.on("participantDisconnected",n),e.localParticipant.on("trackPublished",n),e.localParticipant.on("trackUnpublished",n),function(){e.off("trackPublished",n),e.off("trackUnpublished",n),e.off("participantDisconnected",n),e.localParticipant.off("trackPublished",n),e.localParticipant.off("trackUnpublished",n)}}}),[e]),t}},7035:function(e,n,t){t.d(n,{ZP:function(){return a},Z:function(){return c}});var r=t(85893),i=t(67294),o=(0,i.createContext)(null);function a(){var e=(0,i.useContext)(o);return[e[0],e[1]]}function c(e){var n=e.room,t=e.children,a=(0,i.useState)(null),c=a[0],u=a[1];return(0,i.useEffect)((function(){if(n){var e=function(){return u(null)},t=function(e){return u((function(n){return n===e?null:n}))};return n.on("disconnected",e),n.on("participantDisconnected",t),function(){n.off("disconnected",e),n.off("participantDisconnected",t)}}}),[n]),(0,r.jsx)(o.Provider,{value:[c,function(e){return u((function(n){return n===e?null:e}))}],children:t})}},15428:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),i=t(50784);function o(){var e=(0,r.useContext)(i.l);if(!e)throw new Error("useVideoContext must be used within a VideoProvider");return e}},41107:function(e,n,t){t.d(n,{W:function(){return r},z:function(){return f}});var r,i,o=t(85893),a=t(41664),c=t(48847),u=t(39716);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(i=r||(r={})).primary="primary",i.secondary="secondary",i.tertiary="tertiary",i.link="link";var f=function(e){var n=e.as,t=void 0===n?"button":n,i=e.children,f=e.icon,d=e.iconClassName,v=e.iconType,m=e.variant,p=void 0===m?r.primary:m,h=e.loading,b=e.disabled,g=e.outline,y=l(e,["as","children","icon","iconClassName","iconType","variant","loading","disabled","outline"]),w=b||h,x=(0,c.WM)("p-2 focus:outline-none border-2 disabled:opacity-40 disabled:cursor-not-allowed",g?function(e){return["bg-white",{primary:"text-button-primary border-button-primary",secondary:"text-button-secondary border-button-secondary",tertiary:"text-button-tertiary border-button-tertiary",link:"text-button-link border-button-link"}[e]].join(" ")}(p):function(e){return["text-white",{primary:"bg-button-primary border-button-primary",secondary:"bg-button-secondary border-button-secondary",tertiary:"bg-button-tertiary border-button-tertiary",link:"bg-button-link border-button-link"}[e]].join(" ")}(p),w?null:g?function(e){return["hover:text-white",{primary:"hover:bg-button-primary",secondary:"hover:bg-button-secondary",tertiary:"hover:bg-button-tertiary",link:"hover:bg-button-link"}[e]].join(" ")}(p):function(e){return["hover:bg-white",{primary:"hover:text-button-primary",secondary:"hover:text-button-secondary",tertiary:"hover:text-button-tertiary",link:"hover:text-button-link"}[e]].join(" ")}(p),f?"flex items-center rounded-full":"rounded-md",y.className),k=f?(0,o.jsx)(u.J,{name:f,outline:"outline"===v,className:d}):i;return"a"===t?(0,o.jsx)(a.default,{href:y.href,passHref:!0,children:(0,o.jsx)("a",{className:x,children:k})}):(0,o.jsx)("button",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({},y,{className:x,children:k}))}},23074:function(e,n,t){t.d(n,{z:function(){return r.z},W:function(){return r.W}});var r=t(41107)},63020:function(e,n,t){t.d(n,{e:function(){return v}});var r=t(85893),i=t(67294),o=t(610),a=t(39716),c=t(48847),u=function(e){var n=e.content,t=e.isSelf,i=e.name;return(0,r.jsxs)("div",{className:(0,c.WM)("mb-1 mt-3",!t&&"text-right"),children:[(0,r.jsx)("div",{className:"text-sm text-secondary mb-3",children:i}),(0,r.jsx)("span",{className:(0,c.WM)("p-2 rounded-md",t?"bg-primary text-white":"bg-light"),children:n})]})},s=t(23074),l=t(1438);function f(e){var n=e.conversation,t=e.inputPlaceholder,o=e.isChatWindowOpen,a=function(e){g&&(n.sendMessage(e.trim()),d(""))},u=(0,i.useState)(""),f=u[0],d=u[1],v=(0,i.useState)(!1),m=v[0],p=v[1],h=(0,i.useState)(null),b=(h[0],h[1]),g=/\S/.test(f),y=(0,i.useRef)(null),w=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;o&&(null===(e=w.current)||void 0===e||e.focus())}),[w]),(0,r.jsx)("div",{className:"absolute bottom-0 bg-white w-full p-3 flex",children:(0,r.jsxs)("form",{className:"flex justify-center items-center",children:[(0,r.jsxs)("div",{className:"pr-2",children:[(0,r.jsx)(s.z,{type:"button",className:"bg-white text-primary border-0",icon:"file_upload",iconType:"outline",onClick:function(){var e;return null===y||void 0===y||null===(e=y.current)||void 0===e?void 0:e.click()},disabled:m}),(0,r.jsx)("input",{ref:y,style:{display:"none"},onChange:function(e){var t,r=null===(t=e.target.files)||void 0===t?void 0:t[0];if(console.log(r),r){var i=new FormData;i.append("userfile",r),p(!0),b(null),n.sendMessage(i).catch((function(e){413===e.code?b("File was too large.  Upload a file less than 150MB."):b("There was a problem uploading the file."),console.log("File failed to send: ",e)})).finally((function(){p(!1)}))}},value:"",type:"file",accept:l.aE})]}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("input",{className:"bg-[#F4F4F4] rounded-[4.5em] p-2 px-4 w-full flex-auto",type:"text",ref:w,onKeyPress:function(e){c.tq||"Enter"!==e.key||e.shiftKey||(e.preventDefault(),a(f))},placeholder:t,value:f,onChange:function(e){return d(e.target.value)}}),(0,r.jsx)(s.z,{type:"button",className:"bg-white text-primary border-0 ml-2 flex-1",icon:"send",iconType:"outline",onClick:function(){return a(f)}})]})]})})}function d(e){var n=e.media,t=e.isSelf,o=e.name,a=(0,i.useState)(""),c=a[0],u=a[1];return(0,i.useEffect)((function(){n.length&&n[0].getContentTemporaryUrl().then((function(e){u(e)}))}),[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-sm text-secondary mb-1 mt-3",children:o}),(0,r.jsx)("div",{className:t?"":"text-right flex justify-end",children:(0,r.jsx)("div",{className:"mb-5 flex items-center w-40 h-40 border rounded-2xl max-w-sm border-gray-300 cursor-pointer",onClick:function(){n[0].getContentTemporaryUrl().then((function(e){var n=document.createElement("a");n.href=e,n.target="_blank",n.rel="noopener",setTimeout((function(){n.click()}))}))},children:(0,r.jsx)("img",{alt:"User uploaded media image",className:"w-auto h-auto justify-center",src:c})})})]})}var v=function(e){var n=e.inputPlaceholder,t=e.showHeader,c=e.userName,s=e.userRole,l=(0,i.useRef)(null),v=(0,o.Z)(),m=v.messages,p=v.isChatWindowOpen,h=v.setIsChatWindowOpen,b=v.conversation;return(0,i.useEffect)((function(){p&&l.current.scrollIntoView({behavior:"smooth"})}),[p,m]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"relative flex flex-col items-center h-full w-full",children:[t&&(0,r.jsxs)("div",{className:"relative bg-primary text-white rounded-t p-2 text-center w-full",children:["Chat with ","Sarah Cooper",p&&(0,r.jsx)("button",{className:"absolute right-3",type:"button",onClick:function(){return h(!p)},children:(0,r.jsx)(a.J,{name:"close"})})]}),(0,r.jsxs)("div",{className:"bg-white flex-grow w-full p-3 overflow-auto pb-16 mb-2",children:[m.map((function(e,n){return"text"===e.type?(0,r.jsx)(u,{isSelf:e.author===c,name:e.author===c?c:e.author,content:e.body,role:s},n):"media"===e.type?(0,r.jsx)(d,{media:e.attachedMedia,isSelf:e.author===c,name:e.author===c?c:e.author},n):void 0})),(0,r.jsx)("div",{className:"bottom-scroll",ref:l})]}),(0,r.jsx)(f,{conversation:b,isChatWindowOpen:p,inputPlaceholder:n})]})})}},49738:function(e,n,t){t.d(n,{N:function(){return a}});var r=t(85893),i=(t(67294),t(23074)),o=t(39891),a=function(e){var n=e.close,t=e.isVisible;return(0,r.jsxs)(o.u,{backdropClick:n,isVisible:t,children:[(0,r.jsx)("p",{className:"my-4 text-center text-primary",children:"You\u2019re experiencing connnection issues"}),(0,r.jsxs)("div",{className:"my-2 text-center",children:[(0,r.jsx)(i.z,{className:"my-1 w-full max-w-[250px]",onClick:n,children:"Switch to Phone Consultation"}),(0,r.jsx)(i.z,{className:"my-1 w-full max-w-[250px]",variant:i.W.secondary,outline:!0,onClick:n,children:"Continue with Video Visit"})]})]})}},3738:function(e,n,t){t.d(n,{B:function(){return u}});var r=t(85893),i=t(11163),o=t(15428),a=t(23074),c=t(39891),u=function(e){var n=e.close,t=e.isVisible,u=e.isProvider,s=void 0!==u&&u,l=(0,o.Z)().room,f=(0,i.useRouter)();return(0,r.jsxs)(c.u,{backdropClick:n,isVisible:t,children:[(0,r.jsx)("div",{className:"mb-3 border-b border-border-primary",children:(0,r.jsx)("h3",{className:"my-3 px-5",children:s?"End Call for all participants?":"End Call?"})}),(0,r.jsx)("div",{className:"flex mb-5 mx-5 items-center justify-center",children:(0,r.jsx)("div",{className:"mx-2",children:(0,r.jsx)(a.z,{onClick:function(){console.log("EndedCall"),n(),l.disconnect(),s?f.push("/provider/visit-survey/"):f.push("/patient/visit-survey/")},children:s?"End Session":"Leave Call"})})})]})}},9783:function(e,n,t){t.d(n,{X:function(){return i}});var r=t(85893),i=function(e){var n=e.children;return(0,r.jsx)("h1",{className:"my-3 text-2xl text-center text-primary whitespace-pre-wrap",children:n})}},39716:function(e,n,t){t.d(n,{J:function(){return o}});var r=t(85893),i=t(48847),o=function(e){var n=e.className,t=e.name,o=e.outline;return(0,r.jsx)("span",{className:(0,i.WM)(o?"material-icons-outlined":"material-icons",n),children:t})}},48498:function(e,n,t){t.d(n,{I:function(){return c}});var r=t(85893),i=t(48847);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=function(e){var n=e.className,t=e.isDark,c=e.name,u=e.register,s=e.registerOptions,l=a(e,["className","isDark","name","register","registerOptions"]),f=(0,i.WM)("px-3 py-2 border rounded-md",t?"bg-black border-dark":"border-light",n);return(0,r.jsx)("input",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({className:f},u?u(c,s):{},l))}},39891:function(e,n,t){t.d(n,{u:function(){return o}});var r=t(85893),i=t(48847),o=function(e){var n=e.backdropClassName,t=void 0===n?"bg-[#000000BF]":n,o=e.backdropClick,a=e.backgroundClassName,c=void 0===a?"bg-white":a,u=e.children,s=e.isVisible,l=e.modalStyle;return s&&(0,r.jsx)("div",{className:(0,i.WM)("fixed inset-0 z-50 overflow-auto flex items-center justify-center",t),onClick:o,children:(0,r.jsx)("div",{className:(0,i.WM)("relative w-full mx-10 max-w-sm m-auto rounded-lg",c),style:l,onClick:function(e){e.stopPropagation()},children:u})})}},57871:function(e,n,t){t.d(n,{O:function(){return i}});var r=t(85893),i=function(e){var n=e.className;return e.inverted?(0,r.jsx)("img",{alt:"Powered by Twilio (white)",className:n,src:"/powered-by-twilio-white.svg",width:126,height:19}):(0,r.jsx)("img",{alt:"Powered by Twilio",className:n,src:"/powered-by-twilio.svg",width:150,height:40})}},61321:function(e,n,t){t.d(n,{P:function(){return c}});var r=t(85893),i=t(48847);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=function(e){var n,t,c=e.className,u=e.isDark,s=e.name,l=e.options,f=e.placeholder,d=e.register,v=e.registerOptions,m=void 0===v?{}:v,p=a(e,["className","isDark","name","options","placeholder","register","registerOptions"]);return(0,r.jsxs)("select",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({className:(0,i.WM)("px-3 py-2 border border-light rounded-md text-dark",u&&"bg-black border-dark",c)},d?d(s,m):{},p,{children:[f&&(0,r.jsx)("option",{value:"",children:f}),l.map((function(e){return(0,r.jsx)("option",{value:e.value,children:null!==(n=e.label)&&void 0!==n?n:e.value},null!==(t=e.label)&&void 0!==t?t:e.value)}))]}))}},67872:function(e,n,t){t.d(n,{H:function(){return a}});var r=t(85893),i=t(48847),o=t(23074),a=function(e){var n=e.containerClass,t=e.addParticipant,a=e.flipCamera,c=e.toggleAudio,u=e.toggleChat,s=e.toggleScreenShare,l=e.toggleSettings,f=e.toggleVideo,d=e.toggleEndCallModal,v=e.isMuted,m=e.isVideoStopped,p="mx-1.5";return(0,r.jsxs)("div",{className:(0,i.WM)("mx-auto flex px-2 py-4 justify-between",n),children:[t&&(0,r.jsx)(o.z,{className:p,icon:"person_add",variant:o.W.tertiary,onClick:t}),u&&(0,r.jsx)(o.z,{className:p,icon:"chat_bubble_outline",variant:o.W.tertiary,onClick:u}),s&&(0,r.jsx)(o.z,{className:p,icon:"present_to_all",variant:o.W.tertiary,onClick:s}),f&&(0,r.jsx)(o.z,{className:p,icon:m?"videocam_off":"videocam",variant:o.W.tertiary,onClick:f}),c&&(0,r.jsx)(o.z,{className:p,icon:v?"mic_off":"mic",variant:o.W.tertiary,onClick:c}),a&&(0,r.jsx)(o.z,{className:p,icon:"flip_camera_ios",variant:o.W.tertiary,onClick:a}),l&&(0,r.jsx)(o.z,{className:p,icon:"settings",iconType:"outline",variant:o.W.tertiary,onClick:l}),d&&(0,r.jsx)(o.z,{className:p,icon:"call_end",onClick:d})]})}},1438:function(e,n,t){t.d(n,{lA:function(){return r},J$:function(){return i},j4:function(){return o},p8:function(){return a},Do:function(){return c},sL:function(){return u},LX:function(){return s},bo:function(){return l},Y8:function(){return f},l4:function(){return d},aE:function(){return v},DF:function(){return m}});var r={width:1280,height:720,frameRate:24},i="TwilioVideoApp-selectedAudioInput",o="TwilioVideoApp-selectedAudioOutput",a="TwilioVideoApp-selectedVideoInput",c="TwilioVideoApp-selectedBackgroundSettings",u="TelehealthUser",s="TelehealthVisit",l="CurrentVisitId",f="PatientInfo",d="HealthInfo",v="audio/*, image/*, text/*, video/*, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document .xslx, .ppt, .pdf, .key, .svg, .csv",m={trackSwitchOffMode:void 0,dominantSpeakerPriority:"standard",bandwidthProfileMode:"collaboration",maxAudioBitrate:"16000",contentPreferencesMode:"auto",clientTrackSwitchOffControl:"auto",roomType:"group"}},51502:function(e,n){n.Z={getFromStorage:function(e,n){try{var t=window.localStorage.getItem(e);if(t){var r=JSON.parse(t);return Promise.resolve(r)}}catch(i){return console.log(i),Promise.resolve(n)}},saveToStorage:function(e,n){return null==n?window.localStorage.removeItem(e):window.localStorage.setItem(e,JSON.stringify(n)),Promise.resolve()},removeFromStorage:function(e,n){if(e)try{return Array.isArray(e)&&e.length?e.forEach((function(e){window.localStorage.removeItem(e)})):window.localStorage.removeItem(e),Promise.resolve()}catch(t){console.log("Failed to Remove Key from localStorage: ",t),Promise.resolve(n)}}}},43820:function(e,n,t){t.d(n,{X:function(){return r}});var r={backendRoot:"http://localhost:3001",token:{get:"/visit/token",validate:"/token/validate"},visits:{list:"/visits",get:"/visits/{id}",token:"/visit/token",invite:"/visit/invite",patientRoomToken:"/visit/room",providerRoomToken:"/visit/provider-room",recording:"/visit/recording"},sms:"/send-sms",get:function(e){return"".concat(r.backendRoot).concat(e)}}},51582:function(e,n,t){t.d(n,{KX:function(){return s},R:function(){return l}});var r=t(85893),i=t(67294),o=t(1438),a={id:"guest",name:"Guest",isAuthenticated:!1,role:"guest",token:null},c=t(51502),u=(0,i.createContext)(null);function s(e){var n=(0,i.useState)(a),t=n[0],s=n[1],l=(0,i.useState)(null),f=l[0],d=l[1];return(0,i.useEffect)((function(){c.Z.getFromStorage(o.sL,a).then((function(e){if(e!==a)return s(e),c.Z.getFromStorage(o.LX)})).then((function(e){return d(e)}))}),[s,d]),(0,r.jsx)(u.Provider,{value:{user:t,visit:f,setVisit:d},children:e.children})}function l(){var e=(0,i.useContext)(u);if(!e)throw new Error("useVisitContext must be used within the VisitContextProvider");return e}},48847:function(e,n,t){t.d(n,{tq:function(){return u},po:function(){return s},dz:function(){return l},$l:function(){return d},b5:function(){return m},WM:function(){return h},aK:function(){return b},CU:function(){return g},_D:function(){return y},G3:function(){return w},xv:function(){return x}});var r=t(35666),i=t.n(r),o=t(90111);function a(e,n,t,r,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function c(e){a(o,r,i,c,u,"next",e)}function u(e){a(o,r,i,c,u,"throw",e)}c(void 0)}))}}var u="undefined"!==typeof navigator&&"string"===typeof navigator.userAgent&&/Mobile/.test(navigator.userAgent);function s(e){if(!(0,o.P)(e))return e;var n={};for(var t in e){var r=e[t];"undefined"!==typeof r&&(n[t]=s(r))}return n}function l(){return f.apply(this,arguments)}function f(){return(f=c(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:return n=e.sent,e.abrupt("return",{audioInputDevices:n.filter((function(e){return"audioinput"===e.kind})),videoInputDevices:n.filter((function(e){return"videoinput"===e.kind})),audioOutputDevices:n.filter((function(e){return"audiooutput"===e.kind})),hasAudioInputDevices:n.some((function(e){return"audioinput"===e.kind})),hasVideoInputDevices:n.some((function(e){return"videoinput"===e.kind}))});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=c(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.permissions){e.next=13;break}return e.prev=1,e.next=4,navigator.permissions.query({name:n});case 4:return t=e.sent,e.abrupt("return","denied"===t.state);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",!1);case 11:e.next=14;break;case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function m(){return p.apply(this,arguments)}function p(){return(p=c(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.mediaDevices){e.next=12;break}return e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(){return!0})).catch((function(e){return console.log("Error requesting audio and video: ".concat(e)),!1}));case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",Promise.resolve(!1));case 10:e.next=13;break;case 12:return e.abrupt("return",Promise.resolve(!1));case 13:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function h(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}var b=/^[A-Za-z]+$/i,g=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,y=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,w=/^\d{5}$/,x=["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]}}]);