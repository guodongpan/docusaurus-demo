# Website

这个网站是使用[Docusaurus 2](https://docusaurus.io/)建立的，这是一个现代的静态网站生成器。  
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

该命令启动本地开发服务器并打开浏览器窗口。大多数更改都是实时反映的，而无需重新启动服务器。  
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

该命令将静态内容生成到“build”目录中，并且可以使用任何静态内容托管服务。  
This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

使用SSH:  
Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果您正在使用GitHub页面进行托管，则此命令是构建网站并推送到' gh-pages '分支的方便方法。  
If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
