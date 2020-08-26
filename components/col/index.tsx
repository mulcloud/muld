import * as React from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps } from '../utils';
import { useGutter } from '../provider';

const [bem] = createNS('col');
interface Props {
    span?: string | number;
    offset?: string | number;
    tag?: string;
    className?: string;
}

const defaultProps = {
    tag: 'div',
};
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type ColProps = Props & typeof defaultProps & NativeAttrs;

const Col: React.FC<React.PropsWithChildren<ColProps>> = (props: ColProps) => {
    const gutter = useGutter();
    const { span, offset, tag, className, children } = props;
    const style: { paddingLeft: string; paddingRight: string } = {} as any;
    if (gutter) {
        style.paddingLeft = `${Number(gutter) / 32}rem`;
        style.paddingRight = style.paddingLeft;
    }

    return React.createElement(
        tag,
        {
            className: classnames(
                bem({
                    [span as any]: span,
                    [`offset-${offset}`]: offset,
                }),
                className,
            ),
            style,
        },
        children,
    ) as any;
};

export default withDefaultProps(React.memo(Col), defaultProps);
