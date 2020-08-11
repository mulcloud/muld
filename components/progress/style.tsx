import styled from 'styled-components';
import { $progress } from '../style/var';

export const View = styled.div`
    &.mul-progress {
        position: relative;
        height: ${$progress.height};
        background: ${$progress.background_color};
        border-radius: ${$progress.height};

        .mul-progress__portion {
            position: absolute;
            left: 0;
            height: 100%;
            background: ${$progress.color};
            border-radius: inherit;
        }

        .mul-progress__pivot {
            position: absolute;
            top: 50%;
            box-sizing: border-box;
            min-width: 3.6em;
            padding: ${$progress.pivot_padding};
            color: ${$progress.pivot_text_color};
            font-size: ${$progress.pivot_font_size};
            line-height: ${$progress.pivot_line_height};
            text-align: center;
            word-break: keep-all;
            background-color: ${$progress.pivot_background_color};
            border-radius: 1em;
            transform: translate(0, -50%);
        }
    }
`;
