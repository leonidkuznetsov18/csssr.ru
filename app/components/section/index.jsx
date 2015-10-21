import React from 'react';
import Title from 'components/title';
import Text from 'components/text';

export default class Section extends React.Component {
	static propTypes = {
		title: React.PropTypes.object.isRequired,
		description: React.PropTypes.oneOfType([
			React.PropTypes.object,
			React.PropTypes.array,
		]),
		children: React.PropTypes.node
	}

	static defaultProps = {
		title: {},
		description: {}
	}

	render() {
		const title = this.props.title;
		const description = [].concat(this.props.description);

		return (
			<section className='section'>
				<Title {...title.props}>
					{title.text}
				</Title>
				{description[0].text && description.map((paragraph, index) => (
					<Text {...paragraph.props} key={index}>
						{paragraph.text}
					</Text>
				))}
				{this.props.children}
			</section>
		);
	}
}
