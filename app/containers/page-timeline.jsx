import React, { PropTypes } from 'react';
import TimelineList from 'components/timeline-list';
import Title from 'components/title';
import Text from 'components/text';
import Content from 'components/content';

const timeline = require('data/timeline.yml');

export default class PageTimeline extends React.Component {
	static propTypes = {
		history: PropTypes.object,
		children: PropTypes.element
	}

	componentDidMount() {
		document.title = 'История CSSSR'
	}

	render() {
		return (
			<Content>
				<Title center>
					История CSSSR
				</Title>
				<Text center>
					Каждый год в канун дня рождения CSSSR,
					мы дополняем хронологию
					<br/>
					ключевых событий нашей истории.
				</Text>
				<TimelineList data={timeline} />
				{this.props.children}
			</Content>
		);
	};
}
