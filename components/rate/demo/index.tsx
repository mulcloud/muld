import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Rate from '..';
import { $padding_sm, $padding_md } from '../../style/var';

export default function ButtonDemo(): React.ReactNode {
    const [basic, setBasic] = React.useState(3);

    const [customIcon, setCustomIcon] = React.useState(3);

    const [customStyle, setCustomStyle] = React.useState(3);

    const [halfStar, setHalfStar] = React.useState(3.5);

    const [customCount, setCustomCount] = React.useState(3);

    return (
        <View className="demo-button">
            <DemoBlock title="basicUsage">
                <div className="demo-button-row">
                    <Rate value={basic} change={setBasic} />
                </div>
            </DemoBlock>
            <DemoBlock title="customIcon">
                <div className="demo-button-row">
                    <Rate value={customIcon} change={setCustomIcon} icon="like" voidIcon="like-o" />
                </div>
            </DemoBlock>
            <DemoBlock title="customStyle">
                <div className="demo-button-row">
                    <Rate
                        value={customStyle}
                        change={setCustomStyle}
                        color="#ffd21e"
                        voidColor="#eee"
                        voidIcon="star"
                    />
                </div>
            </DemoBlock>
            <DemoBlock title="halfStar">
                <div className="demo-button-row">
                    <Rate value={halfStar} change={setHalfStar} allowHalf={true} />
                </div>
            </DemoBlock>
            <DemoBlock title="customCount">
                <div className="demo-button-row">
                    <Rate value={customCount} change={setCustomCount} count={6} />
                </div>
            </DemoBlock>
            <DemoBlock title="disabled">
                <div className="demo-button-row">
                    <Rate value={3} disabled={true} />
                </div>
            </DemoBlock>
            <DemoBlock title="readonly">
                <div className="demo-button-row">
                    <Rate value={3} readonly={true} />
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
