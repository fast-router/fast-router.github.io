"use strict";(self.webpackChunkfast_router_docs=self.webpackChunkfast_router_docs||[]).push([[846],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i="useLocationState",c={unversionedId:"fast-react-router/useLocationState()",id:"fast-react-router/useLocationState()",title:"useLocationState",description:"The useLocationState hook is there for getting the current location state.",source:"@site/docs/fast-react-router/useLocationState().md",sourceDirName:"fast-react-router",slug:"/fast-react-router/useLocationState()",permalink:"/docs/fast-react-router/useLocationState()",draft:!1,editUrl:"https://github.com/fast-router/fast-router/tree/main/docs/docs/fast-react-router/useLocationState().md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"navigate()",permalink:"/docs/fast-react-router/navigate()"},next:{title:"useParams()",permalink:"/docs/fast-react-router/useParams()"}},s={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uselocationstate"},"useLocationState"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useLocationState")," hook is there for getting the current location state.\nIt can be used like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type Props = {\n    myBoolValue: boolean;\n}\n\nfunction MyComponent() {\n    const myBoolValueFromState = useLocationState<Props, boolean>(x => x.myBoolvalue);\n\n    ...\n}\n")),(0,o.kt)("p",null,"It only listen to the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.history.state.[yourSelectedProp]")," and cause only a new render, if the selected prop changes.\nIf is a type safe function that first checks, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.history.state")," is filled. If it is not filled it returns null, else it returns the result of the given select function.\nIf you are navigating through the app without changing the selected prop but only changing e. g. the path, search, hash or any other property withinh the state no render will happen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function useLocationState<State, Select>(\n  selectFunction: (state: State) => Select\n) : Select | null\n")))}p.isMDXComponent=!0}}]);