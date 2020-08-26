import * as React from 'react';
import styled from 'styled-components';
import { createNS } from '../utils';

const [bem] = createNS('swipe-item');

interface Props {
    onClick?: () => void;
    vertical?: boolean;
    size?: number;
    offset?: number;
    children?: React.ReactNode;
}

const defaultProps = {};

const SwipeItem: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const { onClick, children } = props;

    const handleClick = (): void => {
        onClick && onClick();
    };

    const itemStyle = (): React.CSSProperties => {
        const style: React.CSSProperties = {};
        const { size, vertical, offset } = props;

        style[vertical ? 'height' : 'width'] = size ? `${size}px` : '100%';

        if (offset) {
            style.transform = `translate${vertical ? 'Y' : 'X'}(${offset}px)`;
        }

        return style;
    };

    return (
        <View className={bem()} style={itemStyle()} onClick={handleClick}>
            {children}
        </View>
    );
};
SwipeItem.defaultProps = defaultProps;

export default React.memo(SwipeItem);

const View = styled.div`
    &.mul-swipe-item {
        position: relative;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
    }
`;
