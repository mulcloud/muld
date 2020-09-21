/*! For license information please see 257.88576fdc.js.LICENSE.txt */
(window.webpackJsonp_trillion_muld=window.webpackJsonp_trillion_muld||[]).push([[257],{4838:(e,t,n)=>{"use strict";n.d(t,{HL:()=>o,vK:()=>r,Lv:()=>a,uD:()=>i});var o="#323233",r="rgba(69, 90, 100, 0.6)",a="#f7f8fa",i="1680px"},7637:(e,t,n)=>{"use strict";var o=n(7294),r=n(6974),a=n(9711),i=n(9163),l=n(8312),c=n(3935);const p=navigator.userAgent.toLowerCase();/ios|iphone|ipod|ipad|android/.test(p);var u=n(3912),s=n(3793),m=n(1169),d=n(8228),f=n(9049),h=n(1511),g=n(8804),b=n(8056),v=n(5652),y=n(1038),w=n(8978),x=n(8749),k=n(4420),_=n(3083),C=n(724),E=n(5561),Z=n(2171),S=n(4225),O=n(8234),P=n(3674),D=n(5523),j=n(6997),N=n(1322),z=n(7568),T=n(2615),L=n(3515),A=n(2325),R=n(1964),I=n(6772),U=n(9238),B=n(954),M=n(558),F=n(5926),J=n(3106),$=n(3268),H=n(3604),K=n(2654),X=n(4414),V=n(9197),W=n(6356),q=n(2682);const G={ActionSheet:l.Z,Box:u.Z,Button:s.Z,Card:m.Z,Cell:d.Z,Checkbox:f.Z,Col:h.Z,CommonLayout:g.Z,CountDown:b.Z,CouponList:v.Z,DatetimePicker:y.Z,Dialog:w.Z,Divider:x.Z,DropdownMenu:k.Z,Empty:_.Z,Field:C.Z,Form:E.Z,Icon:Z.Z,Image:S.Z,List:O.Z,Loading:P.Z,NoticeBar:D.Z,Overlay:j.Z,Picker:N.Z,Popup:z.Z,Progress:T.Z,Rate:L.Z,Search:A.Z,Sidebar:R.Z,Skeleton:I.Z,StackLayout:U.Z,Stepper:B.Z,Steps:M.Z,Sticky:F.Z,Style:J.Z,SubmitBar:$.Z,Swipe:H.Z,Switch:K.Z,Tab:X.Z,Tabbar:V.Z,Tag:W.Z,Uploader:q.Z},Q={defaultLang:"en-US",locales:{"zh-CN":{title:"Muld",description:"移动端组件库",logo:"https://chengfayun.com/static/icon/logo-1.svg",langLabel:"中文",links:[{logo:"https://www.chengfayun.com/static/icon/logo-1.svg",url:"https://github.com/mulcloud/muld"}],nav:[{title:"基础组件",items:[{path:"button",title:"Button 按钮"},{path:"cell",title:"Cell 单元格"},{path:"icon",title:"Icon 图标"},{path:"image",title:"Image 图片"},{path:"col",title:"Layout 布局"},{path:"stack-layout",title:"Stack 布局"},{path:"common-layout",title:"常用布局"},{path:"box",title:"Box 盒"},{path:"popup",title:"Popup 弹出层"},{path:"style",title:"Style 内置样式"}]},{title:"表单组件",items:[{path:"checkbox",title:"Checkbox 复选框"},{path:"field",title:"Field 输入框"},{path:"form",title:"Form 表单"},{path:"datetime-picker",title:"DatetimePicker 时间选择"},{path:"picker",title:"Picker 选择器"},{path:"rate",title:"Rate 评分"},{path:"search",title:"Search 搜索"},{path:"stepper",title:"Stepper 步进器"},{path:"switch",title:"Switch 开关"},{path:"uploader",title:"Uploader 文件上传"}]},{title:"反馈组件",items:[{path:"dialog",title:"Dialog 弹出框"},{path:"action-sheet",title:"ActionSheet 动作面板"},{path:"dropdown-menu",title:"DropdownMenu 下拉菜单"},{path:"loading",title:"Loading 加载"},{path:"overlay",title:"Overlay 遮罩层"}]},{title:"展示组件",items:[{path:"count-down",title:"CountDown 倒计时"},{path:"divider",title:"Divider 分割线"},{path:"empty",title:"Empty 空状态"},{path:"list",title:"List 列表"},{path:"notice-bar",title:"NoticeBar 通知栏"},{path:"progress",title:"Progress 进度条"},{path:"skeleton",title:"Skeleton 骨架屏"},{path:"steps",title:"Steps 步骤条"},{path:"sticky",title:"Sticky 粘性布局"},{path:"swipe",title:"Swipe 轮播"},{path:"tag",title:"Tag 标记"}]},{title:"导航组件",items:[{path:"sidebar",title:"Sidebar 侧边导航"},{path:"tab",title:"Tab 标签页"},{path:"tabbar",title:"Tabbar 标签栏"}]},{title:"业务组件",items:[{path:"card",title:"Card 商品卡片"},{path:"coupon-list",title:"Coupon 优惠券"},{path:"submit-bar",title:"SubmitBar 提交订单栏"}]}]},"en-US":{}}};function Y(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    &.demo-home-nav {\n        .demo-home-nav__title {\n            margin: 24px 0 8px 16px;\n            color: rgba(69, 90, 100, 0.6);\n            font-size: 14px;\n        }\n\n        .demo-home-nav__block {\n            position: relative;\n            display: flex;\n            margin: 0 0 12px;\n            padding-left: 20px;\n            color: #323233;\n            font-weight: 500;\n            font-size: 14px;\n            line-height: 40px;\n            background: #f7f8fa;\n            border-radius: 99px;\n            transition: background 0.3s;\n            cursor: pointer;\n\n            &:hover {\n                background: darken(#f7f8fa, 3%);\n            }\n\n            &:active {\n                background: darken(#f7f8fa, 6%);\n            }\n        }\n\n        .demo-home-nav__icon {\n            position: absolute;\n            top: 50%;\n            right: 16px;\n            width: 16px;\n            height: 16px;\n            margin-top: -8px;\n        }\n    }\n"]);return Y=function(){return e},e}function ee(e){var t=e.lang,n=e.group,r=t?"/"+t:"",a=n.items.map((function(e){return o.createElement("a",{className:"demo-home-nav__block",key:e.path,onClick:function(){var t=window.top.location.host.startsWith("mulcloud")?"/muld/#"+r+"/"+e.path:"/#"+r+"/"+e.path;window.top.location.replace(t)}},e.title)}));return o.createElement(te,{className:"demo-home-nav"},o.createElement("div",{className:"demo-home-nav__title"},n.title),o.createElement("div",{className:"demo-home-nav__group"},a))}var te=i.ZP.div(Y());function ne(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    &.demo-home {\n        box-sizing: border-box;\n        width: 100%;\n        min-height: 100vh;\n        padding: 46px 20px 20px;\n        background: #fff;\n\n        .demo-home__title,\n        .demo-home__desc {\n            padding-left: 16px;\n            font-weight: normal;\n            line-height: 1;\n            user-select: none;\n        }\n\n        .demo-home__title {\n            margin: 0 0 16px;\n            font-size: 32px;\n            text-align: center;\n\n            img,\n            span {\n                display: inline-block;\n                vertical-align: middle;\n            }\n\n            img {\n                width: 32px;\n            }\n\n            span {\n                margin-left: 16px;\n                font-weight: 500;\n            }\n\n            &--small {\n                font-size: 24px;\n            }\n        }\n\n        .demo-home__desc {\n            margin: 0 0 40px;\n            color: rgba(69, 90, 100, 0.6);\n            font-size: 14px;\n        }\n    }\n"]);return ne=function(){return e},e}function oe(){var e=Q.locales["zh-CN"],t=e.nav.map((function(e,t){return o.createElement(ee,{group:e,lang:"zh-CN",key:t})}));return o.createElement(re,{className:"demo-home"},o.createElement("h1",{className:"demo-home__title"},o.createElement("img",{src:e.logo})),t)}var re=i.ZP.div(ne());function ae(e){var t=JSON.parse(localStorage.getItem("muld-components"));return t?t[e]:""}var ie,le,ce=Q,pe=ce.locales,ue=ce.defaultLang;function se(){var e,t=[],n=Object.keys(G),a=pe?Object.keys(pe):[],i={};return t.push({path:"/",element:o.createElement(oe,null)}),t.push({path:"/zh-CN/home",element:o.createElement(oe,null)}),t.push({path:"/zh-CN/changelog",element:o.createElement(oe,null)}),n.forEach((function(e){var n=function(e,t="-"){return e.replace(/([a-z\d])([A-Z])/g,"$1"+t+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+t+"$2").toLowerCase()}(e),r=G[e];a.length?a.forEach((function(a){t.push({name:a+"/"+n,path:"/"+a+"/"+n,element:o.createElement(r,null),meta:{name:e,lang:a}}),i["/"+a+"/"+n]=e})):(t.push({name:e,path:"/"+n,element:o.createElement(r,null),meta:{name:e}}),i["/"+n]=e)})),t.push({element:o.createElement(r.Fg,{to:"/"})}),e=i,localStorage.setItem("muld-components",JSON.stringify(e)),t}ie=ue,le=localStorage.getItem("muld-cli-lang"),le||navigator.language&&navigator.language.indexOf("zh-");var me=n(9548);function de(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    &.demo-nav {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 56px;\n        background-color: #fff;\n\n        .demo-nav__title {\n            font-weight: 500;\n            font-size: 17px;\n            text-transform: capitalize;\n        }\n\n        .demo-nav__back {\n            position: absolute;\n            top: 16px;\n            left: 16px;\n            width: 24px;\n            height: 24px;\n            cursor: pointer;\n        }\n    }\n"]);return de=function(){return e},e}function fe(e){var t=(0,r.s0)(),n=ae((0,r.TH)().pathname)||"";return n?o.createElement(he,{className:"demo-nav"},o.createElement("div",{className:"demo-nav__title"},n),o.createElement("svg",{className:"demo-nav__back",viewBox:"0 0 1000 1000",onClick:function(){t(-1)}},o.createElement("path",{fill:"#969799",fillRule:"evenodd",d:"M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"}))):null}var he=i.ZP.div(de()),ge=n(5271);function be(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    body {\n        min-width: 100vw;\n    }\n\n    ::-webkit-scrollbar {\n        width: 0;\n        background: transparent;\n    }\n"]);return be=function(){return e},e}function ve(){return(0,r.V$)(se())}function ye(){return o.createElement("div",null,o.createElement(ge.Z,null),o.createElement(me.X,null),o.createElement(we,null),o.createElement(a.UT,null,o.createElement(fe,null),o.createElement(ve,null)))}var we=(0,i.vJ)(be());(0,c.render)(o.createElement(o.Fragment,null,o.createElement(ye,null)),document.getElementById("app"))},5633:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(7294),r=n(9163),a=n(4838);function i(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    &.mul-doc-demo-block {\n        .mul-doc-demo-block__title {\n            margin: 0;\n            padding: 32px 16px 16px;\n            color: ",";\n            font-weight: normal;\n            font-size: 14px;\n            line-height: 16px;\n        }\n\n        .mul-doc-demo-block__card {\n            margin: 12px 12px 0;\n            overflow: hidden;\n        }\n\n        .mul-doc-demo-block__title + .mul-doc-demo-block__card {\n            margin-top: 0;\n        }\n\n        &:first-of-type {\n            .mul-doc-demo-block__title {\n                padding-top: 20px;\n            }\n        }\n    }\n"]);return i=function(){return e},e}function l(e){var t=e.card,n=e.title,r=e.children,a=t?o.createElement("div",{className:"mul-doc-demo-block__card"},t):r;return o.createElement(c,{className:"mul-doc-demo-block"},o.createElement("h2",{className:"mul-doc-demo-block__title"},n),o.createElement("div",{className:"mul-doc-demo-block__card"},a))}var c=r.ZP.div(i(),a.vK)},6401:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(7294),r=n(9163),a=n(4184),i=n.n(a);function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    &.mul-doc-demo-section {\n        box-sizing: border-box;\n        min-height: calc(100vh - 56px);\n        padding-bottom: 20px;\n    }\n"]);return l=function(){return e},e}function c(e){return o.createElement(p,{className:i()("mul-doc-demo-section",e.className)},e.children)}var p=r.ZP.section(l())},4184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===a)for(var l in n)o.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},640:(e,t,n)=>{"use strict";var o=n(1742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,l,c,p,u=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),l=document.createRange(),c=document.getSelection(),(p=document.createElement("span")).textContent=e,p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(p),l.selectNodeContents(p),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(o){n&&console.error("unable to copy using execCommand: ",o),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(o){n&&console.error("unable to copy using clipboardData: ",o),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),p&&document.body.removeChild(p),i()}return u}},4300:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(n(7294)),r=a(n(640));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?d(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(){var e,n;p(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return h(d(n=s(this,(e=m(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,l=t.children,c=t.options,p=o.default.Children.only(l),u=(0,r.default)(a,c);i&&i(a,u),p&&p.props&&"function"==typeof p.props.onClick&&p.props.onClick(e)})),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=c(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,a),i&&u(n,i),t}(o.default.PureComponent);t.CopyToClipboard=g,h(g,"defaultProps",{onCopy:void 0,options:void 0})},4855:(e,t,n)=>{"use strict";var o=n(4300).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},1742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);