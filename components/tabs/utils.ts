/* eslint-disable no-param-reassign */
import { raf, cancelRaf } from '../utils/dom/raf';
import { getScrollTop, setScrollTop } from '../utils/dom/scroll';

let scrollLeftRafId: number;

export function scrollLeftTo(scroller: HTMLElement, to: number, duration: number): void {
    cancelRaf(scrollLeftRafId);

    let count = 0;
    const from = scroller.scrollLeft;
    const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);

    function animate(): void {
        scroller.scrollLeft += (to - from) / frames;

        if (++count < frames) {
            scrollLeftRafId = raf(animate);
        }
    }

    animate();
}

export function scrollTopTo(
    scroller: HTMLElement,
    to: number,
    duration: number,
    callback: () => void,
): void {
    let current = getScrollTop(scroller);

    const isDown = current < to;
    const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);
    const step = (to - current) / frames;

    function animate(): void {
        current += step;

        if ((isDown && current > to) || (!isDown && current < to)) {
            current = to;
        }

        setScrollTop(scroller, current);

        if ((isDown && current < to) || (!isDown && current > to)) {
            raf(animate);
        } else if (callback) {
            raf(callback as FrameRequestCallback);
        }
    }

    animate();
}
