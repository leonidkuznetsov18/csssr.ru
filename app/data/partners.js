import calcDate from 'utils/calc-date';

export default [
	{
		name: 'Банк Тинькофф',
		text: `Доверяет нам уже ${calcDate(new Date(2015, 0, 16))}.`,
	},
	{
		name: 'Yota',
		text: `Стараемся на благо <a class='blue-link blue-link_dashed' href='http://yota.ru' target='_blank'>yota.ru</a> уже ${calcDate(new Date(2014, 5, 4))}.`,
		id: 'yota',
	},
	{
		name: 'Финансовая группа Лайф',
		text: `${calcDate(new Date(2014, 10, 28), new Date(2015, 7, 28))} совместной работы.`,
	},
	{
		name: 'Нота Медиа',
		text: 'Приходим на помощь уже несколько лет',
	},
	{
		name: 'Creative People',
		text: `Выбрали нас ${calcDate(new Date(2014, 9, 22))} назад.`,
		id: 'cpeople',
	},
];
