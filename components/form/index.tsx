import * as React from 'react';
import { FieldGetters } from '../field/fieldGetters';
import { ValidateError } from '../field/types';
import { createNS, withDefaultProps } from '../utils';

const [bem] = createNS('form');

interface FormError {
    values: Record<string, any>;
    errors: ValidateError[];
}

interface Props {
    colon?: boolean;
    labelWidth?: number | string;
    labelAlign?: string;
    inputAlign?: string;
    scrollToError?: boolean;
    validateFirst?: boolean;
    errorMessageAlign?: string;
    submitOnEnter: boolean;
    validateTrigger: string;
    showError: boolean;
    showErrorMessage: boolean;
    onSubmit?: (v: Record<string, any>) => void;
    onFailed?: (e: FormError) => void;
}

const defaultProps = {
    submitOnEnter: true,
    validateTrigger: 'onBlur',
    showError: true,
    showErrorMessage: true,
};

export const FormContext = React.createContext<FormValidator>({} as any);

export class FormValidator {
    props: Props;

    fields: FieldGetters[] = [];

    $emit(eventType: string, v: any) {
        const triggerEvent = Reflect.get(this.props, eventType);
        if (triggerEvent) {
            triggerEvent(v);
        }
    }

    constructor(props: Props) {
        this.props = props;
    }

    updateProps(props: Props) {
        this.props = props;
    }

    get showErrorMessage() {
        return this.props.showErrorMessage;
    }

    get validateTrigger() {
        return this.props.validateTrigger;
    }

    get showError() {
        return this.props.showError;
    }

    validateSeq = () => {
        return new Promise((resolve, reject) => {
            const errors: ValidateError[] = [];

            this.fields
                .reduce(
                    (promise: Promise<any>, field) =>
                        promise.then(() => {
                            if (!errors.length) {
                                return field.validate().then((error?: ValidateError) => {
                                    if (error) {
                                        errors.push(error);
                                    }
                                });
                            }
                            return null;
                        }),
                    Promise.resolve(),
                )
                .then(() => {
                    if (errors.length) {
                        reject(errors);
                    } else {
                        resolve();
                    }
                });
        });
    };

    validateAll = () => {
        return new Promise((resolve, reject) => {
            Promise.all(this.fields.map((item) => item.validate())).then((errors) => {
                errors = errors.filter((item) => item);

                if (errors.length) {
                    reject(errors);
                } else {
                    resolve();
                }
            });
        });
    };

    // @exposed-api
    validate = (name?: string) => {
        if (name) {
            return this.validateField(name);
        }
        return this.props.validateFirst ? this.validateSeq() : this.validateAll();
    };

    validateField = (name: string) => {
        const matched = this.fields.filter((item) => item.name === name);

        if (matched.length) {
            return new Promise((resolve, reject) => {
                matched[0].validate().then((error: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });
        }

        return Promise.reject();
    };

    // @exposed-api
    resetValidation = (name: string) => {
        this.fields.forEach((item) => {
            if (!name || item.name === name) {
                item.resetValidation();
            }
        });
    };

    // @exposed-api
    scrollToField = (name: string, options?: ScrollIntoViewOptions) => {
        this.fields.forEach((item) => {
            if (item.name === name) {
                item.currentView && item.currentView.scrollIntoView(options);
            }
        });
    };

    addField = (field: FieldGetters) => {
        this.fields.push(field);
    };

    removeField = (field: FieldGetters) => {
        this.fields = this.fields.filter((item) => item !== field);
    };

    getValues = () => {
        return this.fields.reduce((form: Record<string, any>, field) => {
            form[field.name!] = field.formValue;
            return form;
        }, {});
    };

    onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        this.submit();
    };

    // @exposed-api
    submit = () => {
        const values = this.getValues();

        this.validate()
            .then(() => {
                this.$emit('onSubmit', values);
            })
            .catch((errors) => {
                this.$emit('onFailed', {
                    values,
                    errors,
                });

                if (this.props.scrollToError) {
                    this.scrollToField(errors[0].name);
                }
            });
    };
}

const Form: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const formValidator = React.useRef<FormValidator>();
    if (!formValidator.current) {
        formValidator.current = new FormValidator(props);
    }
    formValidator.current.updateProps(props);
    const { onSubmit } = formValidator.current;

    return (
        <FormContext.Provider value={formValidator.current}>
            <form className={bem()} onSubmit={onSubmit}>
                {props.children}
            </form>
        </FormContext.Provider>
    );
};

export default withDefaultProps(React.memo(Form), defaultProps);
