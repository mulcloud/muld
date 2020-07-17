import * as React from 'react';
import styled from 'styled-components';
import config from '../../../muld.config';
import { scrollToAnchor } from './utils';
import { Doc } from './layout';

import Button from '../../../components/button';
import Row from '../../../components/row';
import Col from '../../../components/col';
import Loading from '../../../components/loading';

const Panel = styled.div`
    .mul-loading {
        font-size: 20px !important;
    }
`;

export function App() {
    React.useEffect(() => {
        if (window.location.hash) {
            // scrollToAnchor(window.location.hash);
        }
    }, []);
    const [locale, setLocale] = React.useState(localStorage.getItem('MULD_LANGUAGE') || 'zh-CN');

    const path = window.location.pathname.replace(/\/index(\.html)?/, '/');
    const simulator = `${path}mobile.html${window.location.hash}`;
    return (
        <div className="app">
            <Doc lang={locale} config={config} simulator={simulator}>
                <div>
                    hello <div className="mul-hairline--top"></div>
                    <div>
                        <Row gutter="20">
                            <Col span="8">1</Col>
                            <Col span="8">2</Col>
                            <Col span="8">3</Col>
                        </Row>
                    </div>
                    <Panel>
                        <Loading color="#1989fa">Hello loading...</Loading>
                        <Loading type="spinner" />
                    </Panel>
                    <div>
                        <Button type="default">默认按钮</Button>
                        <Button type="primary">主要按钮</Button>
                        <Button type="info">信息按钮</Button>
                        <Button type="warning">警告按钮</Button>
                        <Button type="danger">危险按钮</Button>
                        <Button plain hairline type="primary">
                            细边框按钮
                        </Button>
                    </div>
                </div>
            </Doc>
        </div>
    );
}
