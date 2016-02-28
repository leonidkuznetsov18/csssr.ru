import React from 'react';
import Parallax from 'components/parallax';
import Icon from 'components/icon';
import Service from 'components/service';

import './styles.css';

export default function IndexService({ data }) {
	return (
		<div className='index-service'>
			<Parallax speed={0.3}>
				<Icon
					className='index-service__rocket'
					icon='rocket'
				/>
			</Parallax>
			<div className='index-service__services'>
				{data.map((service, item) => (
					<div className='index-service__service' key={item}>
						<Service service={service} />
					</div>
				))}
				<Icon
					className='index-service__satellite'
					icon='satellite'
				/>
			</div>
		</div>
	);
}

IndexService.propTypes = {
	data: React.PropTypes.array.isRequired,
};
