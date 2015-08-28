import React from 'react';
import FormGroup from 'components/form-group';
import AdditionalOptions from 'components/order-additional-options'
import Brick from 'components/brick'

import './styles.css';


var data = {};
data.contactInfo = require('data/contact-info.json');

export default class OrderFormContacts extends React.Component {

	getFormGroups() {
		return data.contactInfo.map((group) => {
			return (
				<FormGroup
					key={group.id}
					_id={group.id}
					label={group.text}
				/>
			)
		});
	}


	render() {
		const formGroups = this.getFormGroups();

		return (
			<div className='order__main__content__contacts'>
				<AdditionalOptions />

				<div className='order__main__content__contacts__text'>
					{formGroups}
					<div className='confirm-rules'>
						<label className='label checkbox label-last'>
							<span className='corner-cover'>Принимаю&nbsp;</span>
						</label>
						<a
							className='label-last-link blue-link'
							href='confidential.html'
							target='_blank'
						>положение об обработке персональных данных</a>
					</div>
				</div>

				<div className='order__main__content__contacts__submit'>
					<Brick text='— Поехали!' />
				</div>

			</div>
		);
	}
}
