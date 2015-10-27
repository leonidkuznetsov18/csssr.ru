import React from 'react';

import TimelineList from 'components/timeline-list';
import Title from 'components/title';
import Text from 'components/text';
import Content from 'components/content';

const timeline = require('data/timeline.yml');

export default class PageTimeline extends React.Component {
    render() {
        return (
            <Content padding={false}>
            	<div className="timeline">
	                <Title center={true}>
	                    История CSSSR
	                </Title>

	                <Text center={true}>
	                    Каждый год в канун дня рождения CSSSR,
	                    мы дополняем хронологию ключевых событий нашей истории.
	                </Text>
               		<TimelineList data={timeline} />
                </div>
            </Content>
        );
    }
}
