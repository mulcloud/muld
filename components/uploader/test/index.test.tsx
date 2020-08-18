import * as React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'regenerator-runtime';
import Uploader from '..';

const mockFileDataUrl = 'data:image/test';
const mockFile = new File([], 'test.jpg');
const file = { target: { files: [mockFile] } };
const IMAGE = 'https://img.yzcdn.cn/vant/cat.jpeg';

(window as any).FileReader = function () {
    this.readAsText = function () {
        this.onload &&
            this.onload({
                target: {
                    result: mockFileDataUrl,
                },
            });
    };
    this.readAsDataURL = this.readAsText;
};

(window as any).File = function () {
    this.size = 10000;
};

const EventDemo = (props: any) => {
    const [fileList, setFileList] = React.useState([{ url: IMAGE }]);
    return (
        <Uploader
            fileList={fileList}
            onDelete={(item: any, detail: any, index: number) => {
                const newFileList = fileList.splice(0);
                newFileList.splice(index, 1);
                setFileList(newFileList);
            }}
            {...props}
        ></Uploader>
    );
};

export function later(delay: number = 0): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

describe('Uploader', () => {
    afterEach(cleanup);

    it('disabled', () => {
        const afterRead = jest.fn();
        const { container } = render(<EventDemo disabled={true} afterRead={afterRead} />);
        const input = container.querySelector('.mul-uploader__input');
        fireEvent.change(input as Element, file);
        expect(afterRead).toHaveBeenCalledTimes(0);
    });

    it('result-type as text', (done) => {
        const afterRead = (readFile: any) => {
            expect(readFile.content).toEqual(mockFileDataUrl);
            done();
        };
        const { container } = render(<EventDemo resultType="text" afterRead={afterRead} />);
        const input = container.querySelector('.mul-uploader__input');
        fireEvent.change(input as Element, file);
    });

    it('result-type as file', (done) => {
        const afterRead = (readFile: any) => {
            expect(readFile.file).toBeTruthy();
            expect(readFile.content).toBeFalsy();
            done();
        };
        const { container } = render(
            <EventDemo name="uploader" resultType="file" afterRead={afterRead} />,
        );
        const input = container.querySelector('.mul-uploader__input');
        fireEvent.change(input as Element, file);
    });

    it('set input name', (done) => {
        const beforeRead = (readFile: any, detail: any) => {
            expect(detail.name).toEqual('uploader');
            return true;
        };
        const afterRead = (readFile: any, detail: any) => {
            expect(detail.name).toEqual('uploader');
            done();
        };
        const { container } = render(
            <EventDemo name="uploader" beforeRead={beforeRead} afterRead={afterRead} />,
        );
        const input = container.querySelector('.mul-uploader__input');
        fireEvent.change(input as Element, file);
    });

    it('unknown resultType', () => {
        const afterRead = jest.fn();
        const { container } = render(<EventDemo resultType="xxx" afterRead={afterRead} />);
        const input = container.querySelector('.mul-uploader__input');
        fireEvent.change(input as Element, file);
        expect(afterRead).toHaveBeenCalledTimes(0);
    });

    it('before read return false', () => {
        const afterRead = jest.fn();
        const { container } = render(<EventDemo beforeRead={() => false} afterRead={afterRead} />);
        const input = container.querySelector('.mul-uploader__input');
        fireEvent.change(input as HTMLInputElement, file);
        expect(afterRead).toHaveBeenCalledTimes(0);
        expect(input?.value).toEqual('');
    });

    it('before read return promise and resolve', async () => {
        const afterRead = jest.fn();
        const beforeRead = () => {
            return new Promise((resolve) => {
                resolve(file);
            });
        };
        const { container } = render(<EventDemo beforeRead={beforeRead} afterRead={afterRead} />);
        const input = container.querySelector('.mul-uploader__input');
        fireEvent.change(input as HTMLInputElement, file);
        await later();
        expect(afterRead).toHaveBeenCalledTimes(1);
    });

    it('before read return promise and resolve no value', async () => {
        const afterRead = jest.fn();
        const beforeRead = () => {
            return new Promise((resolve) => {
                resolve();
            });
        };
        const { container } = render(<EventDemo beforeRead={beforeRead} afterRead={afterRead} />);
        const input = container.querySelector('.mul-uploader__input');
        fireEvent.change(input as HTMLInputElement, file);
        await later();
        expect(afterRead).toHaveBeenCalledTimes(1);
        expect(input?.value).toEqual('');
    });

    it('before read return promise and reject', async () => {
        const afterRead = jest.fn();
        const beforeRead = () => {
            return new Promise((resolve, reject) => {
                reject();
            });
        };
        const { container } = render(<EventDemo beforeRead={beforeRead} afterRead={afterRead} />);
        const input = container.querySelector('.mul-uploader__input');
        fireEvent.change(input as HTMLInputElement, file);
        expect(afterRead).toHaveBeenCalledTimes(0);
        expect(input?.value).toEqual('');
    });

    it('file size overlimit', async () => {
        const onOversize = jest.fn();
        const { container } = render(<EventDemo maxSize={-1} onOversize={onOversize} />);
        const input = container.querySelector('.mul-uploader__input');
        fireEvent.change(input as HTMLInputElement, file);
        await later();
        expect(onOversize).toHaveBeenCalledTimes(1);
    });

    it('render preview image with image-fit prop', () => {
        const fileList = [{ url: 'https://img.yzcdn.cn/vant/cat.jpeg' }];
        const { asFragment } = render(<EventDemo imageFit="contain" fileList={fileList} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('upload-icon prop', () => {
        const { asFragment } = render(<EventDemo uploadIcon="add" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('disable preview image', () => {
        const { asFragment } = render(<EventDemo previewImage={false} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('deletable prop equal true', () => {
        const { container } = render(<EventDemo />);
        const deleteEle = container.querySelector('.mul-uploader__preview-delete');
        expect(deleteEle).toBeTruthy();
    });

    it('deletable prop equal false', () => {
        const { container } = render(<EventDemo deletable={false} />);
        const deleteEle = container.querySelector('.mul-uploader__preview-delete');
        expect(deleteEle).toBeFalsy();
    });

    it('delete preview image', () => {
        const { container } = render(<EventDemo />);
        let imageList = container.querySelectorAll('.mul-image__img');
        expect(imageList?.length).toEqual(1);
        const deleteEle = container.querySelector('.mul-uploader__preview-delete');
        fireEvent.click(deleteEle as HTMLElement);
        imageList = container.querySelectorAll('.mul-image__img');
        expect(imageList?.length).toEqual(0);
    });

    it('before-delete prop return false', () => {
        const onDelete = jest.fn();
        const { container } = render(<EventDemo beforeDelete={() => false} />);
        const deleteEle = container.querySelector('.mul-uploader__preview-delete');
        fireEvent.click(deleteEle as HTMLElement);
        expect(onDelete).toHaveBeenCalledTimes(0);
    });

    it('before-delete prop return true', () => {
        const onDelete = jest.fn();
        const { container } = render(<EventDemo beforeDelete={() => true} onDelete={onDelete} />);
        const deleteEle = container.querySelector('.mul-uploader__preview-delete');
        fireEvent.click(deleteEle as HTMLElement);
        expect(onDelete).toHaveBeenCalledTimes(1);
    });

    it('show-upload prop equal false', () => {
        const { container } = render(<EventDemo showUpload={false} />);
        const uploader = container.querySelector('.mul-uploader__upload');
        expect(uploader).toBeFalsy();
    });

    it('preview-cover slot', () => {
        const fileList = [{ url: IMAGE }, { url: IMAGE }];
        const { asFragment } = render(
            <EventDemo fieList={fileList}>
                <div slot="preview-cover">
                    <div className="preview-cover mul-ellipsis">图片名称</div>
                </div>
            </EventDemo>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
