# Uploader 文件上传

### 引入

```js
import { Uploader } from '@trillion/muld';

```

## 代码演示

### 基础用法

文件上传完毕后会触发 `afterRead` 回调函数，获取到对应的 `file` 对象。

```html
<Uploader afterAead={afterRead} />
```

```js

type FileType = {
    content?: string,
    file?: any,
    status?: string,
    message?:string,
    [k: string]: any;
}

const afterRead = (file: FileType, detail: Record<string, any>) => {
    console.log(file, detail);
}
```

### 文件预览

通过`fileList`可以绑定已经上传的文件列表，并展示文件列表的预览图。

```html
<Uploader fileList={fileList} afterRead ={afterRead} onDelete = {delete} multiple />
```

```js
const [fileList, setFileList] = React.useState<Array<FileType>>([
      { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      { url: 'https://cloud-image', isImage: true },
]);

const afterRead = (file: FileType) => {
      setFileList([...fileList, file])}}
}

const delete = (item: FileType, detail: Record<string, any>, index: number)) => {
      const newFileList = fileList.splice(0);
      newFileList.splice(index,1);
      setFileList(newFileList);
}

```

### 上传状态

通过 `status` 属性可以标识上传状态，`uploading` 表示上传中，`failed` 表示上传失败，`done` 表示上传完成。

```html
<Uploader fileList={fileList} afterRead={afterRead} />
```

```js

const afterRead = (item: FileType, detail: Record<string, any>) => {
    item.status = 'uploading';
    item.message = '上传中';

    setFileList([statusFileList, item]);

    setTimeout(() => {
        item.status = 'failed';
        item.message = '上传失败';
        setFileList([...statusFileList, item]);
    }, 1000);
};

```

### 限制上传数量

通过 `max-count` 属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。

```html
<Uploader fileList={fileList} multiple max-count={2} />
```


### 限制上传大小

通过 `max-size` 属性可以限制上传文件的大小，超过大小的文件会被自动过滤，这些文件信息可以通过 `oversize` 事件获取。

```html
<Uploader multiple maxSize={500 * 1024} onOversize={onOversize} />
```

```js
const onOversize = (file: FileType, detail: Record<string, any>) => {
    console.log(file, detail);
    alert('File size cannot exceed 500kb');
};
```

### 自定义上传样式

通过默认插槽可以自定义上传区域的样式。

```html
<Uploader>
  <Button icon="plus" type="primary">上传文件</Bbutton>
</Uploader>
```

### 自定义预览样式

通过 `preview-cover` 插槽可以自定义覆盖在预览区域上方的内容。

```html
<Uploader fileList={fileList}>
    <div slot="preview-cover">
        <div className="preview-cover mul-ellipsis">图片名称</div>
    </div>
</Uploader>

<style>
  .preview-cover {
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    width: 100%;
    padding: 0.25rem;
    color: #fff;
    font-size: 0.75rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
```

### 上传前置处理

通过传入 `beforeRead` 函数可以在上传前进行校验和处理，返回 `true` 表示校验通过，返回 `false` 表示校验失败。支持返回 `Promise` 对 file 对象进行自定义处理，例如压缩图片。

```html
<Uploader beforeRead={beforeRead} />
```

```js
const beforeRead = (file: FileType) => {
      if (file.type !== 'image/jpeg') {
        alert('请上传 jpg 格式图片');
        return false;
      }
      return true;
}

const asyncBeforeRead = (file: FileType) => {
        return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          alert('请上传 jpg 格式图片');
          reject();
        } else {
          let img = new File(['foo'], 'bar.jpg', {
            type: 'image/jpeg',
          });
          resolve(img);
        }
      });
}
```

### 禁用文件上传

通过 `disabled` 属性禁用文件上传

```html
<Uploader disabled />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fileList | 已上传的文件列表 | _FileListItem[]_ | - |
| accept | 允许上传的文件类型，[详细说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | _string_ | `image/*` |
| name | 标识符，可以在回调函数的第二项参数中获取 | _number \| string_ | - |
| previewSize | 预览图和上传区域的尺寸，默认单位为`px` | _number \| string_ | `80px` |
| previewImage | 是否在上传完成后展示预览图 | _boolean_ | `true` |
| previewFullImage(ToDo, 依赖image-preview组件) | 是否在点击预览图后展示全屏图片预览 | _boolean_ | `true` |
| previewOptions(ToDo, 依赖image-preview组件) | 全屏图片预览的配置项，可选值见 [ImagePreview](#/zh-CN/image-preview) | _object_ | - |
| multiple | 是否开启图片多选，部分安卓机型不支持 | _boolean_ | `false` |
| disabled | 是否禁用文件上传 | _boolean_ | `false` |
| deletable | 是否展示删除按钮 | _boolean_ | `true` |
| showUpload | 是否展示上传区域 | _boolean_ | `true` |
| lazyLoad(TODO) | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | _boolean_ | `false` |
| capture | 图片选取模式，可选值为 `camera` (直接调起摄像头) | _string_ | - |
| afterRead | 文件读取完成后的回调函数 | _Function_ | - |
| beforeRead | 文件读取前的回调函数，返回 `false` 可终止文件读取，<br>支持返回`Promise` | _Function_ | - |
| beforeDelete | 文件删除前的回调函数，返回 `false` 可终止文件读取，<br>支持返回`Promise` | _Function_ | - |
| maxSize | 文件大小限制，单位为 `byte` | _number \| string_ | - |
| maxCount | 文件上传数量限制 | _number \| string_ | - |
| resultType | 文件读取结果类型，可选值为 `file` `text` | _string_ | `dataUrl` |
| uploadText | 上传区域文字提示 | _string_ | - |
| imageFit  | 预览图裁剪模式，可选值见 [Image](#/zh-CN/image) 组件 | _string_ | `cover` |
| uploadIcon | 上传区域[图标名称](#/zh-CN/icon)或图片链接 | _string_ | `photograph` |

### Events

| 事件名        | 说明                   | 回调参数       |
| ------------- | ---------------------- | -------------- |
| onOversize    | 文件大小超过限制时触发 | 同`afterAead` |
| onClickPreview(TODO, 依赖image-preview组件) | 点击预览图时触发       | 同`afterAead` |
| onClosePreview(TODO, 依赖image-preview组件)| 关闭全屏图片预览时触发 | -              |
| onDelete     | 删除文件预览时触发     | 同`afterAead` |

### Slots

| 名称 | 说明 |
| --- | --- | 
| default | 自定义上传区域 | 
| preview-cover | 自定义覆盖在预览区域上方的内容  |

### 回调参数
beforeAead、afterAead、beforeDelete 执行时会传递以下回调参数：
| 参数名 | 说明                              | 类型     |
| ------ | --------------------------------- | -------- |
| file   | file 对象                         | _object_ |
| detail | 额外信息，包含 name 和 index 字段 | _object_ |

### ResultType  可选值

`result-type`字段表示文件读取结果的类型，上传大文件时，建议使用 file 类型，避免卡顿。

| 值      | 描述                                           |
| ------- | ---------------------------------------------- |
| file    | 结果仅包含 File 对象                           |
| text    | 结果包含 File 对象，以及文件的文本内容         |
| dataUrl | 结果包含 File 对象，以及文件对应的 base64 编码 |

### 方法
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| onCloseImagePreview(TODO, 依赖image-preview组件) | 关闭全屏的图片预览 | - | - |
| chooseFile(TODO) | 主动调起文件选择，由于浏览器安全限制，只有在用户触发操作的上下文中调用才有效 | - | - |
