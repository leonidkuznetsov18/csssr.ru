import React from 'react';
import Title from 'components/title';
import Text from 'components/text';

export default class Section extends React.Component {
	static propTypes = {
		title: React.PropTypes.object.isRequired,
		description: React.PropTypes.object.isRequired
	}

	static defaultProps = {
		title: {},
		description: {}
	}

	render() {
		const { title, description } = this.props;

		return (
			<section className='section'>
				<Title {...title.props}>
					{title.text}
				</Title>
				{[].concat(description).map(paragraph => (
					<Text {...paragraph.props}>
						{paragraph.text}
					</Text>
				))}
			</section>
		);
	}
}
