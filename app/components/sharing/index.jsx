import React from 'react';
import socialLink from 'helpers/socialLink';

import Button from 'components/button';
import './styles.css';

const buttons = [
	{
		type: 'vk',
		text: 'Мне нравится',
	},
	{
		type: 'fb',
		text: 'Мне нравится',
	},
	{
		type: 'tw',
		text: 'Твитнуть',
	},
	{
		type: 'gp',
		text: 'Плюс один',
	},
];

export default class Sharing extends React.Component {
	static propTypes = {
		meta: React.PropTypes.object,
	}

	render() {
		return (
			<div className='sharing'>
				{buttons.map((button) => (
					<div key={button.type} className='sharing__item'>
						<Button
							mod='social'
							component='a'
							icon={`social-${button.type}`}
							target='_blank'
							href={socialLink(button.type, this.props.meta)}
						>
							{button.text}
						</Button>
					</div>
				))}
			</div>
		);
	}
}
