import React from 'react';


export default class ProjecterYota extends React.Component {

	render() {
		return (
			<div>
				<div className='projecter__title'>
					<span className='projecter__selection'>
						<a
							className='projecter__title-link'
							href='http://yota.ru/'
							target='_blank'
						>Yota 2.0</a>
						{' запущено 03.09.2014'}
					</span>
				</div>

				<blockquote className='projecter__comment'>
					<span className='projecter__selection'>
						<p>[27.12.14, 0:12:45] Lena Kulinich: Дима, здравствуй!</p>
						<p>[27.12.14, 0:12:55] Lena Kulinich: я давно не писала) теперь пора благодарить)</p>
						<p>[27.12.14, 0:13:16] Lena Kulinich: спасибо огромное за команду , за труд и терпение</p>
						<p>[27.12.14, 0:14:49] Lena Kulinich: на этот год работы завершены, мы сделали красивый сайт,
						не знаю , как там с увеличением продаж, но авторитет продукта в компании и на рынке повысили)</p>
						<p>[27.12.14, 0:15:15] Dmitriy Chekin: (sun)</p>
						<p>[27.12.14, 0:15:35] Lena Kulinich: вы крутые)</p>
						<p>[27.12.14, 0:16:15] Lena Kulinich: в следующем году нас ждет куча задач,
						но уже ничего не страшно, мы почти навели порядок и структурировали процесс)</p>
						<p>[27.12.14, 0:16:56] Dmitriy Chekin: Спасибо, что даете нам работу!</p>
					</span>
				</blockquote>
			</div>
		);
	}
}
