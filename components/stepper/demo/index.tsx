import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Stepper from '..';
import { $white } from '../../style/var';

export default function StepperDemo() {
    const [value, setValue] = React.useState<string | number>(1);
    function onChange(value: string) {
        setTimeout(() => {
            setValue(value);
        }, 500);
    }

    return (
        <View className="demo-stepper">
            <DemoBlock title="基础用法">
                <Stepper value="1" />
            </DemoBlock>
            <DemoBlock title="步长设置">
                <Stepper value="1" step="2" />
            </DemoBlock>
            <DemoBlock title="限制输入范围">
                <Stepper value="1" min="5" max="8" />
            </DemoBlock>
            <DemoBlock title="限制输入整数">
                <Stepper value="1" integer />
            </DemoBlock>
            <DemoBlock title="禁用状态">
                <Stepper value="1" disabled />
            </DemoBlock>
            <DemoBlock title="禁用输入框">
                <Stepper value="1" disableInput />
            </DemoBlock>
            <DemoBlock title="固定小数位数">
                <Stepper value="1" step="0.2" decimalLength="1" />
            </DemoBlock>
            <DemoBlock title="自定义大小">
                <Stepper value="1" inputWidth="40" buttonSize="32" />
            </DemoBlock>
            <DemoBlock title="异步变更">
                <Stepper value={value} asyncChange onChange={onChange} />
            </DemoBlock>
            <DemoBlock title="圆角风格">
                <Stepper value="1" theme="round" buttonSize="22" disableInput />
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-stepper {
        background-color: ${$white};

        .mul-doc-demo-block {
            display: flex;
            padding: 0.625rem 1rem;
            position: relative;
            justify-content: space-between;
            line-height: 1.75rem;
            &__title {
                padding: 0rem !important;
                line-height: 1.75rem;
            }
            &::after {
                position: absolute;
                box-sizing: border-box;
                content: ' ';
                pointer-events: none;
                right: 1rem;
                bottom: 0;
                left: 1rem;
                border-bottom: 0.0625rem solid #ebedf0;
                -webkit-transform: scaleY(0.5);
                transform: scaleY(0.5);
            }
        }
    }
`;
