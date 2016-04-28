import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import Title from 'components/title';
import Text from 'components/text';
import List from 'components/list';

import styles from './styles.css';

function Section({ title, description, list, children, indent }) {
	const blockClass = cx({
		[styles.root]: true,
		[styles.root_indent]: indent,
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
	children: React.PropTypes.node,
	description: React.PropTypes.oneOfType([
		React.PropTypes.object,
		React.PropTypes.array,
	]),
	indent: React.PropTypes.bool,
	list: React.PropTypes.object,
	title: React.PropTypes.object.isRequired,
};

Section.defaultProps = {
	title: {},
	description: {},
};

export default withStyles(Section, styles);
