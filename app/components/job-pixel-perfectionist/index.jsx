import React from 'react';
import Title from 'components/title';
import Text from 'components/text';
import DescriptionList from 'components/desc-list';
import DescriptionListItem from 'components/desc-list-item';
import Quest from 'components/quest';
import File from 'components/file';
import JobAnswerForm from 'components/job-answer-form';
import './styles.css';

import './styles.css';


export default class JobPixelPerfectionist extends React.Component {

	render() {
		return (
			<div className='job-pixel-perfectionist'>
				<div className='hr-vacancy'>
					<img src={require('images/background/work.svg')} className='hr-vacancy__img' />
					<Title>Верстальщик пиксель-перфекционист</Title>
					<Text size='big'>
						В команду CSSSR требуется верстальщик pixel-перфекционист
						с врождённым чувством прекрасного
						<br />
						и идеальным глазомером.
					</Text>

					<br />
					<Title size='medium'>кратко о работе</Title>
					<Text size='medium'>
						Вас ждет место в команде из 3-4 человек под руководством
						тимлида и менеджера проектов. Средняя загрузка такой команды —
						2 параллельных проекта, а их средний цикл — полтора месяца.
						Если у вас мало практического опыта, всё начнется с вёрстки и
						UI скриптов. Потом задачи начнут усложняться.
					</Text>

					<br />
					<Title size='medium'>навыки</Title>
					<DescriptionList>
						<DescriptionListItem>HTML5 и семантическая вёрстка;</DescriptionListItem>
						<DescriptionListItem>CSS3;</DescriptionListItem>
						<DescriptionListItem>jQuery (Vanilla JS будет большим плюсом);</DescriptionListItem>
						<DescriptionListItem>БЭМ;</DescriptionListItem>
						<DescriptionListItem>GIT;</DescriptionListItem>
						<DescriptionListItem>Применение Gulp, Jade и Stylus или готовность их быстро освоить;</DescriptionListItem>
						<DescriptionListItem>Умение разбираться в чужом коде.</DescriptionListItem>
					</DescriptionList>
				</div>

				<Quest>
					<File
						type='psd'
						filename='anketa.psd'
						link='/files/anketa.psd'
						size='6,5 МБ'
					/>

					<Title size='medium'>тестовый квест</Title>
					<Text size='medium'>
						Сверстайте и заполните анкету информацией о себе. Исходники (app)
						и результат (dist) запакуйте в архив и прикрепите к форме отклика
						на вакансию. Обратите внимание, что слайдер с навыками JS — это
						слайдер на JS, постарайтесь сделать его максимально юзабильным.
					</Text>
					<Text size='medium'>
						Анкета должна сразу открываться в браузере, поэтому укажите пути
						до ресурсов относительно страницы.
					</Text>
					<Text size='medium'>
						Требования к кроссбраузерности: последние версии IE, Safari,
						Chrome и FF; мобильные Safari (iOS 8) и Chrome (Android 5).
					</Text>
					<br />

					<Title size='small'>мы обратим внимание на:</Title>
					<DescriptionList>
						<DescriptionListItem>Соответствие вёрстки исходному макету;</DescriptionListItem>
						<DescriptionListItem>Организацию и качество кода;</DescriptionListItem>
						<DescriptionListItem>Кроссбраузерность.</DescriptionListItem>
					</DescriptionList>

					<Title size='small'>обязательные требования к коду</Title>
					<DescriptionList>
						<DescriptionListItem>Наименование классов по <a href='https://github.com/CSSSR/sputnik/blob/master/BEM.md'>Б​ЭМ’у</a>;</DescriptionListItem>
						<DescriptionListItem>Использование <a href='https://github.com/CSSSR/sputnik/blob/master/Jade.md'>J​ade​</a> для HTML и <a href='https://github.com/CSSSR/sputnik/blob/master/Stylus.md'>S​tylus​</a> для CSS;</DescriptionListItem>
						<DescriptionListItem>Использование нашего ш​аблона для быстрого старта проекта;</DescriptionListItem>
						<DescriptionListItem>Если вы хотите похвастаться своим владением JS, то CoffeeScript и ES6 приветствуется особенно.</DescriptionListItem>
					</DescriptionList>

					<Text weight='bold'>Внимание! Мы принимаем только выполненные по нашим требованиям анкеты!</Text>
					<Text size='medium'>Надеемся, что наш тестовый квест покажется вам интересным.</Text>
				</Quest>

				<div className='hr-vacancy'>
					<Title size='medium'>отклик на вакансию</Title>
					<Text size='medium'>Представьтесь, пожалуйста, и расскажите нам еще немного о себе.</Text>

					<JobAnswerForm
						fileInitialValue='Прикрепите zip-архив'
						fileAccept='.zip'
						fileWarning='ZIP, пожалуйста!'
					/>
				</div>
			</div>
		);
	}
}
