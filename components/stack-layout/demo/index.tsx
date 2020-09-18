import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import { HStack, Spacer, VStack } from '..';
import * as style from '../../style/var';

export default function ContainerDemo() {
    return (
        <Panel className="demo-stack-layout">
            <DemoSection>
                <DemoBlock title="hstack">
                    <HStack padding={10} spacing>
                        <div className="swift-block">react</div>
                        <div className="swift-block">vue</div>
                        <div className="swift-block">angular</div>
                    </HStack>
                </DemoBlock>
                <DemoBlock title="hstack-x-center">
                    <HStack alignX="center" spacing={5}>
                        <div className="swift-block">react</div>
                        <div className="swift-block">vue</div>
                        <div className="swift-block">angular</div>
                    </HStack>
                </DemoBlock>
                <DemoBlock title="hstack-x-right">
                    <HStack alignX="right" spacing={10}>
                        <div className="swift-block">react</div>
                        <div className="swift-block">vue</div>
                        <div className="swift-block">angular</div>
                    </HStack>
                </DemoBlock>
                <DemoBlock title="hstack-y-center">
                    <HStack alignX="center" alignY="center" spacing={10}>
                        <div className="swift-block">react</div>
                        <div className="swift-block">vue</div>
                        <div className="swift-block">angular</div>
                    </HStack>
                </DemoBlock>
                <DemoBlock title="vstack">
                    <div className="swift-panel">
                        <VStack padding={20}>
                            <div className="swift-block">react</div>
                        </VStack>
                    </div>
                </DemoBlock>
                <DemoBlock title="vstack-y-center">
                    <div className="swift-panel">
                        <VStack padding={20} spacing={10} alignY="center">
                            <div className="swift-block">react</div>
                            <div className="swift-block">vue</div>
                        </VStack>
                    </div>
                </DemoBlock>
                <DemoBlock title="vstack-x-y-center">
                    <div className="swift-panel">
                        <VStack alignX="center" alignY="center">
                            <div className="swift-block">react</div>
                        </VStack>
                    </div>
                </DemoBlock>
                <DemoBlock title="vstack-x-center-y-bottom">
                    <div className="swift-panel">
                        <VStack alignX="center" alignY="bottom">
                            <div className="swift-block">react</div>
                        </VStack>
                    </div>
                </DemoBlock>
                <DemoBlock title="spacer">
                    <HStack>
                        <div className="swift-block">react</div>
                        <Spacer></Spacer>
                        <div className="swift-block">vue</div>
                    </HStack>
                </DemoBlock>
            </DemoSection>
        </Panel>
    );
}

const Panel = styled(DemoSection)`
    &.demo-stack-layout {
        background: ${style.$white};

        .swift-panel {
            height: 6.25rem;
            border: 1px solid #39a9ed;

            .swift-block {
                margin-left: 0rem;
            }
        }

        .swift-block {
            font-size: 0.8125rem;
            line-height: 1.875rem;
            color: ${style.$white};
            background-color: #39a9ed;
            padding: 0px 0.625rem;
            margin-left: 0.0625rem;

            &:first-child {
                margin-left: 0rem;
            }
        }
    }
`;
