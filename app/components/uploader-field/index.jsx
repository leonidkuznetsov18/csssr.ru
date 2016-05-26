import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Field from 'components/field';

import styles from './styles.css';

function UploaderField({ fields = {} }) {
	return (
		<div className={styles.root}>
			<Field
				label='Откуда мы сможем скачать файлы проекта'
				{...fields.filesLink}
			/>
			<span className={styles.info}>
				Вы можете поделиться ссылкой на архив или ссылкой на папку проекта в
				Dropbox, Google Drive, Яндекс.Диске или любом другом облачном сервисе.
			</span>
		</div>
	);
}

UploaderField.propTypes = {
	fields: React.PropTypes.object.isRequired,
};

export default withStyles(UploaderField, styles);
