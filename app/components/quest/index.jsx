import React from 'react';
import cx from 'classnames';
import File from 'components/file';

import './styles.css';

export default function Quest({children, file, horizon}) {
	const blockClass = cx({
		quest: true,
		quest_horizon: horizon
	});

	return (
		<div className={blockClass}>
			<div className="quest__file">
				<File {...file} />
			</div>
			<img
				className='quest__scissors'
				src={require('images/background/cut.svg')}
			/>
			{children}
		</div>
	);
}

Quest.propTypes = {
	children: React.PropTypes.node.isRequired,
	file: React.PropTypes.object.isRequired,
	horizon: React.PropTypes.bool,
}