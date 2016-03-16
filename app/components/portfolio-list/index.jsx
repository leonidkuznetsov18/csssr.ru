import React from 'react';
import PortfolioItem from 'components/portfolio-item';

import styles from './styles.css';

export default function PortfolioList({ data }) {
	return (
		<ul className={styles.root}>
			{data.map((project, i) => (
				<PortfolioItem
					key={i}
					project={project}
				/>
			))}
		</ul>
	);
}

PortfolioList.propTypes = {
	data: React.PropTypes.array.isRequired,
};
