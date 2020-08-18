/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */
import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import { dateColumns, cascadeColumns } from './data';
import Picker from '..';
import { $padding_sm, $padding_md, $red, $gray5 } from '../../style/var';

const i18n = {
    'zh-CN': {
        city: '城市',
        cascade: '级联选择',
        withPopup: '搭配弹出层使用',
        chooseCity: '选择城市',
        showToolbar: '展示顶部栏',
        dateColumns: dateColumns['zh-CN'],
        defaultIndex: '默认选中项',
        disableOption: '禁用选项',
        cascadeColumns: cascadeColumns['zh-CN'],
        multipleColumns: '多列选择',
        setColumnValues: '动态设置选项',
        textColumns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
        disabledColumns: [{ text: '杭州', disabled: true }, { text: '宁波' }, { text: '温州' }],
        column3: {
            浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            福建: ['福州', '厦门', '莆田', '三明', '泉州'],
        },
        toastContent: (value: string, index: string): string =>
            `当前值：${value}, 当前索引：${index}`,
    },
    'en-US': {
        city: 'City',
        cascade: 'Cascade',
        withPopup: 'With Popup',
        chooseCity: 'Choose City',
        showToolbar: 'Show Toolbar',
        dateColumns: dateColumns['en-US'],
        defaultIndex: 'Default Index',
        disableOption: 'Disable Option',
        cascadeColumns: cascadeColumns['en-US'],
        multipleColumns: 'Multiple Columns',
        setColumnValues: 'Set Column Values',
        textColumns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
        disabledColumns: [
            { text: 'Delaware', disabled: true },
            { text: 'Florida' },
            { text: 'Georqia' },
        ],
        column3: {
            Group1: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
            Group2: ['Alabama', 'Kansas', 'Louisiana', 'Texas'],
        },
        toastContent: (value: string, index: string): string => `Value: ${value}, Index：${index}`,
    },
};

function columns(): any[] {
    const column = i18n['zh-CN'].column3;
    return [
        {
            values: Object.keys(column),
            className: 'column1',
        },
        {
            values: column[Object.keys(column)[0]],
            className: 'column2',
            defaultIndex: 2,
        },
    ];
}

export default function PickerDemo(): React.ReactElement {
    const pickerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        console.log(pickerRef);
    });

    return (
        <View className="demo-picker">
            <DemoBlock title="基础用法">
                <div className="demo-Picker-row">
                    <Picker
                        columns={i18n['zh-CN'].textColumns}
                        showToolbar={true}
                        onChange={(value: string | number, index: number | string) => {
                            console.log('demo1 change', value, index);
                        }}
                        onConfirm={(value: string | number, index: number | string) => {
                            console.log('demo1 confirm', value, index);
                        }}
                        onCancel={() => {
                            console.log('demo1 cancel');
                        }}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title="默认选中">
                <div className="demo-Picker-row">
                    <Picker
                        columns={i18n['zh-CN'].textColumns}
                        showToolbar={true}
                        title="标题"
                        defaultIndex={2}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title="多项选择">
                <div className="demo-Picker-row">
                    <Picker
                        columns={i18n['zh-CN'].dateColumns}
                        showToolbar={true}
                        title="标题"
                        onChange={(value: string | number, index: number | string) => {
                            console.log('demo1 change', value, index);
                        }}
                        onConfirm={(value: string | number, index: number | string) => {
                            console.log('demo1 confirm', value, index);
                        }}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title="加载状态">
                <div className="demo-Picker-row">
                    <Picker
                        columns={i18n['zh-CN'].textColumns}
                        showToolbar={true}
                        title="标题"
                        loading={true}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title="动态设置选项">
                <div className="demo-Picker-row">
                    <Picker columns={columns()} showToolbar={true} title="标题" />
                </div>
            </DemoBlock>

            <DemoBlock title="级联选择">
                <div className="demo-Picker-row">
                    <Picker
                        columns={i18n['zh-CN'].cascadeColumns}
                        showToolbar={true}
                        title="标题"
                        onChange={(value: string | number, index: number | string) => {
                            console.log('demo1 change', value, index);
                        }}
                        onConfirm={(value: string | number, index: number | string) => {
                            console.log('demo1 confirm', value, index);
                        }}
                    />
                </div>
            </DemoBlock>

            <DemoBlock title="禁用选项">
                <div className="demo-Picker-row">
                    <Picker
                        columns={i18n['zh-CN'].disabledColumns}
                        showToolbar={true}
                        title="标题"
                    />
                </div>
            </DemoBlock>

            <DemoBlock title="默认插槽">
                <div className="demo-Picker-row">
                    <Picker columns={i18n['zh-CN'].textColumns} showToolbar={true} title="标题">
                        <div style={{ color: 'red', textAlign: 'center' }}>默认插槽(头部显示)</div>
                    </Picker>
                </div>
            </DemoBlock>

            <DemoBlock title="自定义插槽">
                <div className="demo-Picker-row">
                    <Picker columns={i18n['zh-CN'].textColumns} showToolbar={true} title="标题">
                        <div slot="title" style={{ color: $red, textAlign: 'center' }}>
                            自定义标题插槽
                        </div>
                        <div
                            slot="columns-top"
                            style={{ backgroundColor: $gray5, textAlign: 'center' }}
                        >
                            选择内容区域上方插槽
                        </div>
                        <div
                            slot="columns-bottom"
                            style={{ backgroundColor: $gray5, textAlign: 'center' }}
                        >
                            选择内容区域上方插槽
                        </div>
                    </Picker>
                </div>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-button {
        .mul-button {
            &--large {
                margin-bottom: ${$padding_md};
            }

            &--small,
            &--normal:not(:last-child) {
                margin-right: ${$padding_md};
            }
        }

        .mul-doc-demo-block {
            padding: 0 ${$padding_md};
        }

        .mul-doc-demo-block__title {
            padding-left: 0;
        }

        .demo-button-row {
            margin-bottom: ${$padding_sm};
        }
    }
`;
