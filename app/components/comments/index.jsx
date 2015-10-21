import React from 'react';
import cx from 'classnames';

import Comment from 'components/comment';

import './styles.css';

const data = require('data/comments.json');

export default class Comments extends React.Component {
	constructor() {
		super();
		this.state = {
			active: true,
			index: 0
		};
	}

	changeComment() {
		const random = Math.floor(Math.random() * data.length);
		const comment = this.refs.comment;

		this.setState({
			active: false
		});

		setTimeout(() => {
			this.setState({
				active: true,
				index: random
			});

			this.setState({
				height: comment.clientHeight
			});
		}, 500);
	}

	render() {
		const comment = data[this.state.index];
		const classList = cx({
			comments__item: true,
			comments__item_state_active: this.state.active
		});
		const blockStyle = {
			height: this.state.height
		};

		return (
			<div className='comments' style={blockStyle}>
				<a
					className='comments__link'
					onClick={this.changeComment.bind(this)}
				>
					Еще отзыв
				</a>
				<div className={classList} ref='comment'>
					<Comment {...comment} />
				</div>
			</div>
		);
	}
}
