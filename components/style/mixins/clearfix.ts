import { Styles } from './types';

/**
 * @example
 * // styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 */

export function clearfix(parent = '&'): Styles {
    const pseudoSelector = `${parent}::after`;
    return {
        [pseudoSelector]: {
            clear: 'both',
            content: '""',
            display: 'table',
        },
    };
}
