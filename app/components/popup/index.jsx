import React, { PropTypes } from 'react';
import cx from 'classnames';

import './styles.css';

export default function Popup(props) {
	const popupClass = cx({
		popup: true,
		popup_active: props.active,
	});

	return (
		<div className={popupClass} onClick={props.onClose}>
			<div className='popup__close' onClick={props.onClose}/>
			<div className='popup__content'>
				{props.children}
			</div>
		</div>
	);
}

Popup.propTypes = {
	active: PropTypes.bool,
	onClose: PropTypes.func,
	children: PropTypes.element,
};
