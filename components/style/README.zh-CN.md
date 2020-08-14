# 内置样式

### 介绍

muld 中默认包含了一些常用样式，可以直接通过 className 的方式使用。

### 文字省略

当文本内容长度超过容器最大宽度时，自动省略多余的文本。

```html
<!-- 最多显示一行 -->
<div className="mul-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>

<!-- 最多显示两行 -->
<div className="mul-multi-ellipsis--l2">
  这是一段最多显示两行的文字，多余的内容会被省略
</div>

<!-- 最多显示三行 -->
<div className="mul-multi-ellipsis--l3">
  这是一段最多显示三行的文字，多余的内容会被省略
</div>
```

### 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。

```html
<!-- 上边框 -->
<div className="mul-hairline--top"></div>

<!-- 下边框 -->
<div className="mul-hairline--bottom"></div>

<!-- 左边框 -->
<div className="mul-hairline--left"></div>

<!-- 右边框 -->
<div className="mul-hairline--right"></div>

<!-- 上下边框 -->
<div className="mul-hairline--top-bottom"></div>

<!-- 全边框 -->
<div className="mul-hairline--surround"></div>
```

### 字体颜色

设置 css 的 font-color 属性

```html
<p className="mul-text--default">mul-text--default</p>
<p className="mul-text--link">mul-text--link</p>
<p className="mul-text--primary">mul-text--primary</p>
<p className="mul-text--secondary">mul-text--secondary</p>
<p className="mul-text--success">mul-text--success</p>
<p className="mul-text--danger">mul-text--danger</p>
<p className="mul-text--warning">mul-text--warning</p>
<p className="mul-text--info">mul-text--info</p>
<p className="mul-text--disable">mul-text--disable</p>
```

### 背景色

设置 css 的 background-color 属性

```html
<div className="mul-bg--default mul-text--white">mul-bg--default</div>
<div className="mul-bg--primary mul-text--white">mul-bg--primary</div>
<div className="mul-bg--success mul-text--white">mul-bg--success</div>
<div className="mul-bg--danger mul-text--white">mul-bg--danger</div>
<div className="mul-bg--warning mul-text--white">mul-bg--warning</div>
<div className="mul-bg--info mul-text--white">mul-bg--info</div>
<div className="mul-bg--white mul-text--black">mul-bg--white</div>
<div className="mul-bg--transparent mul-text--dark">mul-bg--transparent</div>
```
