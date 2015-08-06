import React from 'react';
import cx from 'classnames';

import './styles.css';

export default class Title extends React.Component {
	static propTypes = {
		children: React.PropTypes.string,
		size: React.PropTypes.string
	}

	render() {
		const { size, children } = this.props;
		const classList = cx({
			title: true,
			title_size_medium: size === 'medium',
			title_size_small: size === 'small'
		});

		return (
			<h1 className={classList}
				dangerouslySetInnerHTML={{__html: children}}
			/>
		);
	}
}
