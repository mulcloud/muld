import * as React from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { View } from './style';

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: string | React.ReactNode;
    border: boolean;
}
const defaultProps = {
    border: true,
};
type CellGroupProps = Props & typeof defaultProps;

const [bem] = createNS('cell-group');
const CellGroup: React.FC<React.PropsWithChildren<CellGroupProps>> = (props: CellGroupProps) => {
    const { title, border, children } = props;
    const Group = (
        <View className={classnames([bem(), { [BORDER_TOP_BOTTOM]: border }])}>{children}</View>
    );

    if (title) {
        return (
            <div>
                <div className={bem('title')}>{title}</div>
                {Group}
            </div>
        );
    }
    return Group;
};

export default withDefaultProps(React.memo(CellGroup), defaultProps);
