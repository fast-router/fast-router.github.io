"use strict";(self.webpackChunkfast_router_docs=self.webpackChunkfast_router_docs||[]).push([[355],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=i(r),h=a,d=f["".concat(u,".").concat(h)]||f[h]||l[h]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},c="useSearch()",s={unversionedId:"fast-react-router/useSearch()",id:"fast-react-router/useSearch()",title:"useSearch()",description:"The useSearch hook is there for getting the current search.",source:"@site/docs/fast-react-router/useSearch().md",sourceDirName:"fast-react-router",slug:"/fast-react-router/useSearch()",permalink:"/docs/fast-react-router/useSearch()",draft:!1,editUrl:"https://github.com/fast-router/fast-router/tree/main/docs/docs/fast-react-router/useSearch().md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePathname()",permalink:"/docs/fast-react-router/usePathname()"}},u={},i=[],p={toc:i};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usesearch"},"useSearch()"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useSearch")," hook is there for getting the current search.\nIt only listen to the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.location.search")," and cause only a new render, if the search changes.\nIf you are navigating through the app without changing the search but only changing e. g. the path, state or hash no render will happen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function useSearch() : string\n")))}l.isMDXComponent=!0}}]);