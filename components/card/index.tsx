/* eslint-disable */
import * as React from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps, isDef } from '../utils';
import { View } from './style';
import Tag from '../tag';
import Image from '../image';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    tag?: string;
    tags?: React.ReactNode;
    num?: number | string;
    desc?: string;
    thumb?: string;
    title?: string;
    price?: number | string;
    currency: string;
    centered?: boolean;
    lazyLoad?: boolean;
    thumbLink?: string;
    originPrice?: number | string;
    footer?: React.ReactNode;
    bottom?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onThumbClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
const defaultProps = {
    centered: false,
    currency: '¥',
    lazyLoad: false,
};
export type CardProps = Props & typeof defaultProps;

const [bem] = createNS('card');
const Card: React.FC<React.PropsWithChildren<CardProps>> = (props: CardProps) => {
    const {
        tag,
        tags,
        num,
        desc,
        thumb,
        title,
        price,
        currency,
        centered,
        thumbLink,
        originPrice,
        footer,
        onClick,
        bottom,
        onThumbClick,
    } = props;
    const showNum = isDef(num);
    const showPrice = isDef(price);
    const showOriginPrice = isDef(originPrice);
    const showBottom = showNum || showPrice || 'showOriginPrice';

    const ThumbTag = tag ? (
        <div className={bem('tag')}>
            <Tag mark type="danger">
                {tag}
            </Tag>
        </div>
    ) : null;

    const Thumb = thumb ? (
        <a href={thumbLink} className={bem('thumb')} onClick={onThumbClick}>
            <Image src={thumb} width="100%" height="100%" fit="cover" />
            {ThumbTag}
        </a>
    ) : null;

    const Title = title ? (
        <div className={classnames([bem('title'), 'mul-multi-ellipsis--l2'])}>{title}</div>
    ) : null;

    const Desc = desc ? (
        <div className={classnames([bem('desc'), 'mul-ellipsis'])}>{desc}</div>
    ) : null;

    const priceArr = price!.toString().split('.');
    const PriceContent = (
        <div>
            <span className={bem('price-currency')}>{currency}</span>
            <span className={bem('price-integer')}>{priceArr[0]}</span>.
            <span className={bem('price-decimal')}>{priceArr[1]}</span>
        </div>
    );
    const Price = showPrice ? <div className={bem('price')}>{PriceContent}</div> : null;

    const OriginPrice = showOriginPrice ? (
        <div className={bem('origin-price')}>{`${currency} ${originPrice}`}</div>
    ) : null;

    const Num = showNum ? <div className={bem('num')}>{`x${num}`}</div> : null;

    const Footer = footer ? <div className={bem('footer')}>{footer}</div> : null;

    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        onClick && onClick(event);
    };

    return (
        <View className={bem()} onClick={handleClick}>
            <div className={bem('header')}>
                {Thumb}
                <div className={classnames(bem('content', { centered }))}>
                    <div>
                        {Title}
                        {Desc}
                        {tags}
                    </div>
                    {showBottom && (
                        <div className="mul-card__bottom">
                            {Price}
                            {OriginPrice}
                            {Num}
                            {bottom}
                        </div>
                    )}
                </div>
            </div>
            {Footer}
        </View>
    );
};

export default withDefaultProps(React.memo(Card), defaultProps);
