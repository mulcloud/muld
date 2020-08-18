import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Form from '..';
import Field from '../../field';
import Button from '../../button';

export default function BasicUsage() {
    function onSubmit(values: any) {
        console.log('submit', values);
    }

    function onFailed(errorInfo: any) {
        console.log('failed', errorInfo);
    }

    return (
        <DemoBlock title="基础用法">
            <Form validateFirst onSubmit={onSubmit} onFailed={onFailed}>
                <Field
                    value=""
                    label="用户名"
                    name="username"
                    placeholder="用户名"
                    rules={[{ required: true, message: '请填写用户名' }]}
                />
                <Field
                    value=""
                    label="密码"
                    type="password"
                    name="password"
                    placeholder="密码"
                    rules={[{ required: true, message: '请填写密码' }]}
                />
                <div style={{ margin: '16px 16px 0' }}>
                    <Button round block type="info" nativeType="submit">
                        提交
                    </Button>
                </div>
            </Form>
        </DemoBlock>
    );
}
