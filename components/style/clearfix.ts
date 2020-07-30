import { createGlobalStyle, css } from 'styled-components';
import { clearfix as _clearfix } from './mixins/clearfix';

export const clearfix = css`
    .mul-clearfix {
        ${_clearfix()}
    }
`;

export const Clearfix = createGlobalStyle`${clearfix}`;
