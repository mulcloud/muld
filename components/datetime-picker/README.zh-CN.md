
# DatetimePicker 时间选择

### 介绍

时间选择器，支持日期、年月、时分等维度，通常与[弹出层](#/zh-CN/popup)组件配合使用。

### 引入

```js
import { DatetimePicker } from '@trillion/muld';
```

## 代码演示

### 选择年月日

DatetimePicker 通过 type 属性来定义需要选择的时间类型，type 为 `date` 表示选择年月日。通过 minDate 和 maxDate 属性可以确定可选的时间范围。

```html
<DatetimePicker
    type="date"
    title="选择年月日"
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    onConfirm={onConfirm}
    onChange={onChange}
    onCancel={onCancel}
/>
```
```js
const onChange = (value: string, index: string) => {
    console.log('change', ' value:', value, ' index:', index);
};

const onConfirm = (value: string, index: string) => {
    console.log('confirm', ' value:', value, ' index:', index);
};

const onCancel = () => {
    console.log('cancel');
};
```

### 选择年月

将 type 设置为 `year-month` 即可选择年份和月份。通过传入 `formatter` 函数，可以对选项文字进行格式化处理。

```html
<DatetimePicker
    type="year-month"
    title="选择年月"
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    onConfirm={onConfirm}
    onChange={onChange}
    onCancel={onCancel}
/>
```
```js
const onChange = (value: string, index: string) => {
    console.log('change', ' value:', value, ' index:', index);
};

const onConfirm = (value: string, index: string) => {
    console.log('confirm', ' value:', value, ' index:', index);
};

const onCancel = () => {
    console.log('cancel');
};
```

### 选择月日

将 type 设置为 `month-day` 即可选择月份和日期。

```html
<DatetimePicker
    type="month-day"
    title="选择月日"
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    onConfirm={onConfirm}
    onChange={onChange}
    onCancel={onCancel}
/>
```
```js
const onChange = (value: string, index: string) => {
    console.log('change', ' value:', value, ' index:', index);
};

const onConfirm = (value: string, index: string) => {
    console.log('confirm', ' value:', value, ' index:', index);
};

const onCancel = () => {
    console.log('cancel');
};
```

### 选择时间

将 type 设置为 `time` 即可选择时间（小时和分钟）。

```html
<DatetimePicker
    type="time"
    value="12:00"
    title="选择时间"
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    onConfirm={onConfirm}
    onChange={onChange}
    onCancel={onCancel}
/>
```
```js
const onChange = (value: string, index: string) => {
    console.log('change', ' value:', value, ' index:', index);
};

const onConfirm = (value: string, index: string) => {
    console.log('confirm', ' value:', value, ' index:', index);
};

const onCancel = () => {
    console.log('cancel');
};
```

### 选择完整时间

将 type 设置为 `datetime` 即可选择完整时间，包括年月日和小时、分钟。

```html
<DatetimePicker
    type="datetime"
    title="选择完整时间"
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    onConfirm={onConfirm}
    onChange={onChange}
    onCancel={onCancel}
/>
```
```js
const onChange = (value: string, index: string) => {
    console.log('change', ' value:', value, ' index:', index);
};

const onConfirm = (value: string, index: string) => {
    console.log('confirm', ' value:', value, ' index:', index);
};

const onCancel = () => {
    console.log('cancel');
};
```

### 选择年月日小时

将 type 设置为 `datehour` 即可选择日期和小时，包括年月日和小时。

```html
<DatetimePicker
    type="datehour"
    title="选择年月日小时"
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    onConfirm={onConfirm}
    onChange={onChange}
    onCancel={onCancel}
/>
```
```js
const onChange = (value: string, index: string) => {
    console.log('change', ' value:', value, ' index:', index);
};

const onConfirm = (value: string, index: string) => {
    console.log('confirm', ' value:', value, ' index:', index);
};

const onCancel = () => {
    console.log('cancel');
};
```

### 选项过滤器

通过传入 `filter` 函数，可以对选项数组进行过滤，实现自定义时间间隔。

```html
<DatetimePicker
    value="12:00"
    type="time"
    title="选项过滤器"
    filter={filter}
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    onConfirm={onConfirm}
    onChange={onChange}
    onCancel={onCancel}
/>
```
```js
const filter = (type: string, options: string[]) => {
    if (type === 'minute') {
        return options.filter((value: string) => parseInt(value, 10) % 5 === 0);
    }
    return options;
};

const onChange = (value: string, index: string) => {
    console.log('change', ' value:', value, ' index:', index);
};

const onConfirm = (value: string, index: string) => {
    console.log('confirm', ' value:', value, ' index:', index);
};

const onCancel = () => {
    console.log('cancel');
};
```

### 自定义列排序

```html
<DatetimePicker
    type="date"
    title="自定义列排序"
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    columnsOrder={['month', 'day', 'year']}
    onConfirm={onConfirm}
    onChange={onChange}
    onCancel={onCancel}
/>
```
```js
const onChange = (value: string, index: string) => {
    console.log('change', ' value:', value, ' index:', index);
};

const onConfirm = (value: string, index: string) => {
    console.log('confirm', ' value:', value, ' index:', index);
};

const onCancel = () => {
    console.log('cancel');
};
```

### 格式化每列的显示

通过传人 formatter 函数对每列显示格式化。

```html
<DatetimePicker
    type="date"
    title="格式化每列的显示"
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    formatter={formatter}
    onConfirm={onConfirm}
    onChange={onChange}
    onCancel={onCancel}
/>
```
```js
const onChange = (value: string, index: string) => {
    console.log('change', ' value:', value, ' index:', index);
};

const onConfirm = (value: string, index: string) => {
    console.log('confirm', ' value:', value, ' index:', index);
};

const onCancel = () => {
    console.log('cancel');
};

const formatter = (type: string, value: string) => {
    if (type === 'year') {
        return `${value}年`;
    }
    if (type === 'month') {
        return `${value}月`;
    }
    if (type === 'day') {
        return `${value}日`;
    }
    return value;
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 时间类型，可选值为 `date` `time` <br> `year-month` `month-day` `datehour` | _string_ | `datetime` |
| title | 顶部栏标题 | _string_ | `''` |
| confirmButtonText | 确认按钮文字 | _string_ | `确认` |
| cancelButtonText | 取消按钮文字 | _string_ | `取消` |
| showToolbar | 是否显示顶部栏 | _boolean_ | `true` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| filter | 选项过滤函数 | _(type, vals) => vals_ | - |
| formatter | 选项格式化函数 | _(type, val) => val_ | - |
| columnsOrder  | 自定义列排序数组, 子项可选值为<br> `year`、`month`、`day`、`hour`、`minute` | _string[]_ | - |
| itemHeight  | 选项高度，支持 `px` `vw` `rem` 单位，默认 `rem` | _number \| string_ | `2.75` |
| visibleItemCount | 可见的选项个数 | _number \| string_ | `6` |
| swipeDuration  | 快速滑动时惯性滚动的时长，单位`ms` | _number \| string_ | `1000` |

### DatePicker Props

当时间选择器类型为 date 或 datetime 时，支持以下 props:

| 参数     | 说明                       | 类型   | 默认值 |
| -------- | -------------------------- | ------ | ------ |
| minDate | 可选的最小时间，精确到分钟 | _Date_ | 十年前 |
| maxDate | 可选的最大时间，精确到分钟 | _Date_ | 十年后 |

### TimePicker Props

当时间选择器类型为 time 时，支持以下 props:

| 参数       | 说明           | 类型               | 默认值 |
| ---------- | -------------- | ------------------ | ------ |
| minHour   | 可选的最小小时 | _number \| string_ | `0`    |
| maxHour   | 可选的最大小时 | _number \| string_ | `23`   |
| minMinute | 可选的最小分钟 | _number \| string_ | `0`    |
| maxMinute | 可选的最大分钟 | _number \| string_ | `59`   |

### Events

| 事件名  | 说明                     | 回调参数              | 回调时间格式|
| ------- | ------------------------ | --------------------- | --------- |
| onChange  | 当值变化时触发的事件     | value: 当前时间 index: 当前时间每列索引  | 2020,01,01 |
| onConfirm | 点击完成按钮时触发的事件 | value: 当前选中的时间 index: 当前时间每列索引| 2020,01,01,|
| onCancel  | 点击取消按钮时触发的事件 | -                     |

## 常见问题

### 设置 minDate 或 maxDate 后出现页面卡死的情况？

请注意不要在模板中直接使用类似`minDate="new Date()"`的写法，这样会导致每次渲染组件时传入一个新的 Date 对象，而传入新的数据会触发下一次渲染，从而陷入死循环。

正确的做法是将`minDate`作为一个数据定义在`data`函数中。

### 在 iOS 系统上初始化组件失败？

如果你遇到了在 iOS 上无法渲染组件的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。

### 在桌面端无法操作组件？

参见[在桌面端使用](#/zh-CN/quickstart#zai-zhuo-mian-duan-shi-yong)。

### 是否有年份或月份选择器？

如果仅需要选择年份或者月份，建议直接使用 [Picker](#/zh-CN/picker) 组件。
