import { FieldGetters } from './fieldGetters';
import { Rule, ValidateError } from './types';
import { isFunction, isPromise } from '../utils';

type FormValue = FieldGetters['formValue'];

export class FieldRules {
    private fieldGetters: FieldGetters;

    constructor(fieldGetters: FieldGetters) {
        this.fieldGetters = fieldGetters;
    }

    runValidator = (value: FormValue, rule: Rule<FormValue>) => {
        return new Promise((resolve) => {
            const returnVal = rule.validator!(value, rule);

            if (isPromise(returnVal)) {
                return returnVal.then(resolve);
            }

            resolve(returnVal);
            return null;
        });
    };

    isEmptyValue = (value: FormValue) => {
        if (Array.isArray(value)) {
            return !value.length;
        }

        return !value;
    };

    runSyncRule = (value: FormValue, rule: Rule<FormValue>) => {
        if (rule.required && this.isEmptyValue(value)) {
            return false;
        }
        if (rule.pattern && !rule.pattern.test(value as string)) {
            return false;
        }
        return true;
    };

    getRuleMessage = (value: FormValue, rule: Rule<FormValue>) => {
        const { message } = rule;

        if (isFunction(message)) {
            return message(value, rule);
        }
        return message;
    };

    runRules = (rules: Rule<FormValue>[]) => {
        return rules.reduce(
            (promise: Promise<any>, rule) =>
                promise.then(() => {
                    if (this.fieldGetters.validateFailed) {
                        return null;
                    }

                    let value = this.fieldGetters.formValue;

                    if (rule.formatter) {
                        value = rule.formatter(value, rule);
                    }

                    if (!this.runSyncRule(value, rule)) {
                        this.fieldGetters.validateFailed = true;
                        this.fieldGetters.validateMessage = this.getRuleMessage(value, rule)!;
                        return null;
                    }

                    if (rule.validator) {
                        return this.runValidator(value, rule).then((result) => {
                            if (result === false) {
                                this.fieldGetters.validateFailed = true;
                                this.fieldGetters.validateMessage = this.getRuleMessage(
                                    value,
                                    rule,
                                )!;
                            }
                        });
                    }
                    return null;
                }),
            Promise.resolve(),
        );
    };

    validate = (rules = this.fieldGetters.rules) => {
        return new Promise<ValidateError>((resolve) => {
            if (!rules) {
                resolve();
            }
            this.runRules(rules!).then(() => {
                if (this.fieldGetters.validateFailed) {
                    resolve({
                        name: this.fieldGetters.name,
                        message: this.fieldGetters.validateMessage,
                    });
                } else {
                    resolve();
                }
            });
        });
    };

    validateWithTrigger(trigger: string) {
        if (this.fieldGetters.form && this.fieldGetters.rules) {
            const defaultTrigger = this.fieldGetters.form.validateTrigger === trigger;
            const rules = this.fieldGetters.rules.filter((rule: Rule<FormValue>) => {
                if (rule.trigger) {
                    return rule.trigger === trigger;
                }
                return defaultTrigger;
            });

            this.validate(rules);
        }
    }

    resetValidation() {
        if (this.fieldGetters.validateFailed) {
            this.fieldGetters.validateFailed = false;
            this.fieldGetters.validateMessage = '';
        }
    }
}
