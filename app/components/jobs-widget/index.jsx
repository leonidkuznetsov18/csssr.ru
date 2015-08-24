import React from 'react';
import Icon from 'components/icon';
import VkGroup from 'components/vk-group';
import './styles.css';

export default class JobsWidget extends React.Component {
	render() {
		return (
			<div className='jobs-widget'>
				<div className='jobs-widget__loader'>

				</div>
				<div className='jobs-widget__layout'>
					<VkGroup />
				</div>
				<div className='jobs-widget__hint'>
					<Icon className='jobs-widget__hint-arrow' icon='curve-arrow' />
					<div className='jobs-widget__hint-text'>
						Следите за новыми вакансиями
					</div>
				</div>
			</div>
		);
	}
}
