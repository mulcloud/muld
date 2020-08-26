# CountDown 倒计时

### 引入

```js
import { CountDown } from '@trillion/muld';
```

## 代码演示

### 基础用法

`time`属性表示倒计时总时长，单位为毫秒

```html
<CountDown time={time} />
```

### 倒计时事件

```html
<CountDown time={3 * 1000} onChange={onChange} onFinish={onFinish} />
```

```js
const onChange = (value: string) => {
    console.log('change', value);
};

const onFinish = () => {
    console.log('finished');
};
```

### 自定义格式

通过`format`属性设置倒计时文本的内容

```html
<CountDown time={time} format="DD 天 HH 时 mm 分 ss 秒" />
```

### 验证码倒计时

设置 60s 倒计时

```html
<CountDown time={60 * 1000} format="还剩 ss 秒" />
```

### 不自动倒计时

通过`autoStart`属性设置是否自动倒计时

```html
<CountDown time={time} autoStart={false} format="DD 天 HH 时 mm 分 ss 秒" />
```

### 毫秒级渲染

倒计时默认每秒渲染一次，设置`millisecond`属性可以开启毫秒级渲染

```html
<CountDown millisecond time={time} format="HH:mm:ss:SS" />
```

### 自定义样式

通过插槽自定义倒计时的样式，`timeData`对象格式见下方表格

```html
<CountDown time={time} format="HH:mm:ss:SS">
    <span className="block">hours</span>
    <span className="colon">:</span>
    <span className="block">minutes</span>
    <span className="colon">:</span>
    <span className="block">seconds</span>
</CountDown>

<style>
  .colon {
    display: inline-block;
    margin: 0 0.25rem;
    color: #ee0a24;
  }
  .block {
    display: inline-block;
    width: 1.375rem;
    color: #fff;
    font-size: 0.75rem;
    text-align: center;
    background-color: #ee0a24;
  }
</style>
```

### 手动控制

通过 ref 获取到组件实例后，可以调用`start`、`pause`、`reset`方法

```html
<CountDown
    ref={countDownRef}
    cRef={countDownRef}
    time={10 * 1000}
    millisecond
    format="ss:SSS"
    onChange={(val) => {
        console.log('countdown', val);
    }}
></CountDown>
<Row>
    <Col span="7" offset="1">
        <Icon name="play-circle-o" size="30" onClick={onStart}></Icon>
    </Col>
    <Col span="8">
        <Icon name="pause-circle-o" size="30" onClick={onPause}></Icon>
    </Col>
    <Col span="6">
        <Icon name="replay" size="30" onClick={onReset}></Icon>
    </Col>
</Row>
```

```js
const countDownRef = useRef<HTMLDivElement>(null);

const onStart = () => {
    countDownRef.current.start();
};

const onPause = () => {
    countDownRef.current.pause();
};

const onReset = () => {
    countDownRef.current.reset();
};
```

## API

### Props

| 参数        | 说明                 | 类型               | 默认值     |
| ----------- | -------------------- | ------------------ | ---------- |
| time        | 倒计时时长，单位毫秒 | _number_                | `0`        |
| format      | 时间格式             | _string_           | `HH:mm:ss` |
| autoStart  | 是否自动开始倒计时   | _boolean_          | `true`     |
| millisecond | 是否开启毫秒级渲染   | _boolean_          | `false`    |

### format 格式

| 格式 | 说明         |
| ---- | ------------ |
| DD   | 天数         |
| HH   | 小时         |
| mm   | 分钟         |
| ss   | 秒数         |
| S    | 毫秒（1 位） |
| SS   | 毫秒（2 位） |
| SSS  | 毫秒（3 位） |

### Events

| 事件名          | 说明             | 回调参数             |
| --------------- | ---------------- | -------------------- |
| onFinish          | 倒计时结束时触发 | -                    |
| onChange | 倒计时变化时触发 | _value: string_ 与显示一样 |

### Slots

| 名称    | 说明       | Slot name           |
| ------- | ---------- | -------------------- |
| default | 自定义内容 | _timeData: TimeData_ |

### TimeData 格式

| 名称         | 说明     | 类型     |
| ------------ | -------- | -------- |
| days         | 剩余天数 | _number_ |
| hours        | 剩余小时 | _number_ |
| minutes      | 剩余分钟 | _number_ |
| seconds      | 剩余秒数 | _number_ |
| milliseconds | 剩余毫秒 | _number_ |

### 方法

通过 useRef 与 useImperativeHandle 可以获取到 CountDown 实例并调用实例方法，详见[useRef](https://reactjs.org/docs/hooks-reference.html#useref)

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| start | 开始倒计时 | - | - |
| pause | 暂停倒计时 | - | - |
| reset | 重设倒计时，若`autoStart`为`true`，重设后会自动开始倒计时 | - | - |

## 常见问题

### 在 iOS 系统上倒计时不生效？

如果你遇到了在 iOS 上倒计时不生效的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。
