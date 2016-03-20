import React from 'react';
import cx from 'classnames';

import styles from './styles.css';

export default function Projecter({ active, partner, title, content, onClose }) {
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_state_active]: active,
		[styles[`root_project_${partner}`]]: partner,
	});

	return (
		<div onClick={onClose} className={blockClass} >
			<div onClick={(e) => e.stopPropagation()}>
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
	partner: React.PropTypes.string.isRequired,
	active: React.PropTypes.bool,
	title: React.PropTypes.string,
	content: React.PropTypes.string,
	onClose: React.PropTypes.func,
};
