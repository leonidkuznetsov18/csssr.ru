import React from 'react';

import './styles.css';

export default function Airship({ image, children }) {
	const imageUrl = require(`../../images/background/${image}`);
	const textStyle = {
		backgroundImage: `url(${imageUrl})`,
	};

	return (
		<div className='airship'>
			<div className='airship__inner'>
				<div className='airship__text' style={textStyle}/>
			</div>
			{children &&
				<div className='airship__content'>
					{children}
				</div>
			}
		</div>
	);
}

Airship.propTypes = {
	image: React.PropTypes.string,
	children: React.PropTypes.element,
};
