import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Image from '..';
import { $white, $padding_md, $gray7 } from '../../style/var';

export default function ImageDemo(): React.ReactNode {
    return (
        <View className="demo-image">
            <DemoBlock title="基础用法">
                <Image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </DemoBlock>
            <DemoBlock title="填充模式">
                <Image
                    width="10rem"
                    height="10rem"
                    fit="contain"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </DemoBlock>
            <DemoBlock title="圆形图片">
                <Image
                    round
                    width="10rem"
                    height="10rem"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </DemoBlock>
            <DemoBlock title="加载中提示">
                <Image width="100%" height="27vw" />
                {/* <Image loading={<Loading type="spinner" size="20" />} /> */}
            </DemoBlock>
            <DemoBlock title="加载失败提示">
                <Image src="x" error="加载失败" width="100%" height="27vw" />
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-image {
        overflow-x: hidden;
        background-color: ${$white};

        .mul-row {
            padding: 0 ${$padding_md};
        }

        .mul-col {
            margin-bottom: 1.25rem;
        }

        .text {
            margin-top: 0.3125rem;
            color: ${$gray7};
            font-size: 0.875rem;
            text-align: center;
        }
    }
`;
