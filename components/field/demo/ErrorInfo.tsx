import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Field from '..';

export default function ErrorInfo() {
    return (
        <DemoBlock title="错误提示">
            <Field value="" error required label="用户名" placeholder="请输入用户名" />
            <Field
                value="123"
                required
                label="手机号"
                placeholder="请输入手机号"
                errorMessage="手机号格式错误"
            />
            <Field
                value=""
                required
                label="邮箱"
                errorMessage="邮箱格式错误"
                errorMessageAlign="right"
                placeholder="错误提示文案对齐方式-右对齐"
            />
        </DemoBlock>
    );
}
