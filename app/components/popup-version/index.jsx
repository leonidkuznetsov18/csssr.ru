import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Popup from 'components/popup';

import styles from './styles.css';

function PopupVersion(props) {
	return (
		<Popup active={props.active} onClose={props.onClose}>
			<img
				className={styles.root}
				src={require(`images/timeline/${props.screenshot}`)}
			/>
		</Popup>
	);
}

PopupVersion.propTypes = {
	active: React.PropTypes.bool,
	onClose: React.PropTypes.func,
	screenshot: React.PropTypes.string,
};

export default withStyles(PopupVersion, styles);
