/* eslint-disable */
import * as React from 'react';
import { createNS, withDefaultProps, isDef, addUnit } from '../utils';
import { View } from './style';

type FitType = 'fill' | 'contain' | 'cover' | 'scale-down' | 'none';
type ImageStyle = {
    width: number | string;
    height: number | string;
    hidden: string;
    borderRadius: string;
    overflow: string;
};
interface Props {
    src: string;
    fit?: FitType;
    alt?: string;
    round?: boolean;
    width?: number | string;
    height?: number | string;
    radius?: number | string;
    lazyLoad?: boolean;
    showError?: boolean;
    showLoading?: boolean;
    errorIcon?: string;
    loadingIcon?: string;
    onError?: (error: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    onClick?: React.MouseEventHandler;
    renderLoading?: React.ReactNode;
    renderError?: React.ReactNode;
}

const defaultProps = {
    fit: 'fill' as FitType,
};
type ImageProps = Props & typeof defaultProps;

const [bem] = createNS('card');
const { useState } = React;
const Image: React.FC<React.PropsWithChildren<ImageProps>> = (props: ImageProps) => {
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
        renderLoading,
        renderError,
    } = props;
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setLoading(false);
        onLoad && onLoad(event);
    };
    const handleError = (error: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setError(true);
        setLoading(false);
        onError && onError(error);
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

    // TODO: use Icon
    // const genPlaceholder = () => {
    //     if (loading && showLoading) {
    //         return (
    //             <div className={classnames(bem('loading'))}>
    //                 {renderLoading || <Icon name={loadingIcon} classPrefix={bem('loading-icon')} />}
    //             </div>
    //         );
    //     }

    //     if (error && showError) {
    //         return (
    //             <div className={classnames(bem('error'))}>
    //                 {renderError || (
    //                     <Icon name={errorIcon} classPrefix={classnames(bem('error-icon'))} />
    //                 )}
    //             </div>
    //         );
    //     }
    // };

    let className = '';
    if (round) {
        className = bem('', 'round');
    } else {
        className = bem();
    }

    return (
        <View className={className} style={computedStyle()} onClick={onClick}>
            {genImage()}
            {/* {genPlaceholder()} */}
        </View>
    );
};

export default withDefaultProps(React.memo(Image), defaultProps);
