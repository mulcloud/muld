import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Form from '..';
import Field from '../../field';
import Button from '../../button';
import Stepper from '../../stepper';

export default function FieldType() {
    function onSubmit(values: any) {
        console.log('submit', values);
    }

    function onFailed(errorInfo: any) {
        console.log('failed', errorInfo);
    }

    return (
        <DemoBlock title="表单项类型">
            <Form validateFirst onSubmit={onSubmit} onFailed={onFailed}>
                <Field label="步进器" name="stepper">
                    <Stepper value="" />
                </Field>
                <div style={{ margin: '16px 16px 0' }}>
                    <Button round block type="info" nativeType="submit">
                        提交
                    </Button>
                </div>
            </Form>
        </DemoBlock>
    );
}
