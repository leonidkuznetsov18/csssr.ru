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
		job: React.PropTypes.object.isRequired,
		onChangeField: React.PropTypes.func.isRequired,
		onChangeNumberField: React.PropTypes.func.isRequired,
		onChangeFileField: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func.isRequired,
		fileAccept: React.PropTypes.string,
		fileWarning: React.PropTypes.string,
		isValid: React.PropTypes.bool,
	}

	static defaultProps = {
		fileAccept: '',
		fileWarning: 'Файл, пожалуйста!',
	}

	field(name, label, props, inputProps) {
		const {form} = this.props.job;
		const {onChangeField} = this.props;

		return (
			<Field
				required
				label={label}
				name={name}
				isWrong={form[name].showError && !form[name].isValid()}
				inputProps={{
					value: form[name].value,
					onChange: (e) => onChangeField(e.target.value, name),
					...inputProps,
				}}
				{...props}
			/>
		);
	}

	render() {
		const {form} = this.props.job;
		const {
			onChangeField,
			onChangeNumberField,
			onChangeFileField,
			onSubmit,
		} = this.props;

		return (
			<form className='job-form' onSubmit={onSubmit}>
				{this.field('firstname', 'Имя', {
					small: true,
				})}
				{this.field('lastname', 'Фамилия', {
					small: true,
				})}
				{this.field('age', 'Возраст', {}, {
					onChange: (e) => onChangeNumberField(e, 'age'),
				})}
				{this.field('city', 'Город')}

				<FieldFile
					label='Тестовый квест'
					required
					isWrong={form.file.showError && !form.file.isValid()}
					inputProps={{
						value: form.file.value.name,
					}}
					onChange={onChangeFileField}
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
						onChange: (value) => onChangeField(value, 'phone'),
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
