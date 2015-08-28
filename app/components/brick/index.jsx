import React from 'react';

import './styles.css';

export default class Brick extends React.Component {

	render() {
		return (
			<button className='brick' type='submit' >
				<span className='brick__text'>{this.props.text}</span>
				<span className='brick__shadow'></span>
			</button>
		);
	}

}
