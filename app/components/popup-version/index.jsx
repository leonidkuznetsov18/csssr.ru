import React, {PropTypes} from 'react';

import {Link} from 'react-router';
import cx from 'classnames';

import './styles.css';

export default function PopupVersion(props) {

	const img = (
		<img
			className='timeline-popup__image'
			src={`http://csssr.ru/${props.screenshot}`}
		/>
	);
	const popupClass = cx({
			'timeline-popup': true,
			'timeline-popup_active': props.active
		});
	return (
		<div className={popupClass}>
			<div className='timeline-popup__close' onClick={props.onClose}/>
			<div className='timeline-popup__content'>
				{img}
			</div>
		</div>
	);
}
PopupVersion.propTypes = {
	onClose: PropTypes.func
};
