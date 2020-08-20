import { useState } from 'react';

const MIN_DISTANCE = 10;
const MIN_SWIPE_DISTANCE = 50;

function getDirection(x: number, y: number): string {
    if (x > y && x > MIN_DISTANCE) {
        return 'horizontal';
    }

    if (y > x && y > MIN_DISTANCE) {
        return 'vertical';
    }

    return '';
}

export default function useTouch(
    currentIndex: number,
    count: number,
    onChange: (index: number) => void,
): Record<string, any> {
    const [startX, setStartX] = useState<number>(0);
    const [startY, setStartY] = useState<number>(0);
    const [deltaX, setDeltaX] = useState<number>(0);
    const [deltaY, setDeltaY] = useState<number>(0);
    const [offsetX, setOffsetX] = useState<number>(0);
    const [offsetY, setOffsetY] = useState<number>(0);
    const [direction, setDirection] = useState<string>('');
    const resetTouchStatus = (): void => {
        setDirection('');
        setDeltaX(0);
        setDeltaY(0);
        setOffsetX(0);
        setOffsetY(0);
    };

    const touchStart = (event: any): void => {
        resetTouchStatus();
        setStartX(event.touches[0].clientX);
        setStartY(event.touches[0].clientY);
    };

    const touchMove = (event: any): void => {
        const touch = event.touches[0];
        setDeltaX(touch.clientX - startX);
        setDeltaY(touch.clientY - startY);
        setOffsetX(Math.abs(deltaX));
        setOffsetY(Math.abs(deltaY));
        setDirection(direction || getDirection(offsetX, offsetY));
    };

    const touchEnd = (): void => {
        if (direction === 'horizontal' && offsetX >= MIN_SWIPE_DISTANCE) {
            if (deltaX > 0 && currentIndex !== 0) {
                onChange(currentIndex - 1);
            } else if (deltaX < 0 && currentIndex !== count - 1) {
                onChange(currentIndex + 1);
            }
        }
    };

    return {
        startX,
        startY,
        deltaX,
        deltaY,
        offsetX,
        offsetY,
        direction,
        touchStart,
        touchMove,
        touchEnd,
    };
}
