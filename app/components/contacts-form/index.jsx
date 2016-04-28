import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import Field from 'components/field';
import Checkbox from 'components/checkbox';
import Button from 'components/button';
import Circloader from 'components/circloader';
import FieldPhone from 'components/field-phone';
import FormValidationWindow from 'components/form-validation-window';
import Link from 'components/link';

import styles from './styles.css';

class ContactsForm extends React.Component {
	static propTypes = {
		error: React.PropTypes.any.isRequired,
		fields: React.PropTypes.object.isRequired,
		handleSubmit: React.PropTypes.func.isRequired,
		requiredFields: React.PropTypes.array.isRequired,
		submitting: React.PropTypes.bool.isRequired,
	}

	static defaultProps = {
		error: {},
	}

	renderField(name, label, props) {
		return (
			<Field
				label={label}
				maxLength='100'
				name={name}
				required={this.props.requiredFields.indexOf(name) !== -1}
				{...props}
				{...this.props.fields[name]}
			/>
		);
	}

	render() {
		const buttonClass = cx({
			[styles.submit]: true,
			[styles.submit_disabled]: this.props.submitting,
		});
		const loaderClass = cx({
			[styles.loader]: true,
			[styles.loader_active]: this.props.submitting,
		});

		const error = this.props.error;

		return (
			<form
				className={styles.root}
				noValidate
				onSubmit={this.props.handleSubmit}
			>
				{(error && (error.text || error.title) || typeof error === 'string' && error) &&
					<div className={styles.error}>
						<FormValidationWindow {...error} />
					</div>
				}

				{this.renderField('name', 'Ваше имя')}
				{this.renderField('email', 'Электронная почта')}
				{this.renderField('skype', 'Скайп')}

				<FieldPhone
					label='Контактный телефон'
					name='phone'
					required
					{...this.props.fields.phone}
				/>

				<Checkbox
					checked
					className={styles.rules}
					name='confidential'
					readOnly
				>
					Принимаю&nbsp;
					<Link color='blue'
						href='/confidential'
						target='_blank'
					>
						положение об обработке персональных данных
					</Link>
				</Checkbox>

				<div className={buttonClass}>
					<Button
						mod='form'
						type='submit'
					>
						— Поехали!
					</Button>
				</div>

				<div className={loaderClass}>
					<Circloader />
				</div>
			</form>
		);
	}
}

export default withStyles(ContactsForm, styles);
