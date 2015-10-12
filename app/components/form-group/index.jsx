import React, {PropTypes} from 'react';
import cx from 'classnames';
import './styles.css';

export default class FormGroup extends React.Component {

	static propTypes = {
		itemId: PropTypes.string.isRequired,
		itemName: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		regexp: PropTypes.string,
		validate: PropTypes.bool,
		required: PropTypes.bool,
		className: PropTypes.string,
		labelClassName: PropTypes.string,
		inputClassName: PropTypes.string,
		initialValue: PropTypes.string
	}


	constructor(props) {
		super(props);
		this.state = {
			value: this.props.initialValue || ''
		};
	}


	validate = (str) => {
		const re = new RegExp(this.props.regexp);
		if (this.props.regexp) {
			return re.test(str);
		} else {
			return true;
		}
	}


	isRight = () => {
		return this.validate(this.state.value);
	}


	onChange = (e) => {
		this.setState({
			value: e.target.value
		});
	}


	componentWillReceiveProps(nextProps) {
		this.setState({
			value: nextProps.initialValue
		});
	}


	render() {
		const err = { border: '1px solid rgb(199, 38, 26)' };
		const {
			itemId,
			itemName,
			label,
			validate,
			required,
			className,
			labelClassName,
			inputClassName
		} = this.props;

		const labelElement = (!label) ? '' : (
			<label
				className={cx('label label-text', labelClassName)}
				htmlFor={itemId}
			>
				{`${required ? '* ' : ''}${label}`}
			</label>
		);

		return (
			<div className={cx('form-group', className)}>
				{labelElement}

				<input
					id={itemId}
					className={cx('input-text', inputClassName)}
					type='text'
					name={'contact[' + itemName + ']'}
					style={(!validate || this.isRight()) ? {} : err}
					value={this.state.value}
					onChange={this.onChange}
				/>

			</div>
		);
	}
}
