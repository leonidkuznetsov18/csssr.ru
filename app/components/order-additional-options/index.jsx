import React from 'react';
import OptionPoint from 'components/order-option-point';

import './styles.css';

const data = require('data/order-options.json').addition;

export default class AdditionalOptions extends React.Component {

	constructor(props) {
		super(props);
		const cbx = data.options;
		const len = cbx.length;
		const checkData = {};
		for (let i = 0; i < len; i++) {
			checkData[cbx[i].id] = cbx[i].checked;
		}
		this.state = {checkData: checkData};
	}


	choose = (e) => {
		let result = {};
		result[e.target.id] = e.target.checked;

		const checkData = {
			...this.state.checkData,
			...result
		};

		this.setState({ checkData });
	}


	render() {
		const options = data.options.map((opt) => {
			return (
				<OptionPoint
					className='order__main__content__contacts__extra__checkbox'
					key={opt.id}
					optId={opt.id}
					optValue={opt.value}
					optChecked={this.state.checkData[opt.id]}
					type='checkboxes'
					text={opt.text}
					tip={opt.tip}
					choose={this.choose}
				/>
			);
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
