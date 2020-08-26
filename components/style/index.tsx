import * as React from 'react';
import adapt from './adapt';
import { Animation } from './animation';
import { Clearfix } from './clearfix';
import { Ellipsis } from './ellipsis';
import { Hairline } from './hairline';
import { Normalize } from './normalize';
import { Reset } from './reset';
import { Grid } from './grid';
import { Icons } from './icons';
import { Color } from './color';

export default function GlobalStyle(): React.ReactElement {
    adapt();

    return (
        <>
            <Reset />
            <Normalize />
            <Animation />
            <Hairline />
            <Ellipsis />
            <Clearfix />
            <Grid />
            <Icons />
            <Color />
        </>
    );
}
