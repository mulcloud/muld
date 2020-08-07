import * as React from 'react';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import styled from 'styled-components';
import NoticeBar from '..';
import { $padding_base } from '../../style/var';

export default function NoticeBarDemo() {
    function onClose() {
        console.log('closed!!');
    }
    const longText = '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。';
    const shortText = '技术是开发它的人的共同灵魂。';
    return (
        <View className="demo-notice-bar">
            <DemoBlock title="基础用法">
                <NoticeBar leftIcon="volume-o" text={longText} />
            </DemoBlock>
            <DemoBlock title="滚动播放">
                <div className="demo-row">
                    <NoticeBar scrollable={true} text={shortText} />
                </div>
                <NoticeBar scrollable={false} text={longText} />
            </DemoBlock>
            <DemoBlock title="多行展示">
                <NoticeBar wrapable scrollable={false} text={longText} />
            </DemoBlock>
            <DemoBlock title="通知栏模式">
                <div className="demo-row">
                    <NoticeBar mode="closeable" onClose={onClose}>
                        {shortText}
                    </NoticeBar>
                </div>
                <NoticeBar mode="link" text={shortText} />
            </DemoBlock>
            <DemoBlock title="自定义样式">
                <NoticeBar leftIcon="info-o" color="#1989fa" background="#ecf9ff" text={longText} />
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-notice-bar {
        background: #fff;
        .demo-row {
            margin-bottom: ${$padding_base};
        }
    }
`;
