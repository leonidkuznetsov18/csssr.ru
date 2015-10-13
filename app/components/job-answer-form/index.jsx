import React, {PropTypes} from 'react';
import FormGroup from 'components/form-group';
import FormGroupFile from 'components/form-group-file';
import Brick from 'components/brick';
import './styles.css';


export default class JobAnswerForm extends React.Component {

	static propTypes = {
		idPrefix: PropTypes.string.isRequired,
		fileInitialValue: PropTypes.string,
		fileAccept: PropTypes.string,
		fileWarning: PropTypes.string
	}


	static defaultProps = {
		fileInitialValue: 'Прикрепите решение',
		fileAccept: '',
		fileWarning: 'Файл, пожалуйста!'
	}


	render() {
		const {
			idPrefix,
			fileInitialValue,
			fileAccept,
			fileWarning
		} = this.props;

		return (
			<form className='answer__form'>
				<FormGroup
					itemId={`${idPrefix}_name`}
					itemName='firstname'
					label='Имя'
					required={true}
					className='answer__inline'
					inputClassName='answer__input'
				/>

				<FormGroup
					itemId={`${idPrefix}_surname`}
					itemName='lastname'
					label='Фамилия'
					required={true}
					className='answer__inline'
					inputClassName='answer__input'
				/>

				<FormGroup
					itemId={`${idPrefix}_age`}
					itemName='age'
					label='Возраст'
					required={true}
				/>

				<FormGroup
					itemId={`${idPrefix}_city`}
					itemName='city'
					label='Город'
					required={true}
				/>

				<FormGroupFile
					itemId={`${idPrefix}_archive`}
					itemName='file'
					label='Тестовый квест'
					required={true}
					initialValue={fileInitialValue}
					accept={fileAccept}
					warning={fileWarning}
					showWarning={false}
				/>

				<FormGroup
					itemId={`${idPrefix}_email`}
					itemName='email'
					label='Электронная почта'
					required={true}
				/>

				<FormGroup
					itemId={`${idPrefix}_skype`}
					itemName='skype'
					label='Скайп'
					required={true}
				/>

				<FormGroup
					itemId={`${idPrefix}_tel`}
					itemName='phone'
					label='Контактный телефон'
					required={true}
				/>

				<div className='confirm-rules'>
					<label className='label checkbox label-last'>
						<span className='corner-cover'>Принимаю&nbsp;</span>
					</label>
					<a
						className='label-last-link blue-link'
						href='/confidential'
						target='_blank'
					>положение об обработке персональных данных</a>
				</div>

				<div className='answer__submit'>
					<Brick text='— Поехали!' />
				</div>

			</form>

		);
	}
}
