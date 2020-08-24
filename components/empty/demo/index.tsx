/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Empty from '..';
import Button from '../../button';

export default function EmptyDemo(): React.ReactElement {
    return (
        <View className="demo-empty">
            <DemoBlock title="基础用法">
                <div className="demo-empty-row">
                    <Empty description="描述文字" />
                </div>
            </DemoBlock>

            <DemoBlock title="自定义图片">
                <div className="demo-empty-row">
                    <Empty
                        className="custom-image"
                        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                        description="描述文字"
                    />
                </div>
            </DemoBlock>

            <DemoBlock title="通用错误">
                <div className="demo-empty-row">
                    <Empty image="error" description="描述文字" />
                </div>
            </DemoBlock>

            <DemoBlock title="网络错误">
                <div className="demo-empty-row">
                    <Empty image="network" description="描述文字" />
                </div>
            </DemoBlock>

            <DemoBlock title="搜索提示">
                <div className="demo-empty-row">
                    <Empty image="search" description="描述文字" />
                </div>
            </DemoBlock>

            <DemoBlock title="底部内容">
                <div className="demo-empty-row">
                    <Empty description="描述文字">
                        <Button round type="danger">
                            点击按钮区域
                        </Button>
                    </Empty>
                </div>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-empty {
        background: 'white';

        .custom-image {
            .mul-empty__image {
                width: 90px;
                height: 90px;
            }
        }

        .bottom-button {
            width: 160px;
            height: 40px;
        }
    }
`;
