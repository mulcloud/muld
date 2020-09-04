# Box 盒

### 引入

```js
import { Box } from '@trillion/muld';
```

## 代码演示

### 基础用法

```html
<Box p="1.25rem" fontSize="1rem" width="12.5rem" height="6.25rem" color="#fff" bg="#66a8ef">
    Box
</Box>
```

### 配合 mul-bg-_primary、mul-text-_primary（详见内置样式）

```html
<Box
    p="1.25rem"
    fontSize="1rem"
    width="12.5rem"
    height="6.25rem"
    className="mul-bg--primary mul-text--white"
>
    Box
</Box>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| p | 对应 css 的padding | _string \| number_ | `0` |
| m | 对应 css 的margin | _string \| number_ | `0` |
| fontSize | 对应 css 的 font-size | _string \| number_ | |
| width | 对应 css 的 width  | _string \| number_ \| `0` |
| height | 对应 css 的 height  | _string \| number_ \| `0` |
| bg | 对应 css 的 background-color  | _string_ | - |
| ml | 对应 css 的 margin-left | _string_ | - |



