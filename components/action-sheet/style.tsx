import styled from 'styled-components';
import {
    $action_sheet,
    $padding_md,
    $active_color,
    $padding_xs,
    $font_weight_bold,
    $cell,
} from '../style/var';
import Popup from '../popup';
import { hairlineBottom } from '../style/mixins/hairline';

export const View = styled(Popup)`
	&.mul-action-sheet {
		max-height: ${$action_sheet.max_height};
		color: ${$action_sheet.item_text_color};

		.mul-action-sheet__item,
		.mul-action-sheet__cancel {
			display: block;
			width: 100%;
			padding: 14px ${$padding_md};
			font-size: ${$action_sheet.item_font_size};
			background-color: ${$action_sheet.item_background};
			border: none;
			cursor: pointer;

			&:active {
				background-color: ${$active_color};
			}
		}

		.mul-action-sheet__item {
			line-height: ${$action_sheet.item_line_height};

			&--loading,
			&--disabled {
				color: ${$action_sheet.item_disabled_text_color};

				&:active {
					background-color: ${$action_sheet.item_background};
				}
			}

			&--disabled {
				cursor: not-allowed;
			}

			&--loading {
				cursor: default;
			}
		}

		.mul-action-sheet__cancel {
			color: ${$action_sheet.cancel_text_color};
		}

		.mul-action-sheet__subname {
			margin-top: ${$padding_xs};
			color: ${$action_sheet.subname_color};
			font-size: ${$action_sheet.subname_font_size};
			line-height: ${$action_sheet.subname_line_height};
		}

		.mul-action-sheet__gap {
			display: block;
			height: ${$action_sheet.cancel_padding_top};
			background-color: ${$action_sheet.cancel_padding_color};
		}

		.mul-action-sheet__header {
			font-weight: ${$font_weight_bold};
			font-size: ${$action_sheet.header_font_size};
			line-height: ${$action_sheet.header_height};
			text-align: center;
		}

		.mul-action-sheet__description {
			position: relative;
			padding: 20px ${$padding_md};
			color: ${$action_sheet.description_color};
			font-size: ${$action_sheet.description_font_size};
			line-height: ${$action_sheet.description_line_height};
			text-align: center;

			.mul-action-sheet::after {
				${hairlineBottom($cell.border_color as any, $padding_md, $padding_md)}
			}
		}

		.mul-action-sheet__loading_icon .mul_loading__spinner {
			width: ${$action_sheet.loading_icon_size};
			height: ${$action_sheet.loading_icon_size};
		}

		.mul-action-sheet__close {
			position: absolute;
			top: 0;
			right: 0;
			padding: ${$action_sheet.close_icon_padding};
			color: ${$action_sheet.close_icon_color};
			font-size: ${$action_sheet.close_icon_size};
			line-height: inherit;

			&:active {
				color: ${$action_sheet.close_icon_active_color};
			}
		}
	}
	}
`;
