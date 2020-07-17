import * as React from 'react';

interface RowContextObject {
    gutter?: number | string;
}

export const RowContext = React.createContext<RowContextObject>({
    gutter: undefined,
});

export function useGutter(): string | number | undefined {
    return React.useContext(RowContext).gutter;
}
