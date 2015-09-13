import React from 'react';

import './styles.css';

export default class Tooltip extends React.Component {

	static propTypes = {
		className: React.PropTypes.string,
		text: React.PropTypes.string,
	}


	render() {
		return (

			<div className={'tooltip-wrapper' +
				(this.props.className ? (' ' + this.props.className) : '')}>
				&nbsp;
				<span className='tooltip' tabIndex='-1'>?</span>
				<div className='tooltip__full' tabIndex='-1'>
					{this.props.text}
				</div>
				<div className='tooltip__mask' />
			</div>

		);
	}
}
