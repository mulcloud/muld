# Skeleton 骨架屏

### 引入

```js
import { Skeleton } from '@trillion/muld';
```

## 代码演示

### 基础用法

通过`title`属性显示标题占位图，通过`row`属性配置占位段落行数

```html
<Skeleton title row="3" />
```

### 显示头像

通过`avatar`属性显示头像占位图

```html
<Skeleton title avatar row="3" />
```

### 展示子组件

将`loading`属性设置成`false`表示内容加载完成，此时会隐藏占位图，并显示`Skeleton`的子组件

```js
const [show, setSkeletonState] = React.useState(false);
```

```html
<Switch value={show} onClick={()=>{setSkeletonState(true)}} />
<Skeleton title avatar row="3" loading={true}>
  <div>实际内容</div>
</Skeleton>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| row | 段落占位图行数 | _number \| string_ | `0` |
| rowWidth | 段落占位图宽度，可传数组来设置每一行的宽度 | _number \| string \|<br>(number \| string)[]_ | `100%` |
| title | 是否显示标题占位图 | _boolean_ | `false` |
| avatar | 是否显示头像占位图 | _boolean_ | `false` |
| loading | 是否显示骨架屏，传 `false` 时会展示子组件内容 | _boolean_ | `true` |
| animate | 是否开启动画 | _boolean_ | `true` |
| round | 是否将标题和段落显示为圆角风格 | _boolean_ | `false` |
| titleWidth | 标题占位图宽度 | _number \| string_ | `40%` |
| avatarSize | 头像占位图大小 | _number \| string_ | `32px` |
| avatarShape | 头像占位图形状，可选值为`square` | _string_ | `round` |
