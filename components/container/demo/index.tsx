import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
// import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
// import { Group, HStack, List, Spacer, Text, View, VStack } from '..';
import * as style from '../../style/var';

export default function ContainerDemo() {
    return <Panel className="demo-container">aaa</Panel>;
}

const Panel = styled(DemoSection)`
    &.demo-container {
        background: ${style.$white};

        .mul-doc-demo-block {
            padding: 0 ${style.$padding_md};
        }

        .mul-doc-demo-block__title {
            padding-left: 0;
        }

        .mul-col {
            margin-bottom: 10px;
            color: ${style.$white};
            font-size: 13px;
            line-height: 30px;
            text-align: center;
            background-clip: content-box;

            &:nth-child(odd) {
                background-color: #39a9ed;
            }

            &:nth-child(even) {
                background-color: #66c6f2;
            }
        }
    }
`;
