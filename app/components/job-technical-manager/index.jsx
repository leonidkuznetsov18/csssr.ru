import React from 'react';
import Title from 'components/title';
import Text from 'components/text';
import DescriptionList from 'components/desc-list';
import DescriptionListItem from 'components/desc-list-item';
import Quest from 'components/quest';
import File from 'components/file';
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
			</div>
		);
	}
}
