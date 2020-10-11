import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Tabbar from '..';
import TabbarItem from '../../tabbar-item';

export default function TabbartDemo() {
    const active = 0;
    const active2 = 0;
    const active3 = 0;
    const active4 = 0;
    const active5 = 0;
    const activeName = 'home';

    const icon = {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };

    const onChange = (index: number | string) => {
        if (typeof index !== 'string') {
            alert(`你切换到了标签${index + 1}`);
        }
    };

    const [imgActive, setImage] = React.useState<boolean>(true);

    const switchImg = (index: number | string) => {
        setImage(index === 0);
    };

    return (
        <View className="demo-tabbar">
            <DemoBlock title="基础用法">
                <Tabbar active={active}>
                    <TabbarItem icon="home-o">标签</TabbarItem>
                    <TabbarItem icon="search">标签</TabbarItem>
                    <TabbarItem icon="friends-o">标签</TabbarItem>
                    <TabbarItem icon="setting-o">标签</TabbarItem>
                </Tabbar>
            </DemoBlock>

            <DemoBlock title="通过名称匹配">
                <Tabbar active={activeName}>
                    <TabbarItem icon="home-o" name="home">
                        标签
                    </TabbarItem>
                    <TabbarItem icon="search" name="search">
                        标签
                    </TabbarItem>
                    <TabbarItem icon="friends-o" name="friends">
                        标签
                    </TabbarItem>
                    <TabbarItem icon="setting-o" name="setting">
                        标签
                    </TabbarItem>
                </Tabbar>
            </DemoBlock>

            <DemoBlock title="微标提示">
                <Tabbar active={active2}>
                    <TabbarItem icon="home-o">标签</TabbarItem>
                    <TabbarItem icon="search" dot>
                        标签
                    </TabbarItem>
                    <TabbarItem icon="friends-o" badge="5">
                        标签
                    </TabbarItem>
                    <TabbarItem icon="setting-o" badge="20">
                        标签
                    </TabbarItem>
                </Tabbar>
            </DemoBlock>

            <DemoBlock title="自定义图标">
                <Tabbar active={active3} onChange={switchImg}>
                    <TabbarItem
                        icon={<img src={imgActive ? icon.active : icon.inactive} />}
                        badge="3"
                    >
                        <span>自定义</span>
                    </TabbarItem>
                    <TabbarItem icon="search" dot>
                        标签
                    </TabbarItem>
                    <TabbarItem icon="setting-o" badge="20">
                        标签
                    </TabbarItem>
                </Tabbar>
            </DemoBlock>

            <DemoBlock title="自定义颜色">
                <Tabbar active={active4} activeColor="#07c160" inactiveColor="#000">
                    <TabbarItem icon="home-o">标签</TabbarItem>
                    <TabbarItem icon="search">标签</TabbarItem>
                    <TabbarItem icon="friends-o">标签</TabbarItem>
                    <TabbarItem icon="setting-o">标签</TabbarItem>
                </Tabbar>
            </DemoBlock>

            <DemoBlock title="监听切换事件">
                <Tabbar active={active5} onChange={onChange}>
                    <TabbarItem icon="home-o">标签1</TabbarItem>
                    <TabbarItem icon="search">标签2</TabbarItem>
                    <TabbarItem icon="friends-o">标签3</TabbarItem>
                    <TabbarItem icon="setting-o">标签4</TabbarItem>
                </Tabbar>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-tabbar {
        .mul-tabbar {
            position: relative;
            padding-bottom: 0;
        }
        .mul-doc-demo-block__card {
            margin: 0%;
        }
    }
`;
