import * as React from 'react';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import ActionSheet from '..';
import Cell from '../../cell';

export default function ActionSheetDemo() {
    const actions1 = [
        { name: '选项一' },
        { name: '选项二' },
        {
            name: '选项三',
            callback: (item: any) => {
                console.log('callback', item);
            },
        },
    ];
    const [visible1, setVisible1] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);
    const [visible3, setVisible3] = React.useState(false);
    const [visible4, setVisible4] = React.useState(false);
    const [visible5, setVisible5] = React.useState(false);
    return (
        <DemoSection>
            <DemoBlock title="基础用法">
                <Cell
                    isLink
                    title="基础用法"
                    onClick={() => {
                        setVisible1(true);
                    }}
                ></Cell>
                <Cell
                    isLink
                    title="展示取消按钮"
                    onClick={() => {
                        setVisible2(true);
                    }}
                ></Cell>
                <Cell
                    isLink
                    title="展示描述信息"
                    onClick={() => {
                        setVisible3(true);
                    }}
                ></Cell>
                <ActionSheet
                    visible={visible1}
                    actions={actions1}
                    onSelect={(item: any) => {
                        setVisible1(false);
                        console.log('item', item);
                    }}
                    onCancel={() => {
                        setVisible1(false);
                    }}
                    onClose={() => {
                        console.log('closed');
                    }}
                ></ActionSheet>
                <ActionSheet
                    visible={visible2}
                    actions={actions1}
                    onSelect={() => {
                        setVisible2(false);
                    }}
                    cancelText="取消"
                    onCancel={() => {
                        setVisible2(false);
                    }}
                ></ActionSheet>
                <ActionSheet
                    visible={visible3}
                    actions={[
                        { name: '选项一' },
                        { name: '选项二' },
                        { name: '选项三', subname: '描述信息' },
                    ]}
                    onSelect={() => {
                        setVisible3(false);
                    }}
                    cancelText="取消"
                    onCancel={() => {
                        setVisible3(false);
                    }}
                ></ActionSheet>
            </DemoBlock>
            <DemoBlock title="选项状态">
                <Cell
                    isLink
                    title="选项状态"
                    onClick={() => {
                        setVisible4(true);
                    }}
                ></Cell>
                <ActionSheet
                    visible={visible4}
                    actions={[
                        { name: '选项一', color: '#ee0a24' },
                        { name: '选项二', disabled: true },
                        { name: '选项三', loading: true },
                    ]}
                    onSelect={() => {
                        setVisible4(false);
                    }}
                    cancelText="取消"
                    onCancel={() => {
                        setVisible4(false);
                    }}
                ></ActionSheet>
            </DemoBlock>
            <DemoBlock title="自定义面板">
                <Cell
                    isLink
                    title="自定义面板"
                    onClick={() => {
                        setVisible5(true);
                    }}
                ></Cell>
                <ActionSheet
                    visible={visible5}
                    title="标题"
                    onSelect={() => {
                        setVisible5(false);
                    }}
                    onCancel={() => {
                        setVisible5(false);
                    }}
                >
                    <div style={{ padding: '16px 16px 160px' }}>这是内容</div>
                </ActionSheet>
            </DemoBlock>
        </DemoSection>
    );
}
