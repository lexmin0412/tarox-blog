---
title: Image
slug: Image
---

## Flex下如何自适应高度

为了统一图片组件在项目中的表现形式，会给一个默认的基础样式，如：

```scss
.taro-img {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
```

这在某些情况下会导致一些问题，如在需要设置纵向图片流时（如商品详情展示），会给Image组件设置 `mode='widthFix'`, 在chrome中表现正常，但会导致在微信浏览器中图片被拉伸。

解决方案：给widthFix图片盒子设置 `flex-decoration: column` 或者 `display: block`

```scss
.test-image-fill {
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
}
```

或者：

```scss
.test-image-fill {
  display: block;
  width: 100%;
  height: auto;
}
```
