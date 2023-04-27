---
sidebar_position: 3
---

# 创建一个博客

# Create a Blog Post

Docusaurus为每个博客文章创建了一个**页面**，还创建了一个**博客索引页**，一个**标签系统**，一个**RSS**提要…    
Docusaurus creates a **page for each blog post**, but also a **blog index page**, a **tag system**, an **RSS** feed...

## 创建你的第一个帖子 
## Create your first Post

在“blog/2021-02-28-greetings.md”创建一个文件:   
Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

祝贺你，你已经发表了你的第一篇文章!   
Congratulations, you have made your first post!

你可以随心所欲地编辑这篇文章。   
Feel free to play around and edit this post as much you like.
```

新的博客文章现在可以在[http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings)上看到。   
A new blog post is now available at [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).
