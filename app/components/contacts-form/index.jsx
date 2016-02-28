import React from 'react';

import Field from 'components/field';
import Checkbox from 'components/checkbox';
import Link from 'components/link';
import Button from 'components/button';
import FieldPhone from 'components/field-phone';

import './styles.css';

export default class ContactsForm extends React.Component {
	static propTypes = {
		fields: React.PropTypes.object.isRequired,
		handleSubmit: React.PropTypes.func.isRequired,
	}

	renderField(name, label, props) {
		return (
			<Field
				required
				name={name}
				label={label}
				maxLength='100'
				{...props}
				{...this.props.fields[name]}
			/>
		);
	}

	render() {
		return (
			<form noValidate className='contacts-form' onSubmit={this.props.handleSubmit}>
				{this.renderField('name', 'Ваше имя')}
				{this.renderField('email', 'Электронная почта')}
				{this.renderField('skype', 'Скайп')}

				<FieldPhone
					required
					name='phone'
					label='Контактный телефон'
					{...this.props.fields.phone}
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

			</form>
		);
	}
}
