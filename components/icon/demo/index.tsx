import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Icon from '..';
import { $active_color, $text_color, $gray7 } from '../../style/var';

export default function IconDemo() {
    return (
        <View className="demo-icon">
            <DemoBlock title="基础用法">
                <div className="demo-button-row">
                    <Icon name="chat-o" />
                </div>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-icon {
        font-size: 0;
        &-list {
            box-sizing: border-box;
            min-height: calc(100vh - 65px);
            padding-top: 10px;
        }

        &-notify {
            font-size: 13px;
        }

        .mul-col {
            display: inline-block;
            float: none;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;

            span {
                display: block;
                height: 36px;
                margin: -4px 0 4px;
                padding: 0 5px;
                color: ${$gray7};
                font-size: 12px;
                line-height: 18px;
            }

            &:active {
                background-color: ${$active_color};
            }
        }

        .mul-icon {
            margin: 16px 0 16px;
            color: ${$text_color};
            font-size: 32px;
        }

        .mul-tab__pane {
            width: auto;
            margin: 20px;
            background-color: #fff;
            border-radius: 12px;
        }
    }
`;
