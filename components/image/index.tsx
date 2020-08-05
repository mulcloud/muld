import * as React from 'react';
import { createNS, isDef, addUnit } from '../utils';
import { View } from './style';
import Icon from '../icon';

type FitType = 'fill' | 'contain' | 'cover' | 'scale-down' | 'none';
type ImageStyle = {
    width: number | string;
    height: number | string;
    hidden: string;
    borderRadius: string;
    overflow: string;
};
interface Props {
    src?: string;
    fit?: FitType;
    alt?: string;
    round?: boolean;
    width?: number | string;
    height?: number | string;
    radius?: number | string;
    lazyLoad?: boolean;
    error?: React.ReactNode | string;
    showError?: boolean;
    loading?: React.ReactNode | string;
    showLoading?: boolean;
    errorIcon?: string;
    loadingIcon?: string;
    onError?: (error: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    onClick?: React.MouseEventHandler;
}
const defaultProps = {
    showError: true,
    showLoading: true,
    fit: 'fill' as FitType,
    errorIcon: 'photo-fail',
    loadingIcon: 'photo',
};

type NativeAttrs = Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
export type ImageProps = Props & typeof defaultProps & NativeAttrs;

const [bem] = createNS('image');
const { useState } = React;
const Image: React.FC<ImageProps> = (props: ImageProps) => {
    const {
        src,
        fit,
        alt,
        round,
        width,
        height,
        radius,
        showError,
        showLoading,
        errorIcon,
        loadingIcon,
        onClick,
        onError,
        onLoad,
        loading: renderLoading,
        error: renderError,
    } = props;
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
        setLoading(false);
        onLoad && onLoad(event);
    };
    const handleError = (error: React.SyntheticEvent<HTMLImageElement, Event>): void => {
        setError(true);
        setLoading(false);
        onError && onError(error);
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        onClick && onClick(event);
    };

    const genImage = () => {
        const imgData = {
            className: bem('img'),
            style: { objectFit: fit },
            alt,
        };
        if (error) {
            return;
        }
        // eslint-disable-next-line consistent-return
        return <img src={src} onLoad={handleLoad} onError={handleError} {...imgData} />;
    };

    const computedStyle = () => {
        const style: Partial<ImageStyle> = {};
        if (isDef(width)) {
            style.width = addUnit(width);
        }

        if (isDef(height)) {
            style.height = addUnit(height);
        }

        if (isDef(radius)) {
            style.overflow = 'hidden';
            style.borderRadius = addUnit(radius);
        }
        return style;
    };

    const genPlaceholder = () => {
        if (loading && showLoading) {
            return (
                <div className={bem('loading')}>
                    {/* TODO: use Icon */}
                    {renderLoading || <Icon name={loadingIcon} classPrefix={bem('loading-icon')} />}
                </div>
            );
        }

        if (error && showError) {
            return (
                <div className={bem('error')}>
                    {/* TODO: use Icon */}
                    {renderError || <Icon name={errorIcon} classPrefix={bem('error-icon')} />}
                </div>
            );
        }
        return null;
    };

    let className = '';
    if (round) {
        className = bem('', 'round');
    } else {
        className = bem();
    }

    return (
        <View className={className} style={computedStyle()} onClick={handleClick}>
            {genImage()}
            {genPlaceholder()}
        </View>
    );
};

type ComponentProps = Partial<typeof defaultProps> &
    Omit<Props, keyof typeof defaultProps> &
    NativeAttrs;
Image.defaultProps = defaultProps;

export default React.memo(Image) as React.NamedExoticComponent<ComponentProps>;
