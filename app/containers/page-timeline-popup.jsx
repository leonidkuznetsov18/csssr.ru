import React from 'react';

import TimelineList from 'components/timeline-list';
import Title from 'components/title';
import Text from 'components/text';
import Content from 'components/content';

const timeline = require('data/timeline.yml');

export default class PageTimelinePopup extends React.Component {
    render() {
        return (
       		<TimelinePopup data={timeline} />
        );
    }
}
