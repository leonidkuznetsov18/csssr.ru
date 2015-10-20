import React, {PropTypes} from 'react';
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


	changeField = (e, field) => {
		this.props.changeAnswerForm(this.props.job, {
			[field]: {
				value: e.target.value,
				showError: false
			}
		});
	}


	submitForm = e => {
		e.preventDefault();
		this.props.showFormErrors(this.props.job);
		this.props.sendAnswerForm(this.props.job);
	}


	render() {
		const { fileInitialValue, fileAccept, fileWarning } = this.props;

		return (
			<form className='answer__form' onSubmit={this.submitForm}>
				<FormGroup
					label='Имя'
					required
					className='answer__inline'
					wrong={this.props.form.name.showError && !this.props.form.name.isValid()}
					inputProps={{
						className: 'answer__input',
						value: this.props.form.name.value,
						onChange: e => this.changeField(e, 'name')
					}}
				/>

				<FormGroup
					label='Фамилия'
					required
					className='answer__inline'
					wrong={this.props.form.surname.showError && !this.props.form.surname.isValid()}
					inputProps={{
						className: 'answer__input',
						value: this.props.form.surname.value,
						onChange: e => this.changeField(e, 'surname')
					}}
				/>

				<FormGroup
					label='Возраст'
					required
					wrong={this.props.form.age.showError && !this.props.form.age.isValid()}
					inputProps={{
						value: this.props.form.age.value,
						onChange: e => this.changeField(e, 'age')
					}}
				/>

				<FormGroup
					label='Город'
					required
					wrong={this.props.form.city.showError && !this.props.form.city.isValid()}
					inputProps={{
						value: this.props.form.city.value,
						onChange: e => this.changeField(e, 'city')
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
						onChange: e => this.changeField(e, 'email')
					}}
				/>

				<FormGroup
					label='Скайп'
					required
					wrong={this.props.form.skype.showError && !this.props.form.skype.isValid()}
					inputProps={{
						value: this.props.form.skype.value,
						onChange: e => this.changeField(e, 'skype')
					}}
				/>

				<FormGroup
					label='Контактный телефон'
					required
					wrong={this.props.form.phone.showError && !this.props.form.phone.isValid()}
					inputProps={{
						value: this.props.form.phone.value,
						onChange: e => this.changeField(e, 'phone')
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
