import React from 'react';
import Field from 'components/field';
import FieldFile from 'components/field-file';
import FieldPhone from 'components/field-phone';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import Link from 'components/link';
import Text from 'components/text';

import './styles.css';

export default class JobAnswerForm extends React.Component {
	static propTypes = {
		fields: React.PropTypes.object.isRequired,
		fileAccept: React.PropTypes.string.isRequired,
		handleSubmit: React.PropTypes.func.isRequired,
	}

	static defaultProps = {
		fileAccept: '',
		fileWarning: 'Файл, пожалуйста!',
	}

	renderField(name, label, props) {
		return (
			<Field
				required
				label={label}
				name={name}
				maxLength='100'
				{...props}
				{...this.props.fields[name]}
			/>
		);
	}

	render() {
		return (
			<form noValidate className='job-form' onSubmit={this.props.handleSubmit}>
				{this.renderField('firstname', 'Имя', {
					small: true,
				})}
				{this.renderField('lastname', 'Фамилия', {
					small: true,
				})}
				{this.renderField('age', 'Возраст')}
				{this.renderField('city', 'Город')}

				<FieldFile
					required
					label='Тестовый квест'
					fileAccept={this.props.fileAccept}
					{...this.props.fields.file}
				/>

				{this.renderField('email', 'Электронная почта')}
				{this.renderField('skype', 'Скайп')}

				<FieldPhone
					required
					label='Контактный телефон'
					{...this.props.fields.phone}
				/>

				<Checkbox className='' checked readOnly>
					<Text size='xs' weight='normal'>
						Принимаю&nbsp;
						<Link color='blue'
							href='/confidential'
							target='_blank'
						>
							положение об обработке персональных данных
						</Link>
					</Text>
				</Checkbox>

				<div className='job-form__submit'>
					<Button mod='form' type='submit'>
						— Поехали!
					</Button>
				</div>
			</form>
		);
	}
}
