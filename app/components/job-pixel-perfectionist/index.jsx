import React from 'react';
import Title from 'components/title';
import Text from 'components/text';
import List from 'components/list';
import ListItem from 'components/list-item';
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
					<List>
						<ListItem>HTML5 и семантическая вёрстка;</ListItem>
						<ListItem>CSS3;</ListItem>
						<ListItem>jQuery (Vanilla JS будет большим плюсом);</ListItem>
						<ListItem>БЭМ;</ListItem>
						<ListItem>GIT;</ListItem>
						<ListItem>Применение Gulp, Jade и Stylus или готовность их быстро освоить;</ListItem>
						<ListItem>Умение разбираться в чужом коде.</ListItem>
					</List>
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
					<List>
						<ListItem>Соответствие вёрстки исходному макету;</ListItem>
						<ListItem>Организацию и качество кода;</ListItem>
						<ListItem>Кроссбраузерность.</ListItem>
					</List>

					<Title size='small'>обязательные требования к коду</Title>
					<List>
						<ListItem>Наименование классов по <a href='https://github.com/CSSSR/sputnik/blob/master/BEM.md'>Б​ЭМ’у</a>;</ListItem>
						<ListItem>Использование <a href='https://github.com/CSSSR/sputnik/blob/master/Jade.md'>J​ade​</a> для HTML и <a href='https://github.com/CSSSR/sputnik/blob/master/Stylus.md'>S​tylus​</a> для CSS;</ListItem>
						<ListItem>Использование нашего ш​аблона для быстрого старта проекта;</ListItem>
						<ListItem>Если вы хотите похвастаться своим владением JS, то CoffeeScript и ES6 приветствуется особенно.</ListItem>
					</List>

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
