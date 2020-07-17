import { isDef, isObject } from '.';

type RecordObject = Record<string, any>;
const { hasOwnProperty } = Object.prototype;

function assignKey(to: RecordObject, from: RecordObject, key: string): void {
    const val = from[key];
    if (!isDef(val)) {
        return;
    }

    if (!hasOwnProperty.call(to, key) || !isObject(val)) {
        to[key] = val;
    } else {
        to[key] = deepAssign(Object(to[key]), from[key]);
    }
}

export function deepAssign(to: RecordObject, from: RecordObject): RecordObject {
    Object.keys(from).forEach((key) => {
        assignKey(to, from, key);
    });

    return to;
}
