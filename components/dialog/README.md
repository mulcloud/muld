# Dialog

### Install

```js
import { Dialog } from '@trillion/muld';

```

## Usage

### Alert dialog

Used to prompt for some messages, only including one confirm button.

```html
<Dialog visible={boolean} title="Title" showConfirmButton>
  Content
</Dialog>
```


### Confirm dialog

Used to confirm some messages, including a confirm button and a cancel button.


```html
<Dialog visible={boolean} title="Title" showCancelButton showConfirmButton>
  Content
</Dialog>
```

### Advanced Usage

If you need to render vue components within a dialog, you can use dialog component.

```html
<Dialog visible={boolean} title="Title" showCancelButton showConfirmButton>
  Content
</Dialog>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show dialog | _boolean_ | - |
| title | Title | _string_ | - |
| width | Width | _number \| string_ | `320px` |
| messageAlign | Message align，can be set to `left` `right` | _string_ | `center` |
| showConfirmButton | Whether to show confirm button | _boolean_ | `true` |
| showCancelButton | Whether to show cancel button | _boolean_ | `false` |
| cancelButtonText | Cancel button text | _string_ | `Cancel` |
| cancelButtonColor | Cancel button color | _string_ | `black` |
| confirmButtonText | Confirm button text | _string_ | `Confirm` |
| confirmButtonColor | Confirm button color | _string_ | `#1989fa` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlayClass | Custom overlay class | _string_ | - |
| overlayStyle | Custom overlay style | _object_ | - |
| closeOnClickOverlay | Whether to close when click overlay | _boolean_ | `false` |
| lockScroll | Whether to lock background scroll | _boolean_ | `true` |
| getContainer | Return the mount node for Dialog | _string \| () => Element_ | - |

### Events

| Event   | Description                         | Parameters |
| ------- | ----------------------------------- | ---------- |
| confirm | Triggered when click confirm button | -          |
| cancel  | Triggered when click cancel button  | -          |

