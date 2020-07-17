import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { GlobalStyle } from '../../../components';

render(
    <React.Fragment>
        <GlobalStyle />
        <App />
    </React.Fragment>,
    document.getElementById('app'),
);
