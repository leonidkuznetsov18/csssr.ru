import React from 'react';
import calcDate from 'helpers/calcDate';
import Content from 'components/content';
import OutsourceTitle from 'components/outsource-title';
import OutsourceContent from 'components/outsource-content';
import OutsourcePower from 'components/outsource-power';
import OutsourceMagic from 'components/outsource-magic';
import OutsourceUse from 'components/outsource-use';
import OutsourceContacts from 'components/outsource-contacts';
import FormOutsource from 'containers/form-outsource';
import FaqGroup from 'components/faq-group';
import Faq from 'components/faq';

const data = require('data/outsource.json');
const faq = require('data/faq-outsource.json');
const projects = [
	{
		name: 'Банк Тинькофф',
		text: `Доверяет нам уже ${calcDate(new Date(2015, 0, 16))}.`,
	},
	{
		name: 'Yota',
		text: `Стараемся на благо <a class='blue-link blue-link_dashed' href='http://yota.ru'target='_blank'>yota.ru</a> уже ${calcDate(new Date(2014, 5, 4))}.`,
		id: 'yota',
	},
	{
		name: 'Финансовая группа Лайф',
		text: `'Выбрал нас ${calcDate(new Date(2014, 10, 28))} назад.`,
	},
	{
		name: 'Нота Медиа',
		text: 'Приходим на помощь уже несколько лет',
	},
	{
		name: 'Creative People',
		text: `Выбрали нас ${calcDate(new Date(2014, 9, 22))} назад.'`,
		id: 'cpeople',
	},
];

export default class Outsource extends React.Component {
	static propTypes = {
		children: React.PropTypes.element,
	}

	render() {
		return (
			<div>
				<Content>
					<OutsourceTitle />
					<OutsourceContent data={data} projects={projects}/>
					<OutsourcePower />
					<OutsourceMagic />
					<OutsourceUse tips={data.tips} />
					<OutsourceContacts>
						<FormOutsource/>
					</OutsourceContacts>
				</Content>

				<FaqGroup>
					{faq.map((group, index) => (
						<Faq data={group} key={index} />
					))}
				</FaqGroup>

				{this.props.children}
			</div>
		);
	}
}
