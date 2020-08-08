import React, { ReactElement, cloneElement, Children } from 'react';
import { createNS, withDefaultProps } from '../utils';
import { $gray3, $green } from '../style/var';
import { View } from './style';

const [bem] = createNS('steps');

interface PropsType {
    activeColor?: string;
    inactiveIcon?: string;
    activeIcon?: string;
    inactiveColor?: string;
    active?: number | string;
    direction?: string;
    onClickStep?: (index: number) => void;
}

const defaultProps = {
    active: 0 as number | string,
    activeColor: $green,
    inactiveColor: $gray3,
    direction: 'horizontal',
    activeIcon: 'checked',
    inactiveIcon: '',
};

export type StepsPropsType = PropsType & typeof defaultProps;

const Steps: React.FC<StepsPropsType> = (props) => {
    const { active, direction, activeColor, activeIcon, inactiveIcon } = props;

    const onClickStep = (index: number): void => {
        props.onClickStep && props.onClickStep(index);
    };

    return (
        <View className={bem([direction])}>
            <div className={bem('items')}>
                {Children.map(props.children, (child, index) => {
                    return cloneElement(child as ReactElement, {
                        active,
                        index,
                        direction,
                        activeColor,
                        activeIcon,
                        inactiveIcon,
                        onClickStep,
                    });
                })}
            </div>
        </View>
    );
};

export default withDefaultProps(React.memo(Steps), defaultProps);
