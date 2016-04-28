import React from 'react';
import Helmet from 'react-helmet';

import TimelineList from 'components/timeline-list';
import Title from 'components/title';
import Text from 'components/text';
import Content from 'components/content';
import { timeline } from 'data/meta';

const timelineData = require('data/timeline.json');

export default function PageTimeline({ children }) {
	return (
		<Content>
			<Helmet {...timeline} />
			<Title center>
				История CSSSR
			</Title>
			<Text center>
				Каждый год в канун дня рождения CSSSR,
				мы дополняем хронологию
				<br />
				ключевых событий нашей истории.
			</Text>
			<TimelineList data={timelineData} />
			{children}
		</Content>
	);
}

PageTimeline.propTypes = {
	children: React.PropTypes.node,
};
