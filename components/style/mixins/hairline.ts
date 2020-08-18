import { $border_color } from '../var';

export function hairline(color = $border_color): string {
    return `
        position: absolute;
        box-sizing: border-box;
        content: ' ';
        pointer-events: none;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        border: 0 solid ${color};
        transform: scale(0.5);
    `;
}

export function hairlineTop(
    color = $border_color,
    left: string | number = 0,
    right: string | number = 0,
): string {
    return `
        position: absolute;
        box-sizing: border-box;
        content: ' ';
        pointer-events: none;
        top: 0;
        right: ${right};
        left: ${left};
        border-top: 1px solid ${color};
        transform: scaleY(0.5);
    `;
}

export function hairlineBottom(
    color = $border_color,
    left: string | number = 0,
    right: string | number = 0,
): string {
    return `
        position: absolute;
        box-sizing: border-box;
        content: ' ';
        pointer-events: none;
        right: ${right};
        bottom: 0;
        left: ${left};
        border-bottom: 1px solid ${color};
        transform: scaleY(0.5);
    `;
}
