import styled from 'styled-components';
import { $sidebar } from '../style/var';

export const View = styled.a`
	&.mul-sidebar-item {
		position: relative;
		display: block;
		box-sizing: border-box;
		padding: ${$sidebar.sidebar_padding};
		overflow: hidden;
		color: ${$sidebar.sidebar_text_color};
		font-size: ${$sidebar.sidebar_font_size};
		line-height: ${$sidebar.sidebar_line_height};
		word-wrap: break-word;
		background-color: ${$sidebar.sidebar_background_color};
		cursor: pointer;
		user-select: none;

		&:active {
			background-color: ${$sidebar.sidebar_active_color};
		}

		&:not(:last-child)::after {
			border-bottom-width: 1px;
		}

		.mul-sidebar-item__text {
			position: relative;
			display: inline-block;
		}

		&--select {
			color: ${$sidebar.sidebar_selected_text_color};
			font-weight: ${$sidebar.sidebar_selected_font_weight};

			&,
			&:active {
				background-color: ${$sidebar.sidebar_selected_background_color};
			}

			&::before {
				position: absolute;
				top: 50%;
				left: 0;
				width: ${$sidebar.sidebar_selected_border_width};
				height: ${$sidebar.sidebar_selected_border_height};
				background-color: ${$sidebar.sidebar_selected_border_color};
				transform: translateY(-50%);
				content: '';
			}
		}

		&--disabled {
			color: ${$sidebar.sidebar_disabled_text_color};
			cursor: not-allowed;

			&:active {
				background-color: ${$sidebar.sidebar_background_color};
			}
		}
	}
}`;
