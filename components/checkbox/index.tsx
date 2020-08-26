import * as React from 'react';
import { createNS } from '../utils';
import { View } from './style';
import Icon from '../icon';
import { withDefaultProps } from '../utils/withDefaultProps';
import { GroupContext, CheckboxGroupContext } from '../checkbox-group';

const [bem] = createNS('checkbox');

export interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    name?: string;
    disabled?: boolean;
    iconSize?: number | string;
    renderIcon?: (checked: boolean) => React.ReactNode;
    checkedColor?: string;
    labelPosition?: 'right' | 'left';
    shape?: 'round' | 'square';
    direction?: 'vertical' | 'horizontal';
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    onChange?: (checked: boolean) => void;
}

type CheckboxState = {
    localChecked?: boolean;
};

const defaultProp: Pick<CheckboxProps, 'shape' | 'labelPosition' | 'direction'> = {
    shape: 'round',
    labelPosition: 'right',
    direction: 'vertical',
};

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    static defaultProps: Pick<
        CheckboxProps,
        'shape' | 'labelPosition' | 'direction' | 'onChange'
    > = {
        shape: 'round',
        labelPosition: 'right',
        direction: 'vertical',
        onChange: () => {},
    };

    static contextType = GroupContext;

    getChecked: () => boolean;

    handleChange: () => void;

    constructor(props: CheckboxProps, context: CheckboxGroupContext) {
        super(props, context);

        const { name, checked, onChange, defaultChecked } = props;
        if (this.context) {
            if (name === undefined) {
                throw new Error(
                    `prop 'name' should be passed to Checkbox when it is used with CheckboxGroup`,
                );
            }
            this.getChecked = () => {
                return this.context!.value.includes(name);
            };
            this.handleChange = () => {
                this.context!.toggleOption(!this.getChecked(), name);
                onChange && onChange(!this.getChecked());
            };
            return;
        }

        if (checked !== undefined) {
            this.getChecked = () => {
                return this.props.checked!;
            };
            this.handleChange = () => {
                onChange && onChange(!this.props.checked!);
            };
        } else {
            this.state = {
                localChecked: defaultChecked || false,
            };
            this.getChecked = () => {
                return this.state.localChecked!;
            };
            this.handleChange = () => {
                this.setState(
                    (state, props) => ({ localChecked: !state.localChecked }),
                    () => {
                        onChange && onChange(this.state.localChecked!);
                    },
                );
            };
        }
    }

    getDerivedProps(): Pick<CheckboxProps, 'direction' | 'iconSize' | 'checkedColor' | 'disabled'> {
        return {
            direction: this.context?.direction,
            iconSize: this.context?.iconSize || this.props.iconSize,
            checkedColor: this.context?.checkedColor || this.props.checkedColor,
            disabled: this.context?.disabled || this.props.disabled,
        };
    }

    iconStyle() {
        const { checkedColor, disabled } = this.getDerivedProps();
        if (checkedColor && this.getChecked() && !disabled) {
            return {
                borderColor: checkedColor,
                backgroundColor: checkedColor,
            };
        }
        return null;
    }

    renderLabel() {
        const { labelPosition, children } = this.props;
        const { disabled } = this.getDerivedProps();
        return <span className={bem('label', [labelPosition, { disabled }])}>{children}</span>;
    }

    renderIcon() {
        const { shape, renderIcon } = this.props;
        const { disabled, iconSize } = this.getDerivedProps();
        const checked = this.getChecked();

        let iconWrapperStyle;
        if (typeof iconSize === 'string') {
            iconWrapperStyle = { fontSize: iconSize };
        } else if (typeof iconSize === 'number') {
            iconWrapperStyle = { fontSize: `${iconSize / 16}rem` };
        } else {
            iconWrapperStyle = {};
        }
        return (
            <div className={bem('icon', [shape, { disabled, checked }])} style={iconWrapperStyle}>
                {renderIcon ? (
                    renderIcon(checked)
                ) : (
                    <Icon name="success" size="0.8em" style={this.iconStyle()} />
                )}
            </div>
        );
    }

    renderChildren() {
        if (this.props.labelPosition === 'left') {
            return (
                <>
                    {this.renderLabel()}
                    {this.renderIcon()}
                </>
            );
        }
        return (
            <>
                {this.renderIcon()}
                {this.renderLabel()}
            </>
        );
    }

    handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const { onClick } = this.props;
        const { disabled } = this.getDerivedProps();
        onClick && onClick(event);
        if (disabled) {
            return;
        }
        this.handleChange();
    };

    render() {
        const { disabled, direction } = this.getDerivedProps();
        return (
            <View
                className={bem([
                    {
                        disabled,
                    },
                    direction,
                ])}
                onClick={this.handleClick}
            >
                {this.renderChildren()}
            </View>
        );
    }
}

export default withDefaultProps(Checkbox, defaultProp);
