import * as React from 'react';
import * as ReactDOM from 'react-dom';

export type PortalProps = React.PropsWithChildren<{
    node: Element | null;
}>;

const Portal = ({ node, children }: PortalProps) => {
    const defaultNodeRef = React.useRef<HTMLElement | null>(null);

    React.useEffect(
        () => () => {
            if (defaultNodeRef.current) {
                document.body.removeChild(defaultNodeRef.current);
            }
        },
        [],
    );
    if (!node && !defaultNodeRef.current) {
        const defaultNode = document.createElement('div');
        defaultNodeRef.current = defaultNode;
        document.body.appendChild(defaultNode);
    }
    return ReactDOM.createPortal(children, (node || defaultNodeRef.current)!);
};

export default Portal;
