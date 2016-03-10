import React from 'react';
import cx from 'classnames';

import Field from 'components/field';
import Checkbox from 'components/checkbox';
import Link from 'components/link';
import Button from 'components/button';
import Circloader from 'components/circloader';
import FieldPhone from 'components/field-phone';
import FormValidationWindow from 'components/form-validation-window';

import './styles.css';

export default class ContactsForm extends React.Component {
	static propTypes = {
		fields: React.PropTypes.object.isRequired,
		error: React.PropTypes.object.isRequired,
		submitting: React.PropTypes.bool.isRequired,
		handleSubmit: React.PropTypes.func.isRequired,
	}

	static defaultProps = {
		error: {},
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
		const buttonClass = cx({
			'contacts-form__submit': true,
			'contacts-form__submit_disabled': this.props.submitting,
		});
		const loaderClass = cx({
			'contacts-form__loader': true,
			'contacts-form__loader_active': this.props.submitting,
		});

		return (
			<form noValidate className='contacts-form' onSubmit={this.props.handleSubmit}>
				{(this.props.error.text || this.props.error.title) &&
					<div className='contacts-form__error'>
						<FormValidationWindow {...this.props.error} />
					</div>
				}

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

				<div className={buttonClass}>
					<Button mod='form' type='submit'>
						— Поехали!
					</Button>
				</div>

				<div className={loaderClass}>
					<Circloader/>
				</div>
			</form>
		);
	}
}
