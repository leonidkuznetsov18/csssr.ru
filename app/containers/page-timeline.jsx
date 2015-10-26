import React from 'react';

import TimelineList from 'components/timeline-list';
import Title from 'components/title';
import Text from 'components/text';
import Content from 'components/content';

const timeline = require('data/timeline.json');

export default class PageTimeline extends React.Component {
    render() {
        return (
            <Content>
                <Title>
                    История CSSSR
                </Title>

                <Text size='m'>
                    Каждый год в канун дня рождения CSSSR,
                    мы дополняем хронологию ключевых событий нашей истории.
                </Text>

               <TimelineList data={timeline} />
            </Content>
        );
    }
}
