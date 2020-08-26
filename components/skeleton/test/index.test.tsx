import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'regenerator-runtime';
import Skeleton from '..';

const LoadingDemo = () => {
    const [showLoading, setShowLoading] = React.useState(true);
    return (
        <React.Fragment>
            <button
                onClick={() => {
                    setShowLoading(!showLoading);
                }}
            >
                显示
            </button>
            <Skeleton title avatar row="3" loading={showLoading}>
                <div className="actual">实际内容</div>
            </Skeleton>
        </React.Fragment>
    );
};

describe('Skeleton', () => {
    afterEach(cleanup);
    it('title prop', () => {
        const { asFragment } = render(<Skeleton title={true} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('round prop', () => {
        const { asFragment } = render(<Skeleton round={true} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('animate prop', () => {
        const { asFragment } = render(<Skeleton animate={false} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('loading prop', () => {
        const { asFragment } = render(<Skeleton loading={true} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('avatar prop', () => {
        const { asFragment } = render(<Skeleton avatar={true} avatarSize="30" />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('avatarSize prop', () => {
        const { asFragment } = render(<Skeleton avatar avatarSize="30" />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('avatarShape prop', () => {
        const { asFragment } = render(<Skeleton avatar avatarShape="square" />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('row & rowWidth & titleWidth prop string', () => {
        const { asFragment } = render(<Skeleton row="10" rowWidth="20" titleWidth="30" />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('row & rowWidth & titleWidth prop number', () => {
        const { asFragment } = render(<Skeleton rowWidth={30} row={5} titleWidth={30} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('rowWidth prop Array', () => {
        const { asFragment } = render(<Skeleton rowWidth={['10', 20, 30]} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('loading-change prop', () => {
        const { getByText, container } = render(<LoadingDemo />);
        const button = getByText('显示');
        fireEvent.click(button);
        const actual = container.querySelector('.actual')!;
        expect(actual).toBeInTheDocument();
    });
});
