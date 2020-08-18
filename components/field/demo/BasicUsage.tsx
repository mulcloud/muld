import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Field from '..';

export default function BasicUsage() {
    return (
        <DemoBlock title="基础用法">
            <Field value="" label="文本" placeholder="请输入文本" />
        </DemoBlock>
    );
}
