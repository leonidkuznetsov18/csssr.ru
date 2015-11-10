import React from 'react';
import Button from 'components/button';
import Text from 'components/text';
import { Link } from 'react-router';
import './styles.css';

export default function Service({service}) {
	return (
		<div className='service'>
			<Link className='service__title' to={service.link}>
				{service.title}
			</Link>
			<h4 className='service__subtitle'>
				{service.subtitle}
			</h4>
			<Button to={`${service.link}#form`} component={Link}>
				{service.linkText}
			</Button>
			<div className='service__text'>
				<Text size='s' color='grey'>
					{service.description}
				</Text>
			</div>
		</div>
	);
}

Service.propTypes = {
	service: React.PropTypes.object
};
