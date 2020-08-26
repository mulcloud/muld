import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Loading from '..';
import * as style from '../../style/var';

export default function LoadingDemo() {
    return (
        <View className="demo-loading">
            <DemoSection>
                <DemoBlock title="加载类型">
                    <Loading />
                    <Loading type="spinner" />
                </DemoBlock>

                <DemoBlock title="自定义颜色">
                    <Loading color="#1989fa" />
                    <Loading type="spinner" color="#1989fa" />
                </DemoBlock>

                <DemoBlock title="自定义大小">
                    <Loading size="24" />
                    <Loading type="spinner" size="24" />
                </DemoBlock>

                <DemoBlock title="加载文案">
                    <Loading size="1.5rem">加载中</Loading>
                </DemoBlock>

                <DemoBlock title="垂直排列">
                    <Loading size="1.5rem" vertical>
                        加载中
                    </Loading>
                </DemoBlock>
            </DemoSection>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-loading {
        background: ${style.$white};

        .mul-loading {
            display: inline-block;
            margin: 0.3125rem 0 0.3125rem 1.25rem;

            &--vertical {
                display: inline-flex;
            }
        }
    }
`;
