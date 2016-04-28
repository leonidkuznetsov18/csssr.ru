import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function Popup(props) {
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
	active: React.PropTypes.bool,
	children: React.PropTypes.element,
	onClose: React.PropTypes.func,
};

export default withStyles(Popup, styles);
