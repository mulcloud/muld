import React, { useState, useEffect, ReactElement, useRef } from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps } from '../utils';
import { View } from './style';

const [bem] = createNS('tab');

interface Props {
    className?: string;
    url?: string;
    to?: string;
    replace?: boolean;
    active?: number | string;
    dot?: boolean;
    name?: number | string;
    info?: number | string;
    badge?: number | string;
    title?: string | ReactElement;
    titleStyle?: any;
    disabled?: boolean;
    index?: number;
    children?: any;
    currentName?: number | string;
    scrollspy?: boolean;
    lazyRender?: boolean;
    animated?: boolean;
    handleSetTabs?: (tab: React.MutableRefObject<HTMLElement | null>) => void;
}

const defaultProps = {
    disabled: false,
    dot: false,
    replace: false,
};

type TabAttrs = Omit<React.HtmlHTMLAttributes<HTMLDivElement>, keyof Props>;

export type TabProps = typeof defaultProps & Props & TabAttrs;

const Tab: React.FC<React.PropsWithChildren<TabProps>> = (props: TabProps) => {
    const { handleSetTabs } = props;
    const rootRef = useRef(null);
    const [inited, setInited] = useState(false);
    const { children, active, currentName, className, scrollspy, lazyRender, animated } = props;
    const [isActive, setIsActive] = useState(() => {
        return currentName === active;
    });

    useEffect(() => {
        setIsActive(currentName === active);
        if (isActive) {
            setInited(true);
        }
    }, [active, currentName]);

    useEffect(() => {
        handleSetTabs && handleSetTabs(rootRef);
    }, []);

    const shouldRender = inited || scrollspy || !lazyRender;
    const show = scrollspy || isActive;
    const Content = shouldRender ? children : null;

    if (animated) {
        return (
            <View
                ref={rootRef}
                role="tabpanel"
                aria-hidden={!isActive}
                className={bem('pane-wrapper', [{ inactive: !isActive }])}
            >
                <div className={bem('pane')}>{Content}</div>
            </View>
        );
    }

    return (
        <View
            ref={rootRef}
            role="tabpanel"
            style={{ display: show ? 'block' : 'none' }}
            className={classnames(className, bem('pane'))}
        >
            {Content}
        </View>
    );
};

export default withDefaultProps(React.memo(Tab), defaultProps);
