import React from 'react';
import Warning from 'components/warning';

const WarningJobs = ({ error }) => {
	if (error === 'NO_CONNECT') {
		return (
			<Warning>
				У вас отсутствует соединение с интернетом.
				<br />
				Для просмотра доступных вакансий подключитесь к интернету
				<br />
				и попробуйте обновить страницу.
			</Warning>
		);
	}

	return (
		<Warning>
			Извините, на сайте ведутся технические работы.
			<br />
			Для просмотра доступных вакансий попробуйте обновить страницу позже.
		</Warning>
	);
};

WarningJobs.propTypes = {
	error: React.PropTypes.string,
};

export default WarningJobs;
