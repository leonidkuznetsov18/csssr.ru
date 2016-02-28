import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router';
import Text from 'components/text';

import './styles.css';

export default function OutsourceProject({ partner }) {
	const titleClass = cx({
		'outsource-project__title': true,
		'outsource-project__title_state_active': partner.id,
	});
	const Component = partner.id ? Link : 'div';

	return (
		<div className='outsource-project'>
			<Component className={titleClass} to={`/outsource/${partner.id}`}>
				{partner.name}
			</Component>

			<Text size='s'>
				{partner.text}
			</Text>
		</div>
	);
}

OutsourceProject.propTypes = {
	partner: React.PropTypes.object,
};
