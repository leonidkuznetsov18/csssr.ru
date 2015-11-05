import React from 'react';
import cx from 'classnames';
import Title from 'components/title';
import Text from 'components/text';
import List from 'components/list';

import './styles.css';

export default function Section({title, description, list, children, indent}) {
	const blockClass = cx({
		'section': true,
		'section_indent': indent
	});

	description = [].concat(description);

	return (
		<section className={blockClass}>
			<Title {...title.props}>
				{title.text}
			</Title>
			{description[0].text && description.map((paragraph, index) => (
				<Text {...paragraph.props} key={index}>
					{paragraph.text}
				</Text>
			))}
			{list &&
				<List {...list} />
			}
			{children}
		</section>
	);
}

Section.propTypes = {
	title: React.PropTypes.object.isRequired,
	description: React.PropTypes.oneOfType([
		React.PropTypes.object,
		React.PropTypes.array,
	]),
	children: React.PropTypes.node,
	indent: React.PropTypes.bool
};

Section.defaultProps = {
	title: {},
	description: {}
};
