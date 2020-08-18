# Progress

### Install

```js
import { Progress } from '@trillion/progress';
```

## Usage

### Basic Usage

Use 'percentage' prop to set current progress

```html
<Progress percentage={50} />
```

### Stroke Width

```html
<Progress percentage={50} strokeWidth={8} />
```

### Inactive

```html
<Progress inactive percentage={50} />
```

### Custom Style

Use `pivotText` to custom text，use `color` to custom bar color

```html
<Progress pivotText="Orange" color="#f2826a" percentage={50} />
<Progress pivotText="Red" color="#ee0a24" percentage={50} />
<Progress
  percentage="75"
  pivotText="Purple"
  pivotColor="#7232dd"
  color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| percentage | Percentage | _number \| string_ | `0` |
| strokeWidth | Stroke width | _number \| string_ | `4px` |
| color | Color | _string_ | `#1989fa` |
| trackColor | Track color | _string_ | `#e5e5e5` |
| pivotText | Pivot text | _string_ | percentage |
| pivotColor | Pivot text background color | _string_ | inherit progress color |
| textColor | Pivot text color | _string_ | `white` |
| inactive | Whether to be gray | _boolean_ | `false` |
| showPivot | Whether to show text | _boolean_ | `true` |
