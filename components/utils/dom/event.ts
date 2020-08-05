export function stopPropagation(event: Event) {
    event.stopPropagation();
}

export function preventDefault(event: Event, isStopPropagation?: boolean) {
    /* istanbul ignore else */
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault();
    }

    if (isStopPropagation) {
        stopPropagation(event);
    }
}
