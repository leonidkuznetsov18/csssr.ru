import React from 'react';
import Uploader from 'components/order-uploader'
import Options from 'components/order-options'
import Contacts from 'components/order-contacts'
import serialize from 'form-serialize'


const data = require('data/contact-info.json');

export default class OrderForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			validate: false
		}
	}

	onSubmit = (e) => {
		console.log('--------------');
		this.setState({
			validate: true
		});

		const form = this.refs.form.getDOMNode(),
			fields = this.refs.contacts.refs;

		var condition = true;
		for (var key in fields) {
			const field = fields[key],
				right = field.isRight();

			// console.log(field.props._name + ' is ' + right);
			condition = condition && right;
		}
		if (!condition) e.preventDefault();
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
				<Contacts ref='contacts' validate={this.state.validate} />

			</form>
		);
	}
}
