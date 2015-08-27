import React from 'react';
import OptionPoint from 'components/order-option-point'

import './styles.css';

const data = require('data/order-options.json');

export default class OrderForm extends React.Component {
	render() {

		const options = data.options.map((option) => {
			return (
				<div className='order__main__content__options__single' key={Math.random()}>
					<div className='order__main__content__options__title'>
						{option.title}
					</div>

					<ul className='order__main__content__options__checkboxes'>
						{
							option.checkboxes.map((opt) => {
								return (
									<OptionPoint
										optId={opt.id}
										optValue={opt.value}
										optText={opt.text}
										optChecked={opt.checked}
									/>
								);
							})
						}
					</ul>
				</div>
			);
		});

		return (
			<div className='order__main__content__options'>
				{options}
			</div>
		);
	}
}
