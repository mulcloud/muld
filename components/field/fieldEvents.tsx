import { FieldGetters } from './fieldGetters';
import { isDef, formatNumber } from '../utils';
import { resetScroll } from '../utils/dom/reset-scroll';

export class FieldEvents {
    private fieldGetters: FieldGetters;

    private isOnComposition = false;

    constructor(fieldGetters: FieldGetters) {
        this.fieldGetters = fieldGetters;
    }

    $emit(eventType: string, event: React.SyntheticEvent<Element>) {
        const triggerEvent = Reflect.get(this.fieldGetters.props, eventType);
        if (triggerEvent) {
            triggerEvent(event);
        }
    }

    updateValue = (value: any, trigger = 'onChange') => {
        value = isDef(value) ? String(value) : '';

        // native maxlength not work when type is number
        const maxlength = this.fieldGetters.maxLength;
        if (isDef(maxlength) && value.length > maxlength!) {
            value = value.slice(0, maxlength);
        }

        if (this.fieldGetters.type === 'number' || this.fieldGetters.type === 'digit') {
            const allowDot = this.fieldGetters.type === 'number';
            value = formatNumber(value, allowDot);
        }

        if (this.fieldGetters.formatter && trigger === this.fieldGetters.formatTrigger) {
            value = this.fieldGetters.formatter(value);
        }

        const input = this.fieldGetters.$refs;
        if (input && value !== input!.value) {
            input!.value = value;
        }

        if (value !== this.fieldGetters.value) {
            this.$emit('onChange', value);
        }

        this.fieldGetters.value = value;
    };

    validateWithTrigger = (eventType: string) => {
        this.fieldGetters.fieldRules.validateWithTrigger(eventType);
    };

    onComposition(event: React.FormEvent<HTMLElement>) {
        if (event.type === 'compositionend') {
            this.isOnComposition = false;
        } else {
            this.isOnComposition = true;
        }
    }

    // @exposed-api
    focus = () => {
        if (this.fieldGetters.$refs) {
            this.fieldGetters.$refs.focus();
        }
    };

    // @exposed-api
    blur = () => {
        if (this.fieldGetters.$refs) {
            this.fieldGetters.$refs.blur();
        }
    };

    onChange = (event: React.FormEvent<HTMLElement>) => {
        // not update value when composing
        if (this.isOnComposition) {
            return;
        }

        this.updateValue((event.target as any).value);
    };

    onFocus = (event: React.FocusEvent<HTMLElement>) => {
        this.fieldGetters.focused = true;
        this.$emit('onFocus', event);

        // readonly not work in lagacy mobile safari
        /* istanbul ignore if */
        if (this.fieldGetters.readOnly) {
            this.blur();
        }
    };

    onBlur = (event: React.SyntheticEvent<HTMLElement>) => {
        this.fieldGetters.focused = false;
        this.updateValue(this.fieldGetters.value, 'onBlur');
        this.$emit('onBlur', event);
        this.validateWithTrigger('onBlur');
        resetScroll();
    };

    onClick = (event: React.MouseEvent<HTMLElement>) => {
        this.$emit('onClick', event);
    };

    onClickInput = (event: React.SyntheticEvent<HTMLElement>) => {
        this.$emit('onClickInput', event);
    };

    onClickLeftIcon = (event: React.SyntheticEvent<HTMLElement>) => {
        this.$emit('onClickLeftIcon', event);
    };

    onClickRightIcon = (event: React.SyntheticEvent<HTMLElement>) => {
        this.$emit('onClickRightIcon', event);
    };

    onClear = (event: React.SyntheticEvent<HTMLElement>) => {
        event.persist();
        this.updateValue('');
        this.$emit('onClear', event);
    };

    onKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            const submitOnEnter = this.fieldGetters.getProp('submitOnEnter');
            if (!submitOnEnter && this.fieldGetters.type !== 'textarea') {
                event.persist();
            }

            // trigger blur after click keyboard search button
            if (this.fieldGetters.type === 'search') {
                this.blur();
            }
        }

        this.$emit('onKeyPress', event);
    };
}
