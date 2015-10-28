import React from 'react';
import cx from 'classnames';

import './styles.css';

export default function Projecter({active, partner, title, content, onClose}) {
	const blockClass = cx({
		projecter: true,
		projecter_state_active: active,
		[`projecter_project_${partner}`]: partner,
	});

	return (
		<div onClick={onClose} className={blockClass} >
			<div onClick={(e) => e.stopPropagation()}>
				<div className='projecter__title'>
					<div
						className='projecter__selection'
						dangerouslySetInnerHTML={{__html: title}}
					/>
				</div>

				<blockquote className='projecter__comment'>
					<div
						className='projecter__selection'
						dangerouslySetInnerHTML={{__html: content}}
					/>
				</blockquote>
			</div>
		</div>
	);
}

Projecter.propTypes = {
	partner: React.PropTypes.string.isRequired,
	active: React.PropTypes.bool,
	title: React.PropTypes.string,
	content: React.PropTypes.string,
};
