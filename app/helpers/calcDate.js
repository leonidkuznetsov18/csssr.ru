const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function plural(num, single, some, multiple) {
	if (num === 1) {
		return single;
	}

	if (num < 5) {
		return some;
	}

	return multiple;
}

export default function calcDate(date, endDate = new Date()) {
	const time = [];
	let year = endDate.getYear() - date.getYear();
	let month = endDate.getMonth() - date.getMonth();
	let day = endDate.getDate() - date.getDate();

	if (day < 0) {
		month--;
		day += daysInMonth[(endDate.getMonth() - 1 + 12) % 12];
	}

	if (month < 0) {
		year--;
		month += 12;
	}

	if (year > 0) {
		time.push(year + '&nbsp;' + plural(year, 'год', 'года', 'лет'));
	}

	if (month > 0) {
		time.push(month + '&nbsp;' + plural(month, 'месяц', 'месяца', 'месяцев'));
	}

	if (day > 0) {
		time.push(day + '&nbsp;' + plural(day, 'день', 'дня', 'дней'));
	}

	return time.reduce((acc, item, index, array) => {
		let prefix = '';

		if (index > 0) {
			prefix = ', ';
		}

		if (index === array.length - 1 && index !== 0) {
			prefix = ' и ';
		}

		return acc + prefix + item;
	}, '');
}
