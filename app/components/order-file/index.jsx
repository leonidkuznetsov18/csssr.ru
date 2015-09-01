import React from 'react';

import './styles.css';

export default class FilesBlock extends React.Component {
	render() {
		const random = 'random';
		const file = this.props.data;
		if (!file || !file.name) return <div>Error</div>

		return (
			<div className={'file-place ' + random}>
				<div className='file-place__icon' />
				<div className='file-place__progress-complieted' />
				<div className={'file-place__name ' + random}>{file.name}</div>
				<div className={'file-place__progress ' + random}>
					<div className={'file-place__progress-line ' + random} />
				</div>
				<div
					className='file-place__close'
					onClick={this.props.delete.bind(null, file.key)}
				/>
			</div>
		);
	}
}
