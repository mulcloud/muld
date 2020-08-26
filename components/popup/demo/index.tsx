import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Popup from '..';
import Cell from '../../cell';
import { $padding_md } from '../../style/var';

export default function PopupDemo() {
    const [showBasic, setBasic] = React.useState(false);

    const [showTop, setTop] = React.useState(false);

    const [showBottom, setBottom] = React.useState(false);

    const [showLeft, setLeft] = React.useState(false);

    const [showRight, setRight] = React.useState(false);

    const [showCloseIcon, setClose] = React.useState(false);

    const [showCustomCloseIcon, setCustomClose] = React.useState(false);

    const [showCustomIconPosition, setCustomIconPosition] = React.useState(false);

    const [showRoundCorner, setRoundCorner] = React.useState(false);

    const [showGetContainer, setGetContainer] = React.useState(false);

    const basicStyle = {
        padding: '1.875rem 3.125rem',
    };
    const heightStyle = {
        height: '30%',
    };
    const widthStyle = {
        width: '30%',
        height: '100%',
    };

    return (
        <View className="demo-popup">
            <DemoBlock title="展示弹出层">
                <Cell title="展示弹出层" is-link onClick={() => setBasic(true)}></Cell>
                <Popup
                    visible={showBasic}
                    style={basicStyle}
                    onCancel={() => {
                        setBasic(false);
                    }}
                >
                    内容
                </Popup>
            </DemoBlock>

            <DemoBlock title="展示位置">
                <Cell title="顶部弹出" is-link onClick={() => setTop(true)}></Cell>
                <Cell title="底部弹出" is-link onClick={() => setBottom(true)}></Cell>
                <Cell title="左侧弹出" is-link onClick={() => setLeft(true)}></Cell>
                <Cell title="右侧弹出" is-link onClick={() => setRight(true)}></Cell>
                <Popup
                    visible={showTop}
                    position="top"
                    style={heightStyle}
                    onCancel={() => setTop(false)}
                ></Popup>
                <Popup
                    visible={showBottom}
                    position="bottom"
                    style={heightStyle}
                    onCancel={() => setBottom(false)}
                ></Popup>
                <Popup
                    visible={showLeft}
                    position="left"
                    style={widthStyle}
                    onCancel={() => setLeft(false)}
                ></Popup>
                <Popup
                    visible={showRight}
                    position="right"
                    style={widthStyle}
                    onCancel={() => setRight(false)}
                ></Popup>
            </DemoBlock>

            <DemoBlock title="关闭图标">
                <Cell title="关闭图标" is-link onClick={() => setClose(true)}></Cell>
                <Cell title="自定义图标" is-link onClick={() => setCustomClose(true)}></Cell>
                <Cell title="图标位置" is-link onClick={() => setCustomIconPosition(true)}></Cell>
                <Popup
                    visible={showCloseIcon}
                    closeable
                    position="bottom"
                    style={heightStyle}
                    onCancel={() => setClose(false)}
                ></Popup>
                <Popup
                    visible={showCustomCloseIcon}
                    closeable
                    closeIcon="close"
                    position="bottom"
                    style={heightStyle}
                    onCancel={() => setCustomClose(false)}
                ></Popup>
                <Popup
                    visible={showCustomIconPosition}
                    closeable
                    closeIconPosition="top-left"
                    position="bottom"
                    style={heightStyle}
                    onCancel={() => setCustomIconPosition(false)}
                ></Popup>
            </DemoBlock>

            <DemoBlock title="圆角弹窗">
                <Cell title="圆角弹窗" is-link onClick={() => setRoundCorner(true)}></Cell>
                <Popup
                    visible={showRoundCorner}
                    round
                    position="bottom"
                    style={heightStyle}
                    onCancel={() => setRoundCorner(false)}
                ></Popup>
            </DemoBlock>

            <DemoBlock title="指定挂载节点">
                <Cell title="指定挂载节点" is-link onClick={() => setGetContainer(true)}></Cell>
                <Popup
                    visible={showGetContainer}
                    getContainer="body"
                    style={basicStyle}
                    onCancel={() => setGetContainer(false)}
                ></Popup>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-popup {
        .van-row {
            margin-bottom: ${$padding_md};
        }

        .van-button {
            margin-left: ${$padding_md};
        }
    }
`;
