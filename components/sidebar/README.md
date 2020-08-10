# Sidebar

### Install

```js
import { Sidebar, SidebarItem } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
 <Sidebar activeKey={0}>
    <SidebarItem title="Title" />
    <SidebarItem title="Title" />
    <SidebarItem title="Title" />
</Sidebar>
```

### Show Badge

```html
<Sidebar activeKey={0}>
    <SidebarItem title="Title" dot />
    <SidebarItem title="Title" badge="5" />
    <SidebarItem title="Title" badge="99+" />
</Sidebar>
```

### Disabled

```html
<Sidebar activeKey={0}>
    <SidebarItem title="Title" />
    <SidebarItem title="Title" disabled />
    <SidebarItem title="Title" />
</Sidebar>
```

### Change Event

```jsx
function SidebarWithChange() {
  const onChange = (i: number) => {
      alert(`Title${i+1}`);
    };
  return (
    <Sidebar activeKey={0} onChange={onChange}>
      <SidebarItem title="Title1" />
      <SidebarItem title="Title2" />
      <SidebarItem title="Title3" />
    </Sidebar>
  );
}
```

## API

### Sidebar Props

| Attribute | Description          | Type               | Default |
| --------- | -------------------- | ------------------ | ------- |
| activeKey   | Index of chosen item | _number \| string_ | `0`     |

### Sidebar Events

| Event  | Description                 | Arguments                    |
| ------ | --------------------------- | ---------------------------- |
| onChange | Triggered when item changed | index: index of current item |

### SidebarItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Content | _string_ | `''` |
| dot  | Whether to show red dot | _boolean_ | `false` |
| badge  | Content of the badge | _number \| string_ | `''` |
| disabled | Whether to be disabled | _boolean_ | `false` |

### SidebarItem Events

| Event | Description               | Arguments                    |
| ----- | ------------------------- | ---------------------------- |
| onClick | Triggered when click item | index: index of current item |
