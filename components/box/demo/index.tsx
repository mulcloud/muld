import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Box from '..';
import { $white } from '../../style/var';

export default function BoxDemo(): React.ReactNode {
    return (
        <View className="demo-box">
            <DemoBlock title="基础用法">
                <Box
                    p="1.25rem"
                    fontSize="1rem"
                    width="12.5rem"
                    height="6.25rem"
                    color="#fff"
                    bg="#66a8ef"
                >
                    Box
                </Box>
            </DemoBlock>
            <DemoBlock title="使用 mul-bg、mul-text">
                <Box
                    p="1.25rem"
                    ml="0.625rem"
                    fontSize="1rem"
                    width="12.5rem"
                    height="6.25rem"
                    className="mul-bg--primary mul-text--white"
                >
                    Box
                </Box>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-box {
        padding: 1.25rem;
        background-color: ${$white};
    }
`;
