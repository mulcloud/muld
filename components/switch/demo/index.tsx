import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Switch from '..';
import { $padding_md } from '../../style/var';
import Cell from '../../cell';
import Dialog from '../../dialog';

const { useState } = React;
export default function Switchemo() {
    const [cell, setCell] = useState(true);
    const [dialog, setDialog] = useState(true);
    const [async, setAsync] = useState(true);
    const [toggle, setToggle] = useState(true);
    const [diySize, setDiySize] = useState(true);
    const [diyColor, setDiyColor] = useState(true);
    const [shwDialog, setShowDialog] = useState(false);

    const handleInput = (newVal: boolean) => {
        setTimeout(() => {
            setAsync(newVal);
        }, 500);
    };
    return (
        <View className="demo-switch">
            <DemoBlock title="基础用法">
                <Switch
                    value={toggle}
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                />
            </DemoBlock>
            <DemoBlock title="禁用状态">
                <Switch value={true} disabled />
            </DemoBlock>
            <DemoBlock title="加载状态">
                <Switch value={true} loading />
            </DemoBlock>
            <DemoBlock title="自定义大小">
                <Switch
                    value={diySize}
                    size="24px"
                    onClick={() => {
                        setDiySize(!diySize);
                    }}
                />
            </DemoBlock>
            <DemoBlock title="自定义颜色">
                <Switch
                    value={diyColor}
                    activeColor="#07c160"
                    inactiveColor="#ee0a24"
                    onClick={() => {
                        setDiyColor(!diyColor);
                    }}
                />
            </DemoBlock>
            <DemoBlock title="异步控制">
                <Switch value={async} onChange={handleInput} />
            </DemoBlock>
            <DemoBlock title="搭配单元格使用">
                <Cell
                    title="标题"
                    rightIcon={
                        <Switch
                            value={cell}
                            onChange={(newVal) => {
                                setCell(newVal);
                            }}
                        />
                    }
                ></Cell>
            </DemoBlock>
            <DemoBlock title="搭配对话框使用">
                <Switch
                    value={dialog}
                    onClick={() => {
                        setShowDialog(true);
                    }}
                />
                <Dialog
                    visible={shwDialog}
                    title="标题"
                    showCancelButton
                    showConfirmButton
                    onCancel={(): void => {
                        setShowDialog(!shwDialog);
                    }}
                    onConfirm={(): void => {
                        setShowDialog(!shwDialog);
                        setDialog(!dialog);
                    }}
                >
                    是否切换开关
                </Dialog>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-switch {
        .mul-switch {
            margin-left: ${$padding_md};
        }
    }
`;
