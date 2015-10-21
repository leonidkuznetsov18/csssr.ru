import React, {PropTypes} from 'react';
import spliter from 'helpers/spliter';
import FormGroup from 'components/form-group-true';
import FormGroupFile from 'components/form-group-file';
import Brick from 'components/brick';
import './styles.css';


export default class JobAnswerForm extends React.Component {

	static propTypes = {
		job: PropTypes.string.isRequired,
		form: PropTypes.object.isRequired,
		changeAnswerForm: PropTypes.func.isRequired,
		sendAnswerForm: PropTypes.func.isRequired,
		showFormErrors: PropTypes.func.isRequired,
		fileInitialValue: PropTypes.string,
		fileAccept: PropTypes.string,
		fileWarning: PropTypes.string
	}


	static defaultProps = {
		fileInitialValue: 'Прикрепите решение',
		fileAccept: '',
		fileWarning: 'Файл, пожалуйста!'
	}


	constructor(props) {
		super(props);
		this.state = {
			inputAgeIsFocused: false
		};
	}


	changeField = (value, field) => {
		this.props.changeAnswerForm(this.props.job, {
			[field]: {
				value: value.trim(),
				showError: false
			}
		});
	}


	submitForm = e => {
		e.preventDefault();
		this.props.showFormErrors(this.props.job);
		this.props.sendAnswerForm(this.props.job);
	}


	changeAge = e => {
		const newAge = e.target.value.replace(/\D/g, '').slice(0, 3);
		this.changeField(newAge, 'age');
	}


	changePhone = e => {
		let newPhone = e.target.value
			.replace(/\D/g, '')
			.replace(/^8$/, '7')
			.replace(/^[^379]$/, '')
			.replace(/^9[^9]/, '9')
			.replace(/^99[^5]/, '99')
			.slice(0, 12);

		if (newPhone[0] === '7') {
			newPhone = newPhone.slice(0, 11);
		}
		this.changeField(newPhone, 'phone');
	}


	formatPhone = value => {
		value = () => {
			switch (value.slice(0, 1)) {
			case '3':
				return spliter(value, [3, 2, 3, 2, 2]);
			case '7':
				return spliter(value, [1, 3, 3, 2, 2]);
			case '9':
				return spliter(value, [3, 3, 3, 3]);
			default:
				return value;
			}
		}();
		return `${(value || this.state.inputAgeIsFocused) ? '+' : ''}${value}`;
	}


	render() {
		const { fileInitialValue, fileAccept, fileWarning } = this.props;

		return (
			<form className='answer__form' onSubmit={this.submitForm}>
				<FormGroup
					label='Имя'
					required
					wrong={this.props.form.name.showError && !this.props.form.name.isValid()}
					size='half'
					inputProps={{
						value: this.props.form.name.value,
						onChange: e => this.changeField(e.target.value, 'name')
					}}
				/>

				<FormGroup
					label='Фамилия'
					required
					size='half'
					wrong={this.props.form.surname.showError && !this.props.form.surname.isValid()}
					inputProps={{
						value: this.props.form.surname.value,
						onChange: e => this.changeField(e.target.value, 'surname')
					}}
				/>

				<FormGroup
					label='Возраст'
					required
					wrong={this.props.form.age.showError && !this.props.form.age.isValid()}
					inputProps={{
						value: this.props.form.age.value,
						onChange: this.changeAge
					}}
				/>

				<FormGroup
					label='Город'
					required
					wrong={this.props.form.city.showError && !this.props.form.city.isValid()}
					inputProps={{
						value: this.props.form.city.value,
						onChange: e => this.changeField(e.target.value, 'city')
					}}
				/>

				<FormGroupFile
					label='Тестовый квест'
					required
					initialValue={fileInitialValue}
					accept={fileAccept}
					warning={fileWarning}
					showWarning={false}
				/>

				<FormGroup
					label='Электронная почта'
					required
					wrong={this.props.form.email.showError && !this.props.form.email.isValid()}
					inputProps={{
						value: this.props.form.email.value,
						onChange: e => this.changeField(e.target.value, 'email')
					}}
				/>

				<FormGroup
					label='Скайп'
					required
					wrong={this.props.form.skype.showError && !this.props.form.skype.isValid()}
					inputProps={{
						value: this.props.form.skype.value,
						onChange: e => this.changeField(e.target.value, 'skype')
					}}
				/>

				<FormGroup
					label='Контактный телефон'
					required
					wrong={this.props.form.phone.showError && !this.props.form.phone.isValid()}
					inputProps={{
						value: this.formatPhone(this.props.form.phone.value),
						onChange: this.changePhone,
						onFocus: () => this.setState({inputAgeIsFocused: true}),
						onBlur: () => this.setState({inputAgeIsFocused: false})
					}}
				/>

				<div className='confirm-rules'>
					<label className='label checkbox label-last'>
						<span className='corner-cover'>Принимаю&nbsp;</span>
					</label>
					<a
						className='label-last-link blue-link'
						href='/confidential'
						target='_blank'
					>положение об обработке персональных данных</a>
				</div>

				<div className='answer__submit'>
					<Brick text='— Поехали!' />
				</div>

			</form>

		);
	}
}
