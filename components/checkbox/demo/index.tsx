import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Checkbox from '..';
import CheckboxGroup from '../../checkbox-group';
import Cell from '../../cell';
import CellGroup from '../../cell/CellGroup';
import Button from '../../button';
import { $padding_md, $white } from '../../style/var';

export default function CheckboxDemo(): React.ReactNode {
    const [checked1, setChecked1] = React.useState(false);
    const [checkedList1, setCheckedList1] = React.useState<any[]>(['a']);
    const [checkedList2, setCheckedList2] = React.useState<Array<any> | undefined>(['a', 'b']);
    const [checkedList3, setCheckedList3] = React.useState<any[]>(['a', 'b']);
    const list = ['a', 'b', 'c'];

    const options1 = [
        { name: 'a', disabled: true },
        {
            name: 'b',
            label: 'b',
            onChange: (checked: boolean) => {
                console.log('checked', checked);
            },
        },
        { name: 'c', label: 'c' },
    ];

    return (
        <View>
            <DemoSection className="demo-checkbox">
                <DemoBlock title="基础用法">
                    <Checkbox
                        defaultChecked={false}
                        onChange={(checked) => {
                            console.log('checked', checked);
                        }}
                    >
                        复选框
                    </Checkbox>
                </DemoBlock>
                <DemoBlock title="受控复选框">
                    <Checkbox
                        defaultChecked={true}
                        checked={checked1}
                        onChange={(checked) => {
                            console.log('checked', checked);
                            setChecked1(checked);
                        }}
                    >
                        受控复选框
                    </Checkbox>
                </DemoBlock>
                <DemoBlock title="禁用状态">
                    <Checkbox defaultChecked={false} disabled>
                        你选不了我
                    </Checkbox>
                    <Checkbox defaultChecked={true} disabled>
                        你还是选不了我
                    </Checkbox>
                </DemoBlock>
                <DemoBlock title="自定义形状">
                    <Checkbox shape="square">我是方形框</Checkbox>
                </DemoBlock>
                <DemoBlock title="自定义颜色">
                    <Checkbox checkedColor="#07c160">自定义颜色</Checkbox>
                </DemoBlock>
                <DemoBlock title="自定义大小">
                    <Checkbox iconSize={26}>自定义大小</Checkbox>
                </DemoBlock>
                <DemoBlock title="复选框组">
                    <CheckboxGroup
                        onChange={(checkedList) => {
                            console.log('checkedList', checkedList);
                        }}
                    >
                        <Checkbox name="a">复选框a</Checkbox>
                        <Checkbox name="b">复选框b</Checkbox>
                    </CheckboxGroup>
                </DemoBlock>
                <DemoBlock title="受控复选框组">
                    <CheckboxGroup
                        value={checkedList1}
                        onChange={(checkedList) => {
                            console.log('checkedList', checkedList);
                            setCheckedList1(checkedList);
                        }}
                    >
                        <Checkbox name="a">复选框a</Checkbox>
                        <Checkbox name="b">复选框b</Checkbox>
                    </CheckboxGroup>
                </DemoBlock>
                <DemoBlock title="options生成复选框组">
                    <CheckboxGroup options={options1}></CheckboxGroup>
                </DemoBlock>
                <DemoBlock title="水平排列">
                    <CheckboxGroup direction="horizontal">
                        <Checkbox name="a">复选框a</Checkbox>
                        <Checkbox name="b">复选框b</Checkbox>
                    </CheckboxGroup>
                </DemoBlock>
                <DemoBlock title="限制最大可选数">
                    <CheckboxGroup max={2}>
                        <Checkbox name="a">复选框a</Checkbox>
                        <Checkbox name="b">复选框b</Checkbox>
                        <Checkbox name="c">复选框b</Checkbox>
                    </CheckboxGroup>
                </DemoBlock>
                <DemoBlock title="全选与反选">
                    <CheckboxGroup
                        value={checkedList3}
                        onChange={(checkedList) => {
                            setCheckedList3(checkedList);
                        }}
                    >
                        {list.map((name) => (
                            <Checkbox key={name} name={name}>
                                复选框{name}
                            </Checkbox>
                        ))}
                    </CheckboxGroup>
                    <div>
                        <Button
                            onClick={() => {
                                setCheckedList3([...list]);
                            }}
                        >
                            全选
                        </Button>
                        <Button
                            onClick={() => {
                                setCheckedList3(
                                    list.filter((item) => !checkedList3?.includes(item)),
                                );
                            }}
                        >
                            反选
                        </Button>
                    </div>
                </DemoBlock>
                <DemoBlock title="搭配单元格组件一起使用">
                    <CheckboxGroup
                        value={checkedList2}
                        onChange={(checkedList) => {
                            console.log('checkedList ===>', checkedList);
                        }}
                    >
                        <CellGroup>
                            {list.map((name) => {
                                return (
                                    <Cell
                                        key={name}
                                        clickable
                                        title={`复选框${name}`}
                                        rightIcon={<Checkbox name={name}>{name}</Checkbox>}
                                        onClick={() => {
                                            if (checkedList2?.includes(name)) {
                                                setCheckedList2(
                                                    checkedList2.filter((item) => item !== name),
                                                );
                                            } else {
                                                setCheckedList2([...checkedList2!, name]);
                                            }
                                        }}
                                    ></Cell>
                                );
                            })}
                        </CellGroup>
                    </CheckboxGroup>
                </DemoBlock>
            </DemoSection>
        </View>
    );
}

const View = styled.div`
    .demo-checkbox {
        background: ${$white};

        .mul-checkbox {
            margin: 0 0 8px 20px;
        }

        .mul-cell {
            .mul-checkbox {
                margin: 0;
            }
        }

        &-buttons {
            margin-top: ${$padding_md};

            .mul-button {
                margin-left: ${$padding_md};
            }
        }

        .mul-doc-demo-block__title {
            margin-top: -8px;
        }
    }
`;
