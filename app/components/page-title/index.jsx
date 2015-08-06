import React from 'react';
import cx from 'classnames';

import './styles.css';

export default class PageTitle extends React.Component {
	static propTypes = {
		children: React.PropTypes.node,
		size: React.PropTypes.string
	}

	render() {
		const { size } = this.props;
		const classList = cx({
			'page-title': true,
			'page-title_size_medium': size === 'medium',
			'page-title_size_small': size === 'small'
		});

		return (
			<h1 className={classList}>
				{this.props.children}
			</h1>
		);
	}
}
