# CountDown

### Install

```js
import { CountDown } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<CountDown time={time} />
```

### Event Usage

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

### Custom Format

```html
<CountDown millisecond time={time} format="HH:mm:ss:SS" />
```

### Millisecond

```html
<CountDown time={time} format="DD day HH hour mm min ss sec" />
```

### Verifycode CountDown

```html
<CountDown time={60 * 1000} format="leave ss seconds" />
```

### not-auto Count Down

```html
<CountDown time={time} autoStart={false} format="DD day HH hour mm min ss sec" />
```

### Custom Style

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
    margin: 0 4px;
    color: #ee0a24;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
  }
</style>
```

### Manual Control

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
    <Col span="8">
        <Icon name="play-circle-o" size="30" onClick={onStart}></Icon>
    </Col>
    <Col span="8">
        <Icon name="pause-circle-o" size="30" onClick={onPause}></Icon>
    </Col>
    <Col span="8">
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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| time | Total time | _number | `0` |
| format | Time format | _string_ | `HH:mm:ss` |
| autoStart | Whether to auto start count down | _boolean_ | `true` |
| millisecond | Whether to enable millisecond render | _boolean_ | `false` |

### Available formats

| Format | Description           |
| ------ | --------------------- |
| DD     | Day                   |
| HH     | Hour                  |
| mm     | Minute                |
| ss     | Second                |
| S      | Millisecond, 1-digit  |
| SS     | Millisecond, 2-digits |
| SSS    | Millisecond, 3-digits |

### Events

| Event           | Description                        | Arguments            |
| --------------- | ---------------------------------- | -------------------- |
| onFinish          | Triggered when count down finished | -                    |
| onChange          | Triggered when count down changed  | _timeData: TimeData_ |

### Slots

| Name    | Description    | SlotProps            |
| ------- | -------------- | -------------------- |
| default | Custom Content | _timeData: TimeData_ |

### TimeData Structure

| Name         | Description         | Type     |
| ------------ | ------------------- | -------- |
| days         | Remain days         | _number_ |
| hours        | Remain hours        | _number_ |
| minutes      | Remain minutes      | _number_ |
| seconds      | Remain seconds      | _number_ |
| milliseconds | Remain milliseconds | _number_ |

### Methods

Use [useRef](https://reactjs.org/docs/hooks-reference.html#useref) and useImperativeHandle to get CountDown call methods

| Name  | Description      | Attribute | Return value |
| ----- | ---------------- | --------- | ------------ |
| start | Start count down | -         | -            |
| pause | Pause count down | -         | -            |
| reset | Reset count down | -         | -            |
