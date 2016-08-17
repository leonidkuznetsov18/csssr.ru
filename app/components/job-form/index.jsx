import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import Field from 'components/field';
import FieldFile from 'components/field-file';
import FieldPhone from 'components/field-phone';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import Circloader from 'components/circloader';
import Link from 'components/link';
import FormValidationWindow from 'components/form-validation-window';

import styles from './styles.css';

class JobForm extends React.Component {
	static propTypes = {
		error: React.PropTypes.any,
		fields: React.PropTypes.object.isRequired,
		fileAccept: React.PropTypes.string.isRequired,
		handleSubmit: React.PropTypes.func.isRequired,
		options: React.PropTypes.object,
		submitting: React.PropTypes.bool.isRequired,
	}

	static defaultProps = {
		fields: {},
		fileAccept: '',
	}

	renderField(name, label, props) {
		return (
			<Field
				label={label}
				maxLength='100'
				name={name}
				required
				{...props}
				{...this.props.fields[name]}
			/>
		);
	}

	render() {
		const buttonClass = cx({
			[styles.submit]: true,
			[styles.submit_disabled]: this.props.submitting,
		});
		const loaderClass = cx({
			[styles.loader]: true,
			[styles.loader_active]: this.props.submitting,
		});
		const { error } = this.props;

		const { fileAccept, options: { hasResume, hasPortfolio, hasComment } } = this.props;
		let questText = '';

		if (fileAccept === '.zip') {
			questText = '(упакованный в ZIP)';
		} else if (fileAccept === '.docx') {
			questText = '(в формате DOCX)';
		} else if (fileAccept === '.xlsx') {
			questText = '(в формате XLSX)';
		} else if (fileAccept === '.sketch') {
			questText = '(в формате Sketch)';
		} else if (fileAccept === '.jpg') {
			questText = '(в формате JPG)';
		}

		return (
			<form
				className={styles.root}
				noValidate
				onSubmit={this.props.handleSubmit}
			>
				{error &&
					<div className={styles.error}>
						<FormValidationWindow {...error} />
					</div>
				}
				{this.renderField('firstname', 'Имя', {
					small: true,
				})}
				{this.renderField('lastname', 'Фамилия', {
					small: true,
				})}
				{this.renderField('age', 'Возраст', {
					maxLength: 3,
				})}
				{this.renderField('location', 'Город')}
				{hasResume && this.renderField('resume', 'Ссылка на резюме')}
				{hasPortfolio && this.renderField('portfolio', 'Ссылка на портфолио')}

				<FieldFile
					fileAccept={fileAccept}
					label={`Тестовый квест ${questText}`}
					required
					{...this.props.fields.file}
				/>

				{this.renderField('email', 'Электронная почта')}
				{this.renderField('skype', 'Скайп')}

				<FieldPhone
					autoComplete='off'
					label='Контактный телефон'
					required
					{...this.props.fields.phone}
				/>


				{hasComment && this.renderField('comment', 'Комментарий', {
					required: false,
					maxLength: 3000,
					type: 'textarea',
				})}

				<Checkbox
					checked
					readOnly
					small
				>
					Принимаю&nbsp;
					<Link
						color='blue'
						href='/confidential'
						target='_blank'
						underline
					>
						положение об обработке персональных данных
					</Link>
				</Checkbox>

				<div className={buttonClass}>
					<Button mod='form' type='submit'>
						— Поехали!
					</Button>
				</div>

				<div className={loaderClass}>
					<Circloader />
				</div>
			</form>
		);
	}
}

export default withStyles(JobForm, styles);
