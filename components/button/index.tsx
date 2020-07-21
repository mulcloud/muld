import * as React from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps } from '../utils';
import { BORDER_SURROUND, WHITE } from '../utils/constant';
import Loading, { LoadingType } from '../loading';
import { View } from './style';

const [bem] = createNS('button');

export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger';
export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

interface Props extends Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'> {
    type?: ButtonType;
    size?: ButtonSize;
    text?: string;
    icon?: string;
    color?: string;
    block?: boolean;
    plain?: boolean;
    round?: boolean;
    square?: boolean;
    loading?: boolean;
    hairline?: boolean;
    disabled?: boolean;
    nativeType?: string;
    iconPrefix?: string;
    loadingSize?: string;
    loadingType?: LoadingType;
    loadingText?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}
const defaultProps = {
    tag: 'button',
    type: 'default' as ButtonType,
    size: 'normal' as ButtonSize,
    loadingSize: '20px',
};

export type ButtonProps = Props & typeof defaultProps;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props: ButtonProps) => {
    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        icon,
        type,
        color,
        plain,
        disabled,
        loading,
        hairline,
        loadingText,
        onClick,
        children,
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

    const handlerClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        if (disabled || loading) return;
        onClick && onClick(event);
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
        }
        // TODO: else if(icon) content push Icon

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

    // TODO: add onTouchstart event
    return (
        <View
            style={style}
            className={classnames(classes)}
            type={props.nativeType as any}
            disabled={disabled}
            onClick={handlerClick}
        >
            <div className={bem('content')}>{Content()}</div>
        </View>
    );
};

export default withDefaultProps(React.memo(Button), defaultProps);
