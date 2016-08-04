import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import { setSelection } from 'react/lib/ReactInputSelection';
import Textarea from 'react-textarea-autosize';

import styles from './styles.css';

class Field extends React.Component {
	static propTypes = {
		className: React.PropTypes.string,
		inputProps: React.PropTypes.object,
		invalid: React.PropTypes.bool,
		label: React.PropTypes.string,
		labelProps: React.PropTypes.object,
		name: React.PropTypes.string,
		position: React.PropTypes.number,
		required: React.PropTypes.bool,
		small: React.PropTypes.bool,
		type: React.PropTypes.string,
	};

	static defaultProps = {
		small: false,
		required: false,
		inputProps: {},
		labelProps: {},
		isWrong: false,
	};

	componentDidUpdate() {
		if (this.props.position) {
			setSelection(this.refs.input, {
				start: this.props.position,
				end: this.props.position,
			});
		}
	}

	render() {
		const { label, required, invalid, name, small } = this.props;
		const blockClass = cx({
			[styles.root]: true,
			[styles.root_size_half]: small,
		});

		const inputClass = cx({
			[styles.input]: true,
			[styles.input_error]: invalid,
			[styles.input_textarea]: this.props.type === 'textarea',
		});

		const Tag = this.props.type === 'textarea' ? Textarea : 'input';

		return (
			<div className={blockClass}>
				<label
					className={styles.label}
					htmlFor={name}
				>
					{required && '* '}
					{label}
				</label>

				<Tag
					ref='input'
					{...this.props}
					className={inputClass}
					id={name}
				/>
			</div>
		);
	}
}

export default withStyles(Field, styles);
