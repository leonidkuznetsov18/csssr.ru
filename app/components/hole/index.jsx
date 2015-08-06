import React from 'react';

import './styles.css';

export default class Hole extends React.Component {
	render() {
		return (
			<div className='hole'>
				<div className='hole__side hole__side_left'/>
				<div className='hole__side hole__side_right'/>
			</div>
		);
	}
}
