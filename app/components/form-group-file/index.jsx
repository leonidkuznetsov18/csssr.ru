import React, {PropTypes} from 'react';
import FormGroup from 'components/form-group';
import cx from 'classnames';

import './styles.css';


export default class FormGroupFile extends React.Component {

	static propTypes = {
		className: PropTypes.string,
		itemName: PropTypes.string,
		itemId: PropTypes.string,
		inputClassName: PropTypes.string,
		initialValue: PropTypes.string,
		buttonText: PropTypes.string,
		accept: PropTypes.string,
		showWarning: PropTypes.bool,
		warning: PropTypes.string
	}

	static defaultProps = {
		showWarning: false,
		buttonText: 'Обзор',
		accept: ''
	}


	constructor(props) {
		super(props);
		this.state = {
			filename: this.props.initialValue
		};
	}


	fileChange = (e) => {
		this.setState({filename: e.target.files[0].name});
	}

	render() {
		return (
			<div className={cx('form-group-file__wrapper', this.props.className)}>
				<FormGroup
					{...this.props}
					className={cx('form-group-file', this.props.className)}
					inputClassName={cx('form-group-file__input', this.props.inputClassName)}
					initialValue={this.state.filename}
					hardUpdateInitialValue={true}
				/>
				<div className='form-group-file__btn'>{this.props.buttonText}</div>
				<input
					className='form-group-file__file-input'
					id={`file.${this.props.itemId}`}
					name={`file.${this.props.itemName}`}
					accept={this.props.accept}
					type='file'
					onChange={this.fileChange}
				/>
				{this.props.showWarning ? <div className='form-group-file__warning'>{this.props.warning}</div> : null}
			</div>
		);
	}
}
