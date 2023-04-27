---
sidebar_position: 1
---

# 管理文章版本

# Manage Docs Versions

Docusaurus可以管理多个版本的文档。  
Docusaurus can manage multiple versions of your docs.

## 创建文档版本
## Create a docs version

发布项目的1.0版本:  
Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

“docs”文件夹被复制到“versioned_docs/version-1.0”和“versions”中。Json’被创建。  
The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

你的文档现在有两个版本:  
Your docs now have 2 versions:

- “1.0”在“http://localhost:3000/docs/”为1.0版本的文档
- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs

- “当前”在“http://localhost:3000/docs/next/”为**即将到来的，未发布的文档**
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## 添加一个版本下拉列表
## Add a Version Dropdown

要在不同版本之间无缝导航，请添加一个版本下拉列表。  
To navigate seamlessly across versions, add a version dropdown.

修改' docusaurus.config.js '文件:  
Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

文档版本下拉菜单出现在导航栏中:  
The docs version dropdown appears in your navbar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## 更新现有版本
## Update an existing version

可以在各自的文件夹中编辑有版本的文档:  
It is possible to edit versioned docs in their respective folder:


- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
