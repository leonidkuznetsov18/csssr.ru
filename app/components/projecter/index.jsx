import React from 'react';

import './styles.css';


export default class Projecter extends React.Component {

	static propTypes = {
		project: React.PropTypes.string.isRequired,
		closeProjecter: React.PropTypes.function
	}


	render() {
		return (
			<div
				className={`projecter projecter_project_${this.props.project} projecter_state_active`}
				onClick={this.props.closeProjecter}
			>
				<div onClick={(e) => e.stopPropagation()}>
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
							[27.12.14, 0:12:45] Lena Kulinich: Дима, здравствуй!
							[27.12.14, 0:12:55] Lena Kulinich: я давно не писала) теперь пора благодарить)
							[27.12.14, 0:13:16] Lena Kulinich: спасибо огромное за команду , за труд и терпение
							[27.12.14, 0:14:49] Lena Kulinich: на этот год работы завершены, мы сделали красивый сайт,
							не знаю , как там с увеличением продаж, но авторитет продукта в
							компании и на рынке повысили)
							[27.12.14, 0:15:15] Dmitriy Chekin: (sun)
							[27.12.14, 0:15:35] Lena Kulinich: вы крутые)
							[27.12.14, 0:16:15] Lena Kulinich: в следующем году нас ждет куча задач,
							но уже ничего не страшно, мы почти навели порядок и структурировали процесс)
							[27.12.14, 0:16:56] Dmitriy Chekin: Спасибо, что даете нам работу!
						</span>
					</blockquote>
				</div>

			</div>
		);
	}
}
