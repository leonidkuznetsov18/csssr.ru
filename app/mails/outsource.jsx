import React from 'react';

export default function MailOutsource({ data }) {
	return (
		<p>
			Контактное лицо: ${data.name}<br/>
			Электронная почта: <a href={`mailto:${data.email}`}>${data.email}</a><br/>
			Скайп: ${data.skype}<br/>
			Телефон: ${data.phone}<br/>
		</p>
	);
}

MailOutsource.propTypes = {
	data: React.PropTypes.object,
};
