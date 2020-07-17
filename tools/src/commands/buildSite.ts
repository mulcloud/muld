import { setNodeEnv } from './node';
import { compileSite } from '../compiler/compileSite';

async function buildSite() {
    setNodeEnv('production');
    await compileSite(true);
}

buildSite();
