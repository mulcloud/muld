import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'regenerator-runtime';
import List from '..';

const ListDemo = (): React.ReactElement => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(true);
    return (
        <List
            loading={loading}
            error={error}
            errorText="点击重新加载。"
            onLoad={(): void => {
                setLoading(true);
                setError(false);
            }}
        />
    );
};

describe('List', () => {
    afterEach(cleanup);
    it('loading', async () => {
        const { container } = render(<List loading={true} />);
        const loading = container.querySelector('.mul-list__loading');
        expect(loading).not.toBeNull();
    });

    it('error loaded, click error-text and reload', async () => {
        const { container } = render(<ListDemo />);
        const error = container.querySelector('.mul-list__error-text');
        fireEvent.click(error!);
        const loading = container.querySelector('.mul-list__loading');
        expect(loading).not.toBeNull();
    });

    test('finished', async () => {
        const { container } = render(
            <List loading={false} finished={true} finishedText="Finished" />,
        );
        const finished = container.querySelector('.mul-list__finished-text');
        expect(finished).not.toBeNull();
    });

    test('finished children', async () => {
        const { asFragment } = render(
            <List loading={false} finished={true} finishedText={<div>Custom Finished</div>} />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('error children', async () => {
        const { asFragment } = render(
            <List loading={false} error={true} errorText={<div>Custom Error</div>} />,
        );

        expect(asFragment()).toMatchSnapshot();
    });

    test('immediate check false', async () => {
        const { container } = render(<List immediateCheck={false} />);

        const loading = container.querySelector('.mul-list__loading');
        expect(loading).toBeNull();
    });

    test('check the direction props', () => {
        const { asFragment, rerender } = render(<List direction="up" />);

        expect(asFragment()).toMatchSnapshot();

        rerender(<List direction="down" />);

        expect(asFragment()).toMatchSnapshot();
    });
});
