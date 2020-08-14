# Built-in Style

### Intro

muld contains some common styles that can be used directly by the className.

### Text ellipsis

When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div className="mul-ellipsis">
  This is a paragraph that displays up to one line of text, and the rest of the
  text will be omitted. 
</div>

<div className="mul-multi-ellipsis--l2">
  This is a paragraph that displays up to two lines of text, and the rest of the
  text will be omitted.
</div>

<div className="mul-multi-ellipsis--l3">
  This is a paragraph that displays up to three lines of text, and the rest of
  the text will be omitted.
</div>
```

### Hairline

Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div className="mul-hairline--top"></div>

<!-- border bottom -->
<div className="mul-hairline--bottom"></div>

<!-- border left -->
<div className="mul-hairline--left"></div>

<!-- border right -->
<div className="mul-hairline--right"></div>

<!-- border top & bottom -->
<div className="mul-hairline--top-bottom"></div>

<!-- full border -->
<div className="mul-hairline--surround"></div>
```


### Font Color

setting font-color

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

### Background Color

setting background-color

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
