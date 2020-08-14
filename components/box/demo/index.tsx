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
                    p="20px"
                    fontSize="16px"
                    width="200px"
                    height="100px"
                    color="#fff"
                    bg="#66a8ef"
                >
                    Box
                </Box>
            </DemoBlock>
            <DemoBlock title="使用 mul-bg、mul-text">
                <Box
                    p="20px"
                    ml="10px"
                    fontSize="16px"
                    width="200px"
                    height="100px"
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
        padding: 20px;
        background-color: ${$white};
    }
`;
