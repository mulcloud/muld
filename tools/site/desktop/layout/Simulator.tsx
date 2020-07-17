import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import {
    $mul_doc_nav_width,
    $mul_doc_border_radius,
    $mul_doc_simulator_width,
    $mul_doc_padding,
    $mul_doc_header_top_height,
    $mul_doc_row_max_width,
} from '../../common/style/var';

export default function Simulator(props: any) {
    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            this.scrollTop = window.scrollY;
        });
        window.addEventListener('resize', () => {
            this.windowHeight = window.innerHeight;
        });
    }, []);
    const simulatorStyle = () => {
        const height = Math.min(640, this.windowHeight - 90);
        return {
            height: height + 'px',
        };
    };
    return (
        <Panel className={classnames({ 'mul-doc-container--with-simulator': props.hasSimulator })}>
            <iframe ref="iframe" src={props.src} style="simulatorStyle" frameborder="0" />
        </Panel>
    );
}

const Panel = styled.div`
    &.mul-doc-simulator {
        position: absolute;
        top: ${$mul_doc_padding + $mul_doc_header_top_height};
        right: ${$mul_doc_padding};
        z-index: 1;
        box-sizing: border-box;
        width: ${$mul_doc_simulator_width};
        min-width: ${$mul_doc_simulator_width};
        overflow: hidden;
        background: #fafafa;
        border-radius: ${$};
        box-shadow: #ebedf0 0 4px 12px;

        @media (max-width: 1100px) {
            right: auto;
            left: 750px;
        }

        @media (min-width: ${$mul_doc_row_max_width}) {
            right: 50%;
            margin-right: -${Number($mul_doc_row_max_width) / 2 + 40}px;
        }

        &-fixed {
            position: fixed;
            top: $mul_doc_padding;
        }

        iframe {
            display: block;
            width: 100%;
        }
    }
`;
