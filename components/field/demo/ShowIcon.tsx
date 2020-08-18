import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Field from '..';

export default function ShowIcon() {
    return (
        <DemoBlock title="显示图标">
            <Field
                value=""
                label="文本"
                leftIcon="smile-o"
                rightIcon="warning-o"
                placeholder="显示图标"
            />
            <Field
                value="123"
                label="文本"
                leftIcon="music-o"
                clearable
                placeholder="显示清除图标"
            />
            <Field
                value="123"
                label="文本"
                leftIcon="music-o"
                clearable
                clearTrigger="always"
                placeholder="总是显示清除图标"
            />
        </DemoBlock>
    );
}
