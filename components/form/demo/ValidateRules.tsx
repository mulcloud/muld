import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Form from '..';
import Field from '../../field';
import Button from '../../button';

export default function ValidateRules() {
    function onSubmit(values: any) {
        console.log('submit', values);
    }

    function onFailed(errorInfo: any) {
        console.log('failed', errorInfo);
    }
    function validator(val: string) {
        return /1\d{10}/.test(val);
    }

    function asyncValidator(val: string) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(val === '1234');
            }, 1000);
        });
    }
    return (
        <DemoBlock title="校验规则">
            <Form validateFirst onSubmit={onSubmit} onFailed={onFailed}>
                <Field
                    value=""
                    label="文本"
                    name="pattern"
                    placeholder="正则校验"
                    rules={[{ pattern: /\d{6}/, message: '请输入正确内容' }]}
                />
                <Field
                    value=""
                    label="文本"
                    name="validator"
                    placeholder="函数校验"
                    rules={[{ validator, message: '请输入正确内容' }]}
                />
                <Field
                    value=""
                    label="文本"
                    name="asyncValidator"
                    placeholder="异步函数校验"
                    rules={[{ validator: asyncValidator, message: '请输入正确内容' }]}
                />
                <div style={{ margin: '1rem 1rem 0' }}>
                    <Button round block type="info" nativeType="submit">
                        提交
                    </Button>
                </div>
            </Form>
        </DemoBlock>
    );
}
