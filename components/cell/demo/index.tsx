import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Card from '..';
import Tag from '../../tag';
import Button from '../../button';
import { $white } from '../../style/var';

export default function CellDemo() {
    return (
        <View className="demo-button">
            <DemoBlock title="基础用法">
                <Card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                />
            </DemoBlock>
            <DemoBlock title="营销信息">
                <Card
                    num="2"
                    tag="标签"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    origin-price="10.00"
                />
            </DemoBlock>
            <DemoBlock title="自定义内容">
                <Card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    tags={<Tag type="danger">标签</Tag>}
                    footer={<Button size="mini">按钮</Button>}
                />
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-card {
        background-color: ${$white};
    }
`;
