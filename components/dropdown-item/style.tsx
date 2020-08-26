import styled from 'styled-components';
import { $dropdown_menu } from '../style/var';

export const View = styled.div`
	.mul-dropdown-item {
		position: fixed;
		right: 0;
		left: 0;
		z-index: ${$dropdown_menu.z_index};
		overflow: hidden;

		&__icon {
			display: block;
			line-height: inherit;
		}

		&__option {
			text-align: left;

			&--active {
				color: ${$dropdown_menu.option_active_color};

				.mul-dropdown-item__icon {
					color: ${$dropdown_menu.option_active_color};
				}
			}
		}

		&--up {
			top: 0;
		}

		&--down {
			bottom: 0;
		}

		&__content {
			position: absolute;
			max-height: ${$dropdown_menu.content_max_height};
		}
	}
}`;
