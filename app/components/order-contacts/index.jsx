import React, {PropTypes} from 'react';
import FormGroup from 'components/form-group-true';
import Brick from 'components/brick';

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
			<div style={{width: 420, marginTop: 20}}>
				<FormGroup
					label='Ваше имя'
					required
					isWrong={name.showError && !name.isValid()}
					inputProps={{
						value: name.value,
						onChange: e => this.changeField(e.target.value, 'name')
					}}
				/>

				<FormGroup
					label='Электронная почта'
					required
					isWrong={email.showError && !email.isValid()}
					inputProps={{
						value: email.value,
						onChange: e => this.changeField(e.target.value, 'email')
					}}
				/>

				<FormGroup
					label='Скайп'
					required
					isWrong={skype.showError && !skype.isValid()}
					inputProps={{
						value: skype.value,
						onChange: e => this.changeField(e.target.value, 'skype')
					}}
				/>

				<FormGroup
					label='Контактный телефон'
					required
					isWrong={phone.showError && !phone.isValid()}
					inputProps={{
						value: phone.value,
						onChange: e => this.changeField(e.target.value, 'phone')
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

				<div style={{marginTop: 30, width: 170}}>
					<Brick text='— Поехали!' />
				</div>

			</div>
		);
	}
}
