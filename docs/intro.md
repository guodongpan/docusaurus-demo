---
sidebar_position: 1
---

# 课程简介

# Tutorial Intro

让我们在不到5分钟的时间里发现Docusaurus   
Let's discover **Docusaurus in less than 5 minutes**.

## 准备开始
## Getting Started

从创建一个新站点开始。   
Get started by **creating a new site**.

或者马上用Docusaurus .new试试Docusaurus。   
Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.


### 你需要什么?
### What you'll need

- Node.js 16.14或以上版本:
- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - 在安装Node.js时，建议勾选所有与依赖项相关的复选框。
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## 生成一个新站点
## Generate a new site

使用经典模板生成一个新的Docusaurus网站。     
Generate a new Docusaurus site using the **classic template**.

运行命令后，经典模板将自动添加到您的项目中:   
The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

您可以在命令提示符、Powershell、终端或代码编辑器的任何其他集成终端中键入此命令。
You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

该命令还安装运行Docusaurus所需的所有必要依赖项。   
The command also installs all necessary dependencies you need to run Docusaurus.

## 启动您的网站
## Start your site

运行开发服务器:   
Run the development server:

```bash
cd my-website
npm run start
```


 
`cd` 命令改变你正在使用的目录。为了使用新创建的Docusaurus站点，您需要导航到那里的终端。   
The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

`npm run start`命令在本地构建您的网站，并通过开发服务器提供服务，您可以在http://localhost:3000/上查看。   
The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

打开`文档/介绍.Md `(这个页面)并编辑一些行:网站**自动重新加载**并显示您的更改。   
Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
