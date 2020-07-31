import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import { HStack, VStack, Row, Col } from '../..';

export default function ButtonDemo() {
    return (
        <View className="demo-common-layout">
            <DemoBlock title="列表式 - SwiftUi">
                <VStack spacing={20} padding={10}>
                    <HStack spacing={15}>
                        <div className="img-placeholder"></div>
                        <VStack spacing={10}>
                            <div className="goods-title"></div>
                            <div className="goods-description"></div>
                            <div className="goods-other-info"></div>
                        </VStack>
                    </HStack>
                    <HStack spacing={15}>
                        <div className="img-placeholder"></div>
                        <VStack spacing={10}>
                            <div className="goods-title"></div>
                            <div className="goods-description"></div>
                            <div className="goods-other-info"></div>
                        </VStack>
                    </HStack>
                    <HStack spacing={15}>
                        <div className="img-placeholder"></div>
                        <VStack spacing={10}>
                            <div className="goods-title"></div>
                            <div className="goods-description"></div>
                            <div className="goods-other-info"></div>
                        </VStack>
                    </HStack>
                </VStack>
            </DemoBlock>

            <DemoBlock title="列表式 - 栅格">
                <Row className="mb20" type="flex" justify="space-around">
                    <Col span="5">
                        <div className="img-placeholder"></div>
                    </Col>
                    <Col span="16">
                        <div className="goods-title mb10"></div>
                        <div className="goods-description mb10"></div>
                        <div className="goods-other-info"></div>
                    </Col>
                </Row>
                <Row className="mb20" type="flex" justify="space-around">
                    <Col span="5">
                        <div className="img-placeholder"></div>
                    </Col>
                    <Col span="16">
                        <div className="goods-title mb10"></div>
                        <div className="goods-description mb10"></div>
                        <div className="goods-other-info"></div>
                    </Col>
                </Row>
                <Row className="mb20" type="flex" justify="space-around">
                    <Col span="5">
                        <div className="img-placeholder"></div>
                    </Col>
                    <Col span="16">
                        <div className="goods-title mb10"></div>
                        <div className="goods-description mb10"></div>
                        <div className="goods-other-info"></div>
                    </Col>
                </Row>
            </DemoBlock>

            <DemoBlock title="宫格式 - SwiftUi">
                <VStack spacing={20} padding={10}>
                    <HStack spacing={15} alignX="center">
                        <div className="img-placeholder"></div>
                        <div className="img-placeholder"></div>
                        <div className="img-placeholder"></div>
                    </HStack>
                    <HStack spacing={15} alignX="center">
                        <div className="img-placeholder"></div>
                        <div className="img-placeholder"></div>
                        <div className="img-placeholder"></div>
                    </HStack>
                    <HStack spacing={15} alignX="center">
                        <div className="img-placeholder"></div>
                        <div className="img-placeholder"></div>
                        <div className="img-placeholder"></div>
                    </HStack>
                </VStack>
            </DemoBlock>

            <DemoBlock title="宫格式 - 栅格">
                <Row type="flex" justify="center" align="center">
                    <Col span="6">
                        <div className="img-placeholder mb20"></div>
                    </Col>
                    <Col span="6">
                        <div className="img-placeholder mb20"></div>
                    </Col>
                    <Col span="6">
                        <div className="img-placeholder mb20"></div>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="center">
                    <Col span="6">
                        <div className="img-placeholder mb20"></div>
                    </Col>
                    <Col span="6">
                        <div className="img-placeholder mb20"></div>
                    </Col>
                    <Col span="6">
                        <div className="img-placeholder mb20"></div>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="center">
                    <Col span="6">
                        <div className="img-placeholder"></div>
                    </Col>
                    <Col span="6">
                        <div className="img-placeholder"></div>
                    </Col>
                    <Col span="6">
                        <div className="img-placeholder"></div>
                    </Col>
                </Row>
            </DemoBlock>

            <DemoBlock title="图表式（上图下表）- SwiftUi">
                <VStack spacing={20} padding={10}>
                    <div className="chart-placeholder"></div>
                    <div className="table-placeholder"></div>
                </VStack>
            </DemoBlock>

            <DemoBlock title="图表式（上图下表）- 栅格">
                <Row type="flex" justify="center" align="center">
                    <Col span="23">
                        <div className="chart-placeholder width100 mb20"></div>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="center">
                    <Col span="23">
                        <div className="table-placeholder width100"></div>
                    </Col>
                </Row>
            </DemoBlock>

            <DemoBlock title="卡片式 - SwiftUi">
                <VStack spacing={20} padding={10}>
                    <VStack spacing={10}>
                        <div className="img-placeholder-card"></div>
                        <div className="goods-title"></div>
                        <div className="goods-description"></div>
                        <div className="goods-other-info"></div>
                    </VStack>
                    <VStack spacing={10}>
                        <div className="img-placeholder-card"></div>
                        <div className="goods-title"></div>
                        <div className="goods-description"></div>
                        <div className="goods-other-info"></div>
                    </VStack>
                </VStack>
            </DemoBlock>

            <DemoBlock title="卡片式 - 栅格">
                <Row>
                    <Row type="flex" justify="center">
                        <Col span="23">
                            <div className="img-placeholder-card mb10"></div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span="23">
                            <div className="goods-title mb10"></div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span="23">
                            <div className="goods-description mb10"></div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span="23">
                            <div className="goods-other-info mb10"></div>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row type="flex" justify="center">
                        <Col span="23">
                            <div className="img-placeholder-card mb10"></div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span="23">
                            <div className="goods-title mb10"></div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span="23">
                            <div className="goods-description mb10"></div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span="23">
                            <div className="goods-other-info mb10"></div>
                        </Col>
                    </Row>
                </Row>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-common-layout {
        font-size: 14px;
        box-sizing: border-box;
        .img-placeholder {
            height: 80px;
            width: 80px;
            border-radius: 4px;
            background-color: #fff;
            box-shadow: 0 2px 4px #ebedf0;
        }

        .goods-title {
            height: 18px;
            background-color: #fff;
        }

        .goods-description {
            height: 20px;
            background-color: #fff;
        }

        .goods-other-info {
            height: 16px;
            width: 50%;
            background-color: #fff;
        }

        .chart-placeholder {
            height: 100px;
            border-radius: 4px;
            background-color: #fff;
            box-shadow: 0 2px 4px #ebedf0;
        }

        .table-placeholder {
            height: 100px;
            border-radius: 4px;
            background-color: #fff;
            box-shadow: 0 2px 4px #ebedf0;
        }

        .img-placeholder-card {
            height: 100px;
            border-radius: 4px;
            background-color: #fff;
            box-shadow: 0 2px 4px #ebedf0;
        }

        .mb10 {
            margin-bottom: 10px;
        }

        .mb20 {
            margin-bottom: 20px;
        }
        .pd20 {
            padding: 20px;
        }
        .pl10 {
            padding-right: 10px;
        }

        .width100 {
            width: 100%;
        }
    }
`;
