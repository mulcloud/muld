import { Styles } from './types';

/**
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis()
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis(2)}
 * `
 */

export function ellipsis(lines?: number | string): Styles {
    if (!lines) {
        return {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        };
    }
    return {
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '-webkit-line-clamp': `${lines}`,
        /* autoprefixer: ignore next */
        '-webkit-box-orient': 'vertical',
    };
}
