import React from 'react';
import Title from 'components/title';
import Text from 'components/text';
import DescriptionList from 'components/desc-list';
import DescriptionListItem from 'components/desc-list-item';
import Quest from 'components/quest';
import File from 'components/file';
import JobAnswerForm from 'components/job-answer-form';
import './styles.css';

export default class JobTechnicalManager extends React.Component {

	render() {
		return (
			<div>
				<div className='hr-vacancy'>
					<img src={require('images/background/work.svg')} className='hr-vacancy__img' />
					<Title>Менеджер-технарь</Title>
					<Text size='big'>
						В CSSSR требуется экстраверт с техническим бэкграундом,
						способный руководить людьми. Работа полностью удаленная
						с загрузкой на полный день.
					</Text>

					<br />
					<Title size='medium'>необходимые технические познания</Title>
					<DescriptionList>
						<DescriptionListItem>Глубокая осведомленность по теме современных frontend-технологий;</DescriptionListItem>
						<DescriptionListItem>Понимание принципов БЭМ;</DescriptionListItem>
						<DescriptionListItem>Чувство прекрасного в отношении UI.</DescriptionListItem>
					</DescriptionList>

					<Title size='medium'>личные качества</Title>
					<DescriptionList>
						<DescriptionListItem>Способность руководить командой;</DescriptionListItem>
						<DescriptionListItem>Умение задавать правильные (исследовательские) вопросы и упорно добиваться четких однозначных ответов;</DescriptionListItem>
						<DescriptionListItem>Дар чувствовать интересы бизнеса;</DescriptionListItem>
						<DescriptionListItem>Перфекционизм;</DescriptionListItem>
						<DescriptionListItem>Умение формулировать;</DescriptionListItem>
						<DescriptionListItem>Безупречная грамотность.</DescriptionListItem>
					</DescriptionList>
				</div>

				<Quest className='hr-quest_manager' horison={true}>
					<File
						className='file'
						type='doc'
						filename='CSSSR manager quest.docx'
						link='/files/csssr_manager_quest.docx'
						size='0,5 МБ'
						linkWidth={100}
					/>
					<Title size='medium'>тестовый квест</Title>
					<Text size='big'>
						Скачайте и заполните анкету. Все инструкции вы найдете внутри. Результат
						(в формате *.docx) прикрепите к <a href='#hrScrollToAnswer'>форме отклика</a> на вакансию.
						Надеемся, наш квест покажется вам интересным и не отнимет много времени.
					</Text>
				</Quest>

				<div className='hr-vacancy'>
					<Title size='medium'>кратко о работе</Title>
					<Text size='medium'>
						Вам нужно ежедневно обеспечивать функционирование вверенной вам команды.
						Вы — человек который, одновременно сопровождает несколько параллельных
						проектов от момента согласования бюджета и сроков до момента подписания
						закрывающих документов. Вы — основная движущая сила благодаря которой,
						проекты продвигаются в правильном направлении. Заказчики преклоняются
						перед вашим профессионализмом и ценят вас за вниманием к мелочам.
						Команда уважает вас за умение всегда безоговорочно отстоять здравый
						смысл. Вы умеете раскапывать до корней и лечить самые сложные проблемы.
						Вы ежедневно сталкиваетесь с огромным потоком информации. Вы ежедневно
						накапливаете уникальный опыт. У вас ненормированный рабочий день.
						Вам интересно. Вы целиком и полностью живёте работой.
					</Text>

					<br />
					<br />
					<Title size='medium'>отклик на вакансию</Title>
					<Text size='medium'>Хорошо подумали?</Text>

					<JobAnswerForm
						job='technical_manager'
						idPrefix='hr'
						fileInitialValue='Прикрепите решение квеста'
						fileAccept='.docx'
						fileWarning='DOCX, пожалуйста!'
					/>
				</div>
			</div>
		);
	}
}
