import React from 'react';
import stopPropagation from 'utils/stop-propagation';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

function Projecter({ active, partner, title, content, onClose }) {
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_state_active]: active,
		[styles[`root_project_${partner}`]]: partner,
	});

	return (
		<div className={blockClass} onClick={onClose}>
			<div onClick={stopPropagation}>
				<div className={styles.selection}>
					<div
						className={styles.title}
						dangerouslySetInnerHTML={{ __html: title }}
					/>
				</div>

				<div className={styles.selection}>
					<blockquote
						className={styles.comment}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</div>
			</div>
		</div>
	);
}

Projecter.propTypes = {
	active: React.PropTypes.bool,
	content: React.PropTypes.string,
	onClose: React.PropTypes.func,
	partner: React.PropTypes.string.isRequired,
	title: React.PropTypes.string,
};

export default withStyles(Projecter, styles);
