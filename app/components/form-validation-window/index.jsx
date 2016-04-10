import React, { PropTypes } from 'react';

import './styles.css';

export default function FormValidationWindow({ title, text, children }) {
	return (
		<div className='form-validation-window'>
			<div className='form-validation-window__attention'>
				{title}
			</div>
			{(children || text) &&
				<div className='form-validation-window__text'>
					{children || text}
				</div>
			}
		</div>
	);
}

FormValidationWindow.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
};

FormValidationWindow.defaultProps = {
	title: 'секундочку!',
	text: '',
};
