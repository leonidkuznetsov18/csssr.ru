import React from 'react';
import cx from 'classnames';

import './styles.css';

export default class Text extends React.Component {
	static propTypes = {
		children: React.PropTypes.string,
		size: React.PropTypes.string
	}

	render() {
		const { size, children } = this.props;
		const classList = cx({
			text: true,
			text_size_medium: size === 'medium',
			text_size_small: size === 'small',
			text_size_extrasmall: size === 'extrasmall'
		});

		return (
			<p
				className={classList}
				dangerouslySetInnerHTML={{__html: children}}
			/>
		);
	}
}
