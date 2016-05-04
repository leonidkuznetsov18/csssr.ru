import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import { setSelection } from 'react/lib/ReactInputSelection';

import styles from './styles.css';

class Field extends React.Component {
	static propTypes = {
		className: React.PropTypes.string,
		small: React.PropTypes.bool,
		name: React.PropTypes.string,
		label: React.PropTypes.string,
		required: React.PropTypes.bool,
		inputProps: React.PropTypes.object,
		labelProps: React.PropTypes.object,
		invalid: React.PropTypes.bool,
		position: React.PropTypes.number,
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
		});

		return (
			<div className={blockClass}>
				<label
					className={styles.label}
					htmlFor={name}
				>
					{required && '* '}
					{label}
				</label>

				<input ref='input' {...this.props}
					id={name}
					className={inputClass}
				/>
			</div>
		);
	}
}

export default withStyles(Field, styles);
