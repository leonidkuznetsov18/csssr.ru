import React, { Component, PropTypes as pt } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import QuestItem from './item';

import styles from './styles.css';

class Quests extends Component {
	static propTypes = {
		data: pt.arrayOf(pt.shape({
			id: pt.string.isRequired,
			link: pt.string.isRequired,
			linkText: pt.string.isRequired,
			taskLink: pt.string.isRequired,
			taskText: pt.string.isRequired,
			text: pt.string.isRequired,
			time: pt.number.isRequired,
			title: pt.string.isRequired,
		})),
		onChange: pt.func,
	}

	static defaultProps = {
		data: [],
		onChange: () => {},
	}

	renderQuest = ({
		id,
		time,
		taskLink,
		taskText,
		linkText,
		title,
		text,
		link,
	}) => (
		<QuestItem
			id={id}
			key={id}
			link={link}
			linkText={linkText}
			onChange={this.props.onChange}
			taskLink={taskLink}
			taskText={taskText}
			text={text}
			time={time}
			title={title}
		/>
	)

	renderQuests = () =>
		this.props.data.map(this.renderQuest)

	render() {
		return (
			<div className={styles.root}>
				{this.renderQuests()}
			</div>
		);
	}
}

export default withStyles(Quests, styles);
