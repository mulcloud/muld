import * as React from 'react';
import styled from 'styled-components';

interface ViewProps {
    tag: string;
    className: string;
    children: any;
    name: string;
    content: string;
    [key: string]: any;
}

const Wrapper = function (props: ViewProps): any {
    const { tag, children, ...other } = props;
    return React.createElement(tag, other, children);
};

export const View = styled(Wrapper)`
    &.mul-icon {
        position: relative;
        display: inline-block;
        font-family: 'muld-icon' !important;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;

        &::before {
            display: inline-block;
        }
        .mul-icon__image {
            width: 1em;
            height: 1em;
            object-fit: contain;
        }
    }

    &.mul-icon-${(props): string => (props.content ? props.name : '')}::before {
        content: '\\${(props): string => (props.content ? props.content : ' ')}';
    }
`;
