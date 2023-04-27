---
sidebar_position: 2
---

# 创建一个文档

# Create a Document

文档是**组页面**通过:   
Documents are **groups of pages** connected through:



- **边栏**
- a **sidebar**
- **上/下导航**
- **previous/next navigation**
- **版本管理**
- **versioning**

## 创建您的第一个Doc
## Create your first Doc

在' docs/hello.md '创建一个Markdown文件:   
Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

新的文件现已在[http://localhost:3000/docs/hello](http://localhost:3000/docs/hello)上提供。   
A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## 配置侧边栏
## Configure the Sidebar

Docusaurus自动从“docs”文件夹中创建一个侧边栏。   
Docusaurus automatically **creates a sidebar** from the `docs` folder.

添加元数据以自定义侧边栏标签和位置:   
Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

也可以在' sidebars.js '中显式创建侧边栏:   
It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
