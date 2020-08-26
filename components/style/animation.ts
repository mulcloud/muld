import { createGlobalStyle } from 'styled-components';
import {
    $animation_duration_base,
    $animation_timing_function_enter,
    $animation_timing_function_leave,
} from './var';

export const animation = `
    @keyframes mul-slide-up-enter {
        from {
            transform: translate3d(0, 100%, 0);
        }
    }

    @keyframes mul-slide-up-leave {
        to {
            transform: translate3d(0, 100%, 0);
        }
    }

    @keyframes mul-slide-down-enter {
        from {
            transform: translate3d(0, -100%, 0);
        }
    }

    @keyframes mul-slide-down-leave {
        to {
            transform: translate3d(0, -100%, 0);
        }
    }

    @keyframes mul-slide-left-enter {
        from {
            transform: translate3d(-100%, 0, 0);
        }
    }

    @keyframes mul-slide-left-leave {
        to {
            transform: translate3d(-100%, 0, 0);
        }
    }

    @keyframes mul-slide-right-enter {
        from {
            transform: translate3d(100%, 0, 0);
        }
    }

    @keyframes mul-slide-right-leave {
        to {
            transform: translate3d(100%, 0, 0);
        }
    }

    @keyframes mul-fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes mul-fade-out {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    @keyframes mul-rotate {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

    @keyframes mul-skeleton-blink {
        50% {
          opacity: 0.6;
        }
    }

    .mul-fade-enter-active {
        animation: ${$animation_duration_base} mul-fade-in both ${$animation_timing_function_enter};
    }
    .mul-fade-leave-active {
        animation: ${$animation_duration_base} mul-fade-out both ${$animation_timing_function_leave};
    }

    .mul-slide-up-enter-active {
        animation: mul-slide-up-enter ${$animation_duration_base} both
            ${$animation_timing_function_enter};
    }

    .mul-slide-up-leave-active {
        animation: mul-slide-up-leave ${$animation_duration_base} both
            ${$animation_timing_function_leave};
    }

    .mul-slide-down-enter-active {
        animation: mul-slide-down-enter ${$animation_duration_base} both
            ${$animation_timing_function_enter};
    }

    .mul-slide-down-leave-active {
        animation: mul-slide-down-leave ${$animation_duration_base} both
            ${$animation_timing_function_leave};
    }

    .mul-slide-left-enter-active {
        animation: mul-slide-left-enter ${$animation_duration_base} both
            ${$animation_timing_function_enter};
    }

    .mul-slide-left-leave-active {
        animation: mul-slide-left-leave ${$animation_duration_base} both
            ${$animation_timing_function_leave};
    }
    .mul-slide-right-enter-active {
        animation: mul-slide-right-enter ${$animation_duration_base} both
            ${$animation_timing_function_enter};
    }

    .mul-slide-right-leave-active {
        animation: mul-slide-right-leave ${$animation_duration_base} both
            ${$animation_timing_function_leave};
    }
`;

export const Animation = createGlobalStyle`${animation}`;
