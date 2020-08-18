import * as React from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps } from '../utils';
import { View } from './style';

// Types
import type { PopupProps } from '../popup';

// Components
import Icon from '../icon';
import Loading from '../loading';

const [bem] = createNS('action-sheet');

export type ActionSheetItem = {
    name: string;
    color?: string;
    subname?: string;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    callback?: (item: ActionSheetItem) => void;
};

export type PopupMixinProps = Pick<
    PopupProps,
    | 'visible'
    | 'closeIcon'
    | 'duration'
    | 'round'
    | 'overlay'
    | 'lockScroll'
    | 'safeAreaInsetBottom'
    | 'getContainer'
    | 'onClose'
    | 'onClosed'
    | 'onOpen'
    | 'onOpened'
>;

export type ActionSheetProps = PopupMixinProps & {
    title?: string;
    actions?: ActionSheetItem[];
    cancelText?: string;
    description?: string;
    onSelect?: (item?: ActionSheetItem, index?: number) => void;
    onCancel?: () => void;
};

const defaultProps = {
    visible: false,
    actions: [] as ActionSheetItem[],
    closeIcon: 'cross',
    duration: 0.3,
    round: true,
    overlay: true,
    lockScroll: true,
    safeAreaInsetBottom: true,
};

export const ActionSheet: React.FC<ActionSheetProps> = function (props) {
    const { title, actions, cancelText, description, onSelect, onCancel, ...remainProps } = props;
    function Header() {
        if (title) {
            return (
                <div className={bem('header')}>
                    {title}
                    <Icon
                        name={props.closeIcon}
                        className={bem('close')}
                        onClick={props.onCancel}
                    />
                </div>
            );
        }
    }

    const Description = description && (
        <div className={bem('description')}>{props.description}</div>
    );

    function Option(item: ActionSheetItem, index: number) {
        const { disabled, loading, callback } = item;

        function onClickOption(event: React.MouseEvent<HTMLButtonElement>) {
            event.stopPropagation();

            if (disabled || loading) {
                return;
            }

            if (callback) {
                callback(item);
            }

            onSelect && onSelect(item, index);
        }

        function OptionContent() {
            if (loading) {
                return <Loading className={bem('loading-icon')} />;
            }

            return (
                <>
                    <span className={bem('name')}>{item.name}</span>
                    {item.subname && <div className={bem('subname')}>{item.subname}</div>}
                </>
            );
        }

        return (
            <button
                type="button"
                key={item.name}
                className={classnames([bem('item', { disabled, loading }), item!.className])}
                style={{ color: item.color }}
                onClick={onClickOption}
            >
                {OptionContent()}
            </button>
        );
    }

    function Content() {
        if (props.children) {
            return <div className={bem('content')}>{props.children}</div>;
        }
    }

    function CancelText() {
        if (cancelText) {
            return (
                <>
                    <div className={bem('gap')} />
                    <button type="button" className={bem('cancel')} onClick={onCancel}>
                        {cancelText}
                    </button>
                </>
            );
        }
    }

    return (
        <View {...remainProps} className={bem()} onCancel={onCancel} position="bottom">
            {Header()}
            {Description}
            {actions && actions.map(Option)}
            {Content()}
            {CancelText()}
        </View>
    );
};

export default withDefaultProps(ActionSheet, defaultProps);
