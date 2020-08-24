import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import SubmitBar from '..';
import { $padding_sm, $blue } from '../../style/var';

export default function SubmitDemo() {
    const onClickButton = () => {
        alert('点击按钮');
    };

    const onClickLink = () => {
        alert('修改地址');
    };

    return (
        <View className="demo-submit-bar">
            <DemoBlock title="基础用法">
                <SubmitBar price={3050} buttonText="提交订单" onSubmit={onClickButton} />
            </DemoBlock>

            <DemoBlock title="禁用状态">
                <SubmitBar
                    price={3050}
                    disabled
                    buttonText="提交订单"
                    tip="你的收货地址不支持同城送, 我们已为你推荐快递"
                    tipIcon="info-o"
                    onSubmit={onClickButton}
                />
            </DemoBlock>

            <DemoBlock title="加载状态">
                <SubmitBar loading price={3050} buttonText="提交订单" onSubmit={onClickButton} />
            </DemoBlock>

            <DemoBlock title="高级用法">
                <SubmitBar
                    price={3050}
                    buttonText="提交订单"
                    onSubmit={onClickButton}
                    tip={
                        <React.Fragment>
                            你的收货地址不支持同城送，
                            <span className="edit-address" onClick={onClickLink}>
                                修改地址
                            </span>
                        </React.Fragment>
                    }
                ></SubmitBar>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-submit-bar {
        .mul-submit-bar {
            position: relative;
            padding-bottom: 0;
        }

        .edit-address {
            color: ${$blue};
        }

        .mul-checkbox {
            margin-right: ${$padding_sm};
        }
    }
`;
