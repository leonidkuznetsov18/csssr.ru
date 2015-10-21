import React from 'react';
import Parallax from 'components/parallax';
import Content from 'components/content';
import Title from 'components/title';
import Text from 'components/text';
import PortfolioList from 'components/portfolio-list';

import './styles.css';

const data = require('data/portfolio.json');

export default class Portfolio extends React.Component {
	componentDidMount() {
		document.title = data.pageTitle;
	}

	render() {
		return (
			<div className='portfolio'>
				<div className='portfolio__header'>
					<Parallax speed={.3}>
						<div className='portfolio__slogan' />
					</Parallax>
					<Parallax speed={.2}>
						<div className='portfolio__rocket' />
					</Parallax>
				</div>
				<Content>
					<div className='portfolio__container'>
						<Title>
							{data.title}
						</Title>

						<Text size='m'>
							{data.info}
						</Text>

						<PortfolioList data={data.list} />
					</div>
				</Content>
			</div>
		);
	}
}
