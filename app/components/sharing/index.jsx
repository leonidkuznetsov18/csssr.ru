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

function onButtonClick(type) {
	window.open(socialLink(type));
}

export default function Sharing() {
	return (
		<div className='sharing'>
			{buttons.map((button) => (
				<div key={button.type} className='sharing__item'>
					<Button
						mod='social'
						component='a'
						icon={`social-${button.type}`}
						onClick={onButtonClick.bind(this, button.type)}
					>
						{button.text}
					</Button>
				</div>
			))}
		</div>
	);
}

Sharing.propTypes = {
	meta: React.PropTypes.object,
};
