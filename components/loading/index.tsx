import * as React from 'react';
import { createNS, addUnit, withDefaultProps } from '../utils';
import { View } from './style';

const [bem] = createNS('loading');
export type LoadingType = 'circular' | 'spinner';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    type?: LoadingType;
    size?: string | number;
    color?: string;
    vertical?: boolean;
    textSize?: string | number;
}

const defaultProps = {
    type: 'circular' as LoadingType,
};
export type LoadingProps = Props & typeof defaultProps;

function LoadingIcon(props: LoadingProps): React.ReactNode {
    if (props.type === 'spinner') {
        const Spin = [];
        for (let i = 0; i < 12; i++) {
            Spin.push(<i key={i} />);
        }
        return Spin;
    }
    return (
        <svg className={bem('circular') as any} viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none" />
        </svg>
    );
}

function LoadingText(props: LoadingProps): React.ReactNode {
    const { children } = props;

    if (children) {
        let style: React.CSSProperties = {};
        if (props.textSize) {
            style = {
                fontSize: addUnit(props.textSize),
            };
        }

        return (
            <span className={bem('text')} style={style}>
                {children}
            </span>
        );
    }
}

const Loading: React.FC<React.PropsWithChildren<LoadingProps>> = (props: LoadingProps) => {
    const { color, size, type } = props;
    const style: React.CSSProperties = { color };

    if (size) {
        const iconSize = addUnit(size) as string;
        style.width = iconSize;
        style.height = iconSize;
    }

    return (
        <View className={bem([type, { vertical: props.vertical }])}>
            <span className={bem('spinner', type)} style={style}>
                {LoadingIcon(props)}
            </span>
            {LoadingText(props)}
        </View>
    );
};

export default withDefaultProps(React.memo(Loading), defaultProps);
