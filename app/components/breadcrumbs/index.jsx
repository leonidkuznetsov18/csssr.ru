import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';

import styles from './styles.css';

function Breadcrumbs({ items }) {
	return (
		<div className={styles.root}>
			{items.map((item, index, list) => (
				<div key={index} className={styles.item}>
					{item.link &&
						<Link to={item.link} className={styles.link}>
							{item.name}
						</Link>
					}

					{!item.link &&
						<span className={styles.text}>
							{item.name}
						</span>
					}

					{index !== list.length - 1 &&
						<span className={styles.text}>
							{' '}
							/
						</span>
					}
				</div>
			))}
		</div>
	);
}

Breadcrumbs.propTypes = {
	items: React.PropTypes.array.isRequired,
};

export default withStyles(Breadcrumbs, styles);
