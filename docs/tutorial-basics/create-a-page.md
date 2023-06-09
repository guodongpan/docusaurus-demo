---
sidebar_position: 1
---

# 创建一个页面

# Create a Page

将Markdown或React文件添加到src/pages以创建一个独立的页面:  
Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 创建你的第一个React页面
## Create your first React Page

在`src/pages/my-react-page.js`创建一个文件:   
Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```
现在可以在[http://localhost:3000/my-react-page](http://localhost:3000/my-react-page)上找到新的页面。   
A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## 创建您的第一个Markdown页面
## Create your first Markdown Page

在' src/pages/my-markdown-page.md '创建一个文件:   
Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

现在可以在[http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page)上找到新的页面。   
A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
