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
		submitting: React.PropTypes.bool.isRequired,
	}

	static defaultProps = {
		fileAccept: '',
		fileWarning: 'Файл, пожалуйста!',
	}

	state = {}

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
		const error = this.props.error === 'ERROR' ? {
			title: 'Внимание!',
			text: <span>
				Случилось непредвиденное.
				Пожалуйста, попробуйте отправить форму снова или напишите нам на
				{' '}
				<Link href='mailto:hr@csssr.io'>hr@csssr.io</Link>
			</span>,
		} : this.props.error;

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

				<FieldFile
					fileAccept={this.props.fileAccept}
					label={`Тестовый квест ${this.props.fileAccept === '.zip' ? '(упакованный в ZIP)' : ''}`}
					required
					{...this.props.fields.file}
				/>

				{this.renderField('email', 'Электронная почта')}
				{this.renderField('skype', 'Скайп')}

				<FieldPhone
					label='Контактный телефон'
					required
					{...this.props.fields.phone}
				/>

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
