import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Field from 'components/field';

import styles from './styles.css';

class UploadFilesLink extends React.Component {

	static propTypes = {
		fields: React.PropTypes.object.isRequired,
	}

	render() {
		return (
			<div className={styles.root}>
				<Field
					label='Откуда мы сможем скачать файлы проекта'
					{...this.props.fields.filesLink}
				/>
				<span className={styles.info}>
					Вы можете поделиться ссылкой на архив или ссылкой на папку проекта в
					Dropbox, Google Drive, Яндекс.Диске или любом другом облачном сервисе.
				</span>
			</div>
		);
	}
}

export default withStyles(UploadFilesLink, styles);
