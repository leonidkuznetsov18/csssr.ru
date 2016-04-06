import React from 'react';

export default function MailOutsource({ toolsData, data }) {
	const orderUrl = toolsData.orderUrl;

	return (
		<p>
			<a href={orderUrl}>
				Детали заказа
			</a>
			<br/>
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
		</p>
	);
}

MailOutsource.propTypes = {
	toolsData: React.PropTypes.object,
	data: React.PropTypes.object,
};
