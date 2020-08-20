import { padZero } from '../utils/format/string';

export interface TimeData {
    [key: string]: number;
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export function parseTimeData(time: number): TimeData {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);
    const milliseconds = Math.floor(time % SECOND);

    return {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
}

export function parseFormat(format: string, timeData: TimeData): string {
    const { days } = timeData;
    let { hours, minutes, seconds, milliseconds } = timeData;

    let newFormat = format;

    if (newFormat.indexOf('DD') === -1) {
        hours += days * 24;
    } else {
        newFormat = format.replace('DD', padZero(days));
    }

    if (newFormat.indexOf('HH') === -1) {
        minutes += hours * 60;
    } else {
        newFormat = newFormat.replace('HH', padZero(hours));
    }

    if (newFormat.indexOf('mm') === -1) {
        seconds += minutes * 60;
    } else {
        newFormat = newFormat.replace('mm', padZero(minutes));
    }
    if (newFormat.indexOf('ss') === -1) {
        milliseconds += seconds * 1000;
    } else {
        newFormat = newFormat.replace('ss', padZero(seconds));
    }
    if (newFormat.indexOf('S') !== -1) {
        const ms = padZero(milliseconds, 3);

        if (newFormat.indexOf('SSS') !== -1) {
            newFormat = newFormat.replace('SSS', ms);
        } else if (newFormat.indexOf('SS') !== -1) {
            newFormat = newFormat.replace('SS', ms.slice(0, 2));
        } else {
            newFormat = newFormat.replace('S', ms.charAt(0));
        }
    }
    return newFormat;
}

export function isSameSecond(time1: number, time2: number): boolean {
    return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}
