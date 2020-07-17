/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { GlobalStyle } from '../../../components';
import { Base as BaseStyle } from '../common/style/base';

// import '../common/style/base';
// import '../common/style/highlight';

render(
    <React.Fragment>
        <GlobalStyle />
        <BaseStyle />
        <App />
    </React.Fragment>,
    document.getElementById('app'),
);
