import React from 'react';
import { Link } from 'react-router';

import Title from 'components/title';
import Text from 'components/text';

import './styles.css';

const data = require('data/history.json');

export default class History extends React.Component {
	render() {
		return (
			<div className='history'>
				<Title size='medium'>
					<Link to='/timeline'>
						{data.title}
					</Link>
				</Title>
				{data.content.map(group => (
					<div className='history__item'>
						<p className='history__date'>
							{group.date}
						</p>

						<Text size='m'>
							{group.text}
						</Text>
					</div>
				))}
			</div>
		);
	}
}
