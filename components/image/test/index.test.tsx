import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Image from '..';

describe('Image', () => {
    afterEach(cleanup);
    it('click event', () => {
        const onClick = jest.fn();
        const { container } = render(<Image onClick={onClick} />);
        const panel = container.firstChild;
        expect(panel).toHaveClass('mul-image');
        fireEvent.click(panel!);
        expect(onClick).toHaveBeenCalled();
    });

    it('load event', () => {
        const onLoad = jest.fn();
        const { container } = render(
            <Image src="https://img.yzcdn.cn/vant/cat.jpeg" onLoad={onLoad} />,
        );
        const img = container.querySelector('img');
        fireEvent.load(img!);
        expect(onLoad).toHaveBeenCalled();
    });

    it('error event', () => {
        const onError = jest.fn();
        const { container } = render(
            <Image src="https://img.yzcdn.cn/vant/cat.jpeg" onError={onError} />,
        );
        const img = container.querySelector('img');
        fireEvent.error(img!);
        expect(onError).toHaveBeenCalled();
    });

    it('show-loading prop', () => {
        const { asFragment } = render(<Image showLoading={false} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('show-error prop', () => {
        const { asFragment, container } = render(
            <Image src="https://img.yzcdn.cn/vant/cat.jpeg" showError={false} />,
        );
        const img = container.querySelector('img');
        fireEvent.error(img!);
        expect(asFragment()).toMatchSnapshot();
    });

    it('loading-icon prop', () => {
        const { asFragment } = render(<Image loadingIcon="success" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('radius prop', () => {
        const { asFragment } = render(
            <Image radius="3" src="https://img.yzcdn.cn/vant/cat.jpeg" />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
