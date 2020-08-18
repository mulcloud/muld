import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Field from '..';

export default function FormatValue() {
    function formatter(value: string) {
        return value.replace(/\d/g, '');
    }

    return (
        <DemoBlock title="格式化输入内容">
            <Field value="" label="文本" formatter={formatter} placeholder="在输入时执行格式化" />
            <Field
                value="123abc"
                label="文本"
                formatter={formatter}
                formatTrigger="onBlur"
                placeholder="在失焦时执行格式化"
            />
        </DemoBlock>
    );
}
