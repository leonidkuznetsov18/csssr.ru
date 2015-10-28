import React, {PropTypes} from 'react';
import Field from 'components/field';
import Brick from 'components/brick';
import Checkbox from 'components/checkbox';
import Link from 'components/link';
import Button from 'components/button';

import './styles.css';

export default class OrderFormContacts extends React.Component {
	static propTypes = {
		contacts: PropTypes.object,
		changeContacts: PropTypes.func
	}

	changeField = (value, field) => {
		this.props.changeContacts({
			[field]: {
				value: value,
				showError: false
			}
		});
	}

	render() {
		const {name, email, skype, phone} = this.props.contacts;

		return (
			<div className='order-contacts'>
				<Field
					label='Ваше имя'
					required
					isWrong={name.showError && !name.isValid()}
					inputProps={{
						value: name.value,
						onChange: e => this.changeField(e.target.value, 'name')
					}}
				/>

				<Field
					label='Электронная почта'
					required
					isWrong={email.showError && !email.isValid()}
					inputProps={{
						value: email.value,
						onChange: e => this.changeField(e.target.value, 'email')
					}}
				/>

				<Field
					label='Скайп'
					required
					isWrong={skype.showError && !skype.isValid()}
					inputProps={{
						value: skype.value,
						onChange: e => this.changeField(e.target.value, 'skype')
					}}
				/>

				<Field
					label='Контактный телефон'
					required
					isWrong={phone.showError && !phone.isValid()}
					inputProps={{
						value: phone.value,
						onChange: e => this.changeField(e.target.value, 'phone')
					}}
				/>

				<Checkbox className='order-contacts__rules' checked readOnly>
					Принимаю&nbsp;
					<Link color='blue'
						href='/confidential'
						target='_blank'
					>
						положение об обработке персональных данных
					</Link>
				</Checkbox>

				<div className='order-contacts__button'>
					<Button mod='form' type='submit'>
						— Поехали!
					</Button>
				</div>

			</div>
		);
	}
}
