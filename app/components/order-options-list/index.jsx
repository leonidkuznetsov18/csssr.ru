import React from 'react/addons';
import OptionPoint from 'components/order-option-point'

import './styles.css';

const data = require('data/order-options.json');

export default class OptionsList extends React.Component {

	constructor(props) {
		super(props);
		const cbx = props.data.checkboxes;
		const len = cbx.length;
		const checkData = {};
		for (let i = 0; i < len; i++) {
			checkData[cbx[i].id] = cbx[i].checked;
		}
		this.state = {checkData: checkData};
	}


	choose(e, obj) {
		if (this.props.data.type === 'radio') {
			const cbx = this.props.data.checkboxes;
			const len = cbx.length;
			const checkData = {};
			for (let i = 0; i < len; i++) {
				checkData[cbx[i].id] = false;
			}
			checkData[e.target.id] = true;
			this.setState({checkData: checkData});

		} else if (this.props.data.type === 'checkboxes') {
			obj.setState({checked: !obj.state.checked});

		} else {
			var result = {};
			result[e.target.id] = e.target.checked;
			this.setState(React.addons.update(this.state, {
				checkData: {$merge: result}
			}));
		}
	}


	render() {
		const option = this.props.data;
		return (
			<div className='order__main__content__options__single' key={Math.random()}>
				<div className='order__main__content__options__title'>
					{option.title}
				</div>

				<ul className='order__main__content__options__checkboxes'>
					{
						option.checkboxes.map((opt, i) => {
							return (
								<OptionPoint
									key={i}
									_id={opt.id}
									_value={opt.value}
									_checked={this.state.checkData[opt.id]}
									type={option.type}
									text={opt.text}
									tip={opt.tip}
									choose={this.choose.bind(this)}
								/>
							);
						})
					}
				</ul>
			</div>
		);
	}
}
