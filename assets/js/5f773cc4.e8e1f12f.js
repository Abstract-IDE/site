"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[368],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(g,l(l({ref:e},c),{},{components:n})):a.createElement(g,l({ref:e},c))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8258:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},l="Install Abstract",o={unversionedId:"getting-started/installation/abstract",id:"getting-started/installation/abstract",title:"Install Abstract",description:"Requirements",source:"@site/docs/getting-started/installation/abstract.md",sourceDirName:"getting-started/installation",slug:"/getting-started/installation/abstract",permalink:"/site/docs/getting-started/installation/abstract",draft:!1,editUrl:"https://github.com/Abstract-IDE/site/tree/main/docs/getting-started/installation/abstract.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/site/docs/category/installation"},next:{title:"Install LSP",permalink:"/site/docs/getting-started/installation/lsp"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installing using <code>setup.py</code> script",id:"installing-using-setuppy-script",level:2},{value:"Installing Manually",id:"installing-manually",level:2}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-abstract"},"Install Abstract"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"neovim >= v0.7.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm")," ",(0,i.kt)("inlineCode",{parentName:"li"},"git")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wget")," ",(0,i.kt)("inlineCode",{parentName:"li"},"curl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unzip")," ",(0,i.kt)("inlineCode",{parentName:"li"},"tar")," ",(0,i.kt)("inlineCode",{parentName:"li"},"gzip"))),(0,i.kt)("p",null,"you can install Abstract in two ways,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manually"),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"setup.py")," script")),(0,i.kt)("h2",{id:"installing-using-setuppy-script"},"Installing using ",(0,i.kt)("inlineCode",{parentName:"h2"},"setup.py")," script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python <(curl -s https://raw.githubusercontent.com/Abstract-IDE/Abstract/main/setup.py)\n")),(0,i.kt)("h2",{id:"installing-manually"},"Installing Manually"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Abstract-IDE/Abstract\ncd Abstract\npython setup.py\n")),(0,i.kt)("admonition",{title:"NOTE",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"it could take some time depending on you connection (it's going to install plugins and some Packages).\nSo, be patient and follow the output throws by setup.py script",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"pass ",(0,i.kt)("inlineCode",{parentName:"li"},"--delete 1")," as an argument if you don't want to keep ",(0,i.kt)("inlineCode",{parentName:"li"},".git"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"README.md"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"setup.py")," files. Example:")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python setup.py --delete 1\n"))),(0,i.kt)("admonition",{title:"NOTE",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"we don't install any LSPs or Packages by defualt. You can install it with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")," ",(0,i.kt)("br",null),"\nfor example: to install C/C++'s LS ",(0,i.kt)("inlineCode",{parentName:"p"},":MasonInstall clangd")," ",(0,i.kt)("br",null),"\nmore at ",(0,i.kt)("a",{parentName:"p",href:"/docs/category/examples"},"examples"))))}u.isMDXComponent=!0}}]);