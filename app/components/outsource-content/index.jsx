import React from 'react';
import Success from 'components/outsource-success';

import './styles.css';

export default class OutsourceContent extends React.Component {

	static propTypes = {
		data: React.PropTypes.object.isRequired
	}


	render() {
		const data = this.props.data;

		const events = data.events.cols.map((event, i) => {
			return (
				<div key={i} className='outsource__cols-item'>
					<div className={`outsource__cols-img outsource__cols-${event.class}`} />
					<h2 className='outsource__cols-title'>{event.title}</h2>
					<p className='outsource__cols-text'>{event.text}</p>
				</div>
			);
		});

		return (
			<div className='outsource__content'>
				<div className='outsource__events'>
					<h2 className='outsource__subtitle outsource__events-title'>
						{data.events.title}
					</h2>

					<div className='outsource__cols'>
						{events}
						<img
							className='outsource-power__cloud outsource-power__cloud_top'
							src={require('images/background/cloudx3.svg')}
							alt='cloud'
							height={139}
							width={212}
						/>

					</div>

				</div>
				<Success
					title={data.success.title}
					description={data.success.description}
				/>
			</div>
		);
	}
}
