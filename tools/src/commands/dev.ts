import { setNodeEnv } from './node';
import { compileSite } from '../compiler/compileSite';

async function dev() {
    setNodeEnv('development');
    await compileSite();
}
dev();
