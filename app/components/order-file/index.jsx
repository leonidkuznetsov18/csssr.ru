import React, {PropTypes} from 'react';

import './styles.css';

export default class File extends React.Component {

	static propTypes = {
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		progress: PropTypes.number.isRequired,
		remove: PropTypes.func
	}


	render() {
		const {name, id, progress, remove} = this.props;

		return (
			<div className='upload-file'>
				<div className='upload-file__name'>
					{name}
				</div>
				<div
					className='upload-file__remove-button'
					onClick={remove}
				/>
				{progress}%
			</div>
		);
	}
}
