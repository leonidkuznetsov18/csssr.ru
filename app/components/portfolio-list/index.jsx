import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PortfolioItem from 'components/portfolio-item';

import styles from './styles.css';

function PortfolioList({ data }) {
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

export default withStyles(PortfolioList, styles);
