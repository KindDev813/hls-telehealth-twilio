(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[401],{35434:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/patient/visit-survey",function(){return n(24988)}])},54978:function(e,t,n){"use strict";n.d(t,{b:function(){return u}});var r=n(85893),i=(n(67294),n(9783)),u=function(e){var t=e.content,n=e.contentBeforeIcon,u=e.footer,o=e.icon,s=e.title,c=e.titleAfterIcon,l=function(){return(0,r.jsx)("div",{className:"my-3",children:t})};return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center text-center",children:[!c&&(0,r.jsx)(i.X,{children:s}),n&&(0,r.jsx)(l,{}),o&&(0,r.jsx)("div",{className:c||n?"mb-10":"mt-10",children:o}),c&&(0,r.jsx)(i.X,{children:s}),!n&&(0,r.jsx)(l,{}),u&&u]})}},34130:function(e,t,n){"use strict";n.d(t,{c:function(){return v}});var r=n(85893),i=n(11163),u=n(67294),o=n(48847),s=n(54978),c=n(56419);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=function(e){var t,n=e.onChange,i=e.options,u=e.selected;return(0,r.jsx)("div",{className:"flex flex-wrap justify-center",children:i.map((function(e){return(0,r.jsx)("div",{className:(0,o.WM)("border p-2 m-1 rounded-full text-sm cursor-pointer",u.includes(e.value)?"border-primary text-primary":"border-dark text-dark"),onClick:function(){return function(e){var t;t=u.includes(e)?u.filter((function(t){return t!==e})):l(u).concat([e]),n(t)}(e.value)},children:null!==(t=e.label)&&void 0!==t?t:e.value},e.value)}))})},d=n(39716),h=n(18657),f=[{value:"Couldn't hear"},{value:"Other's couldn't hear"},{value:"Video was low quality"},{value:"Video froze or was choppy"},{value:"Couldn't see participants"},{value:"Sound didn't match video"},{value:"Participants couldn't see me"},{value:"Other issue"}],v=function(e){var t=e.isProvider,n=function(e){var n=void 0===e?null:e;null===n||void 0===n||n.preventDefault(),console.log(m,y,w),x(void 0),j([]),N(""),l.push("/".concat(t?"provider":"patient","/visit-survey/thank-you"))},l=(0,i.useRouter)(),v=(0,u.useState)(),m=v[0],x=v[1],p=(0,u.useState)([]),y=p[0],j=p[1],b=(0,u.useState)(""),w=b[0],N=b[1],_=function(e){var t=e.icon;return(0,r.jsx)("button",{type:"button",onClick:function(){x(t),j([]),N(""),"thumb_up"===t&&n()},children:(0,r.jsx)(d.J,{className:(0,o.WM)("text-4xl",t===m&&"text-primary"),name:t,outline:!0})})};return(0,r.jsx)(s.b,{title:"Thank you for your visit!",content:(0,r.jsxs)("form",{onSubmit:n,children:[t?(0,r.jsx)("p",{children:"If you don\u2019t mind, could you tell us about your experience?"}):(0,r.jsx)("p",{children:"We appreciate you scheduling a visit through the Owl Health app. If you don\u2019t mind, could you tell us about how the visit went?"}),(0,r.jsx)("p",{className:"my-4 text-dark",children:"How was the video and audio quality?"}),(0,r.jsxs)("div",{className:"my-4 flex justify-evenly",children:[(0,r.jsx)("div",{children:(0,r.jsx)(_,{icon:"thumb_up"})}),(0,r.jsx)("div",{children:(0,r.jsx)(_,{icon:"thumb_down"})})]}),"thumb_down"===m&&(0,r.jsx)("div",{className:"my-4",children:(0,r.jsx)(a,{selected:y,onChange:j,options:f})}),y.includes("Other issue")&&(0,r.jsx)("div",{className:"my-5",children:(0,r.jsx)(h.g,{className:"w-full",rows:4,placeholder:"Tell us more about the other issues you encountered during the call"})}),"thumb_down"===m&&!!y.length&&(0,r.jsx)(c.z,{className:"my-3",type:"submit",children:"Submit Feedback"})]})})}},24988:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=(n(67294),n(55010)),u=n(34130);t.default=function(){return(0,r.jsx)(i.Ar,{children:(0,r.jsx)(u.c,{})})}},11163:function(e,t,n){e.exports=n(90387)}},function(e){e.O(0,[816,221,946,283,421,10,774,888,179],(function(){return t=35434,e(e.s=t);var t}));var t=e.O();_N_E=t}]);