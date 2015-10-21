import React from 'react';
import Icon from 'components/icon';
import Text from 'components/text';
import VkGroup from 'components/vk-group';

import './styles.css';

export default function JobsWidget() {
	return (
		<div className='jobs-widget'>
			<div className='jobs-widget__layout'>
				<VkGroup />
			</div>

			<div className='jobs-widget__hint'>
				<Icon className='jobs-widget__arrow'
					icon='curve-arrow'
				/>

				<Text size='xs'>
					Следите за новыми вакансиями
				</Text>
			</div>
		</div>
	);
}
