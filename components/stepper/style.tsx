import styled from 'styled-components';
import { $stepper, $active_opacity } from '../style/var';

export const View = styled.div`
	&.mul-stepper {
		font-size: 0;
		user-select: none;

		.mul-stepper__plus,
		.mul-stepper__minus {
			position: relative;
			box-sizing: border-box;
			width: ${$stepper.stepper_input_height};
			height: ${$stepper.stepper_input_height};
			margin: 0;
			padding: 0;
			color: ${$stepper.stepper_button_icon_color};
			vertical-align: middle;
			background-color: ${$stepper.stepper_background_color};
			border: 0;
			cursor: pointer;

			&::before {
				width: 50%;
				height: 0.0625rem;
			}

			&::after {
				width: 0.0625rem;
				height: 50%;
			}

			&::before,
			&::after {
				position: absolute;
				top: 50%;
				left: 50%;
				background-color: currentColor;
				transform: translate(-50%, -50%);
				content: '';
			}

			&:active {
				background-color: ${$stepper.stepper_active_color};
			}

			&--disabled {
				color: ${$stepper.stepper_button_disabled_icon_color};
				background-color: ${$stepper.stepper_button_disabled_color};
				cursor: not-allowed;

				&:active {
					background-color: ${$stepper.stepper_button_disabled_color};
				}
			}
		}

		.mul-stepper__minus {
			border-radius: ${$stepper.stepper_border_radius} 0 0 ${$stepper.stepper_border_radius};

			&::after {
				display: none;
			}
		}

		.mul-stepper__plus {
			border-radius: 0 ${$stepper.stepper_border_radius} ${$stepper.stepper_border_radius} 0;
		}

		.mul-stepper__input {
			box-sizing: border-box;
			width: ${$stepper.stepper_input_width};
			height: ${$stepper.stepper_input_height};
			margin: 0 0.125rem;
			padding: 0;
			color: ${$stepper.stepper_input_text_color};
			font-size: ${$stepper.stepper_input_font_size};
			line-height: ${$stepper.stepper_input_line_height};
			text-align: center;
			vertical-align: middle;
			background-color: ${$stepper.stepper_background_color};
			border: 0;
			border-width: 0.0625rem 0;
			border-radius: 0;
			-webkit-appearance: none;

			&:disabled {
				color: ${$stepper.stepper_input_disabled_text_color};
				background-color: ${$stepper.stepper_input_disabled_background_color};
				-webkit-text-fill-color: currentColor; // fix disabled color in iOS
				opacity: 1;
			}

			&:read-only {
				cursor: default;
			}
		}

		&--round {
			.mul-stepper__input {
				background-color: transparent;
			}

			.mul-stepper__plus,
			.mul-stepper__minus {
				border-radius: 100%;

				&:active {
					opacity: ${$active_opacity};
				}

				&--disabled {
					&,
					&:active {
						opacity: 0.3;
					}
				}
			}

			.mul-stepper__plus {
				color: ${$stepper.stepper_button_round_color};
				background-color: ${$stepper.stepper_button_round_theme_color};
			}

			.mul-stepper__minus {
				color: ${$stepper.stepper_button_round_theme_color};
				background-color: ${$stepper.stepper_button_round_color};
				border: 0.0625rem solid ${$stepper.stepper_button_round_theme_color};
			}
		}
	}
}`;
