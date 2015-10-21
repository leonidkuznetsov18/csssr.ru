import React from 'react';
import cx from 'classnames';

import './styles.css';

export default class Text extends React.Component {
	static propTypes = {
		children: React.PropTypes.node.isRequired,
		weight: React.PropTypes.string,
		indent: React.PropTypes.bool,
		size: React.PropTypes.string
	}

	render() {
		const { size, children, indent, weight } = this.props;
		const classList = cx({
			text: true,
			text_size_m: size === 'm',
			text_size_s: size === 's',
			text_size_xs: size === 'xs',
			text_size_xxs: size === 'xxs',
			text_weight_bold: weight === 'bold',
			text_noindent: indent === false
		});

		return (
			<p className={classList}>
				{children}
			</p>
		);
	}
}
