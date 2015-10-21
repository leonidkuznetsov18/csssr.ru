import React from 'react';
import cx from 'classnames';

import './styles.css';

export default class Circloader extends React.Component {
	render() {
		const blockClass = cx({
			circloader: true,
			circloader_size_big: this.props.size == 'big',
			circloader_color_white: this.props.color == 'white'
		});

		return (
			<div className={blockClass} />
		);
	}
}
