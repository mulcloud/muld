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
        .mul-ellipsis,
        .mul-multi-ellipsis--l2 {
            max-width: 18.75rem;
            margin-left: ${$padding_md};
            font-size: 0.875rem;
            line-height: 1.125rem;
        }

        .mul-ellipsis {
            margin-bottom: ${$padding_md};
        }

        .mul-hairline--top {
            height: 1.875rem;
            background-color: ${$white};

            &::after {
                top: 0.3125rem;
            }
        }

        .demo-animate-block {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 6.25rem;
            height: 6.25rem;
            margin: -3.125rem 0 0 -3.125rem;
            background-color: ${$blue};
            border-radius: 0.1875rem;
        }
        p {
            margin-bottom: 0.625rem;
            padding-left: 1.25rem;
        }

        [class*='mul-bg'] {
            padding: 0.625rem;
            margin: 0rem 0rem 0.625rem 1.25rem;
        }
        .mul-doc-demo-block__card {
            margin: 0;
        }
    }
`;
