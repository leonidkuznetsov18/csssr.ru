import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

export default function Breadcrumbs({ items }) {
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
