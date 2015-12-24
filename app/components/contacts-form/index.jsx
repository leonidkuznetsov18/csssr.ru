import React, {PropTypes} from 'react';

import Field from 'components/field';
import Checkbox from 'components/checkbox';
import Link from 'components/link';
import Button from 'components/button';
import FieldPhone from 'components/field-phone';

import './styles.css';

export default class ContactsForm extends React.Component {
	static propTypes = {
		contacts: PropTypes.object,
		onChangeField: PropTypes.func.isRequired,
	}

	field(name, label, props, inputProps) {
		const {form, onChangeField} = this.props;

		return (
			<Field
				name={name}
				required
				label={label}
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
		const {form, onChangeField} = this.props;

		return (
			<div className='contacts-form'>
				{this.field('name', 'Ваше имя')}
				{this.field('email', 'Электронная почта')}
				{this.field('skype', 'Скайп')}

				<FieldPhone
					name='phone'
					label='Контактный телефон'
					required
					isWrong={form.phone.showError && !form.phone.isValid()}
					inputProps={{
						value: form.phone.value,
						onChange: (value) => onChangeField(value, 'phone'),
					}}
				/>

				<Checkbox
					className='contacts-form__rules'
					checked
					readOnly
					name='confidential'
				>
					Принимаю&nbsp;
					<Link color='blue'
						href='/confidential'
						target='_blank'
					>
						положение об обработке персональных данных
					</Link>
				</Checkbox>

				<div className='contacts-form__button'>
					<Button mod='form' type='submit'>
						— Поехали!
					</Button>
				</div>

			</div>
		);
	}
}
