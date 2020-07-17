export function isAndroid(): boolean {
    /* istanbul ignore next */
    return /android/.test(navigator.userAgent.toLowerCase());
}

export function isIOS(): boolean {
    /* istanbul ignore next */
    return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
