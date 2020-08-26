import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';

import Swipe from '..';
import SwipeItem from '../../swipe-item';

export default function SwipeDemo(): React.ReactElement {
    return (
        <View>
            <DemoBlock title="基础用法">
                <Swipe autoplay="2000">
                    <SwipeItem>1</SwipeItem>
                    <SwipeItem>2</SwipeItem>
                    <SwipeItem>3</SwipeItem>
                </Swipe>
            </DemoBlock>

            <DemoBlock title="监听 change 事件">
                <Swipe
                    autoplay="1800"
                    onChange={(index): void => {
                        // eslint-disable-next-line no-console
                        console.log(index);
                    }}
                >
                    <SwipeItem>1</SwipeItem>
                    <SwipeItem>2</SwipeItem>
                    <SwipeItem>3</SwipeItem>
                </Swipe>
            </DemoBlock>

            <DemoBlock title="纵向滚动">
                <Swipe autoplay="1600" vertical>
                    <SwipeItem>1</SwipeItem>
                    <SwipeItem>2</SwipeItem>
                    <SwipeItem>3</SwipeItem>
                </Swipe>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    .mul-swipe {
        height: 150px;
        &-item {
            color: #ffffff;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            &:nth-child(even) {
                background-color: #39a9ed;
            }

            &:nth-child(odd) {
                background-color: #66c6f2;
            }
        }
    }
`;
