import * as React from 'react';

export const withDefaultProps = <P extends Record<string, any>, DP extends Partial<P>>(
    component: React.ComponentType<P>,
    defaultProps: DP,
): React.ComponentType<any> => {
    component.defaultProps = defaultProps;
    type Props = Omit<P, keyof DP> & Partial<DP>;
    return component as React.ComponentType<Props>;
};
