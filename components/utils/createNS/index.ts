import { createI18N, Translate } from './i18n';
import { createBEM, BEM } from './bem';

export function createNS(name: string): [BEM, Translate] {
    // eslint-disable-next-line no-param-reassign
    name = `mul-${name}`;
    return [createBEM(name), createI18N(name)];
}
