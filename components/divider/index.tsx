import * as React from 'react';
import classnames from 'classnames';
import { createNS, withDefaultProps } from '../utils';
import { View } from './style';

const [bem] = createNS('divider');

type ContentPositionType = 'left' | 'center' | 'right';
interface Props {
    children?: any;
    dashed?: boolean;
    hairline: boolean;
    borderColor?: string;
    style?: React.CSSProperties;
    contentPosition: ContentPositionType;
}
const defaultProps = {
    dashed: false as boolean,
    hairline: true as boolean,
    contentPosition: 'center' as ContentPositionType,
};
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type DividerProps = Props & typeof defaultProps & NativeAttrs;

const Divider: React.FC<React.PropsWithChildren<DividerProps>> = (props: DividerProps) => {
    const { style, dashed, hairline, children, borderColor, contentPosition } = props;
    return (
        <View
            style={Object.assign({ borderColor }, style)}
            className={classnames(
                bem({
                    dashed,
                    hairline,
                    [`content-${contentPosition}`]: children && defaultProps.contentPosition,
                }),
            )}
        >
            {children}
        </View>
    );
};
export default withDefaultProps(React.memo(Divider), defaultProps);
