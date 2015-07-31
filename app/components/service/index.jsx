import React from 'react';
import Button from 'components/button';
import './styles.css';
const data = require('data/service.json');
export default class Service extends React.Component {
	static propTypes = {
		index: React.PropTypes.number
	}

	render() {
		const service = data[this.props.index];

		return (
			<div className='service'>
				<h2 className='service__title'>
					{service.title}
				</h2>
				<h4 className='service__subtitle'>
					{service.subtitle}
				</h4>
				<Button to={service.link}>
					{service.linkText}
				</Button>
				<p className='service__text'>
					{service.description}
				</p>
			</div>
		);
	}
}
