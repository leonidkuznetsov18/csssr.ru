import React from 'react';

export default class Parallax extends React.Component {
	static propTypes = {
		children: React.PropTypes.node.isRequired,
		min: React.PropTypes.number,
		max: React.PropTypes.number,
		offset: React.PropTypes.number,
		speed: React.PropTypes.number
	}

	static defaultProps = {
		offset: 0,
		speed: 1
	}

	constructor() {
		super();
		this.state = {
			position: 0
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
		const { offset, speed } = this.props;
		let position = (windowOffset - offset) * -1 * speed;

		if (this.props.min !== undefined) {
			position = Math.max(this.props.min, position);
		}

		if (this.props.max !== undefined) {
			position = Math.min(this.props.max, position);
		}

		this.setState({ position });
	}

	render() {
		const style = {
			transform: `translate3d(0, ${this.state.position}px, 0)`
		};

		return React.cloneElement(this.props.children, { style });
	}
}
