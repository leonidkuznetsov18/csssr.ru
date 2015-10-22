import React, {PropTypes} from 'react';
import cx from 'classnames';
import './styles.css';

export default class FormGroup extends React.Component {

	static propTypes = {
		className: PropTypes.string,
		small: PropTypes.bool,
		style: PropTypes.object,
		label: PropTypes.string,
		required: PropTypes.bool,
		inputProps: PropTypes.object,
		labelProps: PropTypes.object,
		isWrong: PropTypes.bool
	}

	static defaultProps = {
		small: false,
		required: false,
		inputProps: {},
		labelProps: {},
		isWrong: false
	}


	getLabel = id => {
		const {label, required, labelProps} = this.props;
		if (!label) {
			return null;
		}
		return (
			<label
				{...labelProps}
				className={cx('form-group__label', labelProps && labelProps.className)}
				htmlFor={id}
			>{`${required ? '* ' : ''}${label}`}</label>
		);
	};


	render() {
		const {className, inputProps, isWrong} = this.props;
		const id = (inputProps && inputProps.id) || Math.random().toString();

		return (
			<div
				{...this.props}
				className={cx('form-group', className, {
					'form-group_size_half': this.props.small
				})}
			>
				{this.getLabel(id)}
				<input
					{...inputProps}
					id={id}
					className={cx('form-group__input', inputProps && inputProps.className, {
						'form-group__input_error': isWrong
					})}
				/>
			</div>
		);
	}
}
