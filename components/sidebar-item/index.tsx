import * as React from 'react';
import { View } from './style';
import Info from '../info';
import { createNS, withDefaultProps } from '../utils';

const [bem] = createNS('sidebar-item');

interface Events {
    onClick: (v: number | string) => void;
}

interface PropsFromSidebar {
    index: number;
    select: boolean;
    activeKey: number | string;
    setIndex: (i: number) => void;
}

interface Props extends PropsFromSidebar, Events {
    title: string;
    dot: boolean;
    disabled: boolean;
    badge?: number | string;
}

const defaultProps = {
    title: '',
    dot: false,
    disabled: false,
    replace: false,
};

const SidebarItem: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const { disabled, select, onClick, title, index, setIndex, dot, badge } = props;

    const handleClick = () => {
        if (disabled) {
            return;
        }
        onClick && onClick(index);
        setIndex(index);
    };

    return (
        <View className={bem({ select, disabled })} onClick={handleClick}>
            <div className={bem('text')}>
                {title}
                <Info dot={dot} badge={badge} />
            </div>
        </View>
    );
};

export default withDefaultProps(React.memo(SidebarItem), defaultProps);
