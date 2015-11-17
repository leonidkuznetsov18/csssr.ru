import React from 'react';

import Title from 'components/title';
import Text from 'components/text';

import OutsourceProjects from 'components/outsource-projects';
import OutsourceService from 'components/outsource-service';

import './styles.css';

export default function OutsourceContent({data, projects}) {
	return (
		<div className='outsource-content'>
			<div className='outsource-content__events'>
				<div className='outsource-content__title outsource-content__title_events'>
					<Title size='medium' component='h2' indent={false}>
						{data.events.title}
					</Title>
				</div>

				<div className='outsource-content__cols'>
					{data.events.cols.map((event, index) => (
						<OutsourceService {...event} key={index} />
					))}
				</div>
			</div>

			<div className='outsource-content__success'>
				<div className='outsource-content__title'>
					<Title size='medium' component='h2' indent={false}>
						{data.success.title}
					</Title>
				</div>

				<div className='outsource-content__text'>
					<Text>
						{data.success.description}
					</Text>
				</div>

				<div className='outsource-content__projects'>
					<OutsourceProjects projects={projects}/>
				</div>
			</div>
		</div>
	);
}

OutsourceContent.propTypes = {
	data: React.PropTypes.object.isRequired,
};
