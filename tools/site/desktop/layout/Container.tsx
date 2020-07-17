import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import {
    getNum,
    $mul_doc_nav_width,
    $mul_doc_simulator_width,
    $mul_doc_padding,
} from '../../common/style/var';

const Panel = styled.div`
    &.mul-doc-container {
        box-sizing: border-box;
        padding-left: ${$mul_doc_nav_width};
        overflow: hidden;

        &--with-simulator {
            padding-right: ${getNum($mul_doc_simulator_width) + getNum($mul_doc_padding)}px;
        }
    }
`;

export default function Container(props: any) {
    return (
        <Panel
            className={classnames('mul-doc-container', {
                'mul-doc-container--with-simulator': props.hasSimulator,
            })}
        >
            {props.children}
        </Panel>
    );
}
