import { get } from 'lodash';
import { join } from 'path';
import {
    pascalize,
    getComponents,
    smartOutputFile,
    normalizePath,
    getPackageJson,
    getMuldConfig,
} from './utils';
import { SRC_DIR } from '../config/constant';

type Options = {
    outputPath: string;
    pathResolver?: Function;
};

function genImports(components: string[], options: Options): string {
    return components
        .map((name) => {
            let path = join(SRC_DIR, name);
            if (options.pathResolver) {
                path = options.pathResolver(path);
            }

            return `import ${pascalize(name)} from '${normalizePath(path)}';`;
        })
        .join('\n');
}

function genExports(names: string[]): string {
    return names.map((name) => `${name}`).join(',\n  ');
}

export function genPackageEntry(options: Options) {
    const names = getComponents();
    const version = process.env.PACKAGE_VERSION || getPackageJson().version;

    const components = names.map(pascalize);
    const content = `${genImports(names, options)}

const version = '${version}';

export {
  install,
  version,
  ${genExports(components)}
};

export default {
  version
};
`;

    smartOutputFile(options.outputPath, content);
}
