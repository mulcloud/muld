import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Field from '..';

export default function RoundInput() {
    return (
        <DemoBlock title="圆角输入">
            <Field value="" round placeholder="请输入文本" />
        </DemoBlock>
    );
}
