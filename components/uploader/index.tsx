import * as React from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps, addUnit, isPromise } from '../utils';
import { View } from './style';
import Icon from '../icon';
import Loading from '../loading';
import Image from '../image';
import { readFile, isOversize, isImageFile, ResultType, FileListItem } from './utils';

const [bem] = createNS('uploader');

type FitType = 'fill' | 'contain' | 'cover' | 'scale-down' | 'none';

export interface PropsType {
    fileList?: Array<FileListItem>;
    disabled?: boolean;
    lazyLoad?: boolean;
    uploadText?: string;
    afterRead?: (validFiles: FileListItem[] | FileListItem, detail: Record<string, any>) => void;
    beforeRead?: (files: File[] | File, detail: Record<string, any>) => any;
    beforeDelete?: (files: FileListItem | FileListItem[], detail: Record<string, any>) => any;
    previewSize?: number | string;
    previewOptions?: Record<string, any>;
    name?: number | string;
    accept?: string;
    maxSize?: number | string;
    maxCount?: number | string;
    deletable?: boolean;
    showUpload?: boolean;
    previewImage?: boolean;
    previewFullImage?: boolean;
    imageFit?: FitType;
    resultType?: ResultType;
    uploadIcon?: string;
    multiple?: boolean;
    onOversize?: (validFiles: FileListItem[] | FileListItem, detail: Record<string, any>) => void;
    onCloseImagePreview?: () => void;
    onDelete?: (
        files: FileListItem | FileListItem[],
        detail: Record<string, any>,
        index: number,
    ) => void;
    children?: React.ReactElement;
}

const defaultProps = {
    fileList: [] as any[],
    name: '',
    accept: 'image/*',
    maxSize: Number.MAX_VALUE,
    maxCount: Number.MAX_VALUE,
    deletable: true,
    showUpload: true,
    previewImage: true,
    previewFullImage: true,
    imageFit: 'cover' as FitType,
    resultType: 'dataUrl' as ResultType,
    uploadIcon: 'photograph',
    lazyLoad: false,
    multiple: false,
};

type UploaderProps = PropsType & typeof defaultProps;

const Uploader: React.FC<React.PropsWithChildren<UploaderProps>> = (props: UploaderProps) => {
    const {
        previewImage,
        fileList,
        disabled,
        deletable,
        beforeDelete,
        name,
        maxSize,
        maxCount,
        showUpload,
        accept,
        previewSize,
        uploadText,
        uploadIcon,
        beforeRead,
        afterRead,
        resultType,
        onOversize,
        imageFit,
        lazyLoad,
        onDelete,
    } = props;

    const inputRef = React.useRef<HTMLInputElement | null>(null);

    function getDetail(index: number = fileList.length) {
        return {
            name,
            index,
        };
    }

    const resetInput = () => {
        if (inputRef && inputRef.current) {
            inputRef.current.value = '';
        }
    };

    function onAfterRead(files: FileListItem | FileListItem[], oversize: boolean) {
        resetInput();
        let validFiles: any = files;
        if (oversize) {
            let oversizeFiles = files;
            if (Array.isArray(files)) {
                oversizeFiles = [];
                validFiles = [];
                files.forEach((item) => {
                    if (item.file) {
                        if (item.file.size > maxSize) {
                            oversizeFiles.push(item);
                        } else {
                            validFiles.push(item);
                        }
                    }
                });
            } else {
                validFiles = null;
            }
            onOversize && onOversize(oversizeFiles, getDetail());
        }

        const isValidFiles = Array.isArray(validFiles)
            ? Boolean(validFiles.length)
            : Boolean(validFiles);
        if (isValidFiles) {
            if (afterRead) {
                afterRead(validFiles, getDetail());
            }
        }
    }

    const readUploadFiles = (files: File | File[]) => {
        const oversize = isOversize(files, maxSize);
        if (Array.isArray(files)) {
            const maxCountGap = Number(maxCount) - fileList.length;

            if (files.length > maxCountGap) {
                files = files.slice(0, maxCountGap);
            }
            Promise.all(files.map((file) => readFile(file, resultType))).then((contents) => {
                const fileList = (files as File[]).map((file: File, index: number) => {
                    const result: FileListItem = { file, status: '', message: '' };
                    if (contents[index]) {
                        result.content = contents[index] as string;
                    }

                    return result;
                });
                onAfterRead(fileList, oversize);
            });
        } else {
            readFile(files, resultType).then((content) => {
                const result: FileListItem = { file: files as File, status: '', message: '' };

                if (content) {
                    result.content = content as string;
                }
                onAfterRead(result, oversize);
            });
        }
    };

    const onChange = (event: any) => {
        let { files } = event.target;

        if (disabled || !files.length) {
            return;
        }

        files = files.length === 1 ? files[0] : [].slice.call(files);

        if (beforeRead) {
            const response = beforeRead(files, getDetail());

            if (!response) {
                resetInput();
                return;
            }

            if (isPromise(response)) {
                response
                    .then((data) => {
                        if (data) {
                            readUploadFiles(data);
                        } else {
                            readUploadFiles(files);
                        }
                    })
                    .catch(resetInput);

                return;
            }
        }
        readUploadFiles(files);
    };

    const slots = (name?: string) => {
        const slots = props.children;
        if (!slots) {
            return '';
        }
        if (name) {
            return Array.isArray(slots)
                ? slots.find((slot) => slot.props.slot === name)
                : slots.props.slot === name && slots;
        }
        if (Array.isArray(slots)) {
            return slots.find((slot) => slot.props && !slot.props.slot);
        }
        return slots.props.slot ? undefined : slots;
    };

    const previewSizeWithUnit = (previewSize?: number | string) => {
        return addUnit(previewSize);
    };

    const onDeleteFile = (file: FileListItem | FileListItem[], index: number) => {
        if (beforeDelete) {
            const response = beforeDelete(file, getDetail(index));

            if (!response) {
                return;
            }

            if (isPromise(response)) {
                response
                    .then(() => {
                        deleteFile(file, index);
                    })
                    .catch(() => {});
                return;
            }
        }
        deleteFile(file, index);
    };

    function deleteFile(file: FileListItem, index: number) {
        onDelete && onDelete(file, getDetail(index), index);
    }

    // preview image(Todo，依赖imgae-preview组件)
    const onPreviewImage = (item: FileListItem) => {
        console.log('preview image');
    };

    const genPreviewMask = (item: FileListItem) => {
        const { status, message } = item;

        if (status === 'uploading' || status === 'failed') {
            const MaskIcon =
                status === 'failed' ? (
                    <Icon name="close" className={bem('mask-icon')} />
                ) : (
                    <Loading className={bem('loading')} />
                );

            return (
                <div className={bem('mask')}>
                    {MaskIcon}
                    {message && <div className={bem('mask-message')}>{message}</div>}
                </div>
            );
        }
        return null;
    };

    const genPreviewItem = (item: FileListItem, index: number) => {
        const showDelete = item.status !== 'uploading' && deletable;
        const DeleteIcon = showDelete && (
            <div
                className={bem('preview-delete')}
                onClick={(event) => {
                    event.stopPropagation();
                    onDeleteFile(item, index);
                }}
            >
                <Icon name="cross" className={bem('preview-delete-icon')} size={16} />
            </div>
        );

        const PreviewCoverContent = slots('preview-cover'); // 往slot内传值（ToDo）

        const PreviewCover = PreviewCoverContent && (
            <div className={bem('preview-cover')}>{PreviewCoverContent}</div>
        );

        const previewStyle: { [k: string]: any } = {
            width: previewSizeWithUnit(previewSize),
            height: previewSizeWithUnit(previewSize),
        };

        const Preview = isImageFile(item) ? (
            <Image
                fit={imageFit}
                src={item.content || item.url}
                className={bem('preview-image')}
                width={previewSize}
                height={previewSize}
                lazyLoad={lazyLoad}
                onClick={() => {
                    onPreviewImage(item);
                }}
            >
                {PreviewCover}
            </Image>
        ) : (
            <div className={bem('file')} style={previewStyle}>
                <Icon className={bem('file-icon')} name="description" />
                <div className={classnames(bem('file-name'), 'mul-ellipsis')}>
                    {item.file ? item.file.name : item.url}
                </div>
                {PreviewCover}
            </div>
        );

        return (
            <div
                key={index}
                className={bem('preview')}
                onClick={() => {
                    console.log('on preview');
                }}
            >
                {Preview}
                {genPreviewMask(item)}
                {DeleteIcon}
            </div>
        );
    };

    const genPreviewList = () => {
        if (previewImage) {
            return fileList.map(genPreviewItem);
        }
        return null;
    };

    const genUpload = (): React.ReactElement | string => {
        if (fileList.length >= maxCount || !showUpload) {
            return '';
        }
        const slot = slots();

        const Input = (
            <input
                ref={inputRef}
                type="file"
                accept={accept}
                className={bem('input')}
                disabled={disabled}
                onChange={onChange}
            />
        );
        if (slot) {
            return (
                <div className={bem('input-wrapper')}>
                    {slot}
                    {Input}
                </div>
            );
        }

        let style: { [k: string]: any } = {};
        if (previewSize) {
            const size = previewSizeWithUnit(previewSize);
            style = {
                width: size,
                height: size,
            };
        }

        return (
            <div className={bem('upload')} style={style}>
                <Icon name={uploadIcon} className={bem('upload-icon')} />
                {uploadText && <span className={bem('upload-text')}>{uploadText}</span>}
                {Input}
            </div>
        );
    };

    return (
        <View className={bem()}>
            <div className={bem('wrapper', { disabled })}>
                {genPreviewList()}
                {genUpload()}
            </div>
        </View>
    );
};

export default withDefaultProps(React.memo(Uploader), defaultProps);
