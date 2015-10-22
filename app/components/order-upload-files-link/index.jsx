import React, {PropTypes} from 'react';
import FormGroup from 'components/form-group-true';

import './styles.css';

const data = require('data/order-uploader.json').link;

export default class UploadFilesLink extends React.Component {

	static propTypes = {
		changeFilesLink: PropTypes.func.isRequired,
		filesLink: PropTypes.string
	}


	render() {
		return (
			<div className='upload-link'>
				<FormGroup
					label={data.title}
					inputProps={{
						value: this.props.filesLink,
						onChange: e => this.props.changeFilesLink(e.target.value)
					}}
				/>
				<span className='upload-link__info'>{data.info}</span>
			</div>
		);
	}
}
