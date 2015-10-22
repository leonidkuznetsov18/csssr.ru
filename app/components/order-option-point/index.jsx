import React, {PropTypes} from 'react';
import Tooltip from 'components/tooltip';

export default class OptionPoint extends React.Component {

	static propTypes = {
		choose: PropTypes.func,
		itemType: PropTypes.string,
		className: PropTypes.string,
		itemId: PropTypes.string,
		itemValue: PropTypes.string,
		itemChecked: PropTypes.bool,
		text: PropTypes.string,
		tip: PropTypes.string
	}


	onChange = (e) => {
		this.props.choose(e);
	}


	getTypeData(type) {
		switch (type) {
			case 'radio':
				return {
					inputClassList: 'input-radio',
					type: 'radio',
					labelClassList: 'label radio'
				};

			default: // по умолчанию checkboxes
				return {
					inputClassList: 'input-checkbox',
					type: 'checkbox',
					labelClassList: 'label checkbox'
				};
		}
	}

	render() {
		const typeData = this.getTypeData(this.props.itemType);

		return (
			<li className={this.props.className}>
				<input
					id={this.props.itemId}
					className={typeData.inputClassList}
					type={typeData.type}
					name='options[]'
					value={this.props.itemValue}
					onChange={this.onChange}
					checked={this.props.itemChecked}
				/>

				<label
					className={typeData.labelClassList}
					htmlFor={this.props.itemId}
				>{this.props.text}</label>

				{ this.props.tip ? <Tooltip text={this.props.tip} /> : '' }

			</li>
		);
	}
}
