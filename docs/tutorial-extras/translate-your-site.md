---
sidebar_position: 2
---

# 翻译你的网站

让我们翻译一下docs/intro。从md到法语。  
Let's translate `docs/intro.md` to French.

## 配置i18n  
## Configure i18n

修改' docusaurus.config.js '以增加对' fr '区域设置的支持:  
Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## 翻译文档
## Translate a doc

复制`docs/intro.Md`文件到`i18n/fr`文件夹:  
Copy the `docs/intro.md` file to the `i18n/fr` folder:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

用法语翻译 `i18n/fr/docusaurus-plugin-content-docs/current/intro.md`  
Translate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.

## 启动本地化站点
## Start your localized site

在法语地区启动您的站点:  
Start your site on the French locale:

```bash
npm run start -- --locale fr
```

您的本地化网站可在[http://localhost:3000/fr/](http://localhost:3000/fr/)上访问，并且“入门”页面已被翻译。  
Your localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.

:::caution
注意：
在开发中，您只能同时使用一种语言环境。  
In development, you can only use one locale at a same time.

:::

## 添加Locale下拉列表
## Add a Locale Dropdown

要跨语言无缝导航，请添加locale下拉列表。  
To navigate seamlessly across languages, add a locale dropdown.

修改' docusaurus.config.js '文件:  
Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

区域设置下拉菜单现在出现在导航栏中:  
The locale dropdown now appears in your navbar:

![Locale Dropdown](./img/localeDropdown.png)

## 建立本地化的网站
## Build your localized site

为特定的区域建立您的站点:  
Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

或者建立你的网站，包括所有地区一次:  
Or build your site to include all the locales at once:

```bash
npm run build
```
