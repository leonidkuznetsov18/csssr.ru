import React from 'react';
import cx from 'classnames';

import './styles.css';

export default class Title extends React.Component {
	static propTypes = {
		children: React.PropTypes.node,
		size: React.PropTypes.string
	}

	render() {
		const { size } = this.props;
		const classList = cx({
			title: true,
			title_size_medium: size === 'medium',
			title_size_small: size === 'small'
		});

		return (
			<h1 className={classList}>
				{this.props.children}
			</h1>
		);
	}
}
