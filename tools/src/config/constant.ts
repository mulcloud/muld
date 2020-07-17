/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { join, dirname } from 'path';

// Colors
export const GREEN = '#07c160';

// Root paths
export const CWD = process.cwd();
// export const ROOT = dirname(CWD);
export const ROOT = CWD;
export const ES_DIR = join(ROOT, 'es');
export const LIB_DIR = join(ROOT, 'lib');
export const DOCS_DIR = join(ROOT, 'docs');
export const SRC_DIR = join(ROOT, 'components');
export const MULD_CONFIG_FILE = join(ROOT, 'muld.config.js');
export const PACKAGE_JSON_FILE = join(ROOT, 'package.json');
export const CACHE_DIR = join(ROOT, 'node_modules/.cache');
export const SCRIPT_EXTS = ['.js', '.jsx', '.vue', '.ts', '.tsx'];
// Relative paths
export const DIST_DIR = join(__dirname, '../../dist');
export const CONFIG_DIR = join(__dirname, '../config');

// Dist files
// export const MODILE_SHARED_FILE = join(DIST_DIR, 'mobile-shared.js');
// export const DESKTOP_SHARED_FILE = join(DIST_DIR, 'desktop-shared.js');

export const CONFIG_DIR_TEMP = join(__dirname, 'config');

export const MODILE_SHARED_FILE = join(CONFIG_DIR_TEMP, 'mobile-shared.js');
export const DESKTOP_SHARED_FILE = join(CONFIG_DIR_TEMP, 'desktop-shared.js');

export const PACKAGE_ENTRY_FILE = join(CONFIG_DIR_TEMP, 'package-entry.js');
