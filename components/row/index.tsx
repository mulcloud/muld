import * as React from 'react';
import { RowContext } from '../provider';
import { createNS, withDefaultProps } from '../utils';

const [bem] = createNS('row');
interface Props extends React.HTMLAttributes<any> {
    type?: string;
    align?: string;
    justify?: string;
    tag?: string;
    gutter?: number | string;
}
const defaultProps = {
    tag: 'div',
    align: 'top',
    justify: 'start',
};
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type RowProps = Props & typeof defaultProps & NativeAttrs;

const Row: React.FC<React.PropsWithChildren<RowProps>> = (props: RowProps) => {
    const { type, align, justify, tag, gutter, children } = props;
    const flex = type === 'flex';
    const style: { marginLeft: string; marginRight: string } = {} as any;
    if (gutter) {
        style.marginLeft = `-${Number(gutter) / 2}px`;
        style.marginRight = style.marginLeft;
    }

    return (
        <RowContext.Provider
            children={React.createElement(
                tag,
                {
                    className: bem({
                        flex,
                        [`align-${align}`]: flex && align,
                        [`justify-${justify}`]: flex && justify,
                    }),
                    style,
                },
                children,
            )}
            value={{ gutter }}
        />
    );
};

export default withDefaultProps(React.memo(Row), defaultProps);
