import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Field from '..';
import Button from '../../button';

export default function InsertButton() {
    return (
        <DemoBlock title="插入按钮">
            <Field
                value=""
                center
                label="短信验证码"
                clearable
                placeholder="请输入短信验证码"
                button={
                    <Button size="small" type="primary">
                        发送验证码
                    </Button>
                }
            />
        </DemoBlock>
    );
}
