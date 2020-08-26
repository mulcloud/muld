import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Cell from '..';
import Tag from '../../tag';
import Icon from '../../icon';
import CellGroup from '../CellGroup';

export default function CellDemo() {
    return (
        <View className="demo-button">
            <DemoBlock title="基础用法">
                <CellGroup>
                    <Cell title="单元格" value="内容" />
                    <Cell title="单元格" value="内容" label="描述信息" />
                </CellGroup>
            </DemoBlock>
            <DemoBlock title="单元格大小">
                <Cell title="单元格" value="内容" size="large" />
                <Cell title="单元格" value="内容" size="large" label="描述信息" />
            </DemoBlock>
            <DemoBlock title="展示图标">
                <Cell title="单元格" icon="location-o" />
            </DemoBlock>
            <DemoBlock title="只设置 value">
                <Cell value="内容" />
            </DemoBlock>
            <DemoBlock title="展示箭头">
                <Cell title="单元格" is-link />
                <Cell title="单元格" is-link value="内容" />
                <Cell title="单元格" is-link arrow-direction="down" value="内容" />
            </DemoBlock>
            <DemoBlock title="分组标题">
                <CellGroup title="分组1">
                    <Cell title="单元格" value="内容" />
                </CellGroup>
                <CellGroup title="分组2">
                    <Cell title="单元格" value="内容" />
                </CellGroup>
            </DemoBlock>
            <DemoBlock title="自定义 title">
                <Cell
                    value="内容"
                    isLink
                    title={
                        <React.Fragment>
                            <span className="custom-title">单元格</span>
                            <Tag type="danger">标签</Tag>
                        </React.Fragment>
                    }
                ></Cell>
            </DemoBlock>
            <DemoBlock title="自定义右侧图标">
                <Cell
                    title="单元格"
                    icon="shop-o"
                    rightIcon={<Icon name="search" className="search-icon" />}
                ></Cell>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-cell {
        .custom-title {
            margin-right: 4px;
            vertical-align: middle;
        }

        .search-icon {
            font-size: 16px;
            line-height: inherit;
        }
    }
`;
