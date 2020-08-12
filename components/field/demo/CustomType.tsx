import * as React from 'react';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import Field from '..';

export default function CustomType() {
    return (
        <DemoBlock title="自定义类型">
            <Field value="" label="文本" placeholder="请输入文本" />
            <Field value="" type="tel" label="手机号" placeholder="请输入手机号" />
            <Field value="" type="digit" label="整数" placeholder="请输入整数" />
            <Field value="" type="number" label="数字" placeholder="请输入数字（支持小数）" />
            <Field value="" type="password" label="密码" placeholder="请输入密码" />
        </DemoBlock>
    );
}
