type props = Element | string | (() => Element) | undefined;

export function getElement(getContainer: props): any {
    if (typeof getContainer === 'string') {
        return document.querySelectorAll(getContainer)[0];
    }

    if (typeof getContainer === 'function') {
        return getContainer();
    }

    return document.body;
}
