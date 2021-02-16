---
id: doc1
title: 样式指引
sidebar_label: 样式指引-标题
---

你可以使用 [GitHub-flavored Markdown syntax](https://github.github.com/gfm/) 编辑内容.

## Markdown 语法

To serve as an example page when styling markdown based Docusaurus sites.

## 标题

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

---

## 强调

强调, 又名斜体, 用 *星号* 或者 _下划线_ 表示.

用 **星号** 或者 __下划线__ 强调，也就是粗体.

用 **星号 和 _下划线_** 组合强调.

使用 ~~两个波浪线包括~~，来加上删除线.

---

## 列表

1. 第一个有序列表项
1. 另一个列表项
   - 无序的子列表项
1. 实际的数字并不重要，只要是一个数字就行
   1. 有序的子列表项
1. 另一个列表项.

* 无序列表还可以使用星号表示

- 或者使用横杠表示

+ 加号也是可以的

---

## 链接

[我是一个内联样式的链接](https://www.google.com/)

[我是一个内联样式的链接(hover有标题)](https://www.google.com/ "Google's Homepage")

[我是一个参考样式的链接][任意不区分大小写的引用文本]

[也可以将数字用于引用样式的链接定义][1]

或者将链接置空 [链接文本本身]

使用尖括号包裹的链接都可以直接被识别成链接. 可以是 http://www.example.com/ ，或者 <http://www.example.com/> ，在某些情况下 example.com 也可以(但 github 不支持).

引用链接的形式可以参考下面这些(源文件中可见)。

[任意不区分大小写的引用文本]: https://www.mozilla.org/
[1]: http://slashdot.org/
[链接文本本身]: http://www.reddit.com/

---

## 图片

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

Images from any folder can be used by providing path to file. Path should be relative to markdown file.

![img](../static/img/logo.svg)

---

## 代码段

```javascript
var s = 'JavaScript 语法高亮';
alert(s);
```

```python
s = "Python 语法高亮"
print(s)
```

```
不声明任何语言, 所以没有语法高亮.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log('这一行会有被选中的效果');
}
```

---

## 表格

冒号可以用于对齐表格的列。

| 让我们        |      看看      |   表格的样式 |
| ------------- | :-----------: | -----: |
| 第三列      | 右对齐 | \$1600 |
| 第二列      |   中间对齐    |   \$12 |
| 默认      |   左对齐    |    \$1 |

每个表头单元格之间至少需要三个虚线符号分割. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. 你也可以使用行内 markdown 样式.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _斜体_  | `代码块` | **粗体** |
| 1        | 2         | 3          |

---

## 段落

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

## Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

## 换行

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

---

## 卡片提示

:::note 注释

这是一条注释信息

:::

:::tip 小贴士

这是一个小贴士

:::

:::important 重要

这是一条重要信息

:::

:::caution 警告

这是一条警告信息

:::

:::warning 错误

这是一条错误信息

:::
