import styled from 'styled-components';
import { $field, $padding_md, $padding_xs, $padding_base } from '../style/var';

export const View = styled.div`
	.mul-field {
		&__label {
			flex: none;
			box-sizing: border-box;
			width: ${$field.field_label_width};
			margin-right: ${$field.field_label_margin_right};
			color: ${$field.field_label_color};
			text-align: left;
			word-wrap: break-word;

			&--center {
				text-align: center;
			}

			&--right {
				padding-right: ${$padding_md};
				text-align: right;
			}
		}

		&--disabled {
			.mul-field__label {
				color: ${$field.field_disabled_text_color};
			}
		}

		&__value {
			overflow: visible;
		}

		&__body {
			display: flex;
			align-items: center;
		}

		&__control {
			display: block;
			box-sizing: border-box;
			width: 100%;
			min-width: 0; // for flex-shrink in field__button
			margin: 0;
			padding: 0;
			color: ${$field.field_input_text_color};
			line-height: inherit;
			text-align: left;
			background-color: transparent;
			border: 0;
			resize: none;

			&::placeholder {
				color: ${$field.field_placeholder_text_color};
			}

			&:disabled {
				color: ${$field.field_input_disabled_text_color};
				background-color: transparent;
				cursor: not-allowed;
				opacity: 1;
				-webkit-text-fill-color: currentColor; // fix disabled color in iOS
			}

			&:read-only {
				cursor: default;
			}

			&--center {
				justify-content: center;
				text-align: center;
			}

			&--right {
				justify-content: flex-end;
				text-align: right;
			}

			&--custom {
				display: flex;
				align-items: center;
				min-height: ${$field.cell_line_height};
			}

			// for ios wechat
			&[type='date'],
			&[type='time'],
			&[type='datetime-local'] {
				min-height: ${$field.cell_line_height};
			}

			// for safari
			&[type='search'] {
				-webkit-appearance: none;
			}
		}

		&__clear,
		&__icon,
		&__button,
		&__right-icon {
			flex-shrink: 0;
		}

		&__clear,
		&__right-icon {
			margin-right: -${$padding_xs};
			padding: 0 ${$padding_xs};
			line-height: inherit;
		}

		&__clear {
			color: ${$field.field_clear_icon_color};
			font-size: ${$field.field_clear_icon_size};
			cursor: pointer;
		}

		&__left-icon .mul-icon,
		&__right-icon .mul-icon {
			display: block;
			min-width: 1em;
			font-size: ${$field.field_icon_size};
			line-height: inherit;
		}

		&__left-icon {
			margin-right: ${$padding_base};
		}

		&__right-icon {
			color: ${$field.field_right_icon_color};
		}

		&__button {
			padding-left: ${$padding_xs};
		}

		&__error-message {
			color: ${$field.field_error_message_color};
			font-size: ${$field.field_error_message_text_size};
			text-align: left;

			&--center {
				text-align: center;
			}

			&--right {
				text-align: right;
			}
		}

		&__word-limit {
			margin-top: ${$padding_base};
			color: ${$field.field_word_limit_color};
			font-size: ${$field.field_word_limit_font_size};
			line-height: ${$field.field_word_limit_line_height};
			text-align: right;
		}

		&--error {
			.mul-field__control {
				&,
				&::placeholder {
					color: ${$field.field_input_error_text_color};
					-webkit-text-fill-color: currentColor;
				}
			}
		}

		&--min-height {
			.mul-field__control {
				min-height: ${$field.field_text_area_min_height};
			}
		}
	}
}`;
