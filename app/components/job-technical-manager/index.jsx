import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from 'actions/jobs';
import Title from 'components/title';
import Text from 'components/text';
import List from 'components/list';
import ListItem from 'components/list-item';
import Quest from 'components/quest';
import File from 'components/file';
import JobAnswerForm from 'components/job-answer-form';
import './styles.css';

const jobName = 'technical_manager';

@connect(store =>({
	form: store.jobs[jobName].form
}))
export default class JobTechnicalManager extends React.Component {

	static propTypes = {
		form: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	}


	static defaultProps = {
		form: {}
	}


	render() {
		const actions = bindActionCreators(actionCreators, this.props.dispatch);

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
					<List>
						<ListItem>Глубокая осведомленность по теме современных frontend-технологий;</ListItem>
						<ListItem>Понимание принципов БЭМ;</ListItem>
						<ListItem>Чувство прекрасного в отношении UI.</ListItem>
					</List>

					<Title size='medium'>личные качества</Title>
					<List>
						<ListItem>Способность руководить командой;</ListItem>
						<ListItem>Умение задавать правильные (исследовательские) вопросы и упорно добиваться четких однозначных ответов;</ListItem>
						<ListItem>Дар чувствовать интересы бизнеса;</ListItem>
						<ListItem>Перфекционизм;</ListItem>
						<ListItem>Умение формулировать;</ListItem>
						<ListItem>Безупречная грамотность.</ListItem>
					</List>
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
						{...actions}
						form={this.props.form}
						job={jobName}
						fileInitialValue='Прикрепите решение квеста'
						fileAccept='.docx'
						fileWarning='DOCX, пожалуйста!'
					/>
				</div>
			</div>
		);
	}
}
