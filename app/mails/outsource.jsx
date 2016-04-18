import React from 'react';

export default function MailOutsource({ toolsData, data }) {
	const orderUrl = toolsData.orderUrl;

	return (
		<table>
			<tr>
				<td>
					<a href={orderUrl}>
						Детали заказа
					</a>
					<br/>
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
				</td>
			</tr>
		</table>
	);
}

MailOutsource.propTypes = {
	toolsData: React.PropTypes.object,
	data: React.PropTypes.object,
};
