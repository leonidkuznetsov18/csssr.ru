import React, {PropTypes} from 'react';
import pureRender from 'helpers/pureRender';
import Field from 'components/field';
import Brick from 'components/brick';
import Checkbox from 'components/checkbox';
import Link from 'components/link';
import Button from 'components/button';

import './styles.css';

@pureRender
export default class OrderFormContacts extends React.Component {
	static propTypes = {
		contacts: PropTypes.object,
		changeContacts: PropTypes.func
	}

	changeField = e => {
		this.props.changeContacts({
			[e.target.name]: {
				value: e.target.value,
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
						name: 'name',
						onChange: this.changeField
					}}
				/>

				<Field
					label='Электронная почта'
					required
					isWrong={email.showError && !email.isValid()}
					inputProps={{
						value: email.value,
						name: 'email',
						onChange: this.changeField
					}}
				/>

				<Field
					label='Скайп'
					required
					isWrong={skype.showError && !skype.isValid()}
					inputProps={{
						value: skype.value,
						name: 'skype',
						onChange: this.changeField
					}}
				/>

				<Field
					label='Контактный телефон'
					required
					isWrong={phone.showError && !phone.isValid()}
					inputProps={{
						value: phone.value,
						name: 'phone',
						onChange: this.changeField
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
