import React from 'react';

import orderOptions from 'data/order-options.json';

const options = Object.keys(orderOptions).reduce((acc, group) => acc.concat(orderOptions[group]), []);
const getNameByValue = (value) => options.filter((option) => option.value === value)[0].name;
const convertArray = (array = []) => array.map(getNameByValue);

export default function MailOrder({ toolsData, data }) {
	const orderNumber = toolsData.orderNumber;
	const googleDriveLink = toolsData.url;

	return (
		<div>
			<p>
				Источник: <br/>
				{googleDriveLink &&
					<p style={{ margin: 0 }}>
						Ссылка — <a href={googleDriveLink}>
							{googleDriveLink}
						</a>
					</p>
				}
				{data.filesLink &&
					<p style={{ margin: 0 }}>
						Макеты — <a href={data.filesLink}>
							{data.filesLink}
						</a>
					</p>
				}
			</p>
			<p>
				<a href={`http://test-tools.csssr.ru/order/${orderNumber}`}>
					Детали заказа
				</a>
				<br/>
				Современные браузеры: {convertArray(data.modernBrowsers).join(', ') || '—'}
				<br/>
				Устаревшие браузеры: {convertArray(data.oldBrowsers).join(', ') || '—'}
				<br/>
				Мобильные платформы: {convertArray(data.mobileBrowsers).join(', ') || '—'}
				<br/>
				Ширина страниц: {getNameByValue(data.pagesWidth)}
				<br/>
				Дополнительно: {convertArray(data.mobile).join(', ') || '—'}
				<br/>
			</p>

			<p>
				{data.name &&
					<p style={{ margin: 0 }}>
						Контактное лицо: {data.name}
					</p>
				}
				{data.email &&
					<p style={{ margin: 0 }}>
						Электронная почта: {data.email}
					</p>
				}
				{data.skype &&
					<p style={{ margin: 0 }}>
						Скайп: {data.skype}
					</p>
				}
				{data.phone &&
					<p style={{ margin: 0 }}>
						Телефон: {data.phone}
					</p>
				}
			</p>
		</div>
	);
}

MailOrder.propTypes = {
	toolsData: React.PropTypes.object,
	data: React.PropTypes.object,
};
