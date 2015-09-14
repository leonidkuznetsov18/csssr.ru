import React, {PropTypes} from 'react';
import Tooltip from 'components/tooltip';

export default class OptionPoint extends React.Component {

	static propTypes = {
		choose: PropTypes.func,
		optType: PropTypes.string,
		className: PropTypes.string,
		optId: PropTypes.string,
		optValue: PropTypes.string,
		optChecked: PropTypes.bool,
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
		const typeData = this.getTypeData(this.props.optType);

		return (
			<li className={this.props.className}>
				<input
					id={this.props.optId}
					className={typeData.inputClassList}
					type={typeData.type}
					name='options[]'
					value={this.props.optValue}
					onChange={this.onChange}
					checked={this.props.optChecked}
				/>

				<label
					className={typeData.labelClassList}
					htmlFor={this.props.optId}
				>{this.props.text}</label>

				{ this.props.tip ? <Tooltip text={this.props.tip} /> : '' }

			</li>
		);
	}
}
