/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement } from 'react';
import { $gray3, $green } from '../style/var';
import { createNS, withDefaultProps } from '../utils';
import { BORDER } from '../utils/constant';
import Icon from '../icon';
import { View } from './style';

const [bem] = createNS('step');

interface PropsType {
    activeColor?: string;
    activeIcon?: string;
    inactiveIcon?: string;
    inactiveColor?: string;
    active?: number | string;
    direction?: string;
    index?: number;
    onClickStep?: (index: number) => void;
}

const defaultProps = {
    active: 0,
    index: 0,
    activeColor: $green,
    inactiveColor: $gray3,
    direction: 'horizontal',
    activeIcon: 'checked',
    inactiveIcon: '',
};

export type StepPropsType = PropsType & typeof defaultProps;

const Step: React.FC<React.PropsWithChildren<StepPropsType>> = (props): ReactElement => {
    const {
        active,
        index,
        direction,
        activeIcon,
        activeColor,
        inactiveColor,
        inactiveIcon,
    } = props;

    function status() {
        if (index < active) {
            return 'finish';
        }
        if (index === +active) {
            return 'process';
        }
        return '';
    }

    function activeStatus() {
        return status() === 'process';
    }

    function lineStyle() {
        if (status() === 'finish') {
            return { background: activeColor };
        }
        return { background: inactiveColor };
    }

    function titleStyle() {
        if (activeStatus()) {
            return { color: activeColor };
        }

        if (!status) {
            return { color: inactiveColor };
        }
        return {};
    }

    function slots(name?: string) {
        // todo: type ?
        const slots: any = props.children;

        if (!slots) {
            return '';
        }

        if (name) {
            return Array.isArray(slots)
                ? slots.find((slot) => {
                      return slot && slot.props && slot.props.slot === name;
                  })
                : slots.props && slots.props.slot === name && slots;
        }

        return Array.isArray(slots)
            ? slots.filter((slot) => slot && slot.props && !slot.props.slot)
            : slots;
    }

    const genCircle = () => {
        if (activeStatus()) {
            return <Icon className={bem('icon', 'active')} name={activeIcon} color={activeColor} />;
        }

        const inactiveIconSlot = slots('inactive-icon');

        if (inactiveIcon || inactiveIconSlot) {
            return inactiveIconSlot || <Icon className={bem('icon')} name={inactiveIcon} />;
        }

        return <i className={bem('circle')} style={lineStyle()} />;
    };

    const onClickStep = () => {
        props.onClickStep && props.onClickStep(index);
    };

    return (
        <View className={`${BORDER} ${bem([direction, { status: status() }])}`}>
            <div className={bem('title', { active })} style={titleStyle()} onClick={onClickStep}>
                {slots()}
            </div>
            <div className={bem('circle-container')} onClick={onClickStep}>
                {genCircle()}
            </div>
            <div className={bem('line')} style={lineStyle()} />
        </View>
    );
};

export default withDefaultProps(React.memo(Step), defaultProps);
