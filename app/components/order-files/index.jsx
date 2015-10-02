import React, {PropTypes} from 'react';
import File from 'components/order-file';

import './styles.css';

export default class FilesBlock extends React.Component {

	static propTypes = {
		files: PropTypes.array.isRequired,
		deleteFile: PropTypes.func
	}

	constructor(props) {
		super(props);
		this.state = {
			progress: 0
		};
	}


	setProgress(value, force) {
		if (value < this.lastValue && !force) return false;
		this.lastValue = value < 100 ? value : 0;

		this.setState({
			progress: value <= 100 ? value : 0
		});
		return true;
	}


	render() {
		const files = this.props.files.map((file) => {
			return (
				<File
					key={file.key}
					id={file.key}
					name={file.name}
					progress={file.progress}
					delete={this.props.deleteFile}
					setGlobalProgress={this.setProgress.bind(this)}
				/>
			);
		});

		const p = this.state.progress;
		const paddingTop = (p === 0 || p === 100) ? 0 : 47;
		const paddingBottom = 10;

		return (
			<div
				id='files-block'
				className='order__main__content__upload__files'
				style={{
					paddingTop: paddingTop,
					height: 34 * (Math.ceil(this.props.files.length / 3)) + paddingTop + paddingBottom
				}}
			>
				<div id='fileHeight' className='fileHeight'>
					<div
						id='progress'
						className='order__main__content__upload__line'
					>
						<div
							id='bar'
							className='order__main__content__upload__line-status'
							style={{width: this.state.progress + '%'}}
						/>
					</div>

					<div
						id='pnlUploadedFiles'
						className='order__main__content__upload__uploaded-files'
					>
						{files}
					</div>
				</div>
			</div>
		);
	}
}
