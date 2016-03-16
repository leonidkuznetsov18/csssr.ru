import React from 'react';
import cx from 'classnames';

import Comment from 'components/comment';

import styles from './styles.css';

export default class Comments extends React.Component {
	static propTypes = {
		data: React.PropTypes.array.isRequired,
	}

	componentWillMount() {
		this.setState({
			active: true,
			index: 0,
		});
	}

	changeComment() {
		const { data } = this.props;
		const random = Math.floor(Math.random() * data.length);
		const comment = this.refs.comment;

		this.setState({
			active: false,
		});

		setTimeout(() => {
			this.setState({
				active: true,
				index: random,
			});

			this.setState({
				height: comment.clientHeight,
			});
		}, 500);
	}

	render() {
		const { data } = this.props;
		const comment = data[this.state.index];
		const classList = cx({
			[styles.item]: true,
			[styles.item_state_active]: this.state.active,
		});
		const blockStyle = {
			height: this.state.height,
		};

		return (
			<div className={styles.root} style={blockStyle}>
				<a
					className={styles.link}
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
