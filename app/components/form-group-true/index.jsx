import React, {PropTypes} from 'react';
import cx from 'classnames';
import './styles.css';

export default class FormGroup extends React.Component {

	static propTypes = {
		className: PropTypes.string,
		label: PropTypes.string,
		required: PropTypes.bool,
		inputProps: PropTypes.object,
		labelProps: PropTypes.object,
		wrong: PropTypes.bool
	}

	static defaultProps = {
		hardUpdateInitialValue: false
	}


	getLabel = id => {
		const {label, required} = this.props;
		if (!label) {
			return null;
		}
		return (
			<label
				className={cx('label label-text', null)}
				htmlFor={id}
			>{`${required ? '* ' : ''}${label}`}</label>
		);
	};


	render() {
		const {className, inputProps, wrong} = this.props;
		const id = (inputProps && inputProps.id) || Math.random().toString();

		return (
			<div {...this.props} className={cx('form-group', className)}>
				{this.getLabel(id)}
				<input
					{...inputProps}
					id={id}
					className={cx('input-text', inputProps && inputProps.className, {
						'input-text_error': wrong
					})}
				/>
			</div>
		);
	}
}
