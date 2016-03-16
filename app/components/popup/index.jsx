import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles.css';

export default function Popup(props) {
	const popupClass = cx({
		[styles.root]: true,
		[styles.root_active]: props.active,
	});

	return (
		<div className={popupClass} onClick={props.onClose}>
			<div className={styles.close} onClick={props.onClose} />
			<div className={styles.content}>
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
