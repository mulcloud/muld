import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import BasicUsage from './BasicUsage';
import CustomType from './CustomType';
import Disabled from './Disabled';
import ShowIcon from './ShowIcon';
import ErrorInfo from './ErrorInfo';
import InsertButton from './InsertButton';
import FormatValue from './FormatValue';
import Autosize from './Autosize';
import ShowWordLimit from './ShowWordLimit';
import InputAlign from './InputAlign';
import RoundInput from './RoundInput';
import { $padding_sm, $padding_md } from '../../style/var';

export default function FieldDemo(): React.ReactNode {
    return (
        <View className="demo-field">
            <BasicUsage />
            <CustomType />
            <Disabled />
            <ShowIcon />
            <ErrorInfo />
            <InsertButton />
            <FormatValue />
            <Autosize />
            <ShowWordLimit />
            <InputAlign />
            <RoundInput />
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-field {
        padding-bottom: ${$padding_md};

        .mul-doc-demo-block__title {
            padding-left: ${$padding_md};
        }
        .mul-doc-demo-block__card {
            margin: 0;
        }
        .demo-button-row {
            margin-bottom: ${$padding_sm};
        }
    }
`;
