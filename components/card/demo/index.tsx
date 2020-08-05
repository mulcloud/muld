import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Card from '..';
import Tag from '../../tag';
import Button from '../../button';
import { $white } from '../../style/var';

export default function CardDemo(): React.ReactNode {
    return (
        <View className="demo-card">
            <DemoBlock title="营销信息">
                <Card
                    num="2"
                    tag="标签"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    originPrice="10.00"
                />
            </DemoBlock>
            <DemoBlock title="自定义内容">
                <Card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    tags={
                        <React.Fragment>
                            <Tag plain type="danger" style={{ marginRight: '5px' }}>
                                Tag
                            </Tag>
                            <Tag plain type="danger">
                                Tag
                            </Tag>
                        </React.Fragment>
                    }
                    footer={
                        <React.Fragment>
                            <Button size="mini">Button</Button>
                            <Button size="mini">Button</Button>
                        </React.Fragment>
                    }
                ></Card>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-card {
        background-color: ${$white};
    }
`;
