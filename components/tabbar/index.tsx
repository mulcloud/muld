import * as React from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps, isDef } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { View } from './style';

const [bem] = createNS('tabbar');

interface Props {
    zIndex?: number | string;
    placeholder?: boolean;
    activeColor?: string;
    inactiveColor?: string;
    active?: number | string;
    border?: boolean;
    fixed?: boolean;
    safeAreaInsetBottom?: boolean;
    children?: React.ReactNode;
    onChange?: (arg: number | string) => void;
}

const defaultProps = {
    active: 0 as number | string,
    border: true,
    fixed: true,
};

export type TabbarProps = Props & typeof defaultProps;

const Tabbar: React.FC<React.PropsWithChildren<TabbarProps>> = (props: TabbarProps) => {
    const {
        children,
        placeholder,
        fixed,
        zIndex,
        border,
        safeAreaInsetBottom,
        activeColor,
        inactiveColor,
        onChange,
        active,
    } = props;

    const tabberRef = React.useRef<HTMLDivElement>(null);

    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
        const height = (tabberRef.current as Element).getBoundingClientRect().height;
        setHeight(height);
    }, []);

    function genTabbar() {
        const fit = safeAreaInsetBottom || fixed;

        const [activeItem, setActiveItem] = React.useState<number | string>(active);

        const style: React.CSSProperties = {};

        const handleChange = (active: number | string) => {
            if (active !== activeItem) {
                setActiveItem(active);
                onChange && onChange(active);
            }
        };

        if (zIndex) {
            style.zIndex = Number(zIndex);
        }

        const renderChildren = () => {
            return React.Children.map(
                children as React.ReactElement[],
                (item: React.ReactElement, index: number) => {
                    const currentName = isDef(item.props.name) ? item.props.name : index;
                    return React.cloneElement(item, {
                        active: activeItem === currentName,
                        activeColor,
                        inactiveColor,
                        handleChange,
                        index,
                    });
                },
            );
        };

        return (
            <View
                ref={tabberRef}
                style={style}
                className={classnames([
                    { [BORDER_TOP_BOTTOM]: border },
                    bem({
                        unfit: !fit,
                        fixed,
                    }),
                ])}
            >
                {renderChildren()}
            </View>
        );
    }

    if (placeholder && fixed) {
        return (
            <View className={bem('placeholder')} style={{ height: `${height}px` }}>
                {genTabbar()}
            </View>
        );
    }
    return genTabbar();
};

export default withDefaultProps(React.memo(Tabbar), defaultProps);
