# Steps

### Install

```js
import { Step, Steps } from '@trillion/muld';
```

## Usage

### Basic Usage

```html

<Steps active={active}>
    <Step>Step1</Step>
    <Step>Step2</Step>
    <Step>Step3</Step>
    <Step>Step4</Step>
</Steps>

```

### Custom Style

```html
<Steps active={active} activeIcon="success" activeColor="#38f">
    <Step>Step1</Step>
    <Step>Step2</Step>
    <Step>Step3</Step>
    <Step>Step4</Step>
</Steps>
```

### Click Step
```html
<Steps
    active={active}
    onClickStep={(index) => {
        setActive(index);
    }}
>
    <Step>step1</Step>
    <Step>step2</Step>
    <Step>step3</Step>
    <Step>step4</Step>
</Steps>
```

### Vertical Steps

```html
<Steps direction="vertical" active="0">
    <Step>
        <h3>【City】Status1</h3>
        <p>2016-07-12 12:40</p>
    </Step>
    <Step>
        <h3>【City】Status2</h3>
        <p>2016-07-11 10:00</p>
    </Step>
    <Step>
        <h3>【City】Status3</h3>
        <p>2016-07-10 09:30</p>
    </Step>
</Steps>
```

## API

### Steps Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| active | Active step | _number \| string_ | `0` |
| direction | Can be set to `vertical` | _string_ | `horizontal` |
| activeColor | Active step color | _string_ | `#07c160` |
| inactiveColor | Inactive step color | _string_ | `#969799` |
| activeIcon | Active icon name | _string_ | `checked` |
| inactiveIcon | Inactive icon name | _string_ | - |

### Step Slots

| Name          | Description          |
| ------------- | -------------------- |
| activeIcon   | Custom active icon   |
| inactiveIcon | Custom inactive icon |

### Steps Events

| Event | Description | Arguments |
| --- | --- | --- |
| onClickStep | Triggered when a step's title or icon is clicked | _index: number_ |
