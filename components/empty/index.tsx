import React, { memo, ReactElement } from 'react';
import { createNS, withDefaultProps } from '../utils';
import Network from './Network';
import { View } from './style';

const [bem] = createNS('empty');

const PRESETS = ['error', 'search', 'default'];

interface PropsType {
    description: string;
    className?: string;
    image?: string;
    children?: any;
}

const defaultProps = {
    image: 'default',
};

type EmptyPropsType = PropsType & typeof defaultProps;

const Empty: React.FC<EmptyPropsType> = (props) => {
    const { description, image, className } = props;

    function genImageContent(): ReactElement | string {
        let newImage = image;

        if (slots('image')) {
            return slots('image');
        }

        if (newImage === 'network') {
            return <Network />;
        }

        if (PRESETS.indexOf(newImage) !== -1) {
            newImage = `https://img.yzcdn.cn/vant/empty-image-${newImage}.png`;
        }

        return <img src={newImage} className={bem('image-content')} />;
    }

    function slots(name?: string): ReactElement | string {
        const slots = props.children;

        if (!slots) {
            return '';
        }

        if (name) {
            return Array.isArray(slots)
                ? slots.find((slot) => slot.props.slot === name)
                : slots.props.slot === name && slots;
        }

        return Array.isArray(slots) ? slots.find((slot) => slot.props && !slot.props.slot) : slots;
    }

    function genImage(): ReactElement | string {
        return <div className={bem('image')}>{genImageContent()}</div>;
    }

    function genDescription(): ReactElement | string | undefined {
        const newDescription = slots('description') || description;

        if (description) {
            return <p className={bem('description')}>{newDescription}</p>;
        }
        return '';
    }

    function genBottom(): ReactElement | string {
        if (slots()) {
            return <div className={bem('bottom')}>{slots()}</div>;
        }
        return '';
    }

    return (
        <View className={`${className} ${bem()}`}>
            {genImage()}
            {genDescription()}
            {genBottom()}
        </View>
    );
};

export default withDefaultProps(memo(Empty), defaultProps);
