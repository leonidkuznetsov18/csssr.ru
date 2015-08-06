import React from 'react';

import './styles.css';

export default class Airship extends React.Component {
	static propTypes = {
		image: React.PropTypes.string
	}

	constructor(props) {
		super();
		this.state = {
			image: require(`../../images/background/${props.image}`)
		};
	}

	render() {
		const textStyle = {
			backgroundImage: `url(${this.state.image})`
		};

		return (
			<div className='airship'>
				<div className='airship__inner'>
					<div className='airship__text' style={textStyle}/>
				</div>
			</div>
		);
	}
}
