import React from 'react';
import OptionPoint from 'components/order-option-point';

import './styles.css';

const data = require('data/order-options.json').addition;

export default class AdditionalOptions extends React.Component {

	choose(e, obj) {
		obj.setState({checked: !obj.state.checked})
	}


	render() {
		const options = data.options.map((opt) => {
			return (
				<OptionPoint
					className='order__main__content__contacts__extra__checkbox'
					key={opt.id}
					_id={opt.id}
					_value={opt.value}
					_checked={opt.checked}
					type='checkboxes'
					text={opt.text}
					tip={opt.tip}
					choose={this.choose}
				/>
			)
		});

		return (
			<div>
				<div className='order__main__content__contacts__extra'>
					{data.title}
				</div>
				{options}
			</div>

		);
	}
}
