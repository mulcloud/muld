import * as React from 'react';
import { Cell, Icon, Popup } from '..';
import { createNS, isDef } from '../utils';
import { on, off } from '../utils/dom/event';
import { View } from './style';

const [bem] = createNS('dropdown-item');

interface Option {
    text: string;
    value: number | string;
    icon?: string;
}

export interface Title {
    displayTitle: string | React.ReactElement;
    showPopup: boolean;
    disabled?: boolean;
    titleClass?: string;
    setShowPopup: (v1: boolean, v2?: boolean) => void;
}

export interface Props {
    value?: string | number;
    title?: string | React.ReactElement;
    disabled?: boolean;
    titleClass?: string;
    options?: Option[];
    index?: number;
    onChange?: (v: string | number) => void;
    onOpen?: () => void;
    onClose?: () => void;
    onOpened?: () => void;
    onClosed?: () => void;
    getContainer?: string | (() => HTMLElement);
    visible?: boolean;
    onVisibleChange?: (v: boolean) => void;
    updateOffset?: () => void;
    direction?: string;
    offset?: number;
    zIndex?: number | string;
    overlay?: boolean;
    duration?: number | string;
    closeOnClickOverlay?: boolean;
    collectTitles?: (title: Title) => void;
    scroller?: HTMLElement | Window;
    activeColor?: string;
}

interface OptionProps {
    active?: boolean;
    activeColor?: string;
    option: Option;
    setShowPopup: (v1: boolean, v2?: boolean) => void;
    setValue: (v: string | number) => void;
}

type SetAction<T> = React.Dispatch<React.SetStateAction<T>>;

type UseShowPopupReturn = [boolean, (v1: boolean, v2?: boolean) => void];

function useShowPopup(
    props: Props,
    transition: React.MutableRefObject<boolean>,
    setShowWrapper: SetAction<boolean>,
): UseShowPopupReturn {
    const { scroller, updateOffset, visible, onVisibleChange } = props;
    const [showPopup, setShowPopup] = React.useState<boolean>(!!visible);

    React.useEffect(() => {
        if (showPopup !== visible) {
            setShowPopup(!!visible);
        }
        if (visible) {
            updateOffset && updateOffset();
            setShowWrapper(true);
        }
        bindScroll(!!visible);
    }, [visible]);

    function onScroll() {
        updateOffset && updateOffset();
    }

    function bindScroll(bind: boolean) {
        const action = bind ? on : off;
        if (scroller) {
            action(scroller, 'scroll', onScroll, true);
        }
    }

    function wrapperSetShowPopup(visible: boolean, immediate?: boolean) {
        bindScroll(visible);
        setShowPopup(visible);
        onVisibleChange && onVisibleChange(visible);
        transition.current = !immediate;
        if (visible) {
            updateOffset && updateOffset();
            setShowWrapper(true);
        }
    }

    return [showPopup, wrapperSetShowPopup];
}

const Option: React.FC<OptionProps & Props> = (props) => {
    const { value, option, active, activeColor, onChange, setShowPopup, setValue } = props;

    return (
        <Cell
            clickable
            key={option.value}
            icon={option.icon}
            title={option.text}
            className={bem('option', { active })}
            titleStyle={{ color: active ? activeColor : '' }}
            onClick={() => {
                if (option.value !== value) {
                    setValue(option.value);
                    onChange && onChange(option.value);
                }
                setShowPopup(false);
            }}
        >
            {active && (
                <Icon className={bem('icon')} size={14} color={activeColor} name="success" />
            )}
        </Cell>
    );
};

const DropdownItem: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const {
        onOpen,
        onClose,
        onOpened,
        onClosed,
        getContainer,
        children,
        options,
        value: $value,
        title,
        disabled,
        direction,
        offset,
        zIndex,
        overlay,
        duration,
        closeOnClickOverlay,
        collectTitles,
        titleClass,
    } = props;
    const transition = React.useRef<boolean>(true);
    const [value, setValue] = React.useState<number | string>($value!);
    const [showWrapper, setShowWrapper] = React.useState<boolean>(false);
    const [showPopup, setShowPopup] = useShowPopup(props, transition, setShowWrapper);
    const nodeRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if ($value !== value) {
            setValue($value!);
        }
    }, [$value]);

    React.useEffect(() => {
        function getDisplayTitle() {
            const { title, options = [] } = props;
            if (title) {
                return title;
            }

            const match = options.filter((option) => option.value === value);
            return match.length ? match[0].text : '';
        }

        collectTitles!({
            displayTitle: getDisplayTitle(),
            showPopup,
            disabled,
            setShowPopup,
            titleClass,
        });
    }, [showPopup, disabled, title, options, value]);

    const style: React.CSSProperties = {
        display: showWrapper ? 'block' : 'none',
    };

    if (isDef(zIndex)) {
        style.zIndex = Number(zIndex);
    }
    if (direction === 'down') {
        style.top = `${offset}px`;
    } else {
        style.bottom = `${offset}px`;
    }

    function onClickDropdownItemOverlay() {
        if (closeOnClickOverlay) {
            setShowPopup(false, false);
        }
    }

    function onClickWrapper(event: React.SyntheticEvent<HTMLDivElement>) {
        // prevent being identified as clicking outside and closed when use get-contaienr
        if (getContainer) {
            event.stopPropagation();
        }
    }

    function wrapperOnClosed() {
        setShowWrapper(false);
        onClosed && onClosed();
    }

    return (
        <View className={bem()}>
            <div style={style} ref={nodeRef} className={bem([direction])} onClick={onClickWrapper}>
                <Popup
                    visible={showPopup}
                    overlay={overlay}
                    className={bem('content')}
                    position={direction === 'down' ? 'top' : 'bottom'}
                    duration={transition.current ? (duration as number) : 0}
                    overlayStyle={{ position: 'absolute' }}
                    onOpen={onOpen}
                    onClose={onClose}
                    onOpened={onOpened}
                    onClosed={wrapperOnClosed}
                    getContainer={getContainer || (() => nodeRef.current as HTMLDivElement)}
                    onClickOverlay={onClickDropdownItemOverlay}
                >
                    {options &&
                        options.map((option) => (
                            <Option
                                key={option.value}
                                option={option}
                                active={option.value === value}
                                {...props}
                                value={value}
                                setShowPopup={setShowPopup}
                                setValue={setValue}
                            />
                        ))}
                    {children}
                </Popup>
            </div>
        </View>
    );
};

export default React.memo(DropdownItem);
