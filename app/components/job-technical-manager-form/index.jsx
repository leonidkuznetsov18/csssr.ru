import React from 'react';
import FormGroup from 'components/form-group';
import Brick from 'components/brick';
import './styles.css';


export default class JobTechnicalManagerForm extends React.Component {

	render() {
		return (
			<form className='hr-answer__form'>
				<FormGroup
					optId='hr_name'
					optName='firstname'
					label='Имя'
					required={true}
					className='hr-answer__inline'
					labelClassName='hr-answer__label'
					inputClassName='hr-answer__input'
				/>

				<FormGroup
					optId='hr_surname'
					optName='lastname'
					label='Фамилия'
					required={true}
					className='hr-answer__inline'
					labelClassName='hr-answer__label'
					inputClassName='hr-answer__input'
				/>

				<FormGroup
					optId='hr_age'
					optName='age'
					label='Возраст'
					required={true}
					labelClassName='hr-answer__label'
					inputClassName='hr-answer__input'
				/>

				<FormGroup
					optId='hr_city'
					optName='city'
					label='Город'
					required={true}
					labelClassName='hr-answer__label'
					inputClassName='hr-answer__input'
				/>



				<FormGroup
					optId='hr_email'
					optName='email'
					label='Электронная почта'
					required={true}
					labelClassName='hr-answer__label'
					inputClassName='hr-answer__input'
				/>

				<FormGroup
					optId='hr_skype'
					optName='skype'
					label='Скайп'
					required={true}
					labelClassName='hr-answer__label'
					inputClassName='hr-answer__input'
				/>

				<FormGroup
					optId='hr_tel'
					optName='phone'
					label='Контактный телефон'
					required={true}
					labelClassName='hr-answer__label'
					inputClassName='hr-answer__input'
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
