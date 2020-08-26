# Uploader

### Install

```js
import { Uploader } from '@trillion/uploader'
```

## Usage

### Basic Usage

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

### Preview File

```html
<Uploader fileList={fileList} afterRead ={afterRead} onDelete={delete} multiple />
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

### Upload Status

```html
<Uploader fileList={fileList} afterRead={afterRead} />
```

```js

const afterRead = (item: FileType, detail: Record<string, any>) => {
    item.status = 'uploading';
    item.message = 'Uploading';

    setFileList([statusFileList, item]);

    setTimeout(() => {
        item.status = 'failed';
        item.message = 'Failed';
        setFileList([...statusFileList, item]);
    }, 1000);
};

```

### Max Count

```html
<Uploader fileList={fileList} multiple maxCount={2} />
```


### Max Size

```html
<Uploader multiple maxSize={500 * 1024} onOversize={onOversize} />


```
```js
const onOversize = (file: FileType, detail: Record<string, any>) => {
    console.log(file, detail);
    alert('File size cannot exceed 500kb');
};
```

### Custom Upload Area

```html
<Uploader>
  <Button icon="plus" type="primary">Upload Image</Button>
</Uploader>
```

### Preview Cover

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

### Before Read

```html
<Uploader :before-read="beforeRead" />
```

```js
const beforeRead = (file: FileType) => {
      if (file.type !== 'image/jpeg') {
        alert('Please upload an image in jpg format');
        return false;
      }
      return true;
}

const asyncBeforeRead = (file: FileType) => {
        return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          alert('Please upload an image in jpg format');
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

### Disable Uploader

Use `disabled` prop to disable uploader.

```html
<Uploader disabled />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| fileList | List of uploaded files | _FileListItem[]_ | - |
| accept | Accepted [file type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers) | _string_ | `image/*` |
| name | Input name | _number \| string_ | - |
| previewSize | Size of preview image | _number \| string_ | `5rem` |
| previewImage | Whether to show image preview | _boolean_ | `true` |
| previewFullImage(TODO) | Whethe to show full screen image preview when click image | _boolean_ | `true` |
| previewOptions(TODO)  | Options of full screen image preview，see [ImagePreview](#/en-US/image-preview) | _object_ | - |
| multiple | Whether to enable multiple selection pictures | _boolean_ | `false` |
| disabled | Whether to disabled the upload | _boolean_ | `false` |
| deletable | Whether to show delete icon | _boolean_ | `true` |
| showUpload | Whether to show upload area | _boolean_ | `true` |
| lazyLoad(TODO) | Whether to enable lazy load，should register [Lazyload](#/en-US/lazyload) component | _boolean_ | `false` |
| capture | Capture，can be set to `camera` | _string_ | - |
| afterAead | Hook after reading the file | _Function_ | - |
| beforeRead | Hook before reading the file, return false to stop reading the file, can return Promise | _Function_ | - |
| beforeDelete | Hook before delete the file, return false to stop reading the file, can return Promise | _Function_ | - |
| maxSize | Max size of file | _number \| string_ | - |
| maxCount | Max count of image | _number \| string_ | - |
| resultType | Type of file read result, can be set to `file` `text` | _string_ | `dataUrl` |
| uploadText | Upload text | _string_ | - |
| imageFit | Preview image fit mode | _string_ | `cover` |
| uploadIcon | Upload icon | _string_ | `photograph` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| onOversize | Triggered when file size over limit | Same as after-read |
| onClickPreview(TODO) | Triggered when click preview image | Same as after-read |
| onClosePreview(TODO) | Triggered when close full screen image preview | - |
| onDelete | Triggered when delete preview file | Same as after-read |

### Slots
| Name | Description |
| --- | --- |
| default | Custom icon |
| preview-cover | Custom content that covers the image preview |

### Parematers of before-read、after-read、before-delete

| Attribute | Description                          | Type     |
| --------- | ------------------------------------ | -------- |
| file      | File object                          | _object_ |
| detail    | Detail info, contains name and index | _object_ |

### ResultType

| Value   | Description                                    |
| ------- | ---------------------------------------------- |
| file    | Result contains File object                    |
| text    | Result contains File object and text content   |
| dataUrl | Result contains File object and base64 content |

### Methods

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| closeImagePreview | Close full screen image preview | - | - |
| chooseFile | Trigger choosing files, works with the user action context only because of browser security | - | - |
