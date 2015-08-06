import React from 'react';
import Text from 'components/text';

import './styles.css';

export default class Comment extends React.Component {
	static propTypes = {
		author: React.PropTypes.string,
		company: React.PropTypes.string,
		url: React.PropTypes.string,
		text: React.PropTypes.string
	}

	render() {
		const {author, company, url, text } = this.props;
		return (
			<div className='comment'>
				<div className='comment__header'>
					<a className='comment__link' href={url}>
						{author}
					</a>
					, {company}
				</div>
				<Text size='small'>
					<span dangerouslySetInnerHTML={{__html: text}}/>
				</Text>
			</div>
		);
	}
}
