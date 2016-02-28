import React from 'react';

import Title from 'components/title';
import Text from 'components/text';
import PortfolioList from 'components/portfolio-list';

import './styles.css';

export default function Portfolio({ data, projects }) {
	return (
		<div className='portfolio'>
			<Title>
				{data.title}
			</Title>

			<Text size='m'>
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
