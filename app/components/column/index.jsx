import React from 'react';
import cx from 'classnames';

import './styles.css';

export default class Column extends React.Component {
	static propTypes = {
		children: React.PropTypes.node,
		size: React.PropTypes.number,
		offset: React.PropTypes.number
	}

	static defaultProps = {
		size: 1 / 3,
		offset: 0
	}

	render() {
		const { size, offset } = this.props;
		var classList = cx({
			column: true,
			'column_size_one-third': size === 1 / 3,
			'column_size_two-third': size === 2 / 3,
			'column_size_half': size === 1 / 2,
			'column_offset_one-third': offset === 1 / 3
		});

		return (
			<div className={classList}>
				{this.props.children}
			</div>
		);
	}
}
