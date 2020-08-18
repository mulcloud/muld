import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Field from '..';

export default function ShowWordLimit() {
    return (
        <DemoBlock title="显示字数统计">
            <Field
                value=""
                label="留言"
                type="textarea"
                rows="2"
                maxLength="50"
                showWordLimit
                autoSize
                placeholder="请输入留言"
            />
        </DemoBlock>
    );
}
