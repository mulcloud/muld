import * as React from 'react';
import { View } from './style';
import { createNS, withDefaultProps } from '../utils';

const [bem] = createNS('sidebar');

interface Events {
    onChange?: (v: number | string) => void;
}

interface Props extends Events {
    activeKey: number | string;
}

const defaultProps = {
    activeKey: 0,
};

const Sidebar: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const { activeKey, onChange, children } = props;
    const [index, setIndex] = React.useState<number>(+activeKey);

    const handleSetIndex = (i: number) => {
        if (i !== index) {
            setIndex(i);
            onChange && onChange(i);
        }
    };

    React.useEffect(() => {
        handleSetIndex(+activeKey);
    }, [activeKey]);

    function renderChild() {
        return React.Children.map(children, (c, i) => {
            const select = i === index;
            return React.cloneElement(c as any, {
                setIndex: handleSetIndex,
                activeKey,
                select,
                index: i,
            });
        });
    }
    return <View className={bem()}>{renderChild()}</View>;
};

export default withDefaultProps(React.memo(Sidebar), defaultProps);
