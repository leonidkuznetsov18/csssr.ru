import React from 'react';
import Button from 'components/button';
import './styles.css';

export default function Service({service}) {
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

Service.propTypes = {
	service: React.PropTypes.object
};
