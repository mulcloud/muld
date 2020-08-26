import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import { $white, $padding_md } from '../../style/var';
import Divider from '..';

export default function DividerDemo() {
    return (
        <View className="demo-divider">
            <DemoSection>
                <DemoBlock title="基础用法">
                    <Divider />
                </DemoBlock>
                <DemoBlock title="展示文本">
                    <Divider>文本</Divider>
                </DemoBlock>
                <DemoBlock title="内容位置">
                    <Divider contentPosition="left">文本</Divider>
                    <Divider contentPosition="right">文本</Divider>
                </DemoBlock>
                <DemoBlock title="虚线">
                    <Divider dashed hairline={false}>
                        文本
                    </Divider>
                </DemoBlock>
                <DemoBlock title="自定义样式">
                    <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '16px' }}>
                        文本
                    </Divider>
                </DemoBlock>
            </DemoSection>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-divider {
        background-color: ${$white};

        .mul-doc-demo-block__title {
            padding-top: ${$padding_md};
        }
    }
`;
