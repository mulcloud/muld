import { createGlobalStyle } from 'styled-components';
import { clearfix as _clearfix } from './mixins/clearfix';

export const clearfix = `
    .mul-clearfix {
        ${_clearfix()}
    }
`;

export const Clearfix = createGlobalStyle`${clearfix}`;
