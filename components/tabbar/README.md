# Tabbar

### Install

```js
import { Tabbar, TabbarItem } from '@trillion/muld'
```

## Usage

### Basic Usage

```html
<Tabbar active={0}>
  <TabbarItem icon="home-o">Tab</TabbarItem>
  <TabbarItem icon="search">Tab</TabbarItem>
  <TabbarItem icon="friends-o">Tab</TabbarItem>
  <TabbarItem icon="setting-o">Tab</TabbarItem>
</Tabbar>
```

### Match by name

```html
<Tabbar active="home">
  <TabbarItem name="home" icon="home-o">Tab</TabbarItem>
  <TabbarItem name="search" icon="search">Tab</TabbarItem>
  <TabbarItem name="friends" icon="friends-o">Tab</TabbarItem>
  <TabbarItem name="setting" icon="setting-o">Tab</TabbarItem>
</Tabbar>
```

### Show Badge

```html
<Tabbar active={0}>
  <TabbarItem icon="home-o">Tab</TabbarItem>
  <TabbarItem icon="search" dot>Tab</TabbarItem>
  <TabbarItem icon="friends-o" badge="5">Tab</TabbarItem>
  <TabbarItem icon="setting-o" badge="20">Tab</TabbarItem>
</Tabbar>
```

### Custom Icon

Use `icon` prop to custom icon

```html
<Tabbar active={active} onChange={onChange}>
  <TabbarItem icon={
      <React.Fragment>
          <img src={img ? icon.active: icon.inactive}/>
      </React.Fragment>
  } 
  badge="3">
    <span>custom</span>
  </TabbarItem>
  <TabbarItem icon="search">Tab</TabbarItem>
  <TabbarItem icon="setting-o">Tab</TabbarItem>
</Tabbar>
```

```js
const active = 0;
const icon = {
    active: 'https://img.yzcdn.cn/vant/user-active.png',
    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
}
const [img, setImage] = React.useState<boolean>(true);
const onChange = (index: number | string) => {
    setImage(index === 0);
}
```

### Custom Color

```html
<Tabbar active={active} activeColor="#07c160" inactiveColor="#000">
  <TabbarItem icon="home-o">Tab</TabbarItem>
  <TabbarItem icon="search">Tab</TabbarItem>
  <TabbarItem icon="friends-o">Tab</TabbarItem>
  <TabbarItem icon="setting-o">Tab</TabbarItem>
</Tabbar>
```

### Change Event

```html
<Tabbar active={active} onChange={onChange}>
  <TabbarItem icon="home-o">Tab1</TabbarItem>
  <TabbarItem icon="search">Tab2</TabbarItem>
  <TabbarItem icon="friends-o">Tab3</TabbarItem>
  <TabbarItem icon="setting-o">Tab4</TabbarItem>
</Tabbar>
```

```js
const onChange = (index: number | string) => {
    if (typeof index !== 'string') {
        alert(`you switch to tab${index + 1}`)
    }
}
```


## API

### Tabbar Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| active | Identifier of current tab | _number \| string_ | `0` |
| fixed | Whether to fixed bottom | _boolean_ | `true` |
| border | Whether to show border | _boolean_ | `true` |
| zIndex | Z-index | _number \| string_ | `1` |
| activeColor | Color of active tab item | _string_ | `#1989fa` |
| inactiveColor | Color of inactive tab item | _string_ | `#7d7e80` |
| placeholder | Whether to generage a placeholder element when fixed | _boolean_ | `false` |
| safeAreaInsetBottom | Whether to enable bottom safe area adaptation | _boolean_ | `false` |

### Tabbar Events

| Event  | Description                      | Arguments                    |
| ------ | -------------------------------- | ---------------------------- |
| onChange | Triggered when change active tab | active: index of current tab |

### TabbarItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Identifier | _number \| string_ | Item index |
| icon | Icon name | _string_ \| _ReactElement_ | - |
| iconPrefix | Icon className prefix | _string_ | `mul-icon` |
| dot | Whether to show red dot | _boolean_ | - |
| badge | Content of the badge | _number \| string_ | `''` |
