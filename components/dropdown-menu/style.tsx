import styled from 'styled-components';
import { $dropdown_menu, $active_opacity, $gray7, $gray4 } from '../style/var';

export const View = styled.div`
	user-select: none;
	.mul-dropdown-menu {
		&__bar {
			position: relative;
			display: flex;
			height: ${$dropdown_menu.height};
			background-color: ${$dropdown_menu.background_color};
			box-shadow: 0 2px 12px fade(${$gray7}, 8);

			&--opened {
				z-index: ${$dropdown_menu.z_index} + 1;
			}
		}

		&__item {
			display: flex;
			flex: 1;
			align-items: center;
			justify-content: center;
			min-width: 0; // hack for flex ellipsis
			cursor: pointer;

			&:active {
				opacity: ${$active_opacity};
			}

			&--disabled {
				&:active {
					opacity: 1;
				}

				.mul-dropdown-menu__title {
					color: ${$dropdown_menu.title_disabled_text_color};
				}
			}
		}

		&__title {
			position: relative;
			box-sizing: border-box;
			max-width: 100%;
			padding: ${$dropdown_menu.title_padding};
			color: ${$dropdown_menu.title_text_color};
			font-size: ${$dropdown_menu.title_font_size};
			line-height: ${$dropdown_menu.title_line_height};

			&::after {
				position: absolute;
				top: 50%;
				right: -4px;
				margin-top: -5px;
				border: 3px solid;
				border-color: transparent transparent ${$gray4} ${$gray4};
				transform: rotate(-45deg);
				opacity: 0.8;
				content: '';
			}

			&--active {
				color: ${$dropdown_menu.title_active_text_color};

				&::after {
					border-color: transparent transparent currentColor currentColor;
				}
			}

			&--down {
				&::after {
					margin-top: -1px;
					transform: rotate(135deg);
				}
			}
		}
	}
}`;
