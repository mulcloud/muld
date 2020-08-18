import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Field from '..';

export default function Autosize() {
    return (
        <DemoBlock title="高度自适应">
            <Field
                value=""
                autoSize
                rows="1"
                label="留言"
                type="textarea"
                placeholder="请输入留言"
            />
        </DemoBlock>
    );
}
