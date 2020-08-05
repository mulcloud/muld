import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import Icon from '..';

const EventDemo = (props: any): React.ReactElement => {
    return <Icon {...props} />;
};

describe('Icon', () => {
    afterEach(cleanup);

    it('prop name url', () => {
        const { asFragment } = render(
            <Icon name="https://avatar.chengfayun.com.cn/chengfayun-avatar/6ce849b003c18744b54d1a9913db75e9.png" />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('prop color', () => {
        const { container } = render(<EventDemo name="chat-o" color="#07c160" />);
        const button = container.querySelector('.mul-icon-chat-o');
        expect(button).toHaveStyle({
            color: '#07c160',
        });
    });

    it('prop dot', () => {
        const { asFragment } = render(<EventDemo name="chat-o" dot />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('prop badge', () => {
        const { asFragment } = render(<EventDemo name="chat-o" badge="99" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('prop size', () => {
        const { asFragment } = render(<EventDemo name="chat-o" size="30" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
