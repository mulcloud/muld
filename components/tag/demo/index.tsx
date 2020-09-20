import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Tag from '..';
import { $white, $padding_xs } from '../../style/var';

export default function TagDemo(): React.ReactNode {
    return (
        <View className="demo-tag">
            <DemoBlock title="基础用法">
                <Tag type="primary">标签</Tag>
                <Tag type="success">标签</Tag>
                <Tag type="danger">标签</Tag>
                <Tag type="warning">标签</Tag>
            </DemoBlock>
            <DemoBlock title="圆角样式">
                <Tag round type="primary">
                    标签
                </Tag>
                <Tag round type="success">
                    标签
                </Tag>
                <Tag round type="danger">
                    标签
                </Tag>
                <Tag round type="warning">
                    标签
                </Tag>
            </DemoBlock>

            <DemoBlock title="标签样式">
                <Tag mark type="primary">
                    标签
                </Tag>
                <Tag mark type="success">
                    标签
                </Tag>
                <Tag mark type="danger">
                    标签
                </Tag>
                <Tag mark type="warning">
                    标签
                </Tag>
            </DemoBlock>
            <DemoBlock title="空心样式">
                <Tag plain type="primary">
                    标签
                </Tag>
                <Tag plain type="success">
                    标签
                </Tag>
                <Tag plain type="danger">
                    标签
                </Tag>
                <Tag plain type="warning">
                    标签
                </Tag>
            </DemoBlock>
            <DemoBlock title="空心样式">
                <Tag color="#f2826a">标签</Tag>
                <Tag color="#7232dd">标签</Tag>
                <Tag color="#7232dd" plain>
                    标签
                </Tag>
                <Tag color="#ffe1e1" textColor="#ad0000">
                    标签
                </Tag>
            </DemoBlock>
            <DemoBlock title="空心样式">
                <Tag type="danger">标签</Tag>
                <Tag type="danger" size="medium">
                    标签
                </Tag>
                <Tag type="danger" size="large">
                    标签
                </Tag>
            </DemoBlock>
            <DemoBlock title="可关闭标签">
                <Tag
                    closeable
                    size="medium"
                    type="primary"
                    onClose={(e) => {
                        console.log('close:', e);
                    }}
                >
                    标签
                </Tag>
                <Tag
                    closeable
                    size="medium"
                    type="success"
                    onClose={(e) => {
                        console.log('close:', e);
                    }}
                >
                    标签
                </Tag>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-tag {
        background-color: ${$white};

        .mul-tag + .mul-tag {
            margin-left: ${$padding_xs};
        }
    }
`;
