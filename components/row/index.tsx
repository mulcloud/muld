import * as React from 'react';
import classnames from 'classnames';
import { RowContext } from '../provider';
import { createNS, withDefaultProps } from '../utils';

interface Props extends React.HTMLAttributes<any> {
    type?: string;
    align?: string;
    justify?: string;
    tag?: string;
    gutter?: number | string;
    className?: string;
}
const defaultProps = {
    tag: 'div',
    align: 'top',
    justify: 'start',
};
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type RowProps = Props & typeof defaultProps & NativeAttrs;

const [bem] = createNS('row');
const Row: React.FC<React.PropsWithChildren<RowProps>> = (props: RowProps) => {
    const { type, align, justify, tag, gutter, className, children } = props;
    const flex = type === 'flex';
    const style: { marginLeft: string; marginRight: string } = {} as any;
    if (gutter) {
        style.marginLeft = `-${Number(gutter) / 32}rem`;
        style.marginRight = style.marginLeft;
    }

    return (
        <RowContext.Provider
            children={React.createElement(
                tag,
                {
                    className: classnames(
                        bem({
                            flex,
                            [`align-${align}`]: flex && align,
                            [`justify-${justify}`]: flex && justify,
                        }),
                        className,
                    ),
                    style,
                },
                children,
            )}
            value={{ gutter }}
        />
    );
};

export default withDefaultProps(React.memo(Row), defaultProps);
