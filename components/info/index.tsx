import React from 'react';
import { createNS, isDef, withDefaultProps } from '../utils';

import { View } from './styled';

interface InfoProps {
    dot?: boolean;
    badge?: string | number;
}

const [bem] = createNS('info');

const Info: React.FC<React.PropsWithChildren<InfoProps>> = (props: InfoProps) => {
    const { dot, badge } = props;
    const showBadge = isDef(badge) && badge !== '';

    if (!dot && !showBadge) {
        return <></>;
    }

    return <View className={bem({ dot })}>{dot ? '' : props.badge}</View>;
};

export default withDefaultProps(React.memo(Info), {});
