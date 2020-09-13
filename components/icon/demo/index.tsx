import * as React from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';

import Icon from '..';
import { Data, disPlayName } from './config';
import {
    $black,
    $white,
    $gray7,
    $padding_sm,
    $font_size_md,
    $font_weight_bold,
    $font_size_xs,
    $border_radius_lg,
} from '../../style/var';

export default function IconDemo(): React.ReactElement {
    const [activeTab, setTab] = React.useState('demo');

    // Todo Miss Tabs
    const renderTabBody = (): React.ReactNode => {
        if (activeTab === 'demo') {
            return (
                <Tabs>
                    <DemoBlock title="基础用法">
                        <div className="mul-icons">
                            <Icon size="30" name="chat-o" />
                        </div>
                        <div className="mul-icons">
                            <Icon
                                size="30"
                                name="https://avatar.chengfayun.com.cn/chengfayun-avatar/6ce849b003c18744b54d1a9913db75e9.png"
                            />
                        </div>
                    </DemoBlock>
                    <DemoBlock title="徽标提示">
                        <div className="mul-icons">
                            <Icon size="30" name="chat-o" dot />
                        </div>
                        <div className="mul-icons">
                            <Icon size="30" name="chat-o" badge="9" />
                        </div>
                        <div className="mul-icons">
                            <Icon size="30" name="chat-o" badge="99+" />
                        </div>
                    </DemoBlock>
                    <DemoBlock title="图标颜色">
                        <div className="mul-icons">
                            <Icon size="30" name="chat-o" color="#1989fa" />
                        </div>
                        <div className="mul-icons">
                            <Icon size="30" name="chat-o" color="#07c160" />
                        </div>
                    </DemoBlock>
                    <DemoBlock title="图标大小">
                        <div className="mul-icons">
                            <Icon size="40" name="chat-o" />
                        </div>
                        <div className="mul-icons">
                            <Icon size="3rem" name="chat-o" />
                        </div>
                    </DemoBlock>
                </Tabs>
            );
        }

        return Data[activeTab].map((name: string) => (
            <CopyToClipboard
                key={name}
                text={`<Icon name="${name}" />`}
                onCopy={(text: string): void => {
                    // Todo miss success info
                    // eslint-disable-next-line no-alert
                    alert(`copy ${name} success !!`);
                }}
            >
                <div className="icons">
                    <Icon size="32" name={name} />
                    <span className="icon-name">{name}</span>
                </div>
            </CopyToClipboard>
        ));
    };

    return (
        <Tabs className="demo-icon">
            <TabTitles>
                {Object.keys(Data).map((title) => (
                    <div
                        key={title}
                        className="tab-title"
                        onClick={(): void => {
                            setTab(title);
                        }}
                    >
                        {disPlayName[title]}
                    </div>
                ))}
            </TabTitles>
            <TabBody>{renderTabBody()}</TabBody>
        </Tabs>
    );
}

const Tabs = styled(DemoSection)`
    width: 100%;
    .mul-icons {
        width: 25%;
        display: inline-block;
        text-align: center;
        padding: ${$padding_sm} 0 ${$padding_sm} 0;
    }
`;

const TabTitles = styled.div`
    display: flex;
    justify-content: space-around;
    background: #fff;
    .tab-title {
        color: ${$gray7};
        font-size: ${$font_size_md};
        padding: ${$padding_sm};
        cursor: pointer;
        &:active {
            color: ${$black};
            font-weight: ${$font_weight_bold};
        }
    }
`;
const TabBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1.25rem;
    background: ${$white};
    border-radius: ${$border_radius_lg};
    .icons {
        width: 25%;
        text-align: center;
        display: flex;
        flex-direction: column;
        padding: ${$padding_sm};
        .mul-icon {
            margin-bottom: ${$padding_sm};
        }
        .icon-name {
            font-size: ${$font_size_xs};
        }
    }
`;
