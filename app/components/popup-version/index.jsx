import React from 'react';
import Popup from 'components/popup';

export default function PopupVersion(props) {
	return (
		<Popup active={props.active} onClose={props.onClose} >
			<img
				className='popup__image'
				src={require(`images/timeline/${props.screenshot}`)}
			/>
		</Popup>
	);
}

PopupVersion.propTypes = {
	screenshot: React.PropTypes.string,
	active: React.PropTypes.bool,
	onClose: React.PropTypes.func,
};
