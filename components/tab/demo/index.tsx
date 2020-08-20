import React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Tab from '..';
import Tabs from '../../tabs';
import Icon from '../../icon';

import { $white } from '../../style/var';

const genChildren = (num: number): Array<React.ReactElement> => {
    const result: Array<React.ReactElement> = [];
    for (let i = 1; i < num + 1; i++) {
        result.push(
            <Tab key={i} title={`标签 ${i}`}>
                内容 {i}
            </Tab>,
        );
    }
    return result;
};

// tab1
export default function TabDemo(): React.ReactNode {
    return (
        <View className="demo-tab">
            <DemoBlock title="基础用法">
                <Tabs active={1}>{genChildren(3)}</Tabs>
            </DemoBlock>

            <DemoBlock title="通过名称匹配">
                <Tabs active="a">
                    <Tab title="标签1" name="a">
                        内容1
                    </Tab>
                    <Tab title="标签2" name="b">
                        内容2
                    </Tab>
                    <Tab title="标签3" name="c">
                        内容3
                    </Tab>
                </Tabs>
            </DemoBlock>

            <DemoBlock title="禁用标签">
                <Tabs>
                    <Tab title="标签1">内容1</Tab>
                    <Tab disabled title="标签2">
                        内容2
                    </Tab>
                    <Tab title="标签3">内容3</Tab>
                </Tabs>
            </DemoBlock>

            <DemoBlock title="样式风格">
                <Tabs type="card">
                    <Tab title="标签1">内容1</Tab>
                    <Tab title="标签2">内容2</Tab>
                    <Tab title="标签3">内容3</Tab>
                </Tabs>
            </DemoBlock>

            <DemoBlock title="点击事件">
                <Tabs
                    active={0}
                    onClick={(name: any, title: any): void => {
                        console.log(name, title);
                    }}
                >
                    {genChildren(3)}
                </Tabs>
            </DemoBlock>

            <DemoBlock title="粘性布局">
                <Tabs sticky>{genChildren(3)}</Tabs>
            </DemoBlock>

            <DemoBlock title="自定义标签">
                <Tabs>
                    <Tab title={<Icon name="like-o" />}>内容1</Tab>
                    <Tab title={<Icon name="friends-o" />}>内容2</Tab>
                </Tabs>
            </DemoBlock>

            <DemoBlock title="切换动画">
                <Tabs animated>{genChildren(3)}</Tabs>
            </DemoBlock>

            <DemoBlock title="滑动切换">
                <Tabs swipeable active={2}>
                    {genChildren(3)}
                </Tabs>
            </DemoBlock>

            <DemoBlock title="滚动导航">
                <Tabs scrollspy sticky>
                    {genChildren(10)}
                </Tabs>
            </DemoBlock>

            <DemoBlock title="异步切换">
                <Tabs
                    onBeforeChange={(name: number | string): Promise<boolean> | boolean => {
                        if (name === 1) {
                            return false;
                        }

                        return new Promise((resolve) => {
                            resolve(name !== 3);
                        });
                    }}
                >
                    {genChildren(4)}
                </Tabs>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-tab {
        margin-bottom: 80vh;

        .mul-tab .mul-icon {
            margin-right: 5px;
            vertical-align: -2px;
        }

        .mul-tab__pane {
            padding: 25px 20px;
            background-color: ${$white};
        }

        .mul-tabs--card .mul-tab__pane {
            background-color: transparent;
        }
    }
`;
