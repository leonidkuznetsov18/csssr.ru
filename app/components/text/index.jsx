import React from 'react';
import cx from 'classnames';

import './styles.css';

export default class Text extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.element,
			React.PropTypes.array,
		]),
		weight: React.PropTypes.string,
		size: React.PropTypes.string,
		color: React.PropTypes.string,
		indent: React.PropTypes.bool
	}

	static defaultProps = {
		indent: true
	}

	render() {
		const { size, children, indent, color, weight } = this.props;
		const classList = cx({
			text: true,
			text_size_m: size === 'm',
			text_size_s: size === 's',
			text_size_xs: size === 'xs',
			text_size_xxs: size === 'xxs',
			text_weight_bold: weight === 'bold',
			text_noindent: indent === false,
			text_color_blue: color === 'blue'
		});

		return (
			<p className={classList}>
				{children}
			</p>
		);
	}
}
