import { isDef } from '..';
import { isNumeric } from '../validate/number';

export function addUnit(value?: string | number): string | undefined {
    if (!isDef(value)) {
        return undefined;
    }

    const newValue = String(value);
    return isNumeric(newValue) ? `${newValue}px` : newValue;
}

// cache
let rootFontSize: number;

function getRootFontSize(): number {
    if (!rootFontSize) {
        const doc = document.documentElement;
        const fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;

        rootFontSize = parseFloat(fontSize);
    }

    return rootFontSize;
}

function convertRem(value: string): number {
    const newValue = value.replace(/rem/g, '');
    return +newValue * getRootFontSize();
}

function convertVw(value: string): number {
    const newValue = value.replace(/vw/g, '');
    return (+newValue * window.innerWidth) / 100;
}

export function unitToPx(value: string | number): number {
    if (typeof value === 'number') {
        return value;
    }

    if (value.indexOf('rem') !== -1) {
        return convertRem(value);
    }

    if (value.indexOf('vw') !== -1) {
        return convertVw(value);
    }

    return parseFloat(value);
}
