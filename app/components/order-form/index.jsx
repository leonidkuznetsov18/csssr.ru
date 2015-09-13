import React from 'react';
import Uploader from 'components/order-uploader';
import Options from 'components/order-options';
import Contacts from 'components/order-contacts';


export default class OrderForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			validate: false,
			showErrorWindow: false
		};
	}

	onSubmit = (e) => {
		let preventDefault = false;

		this.setState({
			validate: true
		});

		const fields = this.refs.contacts.refs;

		for (let key in fields) {
			preventDefault = preventDefault || !fields[key].isRight();
		}


		// TODO: check that files uploaded
		if (true) {
			preventDefault = true;
			this.setState({
				showErrorWindow: true
			});
		}

		if (preventDefault) e.preventDefault();
	}


	render() {
		return (
			<form
				id='orderForm'
				name='form'
				action='classes/mailer.php'
				role='form'
				autoComplete='off'
				method='post'
				onSubmit={this.onSubmit}
			>

				<input
					type='hidden'
					name='lang'
					value='ru'
				/>
				<Uploader />
				<Options />
				<Contacts
					ref='contacts'
					validate={this.state.validate}
					showErrorWindow={this.state.showErrorWindow}
				/>

			</form>
		);
	}
}
