import React from 'react';

import Title from 'components/title';
import Text from 'components/text';
import PortfolioList from 'components/portfolio-list';

import styles from './styles.css';

export default function Portfolio({ data, projects }) {
	return (
		<div className={styles.root}>
			<Title center>
				{data.title}
			</Title>

			<Text size='m' center>
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
