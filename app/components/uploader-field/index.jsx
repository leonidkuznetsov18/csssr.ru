import React from 'react';
import Field from 'components/field';

import './styles.css';

export default class UploadFilesLink extends React.Component {

	static propTypes = {
		fields: React.PropTypes.object.isRequired,
	}

	render() {
		return (
			<div className='upload-field'>
				<Field
					label='Откуда мы сможем скачать файлы проекта'
					{...this.props.fields.filesLink}
				/>
				<span className='upload-field__info'>
					Вы можете поделиться ссылкой на архив или ссылкой на папку проекта в
					Dropbox, Google Drive, Яндекс.Диске или любом другом облачном сервисе.
				</span>
			</div>
		);
	}
}
