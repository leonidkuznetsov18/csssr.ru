import React from 'react';
import Field from 'components/field';
import FieldFile from 'components/field-file';
import FieldPhone from 'components/field-phone';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import Link from 'components/link';
import Text from 'components/text';

import './styles.css';

export default class JobAnswerForm extends React.Component {
	static propTypes = {
		job: React.PropTypes.string.isRequired,
		form: React.PropTypes.object.isRequired,
		changeAnswerForm: React.PropTypes.func.isRequired,
		sendAnswerForm: React.PropTypes.func.isRequired,
		showFormErrors: React.PropTypes.func.isRequired,
		fileAccept: React.PropTypes.string,
		fileWarning: React.PropTypes.string
	}

	static defaultProps = {
		fileAccept: '',
		fileWarning: 'Файл, пожалуйста!'
	}

	changeField = (value, field) => {
		this.props.changeAnswerForm(this.props.job, {
			[field]: {
				value: value,
				showError: false
			}
		});
	}

	submitForm = (event) => {
		event.preventDefault();

		if (this.props.isValid) {
			this.props.sendAnswerForm(this.props.job);
		} else {
			this.props.showFormErrors(this.props.job);
		}
	}

	changeAge = (event) => {
		const newAge = event.target.value.replace(/\D/g, '').slice(0, 3);
		this.changeField(newAge, 'age');
	}

	fileChange = (event) => {
		this.changeField(event.target.files[0], 'file');
	}

	field(name, label, props, inputProps) {
		const { form } = this.props;

		return (
			<Field
				label={label}
				required
				isWrong={form[name].showError && !form[name].isValid()}
				inputProps={{
					value: form[name].value,
					onChange: e => this.changeField(e.target.value, name),
					...inputProps
				}}
				{...props}
			/>
		)
	}

	render() {
		const { form } = this.props;

		return (
			<form className='job-form' onSubmit={this.submitForm}>
				{this.field('name', 'Имя', {small: true})}
				{this.field('surname', 'Фамилия', {small: true})}
				{this.field('age', 'Возраст', {}, {onChange: this.changeAge})}
				{this.field('city', 'Город')}

				<FieldFile
					label='Тестовый квест'
					required
					isWrong={form.file.showError && !form.file.isValid()}
					inputProps={{
						value: form.file.value.name,
					}}
					onChange={this.fileChange}
					accept={this.props.fileAccept}
					warning={this.props.fileWarning}
				/>

				{this.field('email', 'Электронная почта')}
				{this.field('skype', 'Скайп')}

				<FieldPhone
					label='Контактный телефон'
					required
					isWrong={form.phone.showError && !form.phone.isValid()}
					inputProps={{
						value: form.phone.value,
						onChange: value => this.changeField(value, 'phone'),
					}}
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

				<div className='job-form__submit'>
					<Button mod='form' type='submit'>
						— Поехали!
					</Button>
				</div>
			</form>

		);
	}
}
