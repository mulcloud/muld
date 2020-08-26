import * as React from 'react';
import { View } from './style';
import { createNS, withDefaultProps } from '../utils';

const [bem] = createNS('divider');

type ContentPositionType = 'left' | 'center' | 'right';
interface Props {
    dashed?: boolean;
    hairline: boolean;
    borderColor?: string;
    style?: React.CSSProperties;
    contentPosition: ContentPositionType;
}
const defaultProps = {
    dashed: false,
    hairline: true,
    contentPosition: 'center' as ContentPositionType,
};
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type DividerProps = Props & typeof defaultProps & NativeAttrs;

const Divider: React.FC<React.PropsWithChildren<DividerProps>> = (props: DividerProps) => {
    const { style, dashed, hairline, children, borderColor, contentPosition } = props;
    return (
        <View
            style={Object.assign({ borderColor }, style)}
            className={bem({
                dashed,
                hairline,
                [`content-${contentPosition}`]: children && contentPosition,
            })}
        >
            {children}
        </View>
    );
};
export default withDefaultProps(React.memo(Divider), defaultProps);
