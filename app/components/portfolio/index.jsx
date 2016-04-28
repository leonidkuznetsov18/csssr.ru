import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Title from 'components/title';
import Text from 'components/text';
import PortfolioList from 'components/portfolio-list';

import styles from './styles.css';

function Portfolio({ data, projects }) {
	return (
		<div className={styles.root}>
			<Title center>
				{data.title}
			</Title>

			<Text center size='m'>
				{data.info}
			</Text>

			<PortfolioList data={projects} />
		</div>
	);
}

Portfolio.propTypes = {
	data: React.PropTypes.object.isRequired,
	projects: React.PropTypes.array.isRequired,
};

export default withStyles(Portfolio, styles);
