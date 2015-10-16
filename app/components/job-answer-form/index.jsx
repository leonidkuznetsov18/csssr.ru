import React, {PropTypes} from 'react';
import FormGroup from 'components/form-group-true';
import FormGroupFile from 'components/form-group-file';
import Brick from 'components/brick';
import './styles.css';


export default class JobAnswerForm extends React.Component {

	static propTypes = {
		job: PropTypes.string.isRequired,
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
		const { fileInitialValue, fileAccept, fileWarning } = this.props;

		return (
			<form className='answer__form'>
				<FormGroup
					label='Имя'
					required={true}
					className='answer__inline'
					inputProps={{className: 'answer__input'}}
				/>

				<FormGroup
					label='Фамилия'
					required={true}
					className='answer__inline'
					inputProps={{className: 'answer__input'}}
				/>

				<FormGroup
					label='Возраст'
					required={true}
				/>

				<FormGroup
					label='Город'
					required={true}
				/>

				<FormGroupFile
					label='Тестовый квест'
					required={true}
					initialValue={fileInitialValue}
					accept={fileAccept}
					warning={fileWarning}
					showWarning={false}
				/>

				<FormGroup
					label='Электронная почта'
					required={true}
				/>

				<FormGroup
					label='Скайп'
					required={true}
				/>

				<FormGroup
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
