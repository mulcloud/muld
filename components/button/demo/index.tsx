import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Button from '..';
import { $padding_sm, $padding_md } from '../../style/var';

export default function ButtonDemo(): React.ReactNode {
    return (
        <View className="demo-button">
            <DemoBlock title="按钮类型">
                <div className="demo-button-row">
                    <Button type="default">默认按钮</Button>
                    <Button type="primary">主要按钮</Button>
                    <Button type="info">信息按钮</Button>
                </div>
                <Button type="warning">警告按钮</Button>
                <Button type="danger">危险按钮</Button>
            </DemoBlock>
            <DemoBlock title="朴素按钮">
                <Button plain type="primary">
                    朴素按钮
                </Button>
                <Button plain type="info">
                    朴素按钮
                </Button>
            </DemoBlock>
            <DemoBlock title="细边框">
                <Button plain hairline type="primary">
                    细边框按钮
                </Button>
                <Button plain hairline type="info">
                    细边框按钮
                </Button>
            </DemoBlock>
            <DemoBlock title="禁用状态">
                <Button disabled type="primary">
                    禁用状态
                </Button>
                <Button disabled type="info">
                    禁用状态
                </Button>
            </DemoBlock>
            <DemoBlock title="加载状态">
                <Button loading type="primary" />
                <Button loading type="primary" loading-type="spinner" />
                <Button loading type="info" loading-text="加载中..." />
            </DemoBlock>
            <DemoBlock title="按钮形状">
                <Button square type="primary">
                    方形按钮
                </Button>
                <Button round type="info">
                    圆形按钮
                </Button>
            </DemoBlock>
            <DemoBlock title="图标按钮">
                <Button icon="star-o" type="primary" />
                <Button icon="star-o" type="primary">
                    按钮
                </Button>
                <Button icon="https://chengfayun.com/static/icon/logo-1.svg" type="info">
                    按钮
                </Button>
            </DemoBlock>
            <DemoBlock title="按钮尺寸">
                <Button type="primary" size="large">
                    大号按钮
                </Button>
                <Button type="primary" size="normal">
                    普通按钮
                </Button>
                <Button type="primary" size="small">
                    小型按钮
                </Button>
                <Button type="primary" size="mini">
                    迷你按钮
                </Button>
            </DemoBlock>
            <DemoBlock title="块级元素">
                <Button type="primary" block>
                    块级元素
                </Button>
            </DemoBlock>
            <DemoBlock title="自定义颜色">
                <Button color="#7232dd">单色按钮</Button>
                <Button color="#7232dd" plain>
                    单色按钮
                </Button>
                <Button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</Button>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-button {
        .mul-button {
            &--large {
                margin-bottom: ${$padding_md};
            }

            &--small,
            &--normal:not(:last-child) {
                margin-right: ${$padding_md};
            }
        }

        .mul-doc-demo-block {
            padding: 0 ${$padding_md};
        }

        .mul-doc-demo-block__title {
            padding-left: 0;
        }

        .demo-button-row {
            margin-bottom: ${$padding_sm};
        }
    }
`;
