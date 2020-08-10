import styled from 'styled-components';
import { $sidebar } from '../style/var';

export const View = styled.div`
	&.mul-sidebar {
		width: ${$sidebar.sidebar_width};
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}
}`;
