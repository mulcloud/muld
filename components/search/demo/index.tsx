import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Search from '..';

export default function SearchDemo() {
    const [value1, value2, value3, value4, value5, value6] = ['', '', '', '', '', ''];

    const onSearch = (value: any) => {
        alert(value);
    };

    const onCancel = () => {
        alert('取消');
    };

    const onClick = () => {
        console.log('click');
    };

    return (
        <View className="demo-search">
            <DemoBlock title="基础用法">
                <Search value={value1} placeholder="请输入搜索关键词"></Search>
            </DemoBlock>

            <DemoBlock title="事件监听">
                <form action="/">
                    <Search
                        value={value5}
                        placeholder="请输入搜索关键词"
                        showAction
                        onSearch={onSearch}
                        onCancel={onCancel}
                    />
                </form>
            </DemoBlock>

            <DemoBlock title="搜索框内容对齐">
                <Search value={value4} placeholder="请输入搜索关键词" inputAlign="center" />
            </DemoBlock>

            <DemoBlock title="禁用搜索框">
                <Search value={value3} placeholder="请输入搜索关键词" disabled />
            </DemoBlock>

            <DemoBlock title="自定义背景色">
                <Search
                    value={value2}
                    placeholder="请输入搜索关键词"
                    shape="round"
                    background="#4fc08d"
                />
            </DemoBlock>

            <DemoBlock title="自定义按钮">
                <Search
                    value={value6}
                    showAction
                    placeholder="请输入搜索关键词"
                    label="地址"
                    onSearch={onSearch}
                    action={
                        <React.Fragment>
                            <div onClick={onClick}>搜索</div>
                        </React.Fragment>
                    }
                />
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-search {
        background-color: #fff;
    }
`;
