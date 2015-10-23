import React, {PropTypes} from 'react';
import File from 'components/order-file';

import './styles.css';

export default class FilesBlock extends React.Component {

	static propTypes = {
		files: PropTypes.array.isRequired,
		removeFile: PropTypes.func.isRequired
	}


	render() {
		const files = this.props.files.map(file => (
			<File
				key={file.id}
				id={file.id}
				name={file.name}
				progress={file.progress}
				remove={() => this.props.removeFile(file.id)}
			/>
		));

		return (
			<div className='files'>
				{files}
			</div>
		);
	}
}
