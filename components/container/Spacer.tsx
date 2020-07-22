/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react';

export const Spacer: React.FC<{}> = (props) => {
    const style: React.CSSProperties = {
        flexGrow: 1,
    };
    return <div style={style} />;
};
