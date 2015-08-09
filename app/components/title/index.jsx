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
		component: React.PropTypes.element
	}

	static defaultProps = {
		component: 'h1'
	}

	render() {
		const { size, children, component } = this.props;
		const className = cx({
			title: true,
			title_size_medium: size === 'medium',
			title_size_small: size === 'small'
		});
		const props = {
			className
		};
		const childrenIsText = typeof children === 'string';
		if (childrenIsText) {
			props.dangerouslySetInnerHTML = {
				__html: children
			};
		}
		const child = childrenIsText ? null : children;

		return (
			React.createElement(component, props, child)
		);
	}
}
