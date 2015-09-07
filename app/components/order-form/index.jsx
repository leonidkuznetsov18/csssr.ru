import React from 'react';
import Uploader from 'components/order-uploader'
import Options from 'components/order-options'
import Contacts from 'components/order-contacts'


export default class OrderForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			validate: false
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.refs.form.getDOMNode().elements);
		this.setState({
			validate: true
		});
	}


	render() {
		return (
			<form
				id='orderForm'
				name='form'
				ref='form'
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
				<Contacts validate={this.state.validate} />

			</form>
		);
	}
}
