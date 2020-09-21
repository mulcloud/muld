import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import * as style from '../../style/var';
import Skeleton from '..';
import Switch from '../../switch';

export default function SkeletonDemo() {
    const [show, setShow] = React.useState(false);
    return (
        <View className="demo-skeleton">
            <DemoSection>
                <DemoBlock title="基础用法">
                    <Skeleton title row="3" />
                </DemoBlock>
                <DemoBlock title="显示头像">
                    <Skeleton title avatar row={3} />
                </DemoBlock>
                <DemoBlock title="显示子组件">
                    <Switch
                        value={show}
                        onChange={(newVal) => {
                            setShow(newVal);
                        }}
                    />
                    <Skeleton title avatar row={3} loading={!show}>
                        <div className="demo-preview">
                            <img src="https://img.yzcdn.cn/vant/cat.jpeg" />
                            <div className="demo-content">
                                <h3>关于 Muld</h3>
                                <p>
                                    Muld 是一套轻量、可靠的移动端 React
                                    组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
                                </p>
                            </div>
                        </div>
                    </Skeleton>
                </DemoBlock>
            </DemoSection>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-skeleton {
        padding-bottom: 1.25rem;
        background-color: ${style.$white};

        .mul-doc-demo-block__card {
            margin: 0;
        }

        .mul-switch {
            margin: 0 ${style.$padding_md} ${style.$padding_xs};
        }

        .demo-preview {
            display: flex;
            padding: 0 ${style.$padding_md};

            .demo-content {
                padding-top: 0.375rem;

                h3 {
                    margin: 0;
                    font-size: 1.125rem;
                    line-height: 1.25rem;
                }

                p {
                    margin: 0.8125rem 0 0;
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                }
            }

            img {
                flex-shrink: 0;
                width: 2rem;
                height: 2rem;
                margin-right: ${style.$padding_md};
            }
        }
    }
`;
