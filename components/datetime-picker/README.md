# DatetimePicker

### Intro

Used to select time, support date and time dimensions, usually used with the [Popup](#/en-US/popup) component.

### Install

```js
import { DatetimePicker } from '@trillion/muld';
```

## Usage

### Choose Date

```html
<DatetimePicker
    type="date"
    title="dateType"
    minDate={new Date(2020, 0, 1)}
    maxDate={new Date(2025, 10, 1)}
    onConfirm={onConfirm}
    onChange={onChange}
    onCancel={onCancel}
/>
```
```js
cons onChange = (value: string, index: string) => {
    console.log('change', ' value:', value, ' index:', index);
};

const onConfirm = (value: string, index: string) => {
    console.log('confirm', ' value:', value, ' index:', index);
};

const onCancel = () => {
    console.log('cancel');
};
```

### Choose Year-Month

```html
<DatetimePicker
    type="year-month"
    title="yearMonthType"
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

### Choose Month-Day

```html
<DatetimePicker
    type="month-day"
    title="monthDayType"
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

### Choose Time

```html
<DatetimePicker
    type="time"
    value="12:00"
    title="timeType"
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

### Choose DateTime

```html
<DatetimePicker
    type="datetime"
    title="datetimeType"
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

### Choose DateHour

```html
<DatetimePicker
    type="datehour"
    title="datehourType"
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

### Option Filter

```html
<DatetimePicker
    value="12:00"
    type="time"
    title="optionFilter"
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

### Columns Order

```html
<DatetimePicker
    type="date"
    title="sortColumns"
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

### Columns formatter
```html
<DatetimePicker
    type="date"
    title="dispalyColumns"
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
        return `${value}year`;
    }
    if (type === 'month') {
        return `${value}month`;
    }
    if (type === 'day') {
        return `${value}day`;
    }
    return value;
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `date` `time`<br> `year-month` `month-day` `datehour` | _string_ | `datetime` |
| title | Toolbar title | _string_ | `''` |
| confirmButtonText | Text of confirm button | _string_ | `Confirm` |
| cancelButtonText | Text of cancel button | _string_ | `Cancel` |
| showToolbar | Whether to show toolbar | _boolean_ | `true` |
| loading | Whether to show loading prompt | _boolean_ | `false` |
| filter | Option filter | _(type, vals) => vals_ | - |
| formatter | Option text formatter | _(type, val) => val_ | - |
| columnsOrder | Array for ordering columns, where item can be set to<br> `year`, `month`, `day`, `hour` and `minute` | _string[]_ | - |
| itemHeight  | Option height, supports `px` `vw` `rem` unit, default `px` | _number \| string_ | `44` |
| visibleItemCount | Count of visible columns | _number \| string_ | `6` |
| swipeDuration  | Duration of the momentum animation，unit `ms` | _number \| string_ | `1000` |

### DatePicker Props

Following props are supported when the type is date or datetime

| Attribute | Description | Type   | Default                        |
| --------- | ----------- | ------ | ------------------------------ |
| minDate  | Min date    | _Date_ | Ten years ago on January 1     |
| maxDate  | Max date    | _Date_ | Ten years later on December 31 |

### TimePicker Props

Following props are supported when the type is time

| Attribute  | Description                | Type               | Default |
| ---------- | -------------------------- | ------------------ | ------- |
| minHour   | Min hour for `time` type   | _number \| string_ | `0`     |
| maxHour   | Max hour for `time` type   | _number \| string_ | `23`    |
| minMinute | Max minute for `time` type | _number \| string_ | `0`     |
| maxMinute | Max minute for `time` type | _number \| string_ | `59`    |

### Events

| Event   | Description                         | Arguments               |
| ------- | ----------------------------------- | ----------------------- |
| onChange  | Triggered when value changed        | picker: Picker instance |
| onConfirm | Triggered when click confirm button | value: current value    |
| onCancel  | Triggered when click cancel button  | -                       |

