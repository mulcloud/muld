/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Steps from '..';
import Step from '../../step';
import { $padding_md } from '../../style/var';
import Button from '../../button';

const i18n = {
    'zh-CN': {
        nextStep: '下一步',
        step1: '买家下单',
        step2: '商家接单',
        step3: '买家提货',
        step4: '交易完成',
        title2: '描述信息',
        title3: '竖向步骤条',
        status1: '【城市】物流状态1',
        status2: '【城市】物流状态2',
        status3: '快件已发货',
        customStyle: '自定义样式',
    },
    'en-US': {
        nextStep: 'Next Step',
        step1: 'Step1',
        step2: 'Step2',
        step3: 'Step3',
        step4: 'Step4',
        title2: 'Description',
        title3: 'Vertical Steps',
        status1: '【City】Status1',
        status2: '【City】Status2',
        status3: '【City】Status3',
        customStyle: 'Custom Style',
    },
};

export default function StepsDemo(): React.ReactElement {
    const [active, setActive] = useState(0);

    const onNextStep = () => {
        setActive((active + 1) % 4);
    };

    return (
        <View className="demo-steps">
            <DemoBlock title="基础用法">
                <div className="demo-steps-row">
                    <Steps active={active}>
                        <Step>{i18n['zh-CN'].step1}</Step>
                        <Step>{i18n['zh-CN'].step2}</Step>
                        <Step>{i18n['zh-CN'].step3}</Step>
                        <Step>{i18n['zh-CN'].step4}</Step>
                    </Steps>

                    <Button className="mul-button" onClick={onNextStep}>
                        {i18n['zh-CN'].nextStep}
                    </Button>
                </div>
            </DemoBlock>

            <DemoBlock title="自定义样式">
                <div className="demo-steps-row">
                    <Steps
                        active={active}
                        activeIcon="success"
                        inactiveIcon="arrow"
                        activeColor="#38f"
                    >
                        <Step>{i18n['zh-CN'].step1}</Step>
                        <Step>{i18n['zh-CN'].step2}</Step>
                        <Step>{i18n['zh-CN'].step3}</Step>
                        <Step>{i18n['zh-CN'].step4}</Step>
                    </Steps>
                </div>
            </DemoBlock>

            <DemoBlock title="点击Step事件">
                <div className="demo-steps-row">
                    <Steps
                        active={active}
                        onClickStep={(index) => {
                            setActive(index);
                        }}
                    >
                        <Step>{i18n['zh-CN'].step1}</Step>
                        <Step>{i18n['zh-CN'].step2}</Step>
                        <Step>{i18n['zh-CN'].step3}</Step>
                        <Step>{i18n['zh-CN'].step4}</Step>
                    </Steps>
                </div>
            </DemoBlock>

            <DemoBlock title="竖项步骤条">
                <div className="demo-steps-row">
                    <Steps direction="vertical" active="0">
                        <Step>
                            <h3>【城市】物流状态1</h3>
                            <p>2016-07-12 12:40</p>
                        </Step>
                        <Step>
                            <h3>【城市】物流状态2</h3>
                            <p>2016-07-11 10:00</p>
                        </Step>
                        <Step>
                            <h3>快件已发货</h3>
                            <p>2016-07-10 09:30</p>
                        </Step>
                    </Steps>
                </div>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-steps {
        .steps-success,
        .mul-icon-location {
            color: $green;
        }

        .mul-button {
            margin: ${$padding_md} 0 0 0;
        }

        p,
        h3 {
            margin: 0;
            font-weight: normal;
            font-size: inherit;
        }
    }
`;
