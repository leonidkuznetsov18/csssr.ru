import React from 'react';
import cx from 'classnames';

import './styles.css';

export default class Title extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.element
		]),
		size: React.PropTypes.string,
		color: React.PropTypes.string,
		center: React.PropTypes.bool,
		component: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.element
		])
	}

	static defaultProps = {
		component: 'h1'
	}

	render() {
		const { size, children, component, color, center } = this.props;
		const classList = cx({
			title: true,
			title_center: center === true,
			title_size_medium: size === 'medium',
			title_size_small: size === 'small',
			title_color_yellow: color === 'yellow',
			title_color_black: color === 'black'
		});
		const Tag = component;

		if (typeof children === 'string') {
			return (
				<Tag
					className={classList}
					dangerouslySetInnerHTML={{__html: children}}
				/>
			);
		} else {
			return (
				<Tag className={classList}>
					{children}
				</Tag>
			);
		}
	}
}
