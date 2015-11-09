import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import cx from 'classnames';
import Popup from 'components/popup';

export default function PopupVersion(props) {

	return (
		<Popup active={props.active} onClose={props.onClose} >
			<img
				className='popup__image'
				src={require(`images/timeline/${props.screenshot}.jpg`)}
			/>
		</Popup>
	);
}

PopupVersion.propTypes = {
	screenshot: PropTypes.string,
	active: PropTypes.boolean,
	onClose: PropTypes.func
};
