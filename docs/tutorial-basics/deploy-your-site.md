---
sidebar_position: 5
---

# 部署你的网站

# Deploy your site

Docusaurus是一个**静态站点生成器**(也称为**[Jamstack](https://jamstack.org/)**)。  
Docusaurus is a **static-site-generator** (also called **[Jamstack](https://jamstack.org/)**).

它建立你的网站作为简单的静态HTML, JavaScript和CSS文件**。  
It builds your site as simple **static HTML, JavaScript and CSS files**.

## 建立你的网站
## Build your site

建立您的网站**用于生产环境**:
Build your site **for production**:

```bash
npm run build
```

静态文件在`build`文件夹中生成。  
The static files are generated in the `build` folder.

## 部署您的站点
## Deploy your site

在本地测试您的生产构建:  
Test your production build locally:

```bash
npm run serve
```

`build`文件夹现在位于[http://localhost:3000/](http://localhost:3000/)。
The `build` folder is now served at [http://localhost:3000/](http://localhost:3000/).

现在你可以轻松地将`build`文件夹以**免费**或非常低的成本部署在**几乎任何地方**，(阅读**[部署指南](https://docusaurus.io/docs/deployment)**)。    
You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**).
