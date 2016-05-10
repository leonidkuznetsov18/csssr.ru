import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';

import styles from './styles.css';

function Breadcrumbs({ items }) {
	return (
		<div className={styles.root}>
			{items.map((item, index, list) => (
				<div
					className={styles.item}
					key={index}
				>
					{item.link &&
						<Link
							className={styles.link}
							to={item.link}
						>
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
							&nbsp;
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
