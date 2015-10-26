import React from 'react';

import TimelineList from 'components/timeline-list';
import TimelineItem from 'components/timeline-item';

const projects = require('data/timeline.json');

export default class PagePortfolio extends React.Component {
    static propTypes = {
        children: React.PropTypes.element
    }

    componentDidMount() {
        document.title = 'Портфолио CSSSR';
    }

    render() {
        return (
            <div>
                <PortfolioBanner/>
                <Content>
                    <Portfolio data={portfolio} projects={projects}/>
                </Content>
                {this.props.children}
            </div>
        );
    }
}
