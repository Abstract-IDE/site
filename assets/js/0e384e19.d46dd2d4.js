"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1},a="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Abstract, The NeoVim configuration to achieve the power of Modern IDE.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/site/docs/intro",draft:!1,editUrl:"https://github.com/Abstract-IDE/site/tree/main/docs/intro.md",tags:[],version:"current",lastUpdatedAt:1661019497,formattedLastUpdatedAt:"Aug 20, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/site/docs/category/getting-started"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Abstract, The NeoVim configuration to achieve the power of Modern IDE."),(0,i.kt)("h1",{id:"features"},"Features"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/visualstudio/extensibility/language-server-protocol?view=vs-2022"},"Language Server Protocol")," (LSP)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/debug-adapter-protocol/overview"},"Debug Adapter Protocol")," (DAP)"),(0,i.kt)("li",{parentName:"ol"},"Formatter"),(0,i.kt)("li",{parentName:"ol"},"Linter"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://tree-sitter.github.io/tree-sitter/"},"Treesitter"))),(0,i.kt)("h1",{id:"why-abstract"},"why Abstract?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"It's fast, very fast")," startup time is about 80ms (0.08 second)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Project based config loading")," ( you can define configs in ",(0,i.kt)("inlineCode",{parentName:"li"},".__nvim__.lua")," file in the root of your working project so that you don't have to change the config everytime you work on new/seperate project ",(0,i.kt)("inlineCode",{parentName:"li"},"similar to .editorconfig")," )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Your own custom configs and Mappings")," (if you don't like Abstract's default config/mapping, you can change/override it on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Abstract-IDE/Abstract/blob/main/lua/customs/override_defalut.lua"},"override_defalut.lua")," OR ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.__nvim__.lua")," file )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Separate config file for each plugins")," each plugin has their own config file which is defined in lua/plugins directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Easily Disable plugin")," Abstract's using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wbthomason/packer.nvim"},"packer")," as plugin manager. conmmenting out ",(0,i.kt)("inlineCode",{parentName:"li"},"config")," option from plugin options in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Abstract-IDE/Abstract/blob/main/lua/plugins/packer_nvim.lua"},"packer config file")," will disable that plugin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Easy Installation")," install Abstract with single command")))}u.isMDXComponent=!0}}]);