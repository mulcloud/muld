import * as React from 'react';
import classnames from 'classnames';
import { createNS } from '../utils';
import { BORDER_SURROUND, WHITE } from '../utils/constant';
import Loading, { LoadingType } from '../loading';
import { View } from './style';
import Icon from '../icon';

export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger';
export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';
interface Props {
    type?: ButtonType;
    size?: ButtonSize;
    text?: string;
    color?: string;
    icon?: string;
    iconPrefix?: string;
    nativeType?: string;
    block?: boolean;
    plain?: boolean;
    square?: boolean;
    round?: boolean;
    disabled?: boolean;
    hairline?: boolean;
    loading?: boolean;
    loadingSize?: string;
    loadingType?: LoadingType;
    loadingText?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onTouchstart?: React.TouchEventHandler<HTMLButtonElement>;
    className?: string;
}
const defaultProps = {
    tag: 'button',
    type: 'default' as ButtonType,
    size: 'normal' as ButtonSize,
    loadingSize: '20px',
};
type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;
export type ButtonProps = Props & typeof defaultProps & NativeAttrs;

const [bem] = createNS('button');
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props: ButtonProps) => {
    const {
        icon,
        type,
        color,
        plain,
        disabled,
        loading,
        hairline,
        loadingText,
        onClick,
        onTouchStart,
        children,
        className,
    } = props;
    const style: Record<string, string | number> = {};

    if (color) {
        style.color = plain ? color : WHITE;

        if (!plain) {
            // Use background instead of backgroundColor to make linear-gradient work
            style.background = color;
        }

        // hide border when color is linear-gradient
        if (color.indexOf('gradient') !== -1) {
            style.border = 0;
        } else {
            style.borderColor = color;
        }
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        if (disabled || loading) return;
        onClick && onClick(event);
    };

    const handleTouchstart = (event: React.TouchEvent): void => {
        if (disabled || loading) return;
        onTouchStart && onTouchStart(event);
    };

    const Content = (): React.ReactNode => {
        const content = [];
        if (loading) {
            content.push(
                <Loading
                    key="loading"
                    className={bem('loading')}
                    size={props.loadingSize}
                    type={props.loadingType}
                    color="currentColor"
                />,
            );
        } else if (icon) {
            content.push(
                <Icon
                    key="icon"
                    name={icon}
                    className={bem('icon')}
                    classPrefix={props.iconPrefix}
                />,
            );
        }

        let text;
        if (loading) {
            text = loadingText;
        } else {
            text = props.text || children;
        }
        if (text) {
            content.push(
                <span key="text" className={bem('text')}>
                    {text}
                </span>,
            );
        }
        return content;
    };

    const classes = [
        bem([
            type,
            props.size,
            {
                plain,
                loading,
                disabled,
                hairline,
                block: props.block,
                round: props.round,
                square: props.square,
            },
        ]),
        { [BORDER_SURROUND]: hairline },
    ];

    return (
        <View
            style={style}
            className={classnames(className, classes)}
            type={props.nativeType as any}
            disabled={disabled}
            onClick={handleClick}
            onTouchStart={handleTouchstart}
        >
            <div className={bem('content')}>{Content()}</div>
        </View>
    );
};

type ComponentProps = Partial<typeof defaultProps> &
    Omit<Props, keyof typeof defaultProps> &
    NativeAttrs;
Button.defaultProps = defaultProps;

export default React.memo(Button) as React.ComponentType<ComponentProps>;
