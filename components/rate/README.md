# Rate

### Install

```js
import { Rate } from '@trillion/rate';
```

## Usage

### Basic Usage

```html
const [basic, setBasic] = React.useState(3);
<Rate value={basic} change={setBasic} />
```

### Custom Icon

```html
const [customIcon, setCustomIcon] = React.useState(3);
<Rate value={customIcon} change={setCustomIcon} icon='like' voidIcon="like-o"/>

```

### Custom Style

```html
const [customStyle, setCustomStyle] = React.useState(3);
<Rate value={customStyle} change={setCustomStyle} color='#ffd21e' voidColor="#eee" voidIcon='star' />
```

### Half Star

```html
const [halfStar, setHalfStar] = React.useState(3.5);
<Rate value={halfStar} change={setHalfStar} allowHalf={true} />
```

### Custom Count

```html
const [customCount, setCustomCount] = React.useState(3);
<Rate value={customCount} change={setCustomCount} count={6} />
```

### Readonly

```html
<Rate value={3} disabled={true} />
```

### Change Event

```html
<Rate value={3} readonly={true} />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| value | Current rate | number | - |
| count | Count | number | 5 |
| size | Icon size | number |  |
| gutter | Icon gutter | number |  |
| color | Selected color | string | `#ee0a24` |
| void-color | Void color | string | `#c8c9cc` |
| disabled-color | Disabled color | string | `#c8c9cc` |
| icon | Selected icon | string | star |
| void-icon | Void icon | string | star-0 |
| allow-half | Weather to allow half star | boolean | false |
| readonly | Weather to be readonly | boolean | false |
| disabled | Weather to disable rate | boolean | false |
| touchable | Weather to allow select rate by touch gesture | boolean | true |
| change | Triggered when rate changed | (event) => void |
