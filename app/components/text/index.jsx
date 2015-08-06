import React from 'react';
import cx from 'classnames';

import './styles.css';

export default class Text extends React.Component {
	static propTypes = {
		children: React.PropTypes.node,
		size: React.PropTypes.string
	}

	render() {
		const { size } = this.props;
		const classList = cx({
			text: true,
			text_size_medium: size === 'medium',
			text_size_small: size === 'small'
		});

		return (
			<p className={classList}>
				{this.props.children}
			</p>
		);
	}
}
