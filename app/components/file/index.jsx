import React from 'react';

import './styles.css';

export default function File({ type, filename, link, size }) {
	return (
		<div className='file'>
			<img src={require(`images/background/${type}.svg`)} />
			<a
				className='file__link'
				href={link}
				target='_blank'
			>
				{filename}
			</a>
			<p className='file__size'>
				{size}
			</p>
		</div>
	);
}

File.propTypes = {
	type: React.PropTypes.oneOf(['doc', 'psd']).isRequired,
	filename: React.PropTypes.string,
	link: React.PropTypes.string,
	size: React.PropTypes.string,
	className: React.PropTypes.string,
};
