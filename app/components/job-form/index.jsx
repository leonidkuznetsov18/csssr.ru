import React from 'react';
import cx from 'classnames';
import Field from 'components/field';
import FieldFile from 'components/field-file';
import FieldPhone from 'components/field-phone';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import Circloader from 'components/circloader';
import Link from 'components/link';
import Text from 'components/text';
import FormValidationWindow from 'components/form-validation-window';

import './styles.css';

export default class JobAnswerForm extends React.Component {
	static propTypes = {
		fields: React.PropTypes.object.isRequired,
		error: React.PropTypes.any,
		submitting: React.PropTypes.bool.isRequired,
		fileAccept: React.PropTypes.string.isRequired,
		handleSubmit: React.PropTypes.func.isRequired,
	}

	static defaultProps = {
		fileAccept: '',
		fileWarning: 'Файл, пожалуйста!',
	}

	renderField(name, label, props) {
		return (
			<Field
				required
				label={label}
				name={name}
				maxLength='100'
				{...props}
				{...this.props.fields[name]}
			/>
		);
	}

	render() {
		const buttonClass = cx({
			'job-form__submit': true,
			'job-form__submit_disabled': this.props.submitting,
		});
		const loaderClass = cx({
			'job-form__loader': true,
			'job-form__loader_active': this.props.submitting,
		});

		const responseError = this.props.error;
		const error = responseError === 'ERROR' ? {
			title: 'Внимание!',
			text: <span>
				Случилось непредвиденное.
				Пожалуйста, попробуйте отправить форму снова или напишите нам на
				{' '}
				<Link href='mailto:hr@csssr.io'>hr@csssr.io</Link>
			</span>,
		} : responseError;

		return <form noValidate className='job-form' onSubmit={this.props.handleSubmit}>
			{
				(responseError && (responseError.text || responseError.title) ||
				 responseError) &&
				<div className='job-form__error'>
					<FormValidationWindow {...error} />
				</div>
			}
			{this.renderField('firstname', 'Имя', {
				small: true,
			})}
			{this.renderField('lastname', 'Фамилия', {
				small: true,
			})}
			{this.renderField('age', 'Возраст')}
			{this.renderField('location', 'Город')}

			<FieldFile
				required
				label={`Тестовый квест ${this.props.fileAccept === '.zip' ? '(упакованный в ZIP)' : ''}`}
				fileAccept={this.props.fileAccept}
				{...this.props.fields.file}
			/>

			{this.renderField('email', 'Электронная почта')}
			{this.renderField('skype', 'Скайп')}

			<FieldPhone
				required
				label='Контактный телефон'
				{...this.props.fields.phone}
			/>

			<Checkbox className='' checked readOnly>
				<Text size='xs' weight='normal'>
					Принимаю&nbsp;
					<Link color='blue'
						href='/confidential'
						target='_blank'
					>
						положение об обработке персональных данных
					</Link>
				</Text>
			</Checkbox>

			<div className={buttonClass}>
				<Button mod='form' type='submit'>
					— Поехали!
				</Button>
			</div>

			<div className={loaderClass}>
				<Circloader/>
			</div>
		</form>;
	}
}
