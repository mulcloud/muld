import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Sidebar from '..';
import SidebarItem from '../../sidebar-item';
import { $white, $padding_md } from '../../style/var';

export default function SidebarDemo() {
    const onChange = (i: number) => {
        alert(`你切换到了 标签名${i + 1}`);
    };
    return (
        <View className="demo-sidebar">
            <DemoBlock title="基础用法">
                <Sidebar activeKey={0}>
                    <SidebarItem title="标签名" />
                    <SidebarItem title="标签名" />
                    <SidebarItem title="标签名" />
                </Sidebar>
            </DemoBlock>
            <DemoBlock title="徽标提示">
                <Sidebar activeKey={0}>
                    <SidebarItem title="标签名" dot />
                    <SidebarItem title="标签名" badge="5" />
                    <SidebarItem title="标签名" badge="99+" />
                </Sidebar>
            </DemoBlock>
            <DemoBlock title="禁用选项">
                <Sidebar activeKey={0}>
                    <SidebarItem title="标签名" />
                    <SidebarItem title="标签名" disabled />
                    <SidebarItem title="标签名" />
                </Sidebar>
            </DemoBlock>
            <DemoBlock title="监听切换事件">
                <Sidebar activeKey={0} onChange={onChange}>
                    <SidebarItem title="标签名1" />
                    <SidebarItem title="标签名2" />
                    <SidebarItem title="标签名3" />
                </Sidebar>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-sidebar {
        background-color: ${$white};
        display: flex;
        padding: 20px;
        flex-wrap: wrap;
        height: 100vh;

        .van-sidebar {
            margin-left: ${$padding_md};
        }

        .mul-doc-demo-block {
            width: 50%;
            &__title {
                padding: 20px 10px 10px !important;
                line-height: 28px;
            }
        }
    }
`;
