import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import TinkoffTitle from 'components/tinkoff/tinkoff-title';
import TinkoffSubtitle from 'components/tinkoff/tinkoff-subtitle';
import TinkoffFormBody from 'components/tinkoff/tinkoff-form-body';
import TinkoffFieldset from 'components/tinkoff/tinkoff-fieldset';
import TinkoffLegend from 'components/tinkoff/tinkoff-legend';
import TinkoffInput from 'components/tinkoff/tinkoff-input';
import TinkoffCheckbox from 'components/tinkoff/tinkoff-checkbox';
import TinkoffButton from 'components/tinkoff/tinkoff-button';
import FieldPhone from 'components/field-phone';

import styles from './styles.css';

function TinkoffForm({ handleSubmit, fields }) {
	return (
		<div className={styles.root}>
			<TinkoffTitle align='center'>
				Отклик на&nbsp;вакансию
			</TinkoffTitle>
			<div className={styles.subtitle}>
				<TinkoffSubtitle align='center'>
					Представьтесь, пожалуйста, и&nbsp;расскажите нам ещё немного о&nbsp;себе.
					<br />
					В своём резюме укажите ссылку на&nbsp;GitHub.
				</TinkoffSubtitle>
			</div>
			<div className={styles.form}>
				<TinkoffFormBody
					noValidate
					onSubmit={handleSubmit}
				>
					<div className={styles.inner}>
						<TinkoffFieldset>
							<TinkoffLegend>
								Личная информация
							</TinkoffLegend>

							<div className={styles.fieldsShort}>
								<TinkoffInput
									id='firstname'
									label='Имя'
									name='firstname'
									required
									short
									{...fields.firstname}
								/>
								<TinkoffInput
									id='lastname'
									label='Фамилия'
									name='lastname'
									required
									short
									{...fields.lastname}
								/>
								<TinkoffInput
									id='age'
									label='Возраст'
									name='age'
									required
									short
									{...fields.age}
								/>
								<TinkoffInput
									id='location'
									label='Город'
									name='location'
									required
									short
									{...fields.location}
								/>
							</div>
						</TinkoffFieldset>

						<TinkoffFieldset>
							<TinkoffLegend>
								Ваши навыки
							</TinkoffLegend>

							<TinkoffInput
								id='resume'
								label='Ссылка на резюме'
								name='resume'
								required
								{...fields.resume}
							/>
							<TinkoffInput
								id='portfolio'
								label='Ссылка на github'
								name='portfolio'
								required
								{...fields.portfolio}
							/>
							<TinkoffInput
								accept='.zip'
								id='file'
								label='Тестовый квест (zip архив)'
								name='file'
								required
								type='file'
								{...fields.file}
							/>
						</TinkoffFieldset>

						<TinkoffFieldset>
							<TinkoffLegend>
								Контактная информация
							</TinkoffLegend>

							<TinkoffInput
								id='email'
								label='Электронная почта'
								name='email'
								required
								{...fields.email}
							/>
							<div className={styles.fieldsShort}>
								<TinkoffInput
									id='skype'
									label='Skype'
									name='skype'
									required
									short
									{...fields.skype}
								/>
								<FieldPhone
									component={TinkoffInput}
									id='phone'
									label='Мобильный телефон'
									name='phone'
									required
									short
									type='tel'
									{...fields.phone}
								/>
							</div>
						</TinkoffFieldset>
						<p className={styles.tip}>
							Все поля обязательны к&nbsp;заполнению и&nbsp;должны содержать достоверные данные
						</p>
					</div>
					<footer className={styles.footer}>
						<div className={styles.terms}>
							<TinkoffCheckbox
								checked
								id='terms'
								name='terms'
								readOnly
							>
								Я согласен с&nbsp;
								<a
									className={styles.link}
									href='/confidential'
									target='_blank'
								>
									условиями передачи информации
								</a>
							</TinkoffCheckbox>
						</div>
						<div className={styles.submit}>
							<TinkoffButton
								size='l'
								type='submit'
							>
								Откликнуться на вакансию
							</TinkoffButton>
						</div>
					</footer>
				</TinkoffFormBody>
			</div>
		</div>
	);
}

TinkoffForm.propTypes = {
	fields: React.PropTypes.object,
	handleSubmit: React.PropTypes.func,
};

export default withStyles(TinkoffForm, styles);
