# Picker selector

### Introduction

Provide multiple sets of options for users to choose, support single column selection and multi-column cascade

### Introduction

```js
import { Picker } from'@trillion/muld';
```

## Code Demo

### Basic usage
```jsx
function BaseDemo() {
    const textColumns = ['Hangzhou','Ningbo','Wenzhou','Shaoxing','Huzhou','Jiaxing','Jinhua','Qzhou'];

    return (<Picker columns={textColumns}/>);
}
```
#### Option configuration

The Picker component configures option data through the `columns` property, which is an array containing strings or objects.

#### Top bar

After setting the `show-toolbar` property, the top operation bar will be displayed. The top bar contains the title, confirm button and cancel button. Click the confirm button to trigger the `confirm` event, click the cancel button to trigger the `cancel` event

```jsx
function TopbarDemo() {
    const textColumns = ['Hangzhou','Ningbo','Wenzhou','Shaoxing','Huzhou','Jiaxing','Jinhua','Qzhou'];

    const onChange = (value, index) => {
        console.log('BaseDemo change', value, index);
    };

    const onConfirm = (value, index) => {
        console.log('BaseDemo confirm', value, index);
    };
    
    const onCancel = () => {
        console.log('BaseDemo cancel');
    };

    return (<Picker
        columns={textColumns}
        showToolbar={true}
        onChange={onChange}
        onConfirm={onConfirm}
        onCancel={onCancel}
    />);
}
```

### Default selected item

When selecting a single column, you can set the index of the initial selected item through the `defaultIndex` property

```html
<Picker showToolbar title="title" :columns="columns" defaultIndex={2} />
```

### Multiple column selection

The `columns` attribute can configure multiple column selections in the form of an object array. Option data, initial selected items, etc. can be configured in the object. For the detailed format, see [table below](#/zh-CN/picker#column-shu-ju-jie -gou).

```jsx
function defaultIndexDemo() {
    const dateColumns = [
        {
            values: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
            defaultIndex: 2,
        },
        {
            values: ['Morning','Afternoon','Evening'],
            defaultIndex: 1,
        },
    ];

    return <Picker columns={dateColumns} showToolbar={true} title="title" />
}
```

### Cascade selection

Use the `children` field of `columns` to achieve the effect of option cascade


```jsx
function cascadeDemo() {
    const columns = [
        {
            text:'Zhejiang',
            children: [
                {
                    text:'Hangzhou',
                    children: [{ text:'West Lake District' }, {text:'Yuhang District' }],
                },
                {
                    text:'Wenzhou',
                    children: [{ text:'Lucheng District' }, {text:'Ouhai District' }],
                },
            ],
        },
        {
            text:'Fujian',
            children: [
                {
                    text:'Fuzhou',
                    children: [{ text:'Gulou District' }, {text:'Taijiang District' }],
                },
                {
                    text:'Xiamen',
                    children: [{ text:'Siming District' }, {text:'Haicang District' }],
                },
            ],
        },
    ];

    return <Picker columns={columns} showToolbar={true} title="title" />;
}
```

> The data nesting depth of cascade selection needs to be consistent. If some options have no sub-options, you can use an empty string as a placeholder

### Disable option

The option can be an object structure, which can be disabled by setting disabled

```jsx
function disableDemo() {
    const disabledColumns = [
        {text:'Delaware', disabled: true },
        {text:'Florida' },
        {text:'Georqia' },
    ],

    return <Picker columns={disabledColumns} showToolbar={true} title="title" />;
}
```

### Dynamically set options

The selector can be controlled more flexibly through the instance method on Picker, such as using the `setColumnValues` method to achieve multi-column linkage

```js
function dynamicallyDemo() {
    const cities = {
        Zhejiang: ['Hangzhou','Ningbo','Wenzhou','Jiaxing','Huzhou'],
        Fujian: ['Fuzhou','Xiamen','Putian','Sanming','Quanzhou'],
    };

    const columns = [{ values: Object.keys(cities) }, {values: cities['Zhejiang'] }]

    return <Picker showToolbar={true} columns={columns} title="title"/>;
}
```

### Loading status

If the selector data is obtained asynchronously, the loading prompt can be displayed through the `loading` property

```jsx
function loadingDemo() {
    const textColumns = ['Hangzhou','Ningbo','Wenzhou','Shaoxing','Huzhou','Jiaxing','Jinhua','Qzhou'];

    return <Picker showToolbar={true} columns={textColumns} loading={true} />;
}
```
### Default slot
Picker unnamed child nodes as custom content in the head area

```jsx
function defaultSlotDemo() {
    const textColumns = ['Hangzhou','Ningbo','Wenzhou','Shaoxing','Huzhou','Jiaxing','Jinhua','Qzhou'];

    return (<Picker showToolbar={true} columns={textColumns}>
        <div style={{ color:'red', textAlign:'center' }}>Default slot (head display)</div>
    </Picker>);
}
```

### Custom slot
Define named slots by slot

```jsx
function customDemo() {
    const textColumns = ['Hangzhou','Ningbo','Wenzhou','Shaoxing','Huzhou','Jiaxing','Jinhua','Qzhou'];

    return (<Picker showToolbar={true} columns={textColumns}>
        <div slot="title" style={{ color:'red', textAlign:'center' }}>
            Custom title slot
        </div>
        <div
            slot="columns-top"
            style={{ backgroundColor:'#eee', textAlign:'center' }}
        >
            Select the slot above the content area
        </div>
        <div
            slot="columns-bottom"
            style={{ backgroundColor:'#eee', textAlign:'center' }}
        >
            Select the slot above the content area
        </div>
    </Picker>);
}
```

## API

### Props

| Parameters | Description | Type | Default Value |
| ------------------------ | ------------------------ ---------------------- | ------------------ | ------- |
| columns | Object array, configure the data displayed in each column | _Column[]_ | `[]` |
| title | Top column title | _string_ |-|
| confirmButtonText | Confirm button text | _string_ | `Confirm` |
| cancelButtonText | Cancel button text | _string_ | `Cancel` |
| valueKey | In the option object, the key name corresponding to the option text | _string_ | `text` |
| toolbarPosition | Top bar position, optional value is `bottom` | _string_ | `top` |
| loading | Whether to display the loading status | _boolean_ | `false` |
| showToolbar | Whether to show the top bar | _boolean_ | `false` |
| allowHtml | Whether to allow HTML rendering in option content | _boolean_ | `true` |
| defaultIndex | When single column selection, the index of the default selected item | _number \| string_ | `0` |
| itemHeight | Option height, default `px` | _number_|  | `44` |
| visibleItemCount | The number of visible options | _number | string_ | `6` |
| swipeDuration | The duration of inertial scrolling when swiping quickly, the unit is `ms` | _number \| string_ | `1000` |

### Events

When the selector has multiple columns, the event callback parameter will return an array

| Event name | Description | Callback parameters |
| ------- | ------------------ | ------------------------------------------------------------------------------------------------ |
| onConfirm | Triggered when the Finish button is clicked | Single column: selected value, index corresponding to selected value<br>Multi-column: selected value in all columns, index corresponding to selected value in all columns |
| onCancel | Triggered when the cancel button is clicked | Single column: selected value, index corresponding to selected value<br>Multi-column: selected value in all columns, index corresponding to selected value in all columns |
| onChange | Triggered when the option changes | Single column: Picker instance, selected value, index corresponding to the selected value<br>Multi-column: Picker instance, selected value in all columns, index corresponding to the current column |

### Slots

| Name | Description |
| -------------- | ------------------ |
| default | Customize the content of the top bar |
| title | Custom title content |
| columnsTop | Customize options above content |
| columnsBottom | Content below custom options |

### Column data structure

When multiple columns of data are passed in, `columns` is an array of objects, each object in the array is configured with each column, and each column has the following `key`

| Key name | Description | Type |
| ----------------- | -------------------------- | ----------- |
| values ​​| The corresponding candidate value in the column | _string[]_ |
| defaultIndex | The index of the initially selected item, the default is 0 | _number_ |
| className | Add an additional class name for the corresponding column | _any_ |
| children | Cascade Options | _Column_ |


## common problem

### Cannot operate components on the desktop?

See [Use on desktop](#/zh-CN/quickstart#zai-zhuo-mian-duan-shi-yong).
