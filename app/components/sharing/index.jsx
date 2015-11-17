import React from 'react';
import socialCount from 'helpers/socialCount';
import socialLink from 'helpers/socialLink';

import Button from 'components/button';
import Text from 'components/text';

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
	}
];

export default class Sharing extends React.Component {

	componentWillMount() {
		this.setState({
			vk: 0,
			fb: 0,
			tw: 0,
			gp: 0
		});
	}

	componentDidMount() {
		this.getSocialCounts()
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.meta.shareUrl != this.props.meta.shareUrl) {
			this.getSocialCounts(nextProps.meta.shareUrl);
		}
	}

	getSocialCounts(shareUrl = this.props.meta.shareUrl) {
		buttons.forEach(button => {
			socialCount(button.type, shareUrl)
				.then((count) => this.setState({
					[button.type]: count || 0
				}))
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.meta.shareUrl === this.props.meta.shareUrl && this.state === nextState) {
			return false
		}

		return true;
	}

	render() {
		return <div className='sharing'>
			{buttons.map(button => (
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
					<div className='sharing__count'>
						<div className='sharing__inner'>
							{this.state[button.type]}
						</div>
					</div>
				</div>
			))}
		</div>
	}
}