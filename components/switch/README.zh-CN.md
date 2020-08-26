# Switch 开关

### 引入

```js
import { Switch } from '@trillion/muld';
```

## 代码演示

### 基础用法

通过`value`绑定开关的选中状态，`true`表示开，`false`表示关
```js
const [$value, setValue] = React.useState(true);
```

```html
<Switch value={$value} onClick={() => {setValue(!$value)})}/>
```


### 禁用状态

通过`disabled`属性来禁用开关，禁用状态下开关不可点击

```html
<Switch value={true} disabled />
```

### 加载状态

通过`loading`属性设置开关为加载状态，加载状态下开关不可点击

```html
<Switch value={true} loading />
```

### 自定义大小

通过`size`属性自定义开关的大小

```html
<Switch value={true} size="24px" />
```

### 自定义颜色

`activeColor`属性表示打开时的背景色，`inactiveColor`表示关闭时的背景色

```html
<Switch value={true} activeColor="#07c160" inactiveColor="#ee0a24" />
```

### 异步控制

需要异步控制开关时，可以使用`input`事件，并在`input`事件回调函数中手动处理开关状态

```js
function AsyncChange() {
    const [value, setValue] = React.useState(true);
    function handleInput(newVal) {
        setTimeout(() => {
            setValue(newVal)
        }, 500);
    }
    return <Switch value={value} onInput={handleInput} />
}
```

### 搭配单元格使用
```js
const [$value, setValue] = React.useState(true);
```
```html
<Cell title="标题" rightIcon={
    <Switch value={$value} onChange={(newVal) => {setValue(newVal)}/>
}>
</Cell>
```

### 搭配对话框使用
```js
const [$value, setValue] = React.useState(true);
const [shwDialog, setShowDialog] = useState(false);
```
```html
<Switch value={$value} onClick={() => {setShowDialog(true)}}/>
<Dialog
  title="标题"
  visible={shwDialog}
  showCancelButton
  showConfirmButton
  onCancel={(): void => {
    setShowDialog(false);
  }}
  onConfirm={(): void => {
    setValue(!$value);
    setShowDialog(false);
  }}
>
  是否切换开关
</Dialog>
```

## API

### Props

| 参数           | 说明                     | 类型               | 默认值    |
| -------------- | ------------------------ | ------------------ | --------- |
| value        | 开关选中状态             | _any_              | `false`   |
| loading        | 是否为加载状态           | _boolean_          | `false`   |
| disabled       | 是否为禁用状态           | _boolean_          | `false`   |
| size | 开关尺寸，默认单位为`px` | _number \| string_ | `30px`    |
| activeColor   | 打开时的背景色           | _string_           | `#1989fa` |
| inactiveColor | 关闭时的背景色           | _string_           | `white`   |
| activeValue   | 打开时对应的值           | _any_              | `true`    |
| inactiveValue | 关闭时对应的值           | _any_              | `false`   |

### Events

| 事件名          | 说明               | 回调参数       |
| --------------- | ------------------ | -------------- |
| onChange          | 开关状态切换时触发 | _value: any_   |
| onClick | 点击时触发         | _event: Event_ |
