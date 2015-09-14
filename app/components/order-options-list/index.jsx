import React from 'react/addons';
import OptionPoint from 'components/order-option-point';

import './styles.css';


export default class OptionsList extends React.Component {

	static propTypes = {
		data: React.PropTypes.object
	}

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


	choose = (e) => {
		if (this.props.data.type === 'radio') {
			const cbx = this.props.data.checkboxes;
			const len = cbx.length;
			const checkData = {};
			for (let i = 0; i < len; i++) {
				checkData[cbx[i].id] = false;
			}
			checkData[e.target.id] = true;
			this.setState({checkData: checkData});

		} else {
			let result = {};
			result[e.target.id] = e.target.checked;
			this.setState(React.addons.update(this.state, {
				checkData: {$merge: result}
			}));
		}
	}


	render() {
		const option = this.props.data;
		return (
			<div className='order__main__content__options__single'>
				<div className='order__main__content__options__title'>
					{option.title}
				</div>

				<ul className='order__main__content__options__checkboxes'>
					{
						option.checkboxes.map((opt) => {
							return (
								<OptionPoint
									key={opt.id}
									optId={opt.id}
									optValue={opt.value}
									optChecked={this.state.checkData[opt.id]}
									optType={option.type}
									text={opt.text}
									tip={opt.tip}
									choose={this.choose}
								/>
							);
						})
					}
				</ul>
			</div>
		);
	}
}
