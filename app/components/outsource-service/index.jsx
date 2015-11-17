import React from 'react';
import cx from 'classnames';

import Title from 'components/title';
import Text from 'components/text';

import './styles.css';

export default function OutsourceService({type, title, text}) {
	const imageClass = cx({
		'outsource-service__image': true,
		[`outsource-service__image_type_${type}`]: type,
	});

	return (
		<div className='outsource-service'>
			<div className={imageClass} />

			<div className='outsource-service__title'>
				<Title size='small' component='h2' indent={false}>
					{title}
				</Title>
			</div>

			<Text size='s'>
				{text}
			</Text>
		</div>
	);
}

OutsourceService.propTypes = {
	type: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
	text: React.PropTypes.string.isRequired,
};
