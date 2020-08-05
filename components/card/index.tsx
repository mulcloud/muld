import * as React from 'react';
import classnames from 'classnames';
import { createNS, isDef } from '../utils';
import { View } from './style';
import Tag from '../tag';
import Image from '../image';

interface Props {
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
    priceTop?: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onClickThumb?: React.MouseEventHandler<HTMLAnchorElement>;
}
const defaultProps = {
    centered: false,
    currency: '¥',
    lazyLoad: false,
};
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type CardProps = Props & typeof defaultProps & NativeAttrs;

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
        priceTop,
        className,
        bottom,
        onClickThumb,
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
        <a href={thumbLink} className={bem('thumb')} onClick={onClickThumb}>
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

    const PriceContent = () => {
        const priceArr = price!.toString().split('.');
        return (
            <div>
                <span className={bem('price-currency')}>{currency}</span>
                <span className={bem('price-integer')}>{priceArr[0]}</span>.
                <span className={bem('price-decimal')}>{priceArr[1]}</span>
            </div>
        );
    };
    const Price = showPrice ? <div className={bem('price')}>{PriceContent()}</div> : null;

    const OriginPrice = showOriginPrice ? (
        <div className={bem('origin-price')}>{`${currency} ${originPrice}`}</div>
    ) : null;

    const Num = showNum ? <div className={bem('num')}>{`x${num}`}</div> : null;

    const Footer = footer ? <div className={bem('footer')}>{footer}</div> : null;

    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        onClick && onClick(event);
    };

    return (
        <View className={classnames(className, bem())} onClick={handleClick}>
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
                            {priceTop}
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

type ComponentProps = Partial<typeof defaultProps> &
    Omit<Props, keyof typeof defaultProps> &
    NativeAttrs;
Card.defaultProps = defaultProps;

export default React.memo(Card) as React.NamedExoticComponent<ComponentProps>;
