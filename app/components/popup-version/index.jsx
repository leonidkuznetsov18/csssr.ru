import React, {PropTypes} from 'react';


import './styles.css';

export default function PopupVersion(props) {

	const img = (
		<img
			className='timeline-popup__image'
			src={'http://csssr.ru/' + props.version.url}
		/>
	);

	return (
		<div className='timeline-popup'>
			<div
				className='timeline-popup__close'
				onClick={props.goToPage('/timeline')}
			></div>
			<div className='timeline-popup__content'>
				{img}
			</div>
		</div>
	);
}


PopupVersion.propTypes = {
	goToPage: PropTypes.func.isRequired
};
