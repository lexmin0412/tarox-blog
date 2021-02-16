---
id: mdx
title: Powered by MDX
---

借助 [MDX](https://mdxjs.com/), 你可以在你的 markdown 中书写 JSX 和 React 组件。

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> 和 <Highlight color="#1877F2">Facebook blue</Highlight> 是我最喜欢的颜色。

可以在 _JSX_ 中书写 **Markdown** !
