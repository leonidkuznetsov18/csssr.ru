import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import Field from 'components/field';
import FieldFile from 'components/field-file';
import FieldPhone from 'components/field-phone';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import Circloader from 'components/circloader';
import Link from 'components/link';
import FormValidationWindow from 'components/form-validation-window';

import styles from './styles.css';

class JobForm extends React.Component {
	static propTypes = {
		error: React.PropTypes.any,
		fields: React.PropTypes.object.isRequired,
		fileAccept: React.PropTypes.string.isRequired,
		handleSubmit: React.PropTypes.func.isRequired,
		options: React.PropTypes.object.isRequired,
		submitting: React.PropTypes.bool.isRequired,
	}

	static defaultProps = {
		fields: {},
		fileAccept: '',
	}

	state = {}

	componentWillMount() {
		this.setError(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.setError(nextProps);
	}

	setError(props = this.props) {
		const { error } = props;

		if (error || error === false) {
			this.setState({ error });
		}
	}

	renderField(name, label, props) {
		return (
			<Field
				label={label}
				maxLength='100'
				name={name}
				required
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

		let { error } = this.state;

		if (error === 'ERROR') {
			error = {
				title: 'Внимание!',
				text: <span>
					Случилось непредвиденное.
					Пожалуйста, попробуйте отправить форму снова или напишите нам на
					{' '}
					<Link href='mailto:hr@csssr.io'>hr@csssr.io</Link>
				</span>,
			};
		} else if (error === 'EMPTY_FIELDS') {
			error = {
				title: 'Внимание!',
				text: 'Заполните все обязательные поля формы.',
			};
		}

		const { fileAccept, options: { fields } } = this.props;
		let questText = '';

		if (fileAccept === '.zip') {
			questText = '(упакованный в ZIP)';
		} else if (fileAccept === '.xlsx') {
			questText = '(в формате XLSX)';
		} else if (fileAccept === '.sketch') {
			questText = '(в формате Sketch)';
		}

		return (
			<form
				className={styles.root}
				noValidate
				onSubmit={this.props.handleSubmit}
			>
				{error &&
					<div className={styles.error}>
						<FormValidationWindow {...error} />
					</div>
				}
				{this.renderField('firstname', 'Имя', {
					small: true,
				})}
				{this.renderField('lastname', 'Фамилия', {
					small: true,
				})}
				{this.renderField('age', 'Возраст', {
					maxLength: 3,
				})}
				{this.renderField('location', 'Город')}
				{fields.resume && this.renderField('resume', 'Ссылка на резюме')}
				{fields.portfolio && this.renderField('portfolio', 'Ссылка на портфолио')}

				<FieldFile
					fileAccept={fileAccept}
					label={`Тестовый квест ${questText}`}
					required
					{...this.props.fields.file}
				/>

				{this.renderField('email', 'Электронная почта')}
				{this.renderField('skype', 'Скайп')}

				<FieldPhone
					label='Контактный телефон'
					required
					{...this.props.fields.phone}
				/>

				<Checkbox
					checked
					readOnly
					small
				>
					Принимаю&nbsp;
					<Link
						color='blue'
						href='/confidential'
						target='_blank'
						underline
					>
						положение об обработке персональных данных
					</Link>
				</Checkbox>

				<div className={buttonClass}>
					<Button mod='form' type='submit'>
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

export default withStyles(JobForm, styles);
