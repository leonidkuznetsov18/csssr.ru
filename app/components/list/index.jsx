import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import Text from 'components/text';

import styles from './styles.css';

function List({ items, props }) {
	const classList = cx({
		[styles.item]: true,
		[styles.item_size_s]: props.size === 's',
	});

	return (
		<ul {...props} className={styles.root}>
			{items.map((item, index) => (
				<li className={classList} key={index}>
					<Text {...props} indent={false}>
						{item}
					</Text>
				</li>
			))}
		</ul>
	);
}

List.propTypes = {
	items: React.PropTypes.array.isRequired,
	size: React.PropTypes.string,
	props: React.PropTypes.object,
};

export default withStyles(List, styles);
