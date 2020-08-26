import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Overlay from '..';
import Button from '../../button';
import { $white } from '../../style/var';

export default function OverlayDemo() {
    const [showBasic, setState] = React.useState(false);

    const [showEmbedded, setEmbeddedState] = React.useState(false);

    return (
        <View className="demo-overlay">
            <DemoBlock title="基础用法">
                <Button type="primary" text="展示遮罩层" onClick={() => setState(true)}></Button>
                <Overlay show={showBasic} onClick={() => setState(false)}></Overlay>
            </DemoBlock>

            <DemoBlock title="嵌入内容">
                <Button
                    type="primary"
                    text="嵌入内容"
                    onClick={() => setEmbeddedState(true)}
                ></Button>
                <Overlay show={showEmbedded} onClick={() => setEmbeddedState(false)}>
                    <div className="wrapper">
                        <div className="block" />
                    </div>
                </Overlay>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-overlay {
        background: ${$white};

        .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        .block {
            width: 7.5rem;
            height: 7.5rem;
            background-color: ${$white};
        }
    }
`;
