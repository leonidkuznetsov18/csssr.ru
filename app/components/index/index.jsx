import React from 'react';
import Icon from 'components/icon';
import Service from 'components/service';

import './styles.css';

export default class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			rocketPosition: 0
		};
		this.scrollHandler = this.scrollHandler.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.scrollHandler);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollHandler);
	}

	scrollHandler() {
		const windowOffset = window.pageYOffset;
		const position = Math.min(200, windowOffset * -0.3);
		this.setState({
			rocketPosition: position
		});
	}

	render() {
		const rocketStyle = {
			transform: `translate3d(0, ${this.state.rocketPosition}px, 0)`
		};

		return (
			<div className='index'>
				<Icon
					className='index__header'
					icon='mission'
				/>
				<Icon
					style={rocketStyle}
					className='index__rocket'
					icon='rocket'
				/>
				<div className='index__services'>
					<div className='index__service'>
						<Service index={0} />
					</div>
					<div className='index__service'>
						<Service index={1} />
					</div>
					<Icon
						className='index__satellite'
						icon='satellite'
					/>
				</div>
			</div>
		);
	}
}
