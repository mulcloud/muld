# List

### Intro

A list component to show items and control loading status.

### Install

```js
import { List, Cell } from '@trillion/muld';
```

## Usage

### Basic Usage

```js
const [loading, setLoading] = React.useState(false);
const [finished, setFinished] = React.useState(false);
const [data, setData] = React.useState<Array<string | number>>([]);
const onLoad = (): void => {
    if (data.length > 100) {
        setFinished(true);
        return;
    }
    setLoading(true);
    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            const text: number | string = data.length + 1;
            data.push(text < 10 ? `0${text}` : text);
        }
        setData(data);
        setLoading(false);
    }, 1000);
};

const renderData = (): React.ReactNodeArray => {
    return data.map((item: number | string) => {
        return <Cell key={item} title={item} />;
    });
};
```

```html
<List loading={loading} finished={finished} finishedText="没有更多了" onLoad={onLoad}>
    {renderData()}
</List>
```


### Error Info

```js
const [loading, setLoading] = React.useState(false);
const [finished, setFinished] = React.useState(false);
const [error, setError] = React.useState(false);
const [data, setData] = React.useState<Array<string | number>>([]);

const onLoad = (): void => {
    if (data.length > 100) {
        setFinished(true);
        return;
    }
    setLoading(true);

    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            const text: number | string = data.length + 1;
            data.push(text < 10 ? `0${text}` : text);
        }
        if (data.length === 20 && !error) {
            setError(true);
        } else {
            setError(false);
        }
        setData(data);
        setLoading(false);
    }, 1000);
};

const renderData = (): React.ReactNodeArray => {
    return data.map((item: number | string) => {
        return <Cell key={item} title={item} />;
    });
};
```

```html
<List
    loading={loading}
    finished={finished}
    error={error}
    errorText="加载有误，点击刷新"
    onLoad={onLoad}
>
    {renderData()}
</List>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| loading | Whether to show loading info，the `onLoad` event will not be triggered when loading | _boolean_ | `false` |
| finished | Whether loading is finished，the `onLoad` event will not be triggered when finished | _boolean_ | `false` |
| error | Whether loading is error，the `onLoad` event will be triggered only when error text clicked, the `sync` modifier is needed | _boolean_ | `false` |
| offset | The onLoad event will be triggered when the distance between the scrollbar and the bottom is less than offset | _number \| string_ | `300` |
| loadingText | Loading text | _string \| ReactNode_ | `Loading...` |
| finishedText | Finished text | _string \| ReactNode_ | - |
| errorText | Error loaded text | _string \| ReactNode_ | - |
| immediateCheck | Whether to check loading position immediately after mounted | _boolean_ | `true` |
| direction | Scroll direction，can be set to `up` | _string_ | `down` |
| onLoad | Triggered when the distance between the scrollbar and the bottom is less than offset | () => void | - |
