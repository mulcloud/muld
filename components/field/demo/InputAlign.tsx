import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Field from '..';

export default function InputAlign() {
    return (
        <DemoBlock title="输入框内容对齐">
            <Field value="" label="文本" inputAlign="right" placeholder="输入框内容右对齐" />
        </DemoBlock>
    );
}
