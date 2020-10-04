import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import ValidateRules from './ValidateRules';
import BasicUsage from './BasicUsage';
import FieldType from './FieldType';

export default function FormDemo(): React.ReactNode {
    return (
        <View className="demo-form">
            <BasicUsage />
            <ValidateRules />
            <FieldType />
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-form {
        .mul-doc-demo-block__card {
            margin: 0;
        }
    }
`;
