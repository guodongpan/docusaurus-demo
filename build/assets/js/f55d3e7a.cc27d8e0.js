"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},l="\u90e8\u7f72\u4f60\u7684\u7f51\u7ad9",s={unversionedId:"tutorial-basics/deploy-your-site",id:"tutorial-basics/deploy-your-site",title:"\u90e8\u7f72\u4f60\u7684\u7f51\u7ad9",description:"Docusaurus\u662f\u4e00\u4e2a\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668(\u4e5f\u79f0\u4e3aJamstack)\u3002",source:"@site/docs/tutorial-basics/deploy-your-site.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/deploy-your-site",permalink:"/docs/tutorial-basics/deploy-your-site",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/deploy-your-site.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Markdown \u529f\u80fd",permalink:"/docs/tutorial-basics/markdown-features"},next:{title:"\u606d\u559c\u53d1\u8d22",permalink:"/docs/tutorial-basics/congratulations"}},i={},p=[{value:"\u5efa\u7acb\u4f60\u7684\u7f51\u7ad9",id:"\u5efa\u7acb\u4f60\u7684\u7f51\u7ad9",level:2},{value:"Build your site",id:"build-your-site",level:2},{value:"\u90e8\u7f72\u60a8\u7684\u7ad9\u70b9",id:"\u90e8\u7f72\u60a8\u7684\u7ad9\u70b9",level:2},{value:"Deploy your site",id:"deploy-your-site-1",level:2},{value:"\u90e8\u7f72\u5230github",id:"\u90e8\u7f72\u5230github",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u90e8\u7f72\u4f60\u7684\u7f51\u7ad9"},"\u90e8\u7f72\u4f60\u7684\u7f51\u7ad9"),(0,a.kt)("h1",{id:"deploy-your-site"},"Deploy your site"),(0,a.kt)("p",null,"Docusaurus\u662f\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668"),"(\u4e5f\u79f0\u4e3a",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","Docusaurus is a ",(0,a.kt)("strong",{parentName:"p"},"static-site-generator")," (also called ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")."),(0,a.kt)("p",null,"\u5b83\u5efa\u7acb\u4f60\u7684\u7f51\u7ad9\u4f5c\u4e3a\u7b80\u5355\u7684\u9759\u6001HTML, JavaScript\u548cCSS\u6587\u4ef6",(0,a.kt)("strong",{parentName:"p"},"\u3002",(0,a.kt)("br",{parentName:"strong"}),"It builds your site as simple "),"static HTML, JavaScript and CSS files**."),(0,a.kt)("h2",{id:"\u5efa\u7acb\u4f60\u7684\u7f51\u7ad9"},"\u5efa\u7acb\u4f60\u7684\u7f51\u7ad9"),(0,a.kt)("h2",{id:"build-your-site"},"Build your site"),(0,a.kt)("p",null,"\u5efa\u7acb\u60a8\u7684\u7f51\u7ad9",(0,a.kt)("strong",{parentName:"p"},"\u7528\u4e8e\u751f\u4ea7\u73af\u5883"),":\nBuild your site ",(0,a.kt)("strong",{parentName:"p"},"for production"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,a.kt)("p",null,"\u9759\u6001\u6587\u4ef6\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"\u6587\u4ef6\u5939\u4e2d\u751f\u6210\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","The static files are generated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,a.kt)("h2",{id:"\u90e8\u7f72\u60a8\u7684\u7ad9\u70b9"},"\u90e8\u7f72\u60a8\u7684\u7ad9\u70b9"),(0,a.kt)("h2",{id:"deploy-your-site-1"},"Deploy your site"),(0,a.kt)("p",null,"\u5728\u672c\u5730\u6d4b\u8bd5\u60a8\u7684\u751f\u4ea7\u6784\u5efa:",(0,a.kt)("br",{parentName:"p"}),"\n","Test your production build locally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"build"),"\u6587\u4ef6\u5939\u73b0\u5728\u4f4d\u4e8e",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"\u3002\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder is now served at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"."),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"\u6587\u4ef6\u5939\u4ee5",(0,a.kt)("strong",{parentName:"p"},"\u514d\u8d39"),"\u6216\u975e\u5e38\u4f4e\u7684\u6210\u672c\u90e8\u7f72\u5728",(0,a.kt)("strong",{parentName:"p"},"\u51e0\u4e4e\u4efb\u4f55\u5730\u65b9"),"\uff0c(\u9605\u8bfb",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"\u90e8\u7f72\u6307\u5357")),")\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","You can now deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder ",(0,a.kt)("strong",{parentName:"p"},"almost anywhere")," easily, ",(0,a.kt)("strong",{parentName:"p"},"for free")," or very small cost (read the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"Deployment Guide")),")."),(0,a.kt)("h2",{id:"\u90e8\u7f72\u5230github"},"\u90e8\u7f72\u5230github"),(0,a.kt)("p",null,"1\u3001docusaurus.config.js\u6587\u4ef6\u4e2d\uff0c\u6539baseUrl\u4e3a\u4f60\u7684github\u4ed3\u5e93\u540d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  //   baseUrl: '/', // \u5f00\u53d1\u73af\u5883\n  baseUrl: '/docusaurus-demo/', // \u751f\u4ea7\u73af\u5883\n}\n")),(0,a.kt)("p",null,"2\u3001\u5c06build\u6587\u4ef6\u53d6\u6d88\u5ffd\u7565\uff0c\u5c31\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u6587\u4ef6\u5939push\u5230\u4ed3\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# /build\n")),(0,a.kt)("p",null,"3\u3001\u63d0\u4ea4\u4ee3\u7801"),(0,a.kt)("p",null,"\u751f\u6210ssh\u5bc6\u94a5\uff0c\u6dfb\u52a0\u516c\u94a5\u5230github"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ssh-keygen -t ed25519 -C "xxx@xxx.com"\n')),(0,a.kt)("p",null,"\u63d0\u4ea4\u4ee3\u7801\u5230github\u4ed3\u5e93"),(0,a.kt)("p",null,"4\u3001\u9009\u62e9\u8bbe\u7f6e\u5f00\u542fpages\u9875"),(0,a.kt)("p",null,"\u5148\u9009\u62e9Github Actions\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u9009\u62e9\u914d\u7f6e Jekyll\u3002"),(0,a.kt)("p",null,"\u4fee\u6539\u8fd9\u4e2a\u914d\u7f6e\u9879\u4e3a\uff1a source: ./build"),(0,a.kt)("p",null,"\u63d0\u4ea4\u4f1a\u751f\u6210 .github/workflows/jekyll-gh-pages.yml\u6587\u4ef6"),(0,a.kt)("p",null,".github/workflows/jekyll-gh-pages.yml\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'# Sample workflow for building and deploying a Jekyll site to GitHub Pages\nname: Deploy Jekyll with GitHub Pages dependencies preinstalled\n\non:\n  # Runs on pushes targeting the default branch\n  push:\n    branches: ["master"]\n\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n\n# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages\npermissions:\n  contents: read\n  pages: write\n  id-token: write\n\n# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.\n# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.\nconcurrency:\n  group: "pages"\n  cancel-in-progress: false\n\njobs:\n  # Build job\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n      - name: Setup Pages\n        uses: actions/configure-pages@v3\n      - name: Build with Jekyll\n        uses: actions/jekyll-build-pages@v1\n        with:\n          source: ./build\n          destination: ./_site\n      - name: Upload artifact\n        uses: actions/upload-pages-artifact@v1\n\n  # Deployment job\n  deploy:\n    environment:\n      name: github-pages\n      url: ${{ steps.deployment.outputs.page_url }}\n    runs-on: ubuntu-latest\n    needs: build\n    steps:\n      - name: Deploy to GitHub Pages\n        id: deployment\n        uses: actions/deploy-pages@v2\n\n')),(0,a.kt)("p",null,"4\u3001\u518d\u9009\u62e9\u8fd9\u4e2a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5135).Z,width:"806",height:"572"})),(0,a.kt)("p",null,"\u9009\u62e9docs\u6587\u4ef6\u5939\u3002"),(0,a.kt)("p",null,"\u4fdd\u5b58\u3002"),(0,a.kt)("p",null,"\u5c31\u53ef\u4ee5\u8bbf\u95ee\u9875\u9762\u4e86\u3002"),(0,a.kt)("p",null,"\u6539\u5185\u5bb9\u540e."),(0,a.kt)("p",null,"npm run build"),(0,a.kt)("p",null,"git add ."),(0,a.kt)("p",null,"git push"))}d.isMDXComponent=!0},5135:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/deploy-your-site-20230428004330-176e710fca60c949b9171e0f547b1e97.png"}}]);