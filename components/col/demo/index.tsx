import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Col from '..';
import Row from '../../row';
import * as style from '../../style/var';

export default function ColDemo() {
    return (
        <View className="demo-col">
            <DemoSection>
                <DemoBlock title="基础用法">
                    <Row>
                        <Col span="8">span: 8</Col>
                        <Col span="8">span: 8</Col>
                        <Col span="8">span: 8</Col>
                    </Row>

                    <Row>
                        <Col span="4">span: 4</Col>
                        <Col span="10" offset="4">
                            offset: 4, span: 10
                        </Col>
                    </Row>

                    <Row>
                        <Col offset="12" span="12">
                            offset: 12, span: 12
                        </Col>
                    </Row>
                </DemoBlock>

                <DemoBlock title="设置列元素间距">
                    <Row gutter="20">
                        <Col span="8">span: 8</Col>
                        <Col span="8">span: 8</Col>
                        <Col span="8">span: 8</Col>
                    </Row>
                </DemoBlock>

                <DemoBlock title="Flex 布局">
                    <Row type="flex">
                        <Col span="6">span: 6</Col>
                        <Col span="6">span: 6</Col>
                        <Col span="6">span: 6</Col>
                    </Row>

                    <Row type="flex" justify="center">
                        <Col span="6">span: 6</Col>
                        <Col span="6">span: 6</Col>
                        <Col span="6">span: 6</Col>
                    </Row>

                    <Row type="flex" justify="end">
                        <Col span="6">span: 6</Col>
                        <Col span="6">span: 6</Col>
                        <Col span="6">span: 6</Col>
                    </Row>

                    <Row type="flex" justify="space-between">
                        <Col span="6">span: 6</Col>
                        <Col span="6">span: 6</Col>
                        <Col span="6">span: 6</Col>
                    </Row>

                    <Row type="flex" justify="space-around">
                        <Col span="6">span: 6</Col>
                        <Col span="6">span: 6</Col>
                        <Col span="6">span: 6</Col>
                    </Row>
                </DemoBlock>
            </DemoSection>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-col {
        background: ${style.$white};

        .mul-doc-demo-block {
            padding: 0 ${style.$padding_md};
        }

        .mul-doc-demo-block__title {
            padding-left: 0;
        }

        .mul-col {
            margin-bottom: 0.625rem;
            color: ${style.$white};
            font-size: 0.8125rem;
            line-height: 1.875rem;
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
