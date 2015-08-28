import React from 'react';
import Uploader from 'components/order-uploader'
import Options from 'components/order-options'
import Contacts from 'components/order-contacts'

import './styles.css';

export default class OrderForm extends React.Component {
	render() {
		return (
			<form
				id='orderForm'
				name='form'
				action='classes/mailer.php'
				role='form'
				autoComplete='off'
				method='post'
			>
				<input
					type='hidden'
					name='lang'
					value='ru'
				/>
				<Uploader />
				<Options />
				<Contacts />

			</form>
		);
	}
}
