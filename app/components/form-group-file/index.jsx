import React, {PropTypes} from 'react';
import Field from 'components/field';
import cx from 'classnames';

import './styles.css';


export default class FormGroupFile extends React.Component {

	static propTypes = {
		className: PropTypes.string,
		label: PropTypes.string,
		required: PropTypes.bool,
		inputProps: PropTypes.object,
		labelProps: PropTypes.object,
		buttonText: PropTypes.string,
		accept: PropTypes.string,
		isWrong: PropTypes.bool,
		warning: PropTypes.string,
		onChange: PropTypes.func
	}

	static defaultProps = {
		required: false,
		inputProps: {},
		labelProps: {},
		buttonText: 'Обзор',
		accept: '',
		isWrong: false
	}


	fileChange = (e) => {
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	render() {
		const {inputProps} = this.props;
		return (
			<div className={cx('form-group-file', this.props.className)}>
				<Field
					{...this.props}
					className={cx('form-group-file__text-input', inputProps && inputProps.className)}
					inputProps={Object.assign({}, inputProps, {disabled: true})}
					isWrong={this.props.isWrong}
				/>
				<div className='form-group-file__btn'>
					{this.props.buttonText}
					<input
						className='form-group-file__file-input'
						accept={this.props.accept}
						onChange={this.fileChange}
						type='file'
					/>
				</div>
				{this.props.isWrong ? <div className='form-group-file__warning'>{this.props.warning}</div> : null}
			</div>
		);
	}
}
