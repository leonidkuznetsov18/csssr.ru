import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import socialLink from 'helpers/socialLink';

import Button from 'components/button';
import styles from './styles.css';

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
const onButtonClick = (type) => () => window.open(socialLink(type));

function Sharing() {
	return (
		<div className={styles.root}>
			{buttons.map((button) => (
				<div className={styles.item} key={button.type}>
					<Button
						component='a'
						icon={`social-${button.type}`}
						mod='social'
						onClick={onButtonClick(button.type)}
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

export default withStyles(Sharing, styles);
