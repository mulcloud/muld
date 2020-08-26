import { isDef } from '..';
import { isNumeric } from '../validate/number';

export function addUnit(value?: string | number): string | undefined {
    if (!isDef(value)) {
        return undefined;
    }

    const newValue = String(value);
    return isNumeric(newValue) ? `${parseInt(newValue, 10) / 16}rem` : newValue;
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

function convertRemToPx(value: string): number {
    const newValue = value.replace(/rem/g, '');
    return +newValue * getRootFontSize();
}

function convertVwToPx(value: string): number {
    const newValue = value.replace(/vw/g, '');
    return (+newValue * window.innerWidth) / 100;
}

function convertPxToRem(value: string): number {
    const newValue = value.replace(/px/g, '');
    return +newValue / getRootFontSize();
}

function convertVwToRem(value: string): number {
    const newValue = value.replace(/vw/g, '');
    return (+newValue * window.innerWidth) / 100 / getRootFontSize();
}

export function unitToPx(value: string | number): number {
    if (typeof value === 'number') {
        return value;
    }

    if (value.indexOf('rem') !== -1) {
        return convertRemToPx(value);
    }

    if (value.indexOf('vw') !== -1) {
        return convertVwToPx(value);
    }

    return parseFloat(value);
}

export function unitToRem(value: string | number): number {
    if (typeof value === 'number') {
        return value;
    }

    if (value.indexOf('px') !== -1) {
        return convertPxToRem(value);
    }

    if (value.indexOf('vw') !== -1) {
        return convertVwToRem(value);
    }

    return parseFloat(value);
}
