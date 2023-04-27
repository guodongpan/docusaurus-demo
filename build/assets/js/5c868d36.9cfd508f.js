"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5589],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(g,p(p({ref:t},s),{},{components:a})):r.createElement(g,p({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},p="\u521b\u5efa\u4e00\u4e2a\u9875\u9762",i={unversionedId:"tutorial-basics/create-a-page",id:"tutorial-basics/create-a-page",title:"\u521b\u5efa\u4e00\u4e2a\u9875\u9762",description:"\u5c06Markdown\u6216React\u6587\u4ef6\u6dfb\u52a0\u5230src/pages\u4ee5\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684\u9875\u9762:",source:"@site/docs/tutorial-basics/create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/docs/tutorial-basics/create-a-page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create-a-page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840",permalink:"/docs/category/\u57fa\u7840"},next:{title:"\u521b\u5efa\u4e00\u4e2a\u6587\u6863",permalink:"/docs/tutorial-basics/create-a-document"}},l={},c=[{value:"\u521b\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2aReact\u9875\u9762",id:"\u521b\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2areact\u9875\u9762",level:2},{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"\u521b\u5efa\u60a8\u7684\u7b2c\u4e00\u4e2aMarkdown\u9875\u9762",id:"\u521b\u5efa\u60a8\u7684\u7b2c\u4e00\u4e2amarkdown\u9875\u9762",level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u521b\u5efa\u4e00\u4e2a\u9875\u9762"},"\u521b\u5efa\u4e00\u4e2a\u9875\u9762"),(0,n.kt)("h1",{id:"create-a-page"},"Create a Page"),(0,n.kt)("p",null,"\u5c06Markdown\u6216React\u6587\u4ef6\u6dfb\u52a0\u5230src/pages\u4ee5\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684\u9875\u9762:",(0,n.kt)("br",{parentName:"p"}),"\n","Add ",(0,n.kt)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,n.kt)("strong",{parentName:"p"},"standalone page"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,n.kt)("h2",{id:"\u521b\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2areact\u9875\u9762"},"\u521b\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2aReact\u9875\u9762"),(0,n.kt)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,n.kt)("p",null,"\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6:",(0,n.kt)("br",{parentName:"p"}),"\n","Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,n.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u5728",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-react-page"},"http://localhost:3000/my-react-page"),"\u4e0a\u627e\u5230\u65b0\u7684\u9875\u9762\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","A new page is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-react-page"},"http://localhost:3000/my-react-page"),"."),(0,n.kt)("h2",{id:"\u521b\u5efa\u60a8\u7684\u7b2c\u4e00\u4e2amarkdown\u9875\u9762"},"\u521b\u5efa\u60a8\u7684\u7b2c\u4e00\u4e2aMarkdown\u9875\u9762"),(0,n.kt)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,n.kt)("p",null,"\u5728' src/pages/my-markdown-page.md '\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6:",(0,n.kt)("br",{parentName:"p"}),"\n","Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,n.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u5728",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-markdown-page"},"http://localhost:3000/my-markdown-page"),"\u4e0a\u627e\u5230\u65b0\u7684\u9875\u9762\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","A new page is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-markdown-page"},"http://localhost:3000/my-markdown-page"),"."))}u.isMDXComponent=!0}}]);