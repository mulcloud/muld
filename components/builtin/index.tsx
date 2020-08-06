import * as React from 'react';
import { Animation } from '../style/animation';
import { Clearfix } from '../style/clearfix';
import { Ellipsis } from '../style/ellipsis';
import { Hairline } from '../style/hairline';
import { Normalize } from '../style/normalize';
import { Reset } from '../style/reset';
import { Grid } from '../style/grid';
import { Icons } from '../style/icons';

export default function GlobalStyle() {
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
        </>
    );
}
