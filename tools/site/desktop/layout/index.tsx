import * as React from 'react';
import Header from './Header';
import Nav from './Nav';
import Container from './Container';
import Content from './Content';

export function Doc(props: any) {
    const { config, lang, simulator } = props;
    return (
        <div className="mul-doc">
            <Header lang={lang} config={config.site} />
            <Nav lang={lang} config={config.site} />
            <Container hasSimulator={!!simulator}>
                <Content>{props.children}</Content>
            </Container>
        </div>
    );
}
