import { EventHandler } from '../types';

export const supportsPassive = false;

export function on(target: EventTarget, event: string, handler: EventHandler, passive = false) {
    target.addEventListener(event, handler, supportsPassive ? { capture: false, passive } : false);
}

export function off(target: EventTarget, event: string, handler: EventHandler) {
    target.removeEventListener(event, handler);
}

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
