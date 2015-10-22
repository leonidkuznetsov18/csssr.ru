import React from 'react';

import './styles.css';

export default function Airship({image}) {
	const imageUrl = require(`../../images/background/${image}`)
	const textStyle = {
		backgroundImage: `url(${imageUrl})`
	};

	return (
		<div className='airship'>
			<div className='airship__inner'>
				<div className='airship__text' style={textStyle}/>
			</div>
		</div>
	);
};

Airship.propTypes = {
	image: React.PropTypes.string
};
