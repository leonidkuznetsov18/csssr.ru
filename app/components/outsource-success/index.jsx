import React from 'react';
import calcDate from 'helpers/calcDate';
import Projecter from 'components/projecter'

import './styles.css';

export default class OutsourceSuccess extends React.Component {

	static propTypes = {
		title: React.PropTypes.string.isRequired,
		description: React.PropTypes.string.isRequired
	}


	constructor(props) {
		super(props);
		this.state = {
			project: 'yota'
		}
	}


	closeProjecter = () => {
		this.setState({project: false});
	}


	render() {
		const {title, description} = this.props;
		const project = (!this.state.project) ? '' : (
			<Projecter
				project={this.state.project}
				closeProjecter={this.closeProjecter}
			/>
		)

		return (
			<div className='outsource__success'>
				{project}
				<h2 className='outsource__subtitle'>{title}</h2>
				<div className='outsource__success-description'>
					{description}
				</div>

				<div className='outsource__project'>
					<div className='outsource__project-title'>Банк Тинькофф</div>
					<p className='outsource__project-text'>
						{'Доверяет нам уже ' + calcDate(new Date(2015, 0, 16)) + '.'}
					</p>
				</div>

				<div className='outsource__project'>
					<div
						className={'outsource__project-title ' +
							'outsource__project-title_state_active js-outsource-project'}
						data-id='yota'
					>Yota</div>
					<p className='outsource__project-text'>
						{'Стараемся на благо '}
						<a
							className='blue-link blue-link_dashed'
							href='http://yota.ru'
							target='_blank'
						>yota.ru</a>
						{' уже ' + calcDate(new Date(2014, 5, 4)) + '.'}
					</p>
				</div>

				<div className='outsource__project'>
					<div className='outsource__project-title'>Финансовая группа Лайф</div>
					<p className='outsource__project-text'>
						{'Выбрал нас ' + calcDate(new Date(2014, 10, 28)) + ' назад.'}
					</p>
				</div>

				<div className='outsource__project'>
					<div className='outsource__project-title'>Нота Медиа</div>
					<p className='outsource__project-text'>
						{'Приходим на помощь уже несколько лет.'}
					</p>
				</div>

				<div className='outsource__project'>
					<div
						className={'outsource__project-title ' +
							'outsource__project-title_state_active js-outsource-project'}
						data-id='cpeople'
					>Creative People</div>
					<p className='outsource__project-text'>
						{' Выбрали нас ' + calcDate(new Date(2014, 9, 22)) + ' назад.'}
					</p>
				</div>

			</div>
		)
	}
}
