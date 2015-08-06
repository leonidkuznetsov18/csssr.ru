import React from 'react';
import Airship from 'components/airship';
import Icon from 'components/icon';
import Parallax from 'components/parallax';
import Workflow from 'components/workflow';
import Text from 'components/text';
import './styles.css';

const data = require('data/description.json');

export default class Description extends React.Component {
	render() {
		return (
			<div className='description'>
				<div className='description__logo'/>
				<Parallax offset={500} speed={0.4} max={0} min={-150}>
					<div className='description__clouds'>
						<Icon
							icon='cloud'
							className='description__cloud'
						/>
						<Icon
							icon='cloud'
							className='description__cloud'
						/>
						<Icon
							icon='cloud'
							className='description__cloud'
						/>
						<Icon
							icon='cloud'
							className='description__cloud'
						/>
					</div>
				</Parallax>
				<div className='description__list'>
					{data.map(item => (
						<div className='description__item'>
							<h2 className='description__title'
								dangerouslySetInnerHTML={{__html: item.title}}
							/>
							<Text size='small'>
								{item.description}
							</Text>
						</div>
					))}
				</div>
				<div className='description__flow'>
					<Parallax offset={1330} speed={-0.7} min={0} max={310}>
						<div className='description__airship'>
							<Airship image='zeppelin_index.svg'/>
						</div>
					</Parallax>
					<Workflow/>
				</div>
			</div>
		);
	}
}
