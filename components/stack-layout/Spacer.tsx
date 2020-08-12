/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react';
import { createNS } from '../utils';

const [bem] = createNS('spacer');
export const Spacer: React.FC<{}> = (props) => {
    const style: React.CSSProperties = {
        flex: 1,
    };
    return <div className={bem()} style={style} />;
};
