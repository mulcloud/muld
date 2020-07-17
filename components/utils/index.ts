export * from './createNS';
export * from './format';
export * from './validate';
export * from './withDefaultProps';

export function isDef(val: any): boolean {
    return val !== undefined && val !== null;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(val: unknown): val is Function {
    return typeof val === 'function';
}

export function isObject(val: any): val is Record<any, any> {
    return val !== null && typeof val === 'object';
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

export function getValue(object: any, path: string): any {
    const keys = path.split('.');
    let result = object;

    keys.forEach((key) => {
        result = isDef(result[key]) ? result[key] : '';
    });

    return result;
}

export function get(object: any, path: string): any {
    const keys = path.split('.');
    let result = object;

    keys.forEach((key) => {
        result = isDef(result[key]) ? result[key] : '';
    });

    return result;
}
