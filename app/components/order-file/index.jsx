import React, {PropTypes} from 'react';
import cx from 'classnames';

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
				<span className='upload-file__name'>
					{name}
				</span>
				<div className={cx('upload-file__progress', {
					'upload-file__progress_completed': progress === 100
				})}>
					<div className='upload-file__progress-line'
						style={{width: `${progress}%`}}
					/>
				</div>
				<div
					className='upload-file__remove-button'
					onClick={remove}
				/>
			</div>
		);
	}
}
