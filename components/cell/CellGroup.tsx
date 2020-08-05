import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

import { createNS } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { $cell_group } from '../style/var';

const View = styled.div`
    &.mul-cell-group {
        background-color: ${$cell_group.background_color};

        .mul-cell-group__title {
            padding: ${$cell_group.title_padding};
            color: ${$cell_group.title_color};
            font-size: ${$cell_group.title_font_size};
            line-height: ${$cell_group.title_line_height};
        }
    }
`;

interface Props {
    title?: string | React.ReactNode;
    border: boolean;
    className?: string;
}
const defaultProps = {
    border: true,
};
type NativeAttrs = Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
type CellGroupProps = Props & typeof defaultProps & NativeAttrs;

const [bem] = createNS('cell-group');
const CellGroup: React.FC<React.PropsWithChildren<CellGroupProps>> = (props: CellGroupProps) => {
    const { title, border, children, className } = props;
    const Group = (
        <View className={classnames([bem(), { [BORDER_TOP_BOTTOM]: border }])}>{children}</View>
    );

    if (title) {
        return (
            <div>
                <div className={classnames(className, bem('title'))}>{title}</div>
                {Group}
            </div>
        );
    }
    return Group;
};

type ComponentProps = Partial<typeof defaultProps> &
    Omit<Props, keyof typeof defaultProps> &
    NativeAttrs;
CellGroup.defaultProps = defaultProps;

export default React.memo(CellGroup) as React.NamedExoticComponent<ComponentProps>;
