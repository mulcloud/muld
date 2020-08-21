import { isDef, addUnit } from '../utils';
import { Props, StateParams, SetDispatch, FieldParams } from './types';
import { FieldEvents } from './fieldEvents';
import { FieldRules } from './fieldRules';

export class FieldGetters {
    props: Partial<Props & StateParams> = {};

    private setFocused?: SetDispatch<boolean>;

    private setValidateFailed?: SetDispatch<boolean>;

    private setValidateMessage?: SetDispatch<string>;

    private setValue?: SetDispatch<string | number>;

    private $fieldEvents: FieldEvents;

    private $fieldRules: FieldRules;

    private $formValue: any; // field children value

    constructor(props: Partial<FieldParams>) {
        this.updateProps(props);
        this.$fieldRules = new FieldRules(this);
        this.$fieldEvents = new FieldEvents(this);
    }

    updateProps(props: Partial<FieldParams>) {
        const { setFocused, setValidateMessage, setValidateFailed, setValue, ...rest } = props;
        this.props = rest;
        this.setFocused = setFocused;
        this.setValidateFailed = setValidateFailed;
        this.setValidateMessage = setValidateMessage;
        this.setValue = setValue;
    }

    updateValue = (val: any) => {
        this.$formValue = val;
    };

    getProp = (key: string) => {
        const result = Reflect.get(this.props, key);
        if (isDef(result)) {
            return result;
        }
        const formPropVal = Reflect.get(this.form || {}, key);
        if (formPropVal) {
            return formPropVal;
        }
        return '';
    };

    get currentView() {
        return this.props.currentViewRef?.current;
    }

    get validate() {
        return this.$fieldRules.validate;
    }

    get resetValidation() {
        return this.$fieldRules.resetValidation;
    }

    get fieldRules() {
        return this.$fieldRules;
    }

    get fieldEvents() {
        return this.$fieldEvents;
    }

    get showError() {
        if (typeof this.error === 'boolean') {
            return this.error;
        }
        if (this.form && this.form.showError && this.validateFailed) {
            return true;
        }
        return false;
    }

    get showClear() {
        if (this.clearable && !this.readOnly) {
            const hasValue = isDef(this.value) && this.value !== '';
            const trigger =
                this.clearTrigger === 'always' || (this.clearTrigger === 'focus' && this.focused);

            return hasValue && trigger;
        }
        return false;
    }

    get labelStyle() {
        const labelWidth = this.getProp('labelWidth');

        if (labelWidth) {
            return { width: addUnit(labelWidth) };
        }
        return null;
    }

    get $refs() {
        return this.props.inputRef!.current;
    }

    get formatTrigger() {
        return this.props.formatTrigger;
    }

    get formatter() {
        return this.props.formatter;
    }

    get maxLength() {
        return this.props.maxLength;
    }

    get formValue() {
        return this.$formValue || this.value;
    }

    get clearable() {
        return this.props.clearable;
    }

    get readOnly() {
        return this.props.readOnly;
    }

    get clearTrigger() {
        return this.props.clearTrigger;
    }

    get error() {
        return this.props.error;
    }

    get form() {
        return this.props.form;
    }

    get type() {
        return this.props.type;
    }

    get rules() {
        return this.props.rules;
    }

    get name() {
        return this.props.name;
    }

    get value() {
        return this.props.value!;
    }

    set value(val: string | number) {
        this.setValue && this.setValue(val);
    }

    get validateFailed() {
        return this.props.validateFailed!;
    }

    set validateFailed(val: boolean) {
        this.setValidateFailed && this.setValidateFailed(val);
    }

    get focused() {
        return this.props.focused!;
    }

    set focused(val: boolean) {
        this.setFocused && this.setFocused(val);
    }

    get validateMessage() {
        return this.props.validateMessage!;
    }

    set validateMessage(val: string) {
        this.setValidateMessage && this.setValidateMessage(val);
    }
}
