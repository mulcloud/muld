import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Progress from '..';
import { $white } from '../../style/var';

export default function ProgressDemo() {
    return (
        <View className="demo-progress">
            <DemoBlock title="基础用法">
                <Progress percentage={50}></Progress>
            </DemoBlock>

            <DemoBlock title="线条粗细">
                <Progress percentage={50} strokeWidth={8}></Progress>
            </DemoBlock>

            <DemoBlock title="置灰">
                <Progress inactive percentage={50}></Progress>
            </DemoBlock>

            <DemoBlock title="样式定制">
                <Progress color="#f2826a" percentage={50} pivotText="橙色"></Progress>
                <Progress color="#ee0a24" percentage={50} pivotText="红色"></Progress>
                <Progress
                    percentage={75}
                    pivotText="紫色"
                    pivotColor="#7232dd"
                    color="linear-gradient(to right, #be99ff, #7232dd)"
                ></Progress>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-progress {
        background: ${$white};

        .mul-progress {
            margin: 20px;

            &:first-of-type {
                margin-top: 5px;
            }
        }
    }
`;
