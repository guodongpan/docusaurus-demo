"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,v=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(v,s(s({ref:t},d),{},{components:n})):r.createElement(v,s({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},s="\u7ba1\u7406\u6587\u7ae0\u7248\u672c",i={unversionedId:"tutorial-extras/manage-docs-versions",id:"tutorial-extras/manage-docs-versions",title:"\u7ba1\u7406\u6587\u7ae0\u7248\u672c",description:"Docusaurus\u53ef\u4ee5\u7ba1\u7406\u591a\u4e2a\u7248\u672c\u7684\u6587\u6863\u3002",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/docs/tutorial-extras/manage-docs-versions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u989d\u5916\u6307\u5357",permalink:"/docs/category/\u989d\u5916\u6307\u5357"},next:{title:"\u7ffb\u8bd1\u4f60\u7684\u7f51\u7ad9",permalink:"/docs/tutorial-extras/translate-your-site"}},l={},p=[{value:"\u521b\u5efa\u6587\u6863\u7248\u672c",id:"\u521b\u5efa\u6587\u6863\u7248\u672c",level:2},{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"\u6dfb\u52a0\u4e00\u4e2a\u7248\u672c\u4e0b\u62c9\u5217\u8868",id:"\u6dfb\u52a0\u4e00\u4e2a\u7248\u672c\u4e0b\u62c9\u5217\u8868",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"\u66f4\u65b0\u73b0\u6709\u7248\u672c",id:"\u66f4\u65b0\u73b0\u6709\u7248\u672c",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7ba1\u7406\u6587\u7ae0\u7248\u672c"},"\u7ba1\u7406\u6587\u7ae0\u7248\u672c"),(0,o.kt)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,o.kt)("p",null,"Docusaurus\u53ef\u4ee5\u7ba1\u7406\u591a\u4e2a\u7248\u672c\u7684\u6587\u6863\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Docusaurus can manage multiple versions of your docs."),(0,o.kt)("h2",{id:"\u521b\u5efa\u6587\u6863\u7248\u672c"},"\u521b\u5efa\u6587\u6863\u7248\u672c"),(0,o.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,o.kt)("p",null,"\u53d1\u5e03\u9879\u76ee\u76841.0\u7248\u672c:",(0,o.kt)("br",{parentName:"p"}),"\n","Release a version 1.0 of your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,o.kt)("p",null,"\u201cdocs\u201d\u6587\u4ef6\u5939\u88ab\u590d\u5236\u5230\u201cversioned_docs/version-1.0\u201d\u548c\u201cversions\u201d\u4e2d\u3002Json\u2019\u88ab\u521b\u5efa\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","The ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,o.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,o.kt)("p",null,"\u4f60\u7684\u6587\u6863\u73b0\u5728\u6709\u4e24\u4e2a\u7248\u672c:",(0,o.kt)("br",{parentName:"p"}),"\n","Your docs now have 2 versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u201c1.0\u201d\u5728\u201chttp://localhost:3000/docs/\u201d\u4e3a1.0\u7248\u672c\u7684\u6587\u6863")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"1.0")," at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/")," for the version 1.0 docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u201c\u5f53\u524d\u201d\u5728\u201chttp://localhost:3000/docs/next/\u201d\u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u5373\u5c06\u5230\u6765\u7684\uff0c\u672a\u53d1\u5e03\u7684\u6587\u6863"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"current")," at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/next/")," for the ",(0,o.kt)("strong",{parentName:"p"},"upcoming, unreleased docs")))),(0,o.kt)("h2",{id:"\u6dfb\u52a0\u4e00\u4e2a\u7248\u672c\u4e0b\u62c9\u5217\u8868"},"\u6dfb\u52a0\u4e00\u4e2a\u7248\u672c\u4e0b\u62c9\u5217\u8868"),(0,o.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,o.kt)("p",null,"\u8981\u5728\u4e0d\u540c\u7248\u672c\u4e4b\u95f4\u65e0\u7f1d\u5bfc\u822a\uff0c\u8bf7\u6dfb\u52a0\u4e00\u4e2a\u7248\u672c\u4e0b\u62c9\u5217\u8868\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","To navigate seamlessly across versions, add a version dropdown."),(0,o.kt)("p",null,"\u4fee\u6539' docusaurus.config.js '\u6587\u4ef6:",(0,o.kt)("br",{parentName:"p"}),"\n","Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,o.kt)("p",null,"\u6587\u6863\u7248\u672c\u4e0b\u62c9\u83dc\u5355\u51fa\u73b0\u5728\u5bfc\u822a\u680f\u4e2d:",(0,o.kt)("br",{parentName:"p"}),"\n","The docs version dropdown appears in your navbar:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docs Version Dropdown",src:n(2958).Z,width:"370",height:"302"})),(0,o.kt)("h2",{id:"\u66f4\u65b0\u73b0\u6709\u7248\u672c"},"\u66f4\u65b0\u73b0\u6709\u7248\u672c"),(0,o.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5728\u5404\u81ea\u7684\u6587\u4ef6\u5939\u4e2d\u7f16\u8f91\u6709\u7248\u672c\u7684\u6587\u6863:",(0,o.kt)("br",{parentName:"p"}),"\n","It is possible to edit versioned docs in their respective folder:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}u.isMDXComponent=!0},2958:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"}}]);