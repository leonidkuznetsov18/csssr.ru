const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function calcDate(date) {
	const currentDate = new Date();
	let year = currentDate.getYear() - date.getYear();
	let month = currentDate.getMonth() - date.getMonth();
	let day = currentDate.getDate() - date.getDate();
	let time = [];

	if (day < 0) {
		month--;
		day += daysInMonth[(currentDate.getMonth() - 1 + 12) % 12];
	}

	if (month < 0) {
		year--;
		month += 12;
	}

	if (year > 0) {
		time.push(year + ' ' + plural(year, 'год', 'года', 'лет'));
	}

	if (month > 0) {
		time.push(month + ' ' + plural(month, 'месяц', 'месяца', 'месяцев'));
	}

	if (day > 0) {
		time.push(day + ' ' + plural(day, 'день', 'дня', 'дней'));
	}

	const string = time.reduce(function(prev, current, index, array) {
		let prefix = '';
		if (index > 0) {
			prefix = ', ';
		}
		if (index === array.length - 1 && index !== 0) {
			prefix = ' и ';
		}
		return prev + prefix + current;
	}, '');

	return string;
}

function plural(num, single, some, multiple) {
	if (num === 1) {
		return single;
	} else if (num < 5) {
		return some;
	} else {
		return multiple;
	}
}

