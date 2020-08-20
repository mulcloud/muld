/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { isNaN } from '../utils/validate/number';

export function times(n: number, iteratee: (index: number) => string): string[] {
    let index = -1;
    const result = Array(n);

    while (++index < n) {
        result[index] = iteratee(index);
    }

    return result;
}

export function getTrueValue(value: string | undefined): number {
    if (!value) {
        return 0;
    }

    let newValue: string = '';

    while (isNaN(Number(value))) {
        if (value.length > 1) {
            newValue = value.slice(1);
        } else {
            return 0;
        }
    }

    return parseInt(newValue, 10) || parseInt(value, 10);
}

export function getMonthEndDay(year: number, month: number): number {
    return 32 - new Date(year, month - 1, 32).getDate();
}
