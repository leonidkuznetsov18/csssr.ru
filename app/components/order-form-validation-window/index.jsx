import React, {PropTypes} from 'react';

import './styles.css';


export default function ValidationWindow ({title, text}) {
	return (
		<div className='order-form-validation'>
			<div className='order-form-validation__attention'>{title}</div>
			{text ? <div className='order-form-validation__text'>{text}</div> : null}
		</div>
	);
}

ValidationWindow.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};

ValidationWindow.defaultProps = {
	title: 'секундочку!',
	text: ''
};
