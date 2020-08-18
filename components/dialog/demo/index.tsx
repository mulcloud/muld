/* eslint-disable no-console */
import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Dialog from '..';
import Button from '../../button';

const { useState } = React;
export default function DialogDemo(): React.ReactNode {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [confirmLoading, changeConfirmLoading] = useState(false);
    const [confirmLoading1, changeConfirmLoading1] = useState(false);
    return (
        <View>
            <DemoBlock title="提示弹窗">
                <Button
                    type="primary"
                    onClick={(): void => {
                        setShow1(!show1);
                    }}
                >
                    提示弹窗
                </Button>
                <Dialog
                    visible={show1}
                    title="标题"
                    closeOnClickOverlay
                    showConfirmButton
                    onConfirm={(): void => {
                        setShow1(!show1);
                        console.log('onConfirm');
                    }}
                >
                    代码是写出来给人看的，附带能在机器上运行
                </Dialog>
                <Button
                    type="primary"
                    onClick={(): void => {
                        setShow2(!show2);
                    }}
                >
                    提示弹窗(无标题)
                </Button>
                <Dialog
                    visible={show2}
                    showConfirmButton
                    onConfirm={(): void => {
                        setShow2(!show2);
                        console.log('onConfirm');
                    }}
                >
                    代码是写出来给人看的，附带能在机器上运行
                </Dialog>
            </DemoBlock>
            <DemoBlock title="确认弹窗">
                <Button
                    type="primary"
                    onClick={(): void => {
                        setShow3(!show3);
                    }}
                >
                    确认弹窗
                </Button>
                <Dialog
                    visible={show3}
                    title="标题"
                    closeOnClickOverlay
                    showCancelButton
                    confirmLoading={confirmLoading1}
                    showConfirmButton
                    onCancel={(): void => {
                        setShow3(!show3);
                        changeConfirmLoading1(false);
                        console.log('onCancel');
                    }}
                    onConfirm={(): void => {
                        changeConfirmLoading1(true);
                        console.log('onConfirm');
                    }}
                >
                    代码是写出来给人看的，附带能在机器上运行
                </Dialog>
            </DemoBlock>
            <DemoBlock title="组件调用">
                <Button
                    type="primary"
                    onClick={(): void => {
                        setShow(!show);
                    }}
                >
                    组件调用
                </Button>
                <Dialog
                    visible={show}
                    title="标题"
                    closeOnClickOverlay
                    showCancelButton
                    confirmLoading={confirmLoading}
                    showConfirmButton
                    onCancel={(): void => {
                        setShow(!show);
                        changeConfirmLoading(false);
                        console.log('onCancel');
                    }}
                    onConfirm={(): void => {
                        changeConfirmLoading(true);
                        console.log('onConfirm');
                    }}
                >
                    代码是写出来给人看的，附带能在机器上运行
                </Dialog>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    .mul-button {
        margin-left: 16px;
    }
`;
