import React from 'react';
import Link from 'components/link';

const mails = {
	outsource: 'sales@csssr.io',
	order: 'sales@csssr.io',
	job: 'hr@csssr.io',
};

export default function getError(error, formType, extraText) {
	if (!error) {
		return null;
	}

	const mail = mails[formType];
	const texts = {
		EMPTY_FIELDS: 'Заполните все обязательные поля формы.',
		ERROR: <span>
			Случилось непредвиденное.
			Пожалуйста, попробуйте отправить форму снова или напишите нам на
			{' '}
			<Link href={`mailto:${mail}`}>
				{mail}
			</Link>
		</span>,
	};
	const text = texts[error];

	return {
		title: 'Внимание!',
		text: <div>
			{text && <p>{text}</p>}
			{extraText && <p>{extraText}</p>}
		</div>,
	};
}
