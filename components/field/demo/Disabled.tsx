import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Field from '..';

export default function Disabled() {
    return (
        <DemoBlock title="禁用输入框">
            <Field value="输入框只读" label="文本" readOnly />
            <Field value="输入框已禁用" label="文本" disabled />
        </DemoBlock>
    );
}
