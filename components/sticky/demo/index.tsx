import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Sticky from '..';
import Button from '../../button';
import Box from '../../box';
import { $padding_md } from '../../style/var';

export default function StickyDemo(): React.ReactNode {
    const container = React.useRef(null);

    return (
        <View className="demo-sticky">
            <DemoBlock title="基础用法">
                <Sticky>
                    <Button type="primary" className="xs">
                        基础用法
                    </Button>
                </Sticky>
            </DemoBlock>
            <DemoBlock title="吸顶距离">
                <Sticky offsetTop={50}>
                    <Button type="info" className="sm">
                        吸顶距离
                    </Button>
                </Sticky>
            </DemoBlock>
            <DemoBlock title="指定容器">
                <div ref={container}>
                    <Box height="150px" bg="#fff">
                        <Sticky container={container}>
                            <Button type="warning" className="lg">
                                指定容器
                            </Button>
                        </Sticky>
                    </Box>
                </div>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-sticky {
        height: 200vh;

        .mul-button {
            margin-left: ${$padding_md};
        }

        .xs {
            margin-left: 15px;
        }

        .sm {
            margin-left: 115px;
        }

        .lg {
            margin-left: 215px;
        }
    }
`;
