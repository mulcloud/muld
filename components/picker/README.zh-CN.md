# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联

### 引入

```js
import { Picker } from '@trillion/muld';
```

## 代码演示

### 基础用法
```jsx
function baseDemo() {
    const textColumns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'];

    return (<Picker columns={textColumns}/>);
}
```
#### 选项配置

Picker 组件通过`columns`属性配置选项数据，`columns`是一个包含字符串或对象的数组。

#### 顶部栏

设置`show-toolbar`属性后会展示顶部操作栏，顶部栏包含标题、确认按钮和取消按钮，点击确认按钮触发`confirm`事件，点击取消按钮触发`cancel`事件

```jsx
function toolbarDemo() {
    const textColumns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'];

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

### 默认选中项

单列选择时，可以通过`defaultIndex`属性设置初始选中项的索引

```html
<Picker showToolbar title="标题" :columns="columns" defaultIndex={2} />
```

### 多列选择

`columns`属性可以通过对象数组的形式配置多列选择，对象中可以配置选项数据、初始选中项等，详细格式见[下方表格](#/zh-CN/picker#column-shu-ju-jie-gou)。

```jsx
function defaultIndexDemo() {
    const dateColumns = [
        {
            values: ['周一', '周二', '周三', '周四', '周五'],
            defaultIndex: 2,
        },
        {
            values: ['上午', '下午', '晚上'],
            defaultIndex: 1,
        },
    ];

    return <Picker columns={dateColumns} showToolbar={true} title="标题" />
}
```

### 级联选择

使用`columns`的`children`字段可以实现选项级联的效果


```jsx
function cascadeDemo() {
    const columns = [
        {
            text: '浙江',
            children: [
                {
                    text: '杭州',
                    children: [{ text: '西湖区' }, { text: '余杭区' }],
                },
                {
                    text: '温州',
                    children: [{ text: '鹿城区' }, { text: '瓯海区' }],
                },
            ],
        },
        {
            text: '福建',
            children: [
                {
                    text: '福州',
                    children: [{ text: '鼓楼区' }, { text: '台江区' }],
                },
                {
                    text: '厦门',
                    children: [{ text: '思明区' }, { text: '海沧区' }],
                },
            ],
        },
    ];

    return <Picker columns={columns} showToolbar={true} title="标题" />;
}
```

> 级联选择的数据嵌套深度需要保持一致，如果部分选项没有子选项，可以使用空字符串进行占位

### 禁用选项

选项可以为对象结构，通过设置 disabled 来禁用该选项

```jsx
function disabledDemo() {
    const disabledColumns = [
        { text: 'Delaware', disabled: true },
        { text: 'Florida' },
        { text: 'Georqia' },
    ],

    return <Picker columns={disabledColumns} showToolbar={true} title="标题" />;
}
```

### 动态设置选项

通过 Picker 上的实例方法可以更灵活地控制选择器，比如使用`setColumnValues`方法实现多列联动

```js
function dynamiclyDemo() {
    const cities = {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州'],
    };

    const columns = [{ values: Object.keys(cities) }, { values: cities['浙江'] }]

    return <Picker showToolbar={true} columns={columns} title="标题"/>;
}
```

### 加载状态

若选择器数据是异步获取的，可以通过 `loading` 属性显示加载提示

```jsx
function loadingDemo() {
    const textColumns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'];

    return <Picker showToolbar={true} columns={textColumns} loading={true} />;
}   
```
### 默认插槽
Picker 未命名子节点作为头部区域自定义内容

```jsx
function defaultSlotDemo() {
    const textColumns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'];

    return (<Picker showToolbar={true} columns={textColumns}>
        <div style={{ color: 'red', textAlign: 'center' }}>默认插槽(头部显示)</div>
    </Picker>);
}   
```

### 自定义插槽
通过 slot 定义命名插槽

```jsx
function customsDemo() {
    const textColumns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'];

    return (<Picker showToolbar={true} columns={textColumns}>
        <div slot="title" style={{ color: 'red', textAlign: 'center' }}>
            自定义标题插槽
        </div>
        <div
            slot="columns-top"
            style={{ backgroundColor: '#eee', textAlign: 'center' }}
        >
            选择内容区域上方插槽
        </div>
        <div
            slot="columns-bottom"
            style={{ backgroundColor: '#eee', textAlign: 'center' }}
        >
            选择内容区域上方插槽
        </div>    
    </Picker>);
}   
```

## API

### Props

| 参数                     | 说明                                           | 类型               | 默认值  |
| ------------------------ | ---------------------------------------------- | ------------------ | ------- |
| columns                  | 对象数组，配置每一列显示的数据                 | _Column[]_         | `[]`    |
| title                    | 顶部栏标题                                     | _string_           | -       |
| confirmButtonText      | 确认按钮文字                                   | _string_           | `确认`  |
| cancelButtonText       | 取消按钮文字                                   | _string_           | `取消`  |
| valueKey                | 选项对象中，选项文字对应的键名                 | _string_           | `text`  |
| toolbarPosition        | 顶部栏位置，可选值为`bottom`                   | _string_           | `top`   |
| loading                  | 是否显示加载状态                               | _boolean_          | `false` |
| showToolbar             | 是否显示顶部栏                                 | _boolean_          | `false` |
| allowHtml      | 是否允许选项内容中渲染 HTML                    | _boolean_          | `true`  |
| defaultIndex            | 单列选择时，默认选中项的索引                   | _number \| string_ | `0`     |
| itemHeight     | 选项高度，支持 `px` `vw` `rem` 单位，默认 `px` | _number \| string_ | `44`    |
| visibleItemCount       | 可见的选项个数                                 | _number \| string_ | `6`     |
| swipeDuration | 快速滑动时惯性滚动的时长，单位 `ms`            | _number \| string_ | `1000`  |

### Events

当选择器有多列时，事件回调参数会返回数组

| 事件名  | 说明               | 回调参数                                                                                         |
| ------- | ------------------ | ------------------------------------------------------------------------------------------------ |
| confirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引                     |
| cancel  | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引                     |
| change  | 选项改变时触发     | 单列：Picker 实例，选中值，选中值对应的索引<br>多列：Picker 实例，所有列选中值，当前列对应的索引 |

### Slots

| 名称           | 说明               |
| -------------- | ------------------ |
| default        | 自定义顶部栏内容   |
| title          | 自定义标题内容     |
| columnsTop   | 自定义选项上方内容 |
| columnsBottom | 自定义选项下方内容 |

### Column 数据结构

当传入多列数据时，`columns`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`

| 键名              | 说明                       | 类型       |
| ----------------- | -------------------------- | ---------- |
| values            | 列中对应的备选值           | _string[]_ |
| defaultIndex      | 初始选中项的索引，默认为 0 | _number_   |
| className         | 为对应列添加额外的类名     | _any_      |
| children | 级联选项                   | _Column_   |


## 常见问题

### 在桌面端无法操作组件？

参见[在桌面端使用](#/zh-CN/quickstart#zai-zhuo-mian-duan-shi-yong)。
