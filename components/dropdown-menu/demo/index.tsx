import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import DropdownMenu from '..';
import DropdownItem from '../../dropdown-item';
import Button from '../../button';

export default function DropdownMenuDemo(): React.ReactNode {
    const option1 = [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
    ];
    const option2 = [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
    ];

    const [visible, setVisible] = React.useState<boolean>(false);

    function onConfirm() {
        setVisible(false);
    }

    function onVisibleChange(v: boolean) {
        setVisible(v);
    }

    return (
        <View className="demo-dropdown-menu">
            <DemoBlock title="基础用法">
                <DropdownMenu>
                    <DropdownItem value={0} options={option1} />
                    <DropdownItem value="a" options={option2} />
                </DropdownMenu>
            </DemoBlock>
            <DemoBlock title="自定义菜单内容">
                <DropdownMenu>
                    <DropdownItem value={0} options={option1} />
                    <DropdownItem title="筛选" visible={visible} onVisibleChange={onVisibleChange}>
                        <div style={{ margin: 30, textAlign: 'center' }}>自定义内容</div>
                        <div style={{ padding: '1.25rem' }}>
                            <Button type="danger" block round onClick={onConfirm}>
                                确认
                            </Button>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </DemoBlock>
            <DemoBlock title="自定义选中态颜色">
                <DropdownMenu activeColor="#ee0a24">
                    <DropdownItem value={0} options={option1} />
                    <DropdownItem value="a" options={option2} />
                </DropdownMenu>
            </DemoBlock>
            <DemoBlock title="向上展开">
                <DropdownMenu direction="up">
                    <DropdownItem value={0} options={option1} />
                    <DropdownItem value="a" options={option2} />
                </DropdownMenu>
            </DemoBlock>
            <DemoBlock title="禁用菜单">
                <DropdownMenu direction="up">
                    <DropdownItem value={0} options={option1} disabled />
                    <DropdownItem value="a" options={option2} disabled />
                </DropdownMenu>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-dropdown-menu {
        .mul-doc-demo-block__card {
            margin: 0;
        }
    }
`;
