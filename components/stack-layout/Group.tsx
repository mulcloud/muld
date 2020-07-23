import * as React from 'react';
import { ViewProps, View } from './View';
import { createNS } from '../utils';

const [bem] = createNS('group');

type GroupProps = ViewProps;

export const Group: React.FC<React.PropsWithChildren<GroupProps>> = (props) => {
    return (
        <View className={bem()} {...props}>
            {props.children}
        </View>
    );
};
