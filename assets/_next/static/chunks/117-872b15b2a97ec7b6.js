"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[117],{75112:function(e,t,r){r.d(t,{l:function(){return u}});var n=r(85893),a=r(67294),i=r(42283),s=r(48847),l=function(e){var t=e.children,r=e.pattern,a=e.required;return(0,n.jsxs)("div",{className:"font-bold text-sm text-primary",children:[a&&"Required",r===s.aK&&"Letters only",r===s.CU&&"Email address must be valid",r===s._D&&"Phone number must be valid",r===s.G3&&"Zip must be valid",t]})};function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}var u=function(e){var t=e.className,r=e.defaultValues,o=void 0===r?{}:r,u=e.children,m=e.onChange,d=void 0===m?null:m,p=e.onSubmit,f=(0,i.cI)({defaultValues:o}),x=f.watch,h=f.register,v=f.handleSubmit,b=f.formState.errors;return(0,a.useEffect)((function(){var e=x((function(e,t){t.name,t.type;d&&d(e)}));return function(){return e.unsubscribe()}}),[d,x]),(0,n.jsx)("form",{className:(0,s.WM)(t),onSubmit:v(p),children:a.Children.map(u,(function(e){var t,r,i;return(null===e||void 0===e?void 0:e.props.name)?(0,n.jsxs)(n.Fragment,{children:[a.createElement(e.type,c({},c({},e.props,{register:h,key:e.props.name}))),(null===(t=e.props.registerOptions)||void 0===t?void 0:t.required)&&b[e.props.name]&&"required"===b[e.props.name].type&&(0,n.jsx)(l,{required:!0}),(null===(r=e.props.registerOptions)||void 0===r?void 0:r.pattern)&&b[e.props.name]&&"pattern"===b[e.props.name].type&&(0,n.jsx)(l,{pattern:null===(i=e.props.registerOptions)||void 0===i?void 0:i.pattern})]}):e}))})}},3130:function(e,t,r){r.d(t,{l:function(){return n.l}});var n=r(75112)},41117:function(e,t,r){r.d(t,{Xy:function(){return c},tL:function(){return b},pi:function(){return y},Ar:function(){return w},pm:function(){return O},ls:function(){return D}});var n=r(85893),a=function(e){var t=e.name,r=void 0===t?"Owl Health":t;return(0,n.jsx)("div",{className:"flex items-center justify-center h-16 w-full bg-white shadow-patientHeader",children:(0,n.jsx)("h1",{className:"font-bold text-2xl text-primary",children:r})})},i=r(67294),s=r(56419),l=r(39716),o=r(18657),c=function(e){var t=e.onSubmit,r=(0,i.useState)(""),a=r[0],c=(r[1],(0,i.useState)("")),u=c[0],m=(c[1],(0,i.useState)("")),d=m[0],p=(m[1],(0,i.useState)([{name:"Attached_File_Name.jpg"}])),f=p[0];p[1];return(0,n.jsxs)("form",{className:"flex flex-col h-full",onSubmit:function(e){e.preventDefault(),t({conditions:a,medications:u,reason:d,files:f})},children:[(0,n.jsx)("p",{className:"text-center text-dark",children:"Tell the doctor a little more about why you\u2019re visiting today"}),(0,n.jsx)(o.g,{className:"my-2",placeholder:"Preexisting Conditions"}),(0,n.jsx)(o.g,{className:"my-2",placeholder:"Current Medications"}),(0,n.jsx)(o.g,{className:"my-2",placeholder:"Reason for visit (symptoms, etc - this is optional)"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"my-3 text-dark",children:"Would you like to share a file, such as a photo, form, or test result?"}),(0,n.jsxs)("div",{className:"mx-auto max-w-[300px]",children:[f.map((function(e,t){return(0,n.jsxs)("a",{className:"flex rounded-lg my-3 border border-link py-3 px-4 text-link text-xs items-center cursor-pointer",download:!0,children:[(0,n.jsx)("span",{className:"flex-grow underline",children:e.name}),(0,n.jsx)(l.J,{name:"close",outline:!0})]},t)})),(0,n.jsxs)("a",{className:"text-link text-xs flex items-center",children:[(0,n.jsx)(l.J,{name:"add",outline:!0})," Attach a File"]})]})]}),(0,n.jsx)("div",{className:"mt-5 text-center",children:(0,n.jsxs)("label",{className:"text-light",children:[(0,n.jsx)("input",{type:"checkbox"})," I agree to the Terms & Conditions"]})}),(0,n.jsx)("div",{className:"my-5 mx-auto max-w-[250px] w-full",children:(0,n.jsx)(s.z,{type:"submit",className:"w-full",children:"Continue"})})]})},u=r(75112),m=r(48847),d=r(48498);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}function x(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=function(e){e.className;var t=e.label,r=e.name,a=e.register,i=e.registerOptions,s=e.value,l=x(e,["className","label","name","register","registerOptions","value"]);return(0,n.jsxs)("label",{className:"flex items-center my-1",children:[(0,n.jsx)("input",f({className:"ml-3 mr-2",type:"radio",name:r,value:s},a?a(r,i):{},l)),t]})},v=r(61321),b=function(e){var t=e.onSubmit,r=(0,i.useState)({}),a=r[0],l=r[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"text-dark",children:"This will be shared with your doctor."}),(0,n.jsxs)(u.l,{className:"flex flex-col h-full",onChange:l,onSubmit:t,children:[(0,n.jsx)(d.I,{className:"my-2",name:"firstName",placeholder:"First Name",registerOptions:{required:!0,pattern:m.aK}}),(0,n.jsx)(d.I,{className:"my-2",name:"lastName",placeholder:"Last Name",registerOptions:{required:!0,pattern:m.aK}}),(0,n.jsx)(d.I,{className:"my-2",name:"phoneNumber",placeholder:"Phone Number",registerOptions:{required:!0,pattern:m._D}}),(0,n.jsx)(d.I,{type:"email",name:"email",className:"my-2",placeholder:"Email",registerOptions:{required:!0,pattern:m.CU}}),(0,n.jsx)("div",{className:"mt-3",children:"Will you need a translator?"}),(0,n.jsx)(h,{name:"needTranslator",label:"No",value:"No"}),(0,n.jsx)(h,{name:"needTranslator",label:"Yes",value:"Yes"}),"Yes"===a.needTranslator&&(0,n.jsx)(v.P,{className:"my-2",placeholder:"Language",options:[{value:"Spanish "}],name:"language"}),(0,n.jsx)("div",{className:"mt-4",children:"I am"}),(0,n.jsx)(h,{name:"gender",label:"Male",value:"Male"}),(0,n.jsx)(h,{name:"gender",label:"Female",value:"Female"}),(0,n.jsx)(h,{name:"gender",label:"Other",value:"Other"}),(0,n.jsx)("div",{className:"my-5 mx-auto max-w-[250px] w-full",children:(0,n.jsx)(s.z,{type:"submit",className:"w-full",children:"Continue"})})]})]})},j=r(3130),y=function(e){var t=e.onSubmit;return(0,n.jsxs)(j.l,{className:"flex flex-col h-full",onSubmit:t,children:[(0,n.jsx)("div",{className:"mt-2",children:"Do you have insurance?"}),(0,n.jsx)(h,{name:"haveInsurance",label:"Yes",value:"Yes"}),(0,n.jsx)(h,{name:"haveInsurance",label:"No",value:"No"}),(0,n.jsx)(d.I,{className:"my-2",placeholder:"Member ID",name:"memberId"}),(0,n.jsx)(v.P,{className:"my-2",name:"healthPlan",placeholder:"Health Plan",options:[{value:"Plan 1"}]}),(0,n.jsx)("div",{className:"mt-2",children:"Are you the primary member?"}),(0,n.jsx)(h,{name:"isPrimaryMember",label:"Yes",value:"Yes"}),(0,n.jsx)(h,{name:"isPrimaryMember",label:"No",value:"No"}),(0,n.jsx)("div",{className:"my-5 mx-auto max-w-[250px] w-full",children:(0,n.jsx)(s.z,{type:"submit",className:"w-full",children:"Continue"})})]})},g=r(9783),N=r(57871),w=function(e){var t=e.children,r=e.title;return(0,n.jsxs)("div",{className:"flex flex-col h-full",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a,{})}),(0,n.jsxs)("div",{className:"max-w-sm w-full mx-auto flex flex-grow justify-center md:items-center lg:items-center xl:items-center",children:[r&&(0,n.jsx)(g.X,{children:r}),(0,n.jsx)("div",{children:t})]}),(0,n.jsx)("footer",{className:"pt-2 pb-5",children:(0,n.jsx)(N.O,{className:"mx-auto"})})]})},O=function(e){e.onSubmit;var t=(0,i.useRef)(null);return(0,n.jsxs)("div",{className:"border-2 border-primary rounded-md flex flex-col items-center justify-center h-[225px] w-[225px] cursor-pointer",onClick:function(){var e;return null===t||void 0===t||null===(e=t.current)||void 0===e?void 0:e.click()},children:[(0,n.jsx)("img",{className:"mb-6",src:"/icons/upload.svg",height:48,width:69}),(0,n.jsx)("input",{ref:t,className:"hidden",type:"file",accept:"image/*"}),(0,n.jsx)("div",{className:"text-primary",children:"Upload Image"}),(0,n.jsx)("div",{className:"text-dark",children:"Size limit: 4mb"})]})},P=r(51582),S=r(4051),k=r(15428);var C=r(63020),E=r(49738),I=r(39891),F=function(e){var t=e.close,r=e.isVisible,a=(0,i.useState)("SMS"),l=a[0],o=a[1],c=(0,i.useState)(""),u=c[0],m=c[1];return(0,n.jsxs)(I.u,{backdropClick:t,isVisible:r,children:[(0,n.jsx)("div",{className:"mb-3 border-b border-border-primary",children:(0,n.jsx)("h3",{className:"my-3 px-5",children:"Invite to Visit"})}),(0,n.jsxs)("form",{className:"py-3 px-5",onSubmit:function(e){e.preventDefault(),console.log(l,u),m(""),t()},children:[(0,n.jsxs)("div",{className:"flex mb-5 items-center justify-center",children:[(0,n.jsx)("div",{className:"flex-grow",children:(0,n.jsx)("label",{className:"font-bold",children:"Invite Via:"})}),(0,n.jsx)("div",{className:"flex-grow",children:(0,n.jsx)(v.P,{className:"w-full",options:[{value:"SMS"}],value:l,onChange:function(e){return o(e.target.value)}})})]}),(0,n.jsx)("div",{className:"my-5",children:(0,n.jsx)(d.I,{className:"w-full",placeholder:"Phone Number",value:u,onChange:function(e){return m(e.target.value)}})}),(0,n.jsx)("div",{className:"my-2 text-center",children:(0,n.jsx)(s.z,{type:"submit",children:"Invite"})})]})]})},M=r(67872),V=r(65398),_=function(e){var t=e.name,r=e.hasAudio,a=e.hasVideo,s=e.isProvider,o=e.isOverlap,c=e.isSelf,u=e.participant,d=(0,i.useState)(null),p=d[0],f=d[1],x=(0,i.useState)(!1),h=x[0],v=x[1],b=o?"w-[92px]":s?"w-[405px]":"w-[274px]",j=o?"h-[122px]":s?"h-[234px]":"h-[364px]";return(0,i.useEffect)((function(){f(null!==p&&!r);var e=setTimeout((function(){f(!1)}),3e3);return function(){return clearTimeout(e)}}),[r,p]),(0,n.jsxs)("div",{className:"mx-auto relative w-max group",children:[!c&&(0,n.jsx)("div",{className:"absolute inset-0 text-right w-full flex justify-end group-hover:bg-gradient-to-b from-gray-700 via-transparent to-transparent",children:(0,n.jsx)("div",{className:(0,m.WM)("p-1",!h&&"hidden group-hover:block"),children:(0,n.jsx)("button",{className:(0,m.WM)("border-0 bg-transparent rotate-45 p-2",h?"text-primary":"text-white"),onClick:function(){return v(!h)},children:(0,n.jsx)(l.J,{name:"push_pin",outline:!h})})})}),p&&(0,n.jsx)("div",{className:"absolute top-0 bottom-0 left--2 right--2 flex items-center justify-center w-full",children:(0,n.jsx)("div",{className:"bg-[#000000BF] text-white h-min text-center flex-grow py-4",children:"You have been muted"})}),(0,n.jsxs)("div",{className:"flex items-center justify-center bg-dark text-white text-2xl overflow-hidden ".concat(j," ").concat(b),children:[!a&&t,a&&(0,n.jsx)(V.Z,{participant:u,videoOnly:!1,enableScreenShare:!1,videoPriority:"high",isLocalParticipant:c})]}),(0,n.jsxs)("div",{className:"absolute bottom-0 right-0 text-white bg-[#00000082] px-2 py-1 flex items-center",children:[(0,n.jsx)(l.J,{className:(0,m.WM)("text-md",!r&&"text-primary"),name:"mic"}),a?!o&&t:(0,n.jsx)(l.J,{className:"text-md text-primary",name:"videocam_off"})]})]})},A=r(610);function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));var t=function(){p(!d)},r=(0,i.useState)(!0),a=r[0],l=r[1],o=(0,i.useState)(!0),c=o[0],u=o[1],m=(0,i.useState)(!1),d=m[0],p=m[1],f=(0,i.useState)(!1),x=f[0],h=f[1],v=function(){var e=(0,k.Z)().room,t=(0,i.useState)("disconnected"),r=t[0],n=t[1];return(0,i.useEffect)((function(){if(e){var t=function(){return n(e.state)};return t(),e.on("disconnected",t).on("reconnected",t).on("reconnecting",t),function(){e.off("disconnected",t).off("reconnected",t).off("reconnecting",t)}}}),[e]),r}(),b=(0,P.R)(),j=b.user,y=b.visit,g=(0,S.Z)(),w=(0,k.Z)().room,O=(0,A.Z)(),I=O.setIsChatWindowOpen,V=O.isChatWindowOpen,D=(0,i.useState)({patientName:null,providerName:null,patientParticipant:null,providerParticipant:null}),W=D[0],q=D[1];return(0,i.useEffect)((function(){w&&q((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){T(e,t,r[t])}))}return e}({},e,{patientParticipant:w.localParticipant,providerParticipant:g.find((function(e){return e.identity!=w.localParticipant.identity}))})}))}),[g,w]),(0,i.useEffect)((function(){W.patientParticipant&&W.patientParticipant.videoTracks.forEach((function(e){c?e.track.enable():e.track.disable()}))}),[c]),(0,i.useEffect)((function(){W.patientParticipant&&W.patientParticipant.audioTracks.forEach((function(e){a?e.track.enable():e.track.disable()}))}),[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"bg-secondary flex flex-col h-full items-center",children:[(0,n.jsx)("div",{className:"py-5",children:(0,n.jsx)(N.O,{inverted:!0})}),"connected"==v?V?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"flex",children:(0,n.jsxs)("div",{className:"relative",children:[W.providerParticipant&&(0,n.jsx)(_,{name:y.providerName,hasAudio:!0,hasVideo:!0,isProvider:!0,participant:W.providerParticipant}),(0,n.jsx)("div",{className:"absolute top-1 right-1",children:W.patientParticipant&&(0,n.jsx)(_,{name:y.patientName,hasAudio:a,hasVideo:c,isOverlap:!0,isSelf:!0,participant:W.patientParticipant})}),(0,n.jsx)(s.z,{className:"absolute left-4 bottom-3",icon:"chat_bubble",variant:s.W.tertiary,onClick:function(){return I(!V)}})]})}),(0,n.jsx)("div",{className:"flex-grow w-full",children:(0,n.jsx)(C.e,{close:function(){return I(!1)},userName:j.name,userRole:j.role,inputPlaceholder:"Message to ".concat(y.providerName)})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex-grow",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-evenly h-full",children:[W.patientParticipant&&(0,n.jsx)(_,{name:y.patientName,hasAudio:a,hasVideo:c,isSelf:!0,isProvider:!1,participant:W.patientParticipant}),W.providerParticipant&&(0,n.jsx)(_,{name:y.providerName,hasAudio:!0,hasVideo:!0,isProvider:!0,isSelf:!1,participant:W.providerParticipant})]}),V&&(0,n.jsx)(s.z,{icon:"chat_bubble_outline",onClick:function(){return I(!V)}})]}),(0,n.jsx)(M.H,{containerClass:"mb-5 bg-[#FFFFFF4A] rounded-lg",addParticipant:t,flipCamera:function(){return h(!0)},toggleAudio:function(){return l(!a)},toggleChat:function(){return I(!V)},toggleVideo:function(){return u(!c)}})]}):(0,n.jsx)(n.Fragment,{})]}),(0,n.jsx)(E.N,{close:function(){return h(!1)},isVisible:x}),(0,n.jsx)(F,{close:t,isVisible:d})]})}},18657:function(e,t,r){r.d(t,{g:function(){return l}});var n=r(85893),a=r(48847);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=function(e){var t=e.className,r=e.name,l=e.register,o=e.registerOptions,c=s(e,["className","name","register","registerOptions"]);return(0,n.jsx)("textarea",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({className:(0,a.WM)("px-3 py-2 border border-light rounded-md",t)},l?l(r,o):{},c))}}}]);