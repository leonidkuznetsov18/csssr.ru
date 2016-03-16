import React from 'react';
import Popup from 'components/popup';

import styles from './styles.css';

export default function PopupVersion(props) {
	return (
		<Popup active={props.active} onClose={props.onClose} >
			<img
				className={styles.root}
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
