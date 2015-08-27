import React from 'react';
import Uploader from 'components/order-uploader'

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

			</form>
		);
	}
}
