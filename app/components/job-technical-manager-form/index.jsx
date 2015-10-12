import React from 'react';
import FormGroup from 'components/form-group';
import FormGroupFile from 'components/form-group-file';
import Brick from 'components/brick';
import './styles.css';


export default class JobTechnicalManagerForm extends React.Component {

	render() {
		return (
			<form className='hr-answer__form'>
				<FormGroup
					itemId='hr_name'
					itemName='firstname'
					label='Имя'
					required={true}
					className='hr-answer__inline'
					inputClassName='hr-answer__input'
				/>

				<FormGroup
					itemId='hr_surname'
					itemName='lastname'
					label='Фамилия'
					required={true}
					className='hr-answer__inline'
					inputClassName='hr-answer__input'
				/>

				<FormGroup
					itemId='hr_age'
					itemName='age'
					label='Возраст'
					required={true}
				/>

				<FormGroup
					itemId='hr_city'
					itemName='city'
					label='Город'
					required={true}
				/>

				<FormGroupFile
					itemId='hr_archive'
					itemName='file'
					label='Тестовый квест'
					required={true}
					initialValue='Прикрепите решение квеста'
					accept='.docx'
					warning='DOCX, пожалуйста!'
					showWarning={false}
				/>

				<FormGroup
					itemId='hr_email'
					itemName='email'
					label='Электронная почта'
					required={true}
				/>

				<FormGroup
					itemId='hr_skype'
					itemName='skype'
					label='Скайп'
					required={true}
				/>

				<FormGroup
					itemId='hr_tel'
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

				<div className='hr-answer__submit'>
					<Brick text='— Поехали!' />
				</div>

			</form>

		);
	}
}
