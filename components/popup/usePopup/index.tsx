import { useState } from 'react';
import { on, off, preventDefault } from '../../utils/dom/event';
import { getScroller } from '../../utils/dom/scroll';
import { context } from './context';

const MIN_DISTANCE: number = 10;

export type lockType = 'add' | 'remove';

export function getDirection(x: number, y: number) {
    if (x > y && x > MIN_DISTANCE) {
        return 'horizontal';
    }
    if (y > x && y > MIN_DISTANCE) {
        return 'vertical';
    }
    return '';
}

export function useTouch(lockScroll: boolean, type: lockType) {
    const [direction, setDirection] = useState('');
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [deltaX, setDeltaX] = useState(0);
    const [deltaY, setDeltaY] = useState(0);

    const touchStart = function (event: any) {
        setStartX(event.touches[0].clientX);
        setStartY(event.touches[0].clientY);
    };

    const touchMove = function (event: any) {
        const touch = event.touches[0];
        setDeltaX(touch.clientX - startX);
        setDeltaY(touch.clientY - startY);
        setDirection(direction || getDirection(Math.abs(deltaX), Math.abs(deltaY)));
        const directionFlag = deltaY > 0 ? '10' : '01';
        const el = getScroller(event.target) as HTMLElement;
        const { scrollHeight, offsetHeight, scrollTop } = el;
        let status = '11';
        if (scrollTop === 0) {
            status = offsetHeight >= scrollHeight ? '00' : '01';
        } else if (scrollTop + offsetHeight >= scrollHeight) {
            status = '10';
        }
        if (
            status !== '11' &&
            direction === 'vertical' &&
            !(parseInt(status, 2) & parseInt(directionFlag, 2))
        ) {
            preventDefault(event, true);
        }
    };
    if (lockScroll) {
        if (type === 'add') {
            on(document, 'touchstart', touchStart);
            on(document, 'touchmove', touchMove);
            if (!context.lockCount) {
                document.body.classList.add('mul-overflow-hidden');
            }
            context.lockCount++;
        } else {
            off(document, 'touchstart', touchStart);
            off(document, 'touchmove', touchMove);
            context.lockCount--;
            if (!context.lockCount) {
                document.body.classList.add('mul-overflow-hidden');
            }
        }
    }
}
