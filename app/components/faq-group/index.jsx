import React from 'react';
import { Element as ScrollElement } from 'react-scroll';

import './styles.css';

export default function FaqGroup({ children }) {
	return (
		<ScrollElement name='faq' className='faq-group'>
			{children}
		</ScrollElement>
	);
}

FaqGroup.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
};
