import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import { Link } from 'react-router';
import Text from 'components/text';

import styles from './styles.css';

function OutsourceProject({ partner }) {
	const Component = partner.id ? Link : 'div';
	const titleClass = cx({
		[styles.title]: true,
		[styles.title_state_active]: partner.id,
	});

	return (
		<div className={styles.root}>
			<Component className={titleClass} to={`/outsource/${partner.id}`}>
				{partner.name}
			</Component>

			<Text size='s'>
				{partner.text}
			</Text>
		</div>
	);
}

OutsourceProject.propTypes = {
	partner: React.PropTypes.object,
};

export default withStyles(OutsourceProject, styles);
