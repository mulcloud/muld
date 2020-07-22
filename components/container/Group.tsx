import * as React from 'react';
import { ViewProps, View } from './View';

type GroupProps = ViewProps;

export const Group: React.FC<React.PropsWithChildren<GroupProps>> = (props) => {
    return <View {...props}>{props.children}</View>;
};
