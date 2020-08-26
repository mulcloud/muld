import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Uploader from '..';
import Button from '../../button';
import { $white, $padding_md } from '../../style/var';

type FileType = {
    content?: string;
    file?: any;
    status?: string;
    message?: string;
    [k: string]: any;
};

export default function UploaderDemo() {
    const [fileList, setFileList] = React.useState<Array<FileType>>([
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/tree.jpg' },
    ]);

    const [fileList2, setFileList2] = React.useState<Array<FileType>>([
        { url: 'https://img.yzcdn.cn/vant/sand.jpg' },
    ]);

    const [fileList3, setFileList3] = React.useState<Array<FileType>>([]);

    const [fileList4, setFileList4] = React.useState<Array<FileType>>([
        { url: 'https://img.yzcdn.cn/vant/sand.jpg' },
    ]);

    const [previewCoverFiles, setPreviewCoverFiles] = React.useState<Array<FileType>>([
        {
            url: 'https://img.yzcdn.cn/vant/leaf.jpg',
            file: {
                name: '图片名称',
            },
        },
    ]);
    const [statusFileList, setStatusFileList] = React.useState<Array<FileType>>([
        {
            url: 'https://img.yzcdn.cn/vant/leaf.jpg',
            status: 'uploading',
            message: '上传中',
        },
        {
            url: 'https://img.yzcdn.cn/vant/tree.jpg',
            status: 'failed',
            message: '上传失败',
        },
    ]);

    const afterRead = (file: FileType, detail: Record<string, any>) => {
        console.log(file, detail);
    };

    const afterReadFailed = (item: FileType) => {
        item.status = 'uploading';
        item.message = '上传中';

        setStatusFileList([...statusFileList, item]);

        setTimeout(() => {
            item.status = 'failed';
            item.message = '上传失败';
            setStatusFileList([...statusFileList, item]);
        }, 1000);
    };

    const onOversize = (file: FileType, detail: Record<string, any>) => {
        console.log(file, detail);
        alert('File size cannot exceed 500kb'); // 提示消息，以后改用toast(ToDo)
    };

    const beforeRead = (file: any) => {
        if (file.type !== 'image/jpeg') {
            alert('请上传 jpg 格式图片'); // 提示消息，以后改用toast(ToDo)
            return false;
        }
        return true;
    };

    return (
        <View className="demo-uploader">
            <DemoBlock title="基础用法">
                <Uploader afterRead={afterRead}></Uploader>
            </DemoBlock>

            <DemoBlock title="文件预览">
                <Uploader
                    fileList={fileList}
                    multiple
                    accept="*"
                    afterRead={(item: any) => {
                        setFileList([...fileList, item]);
                    }}
                    onDelete={(item: any, detail: Record<string, any>, index: number) => {
                        const newFileList = fileList.splice(0);
                        newFileList.splice(index, 1);
                        setFileList(newFileList);
                    }}
                ></Uploader>
            </DemoBlock>

            <DemoBlock title="上传状态">
                <Uploader
                    fileList={statusFileList}
                    multiple
                    afterRead={afterReadFailed}
                    onDelete={(item: FileType, detail: Record<string, any>, index: number) => {
                        const newFileList = statusFileList.splice(0);
                        newFileList.splice(index, 1);
                        setStatusFileList(newFileList);
                    }}
                ></Uploader>
            </DemoBlock>

            <DemoBlock title="限制上传数量">
                <Uploader
                    fileList={fileList2}
                    multiple
                    maxCount={2}
                    afterRead={(item: FileType) => {
                        setFileList2([...fileList2, item]);
                    }}
                    onDelete={(item: any, detail: Record<string, any>, index: number) => {
                        const newFileList = fileList2.splice(0);
                        newFileList.splice(index, 1);
                        setFileList2(newFileList);
                    }}
                ></Uploader>
            </DemoBlock>

            <DemoBlock title="限制上传大小">
                <Uploader
                    fileList={fileList4}
                    multiple
                    maxSize={500 * 1024}
                    onOversize={onOversize}
                    afterRead={(item: FileType) => {
                        setFileList4([...fileList4, item]);
                    }}
                    onDelete={(item: FileType, detail: Record<string, any>, index: number) => {
                        const newFileList = fileList4.splice(0);
                        newFileList.splice(index, 1);
                        setFileList4(newFileList);
                    }}
                ></Uploader>
            </DemoBlock>

            <DemoBlock title="自定义上传样式">
                <Uploader previewImage={false}>
                    <Button type="primary" icon="plus">
                        上传文件
                    </Button>
                </Uploader>
            </DemoBlock>

            <DemoBlock title="自定义预览样式">
                <Uploader
                    fileList={previewCoverFiles}
                    afterRead={(item: FileType) => {
                        setPreviewCoverFiles([...previewCoverFiles, item]);
                    }}
                    onDelete={(item: FileType, detail: Record<string, any>, index: number) => {
                        const newFileList = previewCoverFiles.splice(0);
                        newFileList.splice(index, 1);
                        setPreviewCoverFiles(newFileList);
                    }}
                >
                    <div slot="preview-cover">
                        <div className="preview-cover mul-ellipsis">图片名称</div>
                    </div>
                </Uploader>
            </DemoBlock>

            <DemoBlock title="上传前置处理">
                <Uploader
                    fileList={fileList3}
                    beforeRead={beforeRead}
                    afterRead={(item: FileType) => {
                        setFileList3(fileList3.concat(item));
                    }}
                    onDelete={(item: FileType, detail: Record<string, any>, index: number) => {
                        const newFileList = fileList3.splice(0);
                        newFileList.splice(index, 1);
                        setFileList3(newFileList);
                    }}
                ></Uploader>
            </DemoBlock>

            <DemoBlock title="禁用文件上传">
                <Uploader afterRead={afterRead} disabled></Uploader>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-uploader {
        background: ${$white};

        .mul-uploader {
            margin-left: ${$padding_md};
        }

        .preview-cover {
            position: absolute;
            bottom: 0;
            box-sizing: border-box;
            width: 100%;
            padding: 0.25rem;
            color: #fff;
            font-size: 0.75rem;
            text-align: center;
            background: rgba(0, 0, 0, 0.3);
        }
    }
`;
