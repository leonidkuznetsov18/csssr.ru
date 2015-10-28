import React from 'react';
import cx from 'classnames';
import calcDate from 'helpers/calcDate';

import {Link} from 'react-router';

import './styles.css';

export default class OutsourceSuccess extends React.Component {
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		description: React.PropTypes.string.isRequired,
		projects: React.PropTypes.object
	}

	render() {
		const {title, description} = this.props;
		const partners = [
			{
				name: 'Банк Тинькофф',
				text: `Доверяет нам уже ${calcDate(new Date(2015, 0, 16))}.`,
			},
			{
				name: 'Yota',
				text: `Стараемся на благо ${<a className='blue-link blue-link_dashed' href='http://yota.ru'target='_blank'>yota.ru</a>} уже ${calcDate(new Date(2014, 5, 4))}.`,
				id: 'yota'
			},
			{
				name: 'Финансовая группа Лайф',
				text: `'Выбрал нас ${calcDate(new Date(2014, 10, 28))} назад.`,
			},
			{
				name: 'Нота Медиа',
				text: 'Приходим на помощь уже несколько лет'
			},
			{
				name: 'Creative People',
				text: `Выбрали нас ${calcDate(new Date(2014, 9, 22))} назад.'`,
				id: 'cpeople'
			}
		];

		return (
			<div className='outsource__success'>
				<h2 className='outsource__subtitle'>
					{title}
				</h2>
				<div className='outsource__success-description'>
					{description}
				</div>

				{partners.map((partner, index) => {
					var titleClass = cx({
						'outsource__project-title': true,
						'outsource__project-title_state_active': partner.id
					});
					var Component = partner.id ? Link : 'div';

					return (
						<div className='outsource__project' key={index}>
							<Component
								className={titleClass}
								to={`/outsource/${partner.id}`}
							>
								{partner.name}
							</Component>
							<p className='outsource__project-text'>
								{partner.text}
							</p>
						</div>
					);
				})}
			</div>
		);
	}
}
