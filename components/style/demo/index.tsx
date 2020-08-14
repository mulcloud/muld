import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import { $white, $padding_md, $blue } from '../var';

export default function StyleDemo() {
    return (
        <View className="demo-style">
            <DemoBlock title="Text Ellipsis">
                <div className="mul-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
                <div className="mul-multi-ellipsis--l2">
                    这是一段最多显示两行的文字，多余的内容会被省略,这是一段最多显示两行的文字，多余的内容会被省略
                </div>
            </DemoBlock>
            <DemoBlock title="Hairline">
                <div className="mul-hairline--top"></div>
            </DemoBlock>
            <DemoBlock title="Font Color">
                <p className="mul-text--default">mul-text--default</p>
                <p className="mul-text--link">mul-text--link</p>
                <p className="mul-text--primary">mul-text--primary</p>
                <p className="mul-text--secondary">mul-text--secondary</p>
                <p className="mul-text--success">mul-text--success</p>
                <p className="mul-text--danger">mul-text--danger</p>
                <p className="mul-text--warning">mul-text--warning</p>
                <p className="mul-text--info">mul-text--info</p>
                <p className="mul-text--disable">mul-text--disable</p>
            </DemoBlock>
            <DemoBlock title="Background Color">
                <div className="mul-bg--default mul-text--black">mul-bg--default</div>
                <div className="mul-bg--primary mul-text--white">mul-bg--primary</div>
                <div className="mul-bg--success mul-text--white">mul-bg--success</div>
                <div className="mul-bg--danger mul-text--white">mul-bg--danger</div>
                <div className="mul-bg--warning mul-text--white">mul-bg--warning</div>
                <div className="mul-bg--info mul-text--white">mul-bg--info</div>
                <div className="mul-bg--white mul-text--black">mul-bg--white</div>
                <div className="mul-bg--transparent mul-text--dark">mul-bg--transparent</div>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-style {
        background-color: ${$white};
        padding: 20px;

        .mul-ellipsis,
        .mul-multi-ellipsis--l2 {
            max-width: 300px;
            margin-left: ${$padding_md};
            font-size: 14px;
            line-height: 18px;
        }

        .mul-ellipsis {
            margin-bottom: ${$padding_md};
        }

        .mul-hairline--top {
            height: 30px;
            background-color: ${$white};

            &::after {
                top: 5px;
            }
        }

        .demo-animate-block {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 100px;
            margin: -50px 0 0 -50px;
            background-color: ${$blue};
            border-radius: 3px;
        }
        p {
            margin-bottom: 10px;
            padding-left: 20px;
        }

        [class*='mul-bg'] {
            padding: 10px;
            margin: 0px 0px 10px 20px;
        }
    }
`;
