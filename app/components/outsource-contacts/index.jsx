import React from 'react';

import Column from 'components/column';
import Row from 'components/row';
import Title from 'components/title';
import Text from 'components/text';

import Link from 'components/link';

import './styles.css';

export default function OutsourceContacts({children}) {
	return (
		<div className='outsource-contacts'>
			<Row inner>
				<Column size={2 / 3}>
					<Title size='medium'>
						связь с центром
					</Title>
					<Text>
						Как гласит древняя китайская пословица: написание 1000
						строк кода начинается с заполения формы.
					</Text>
				</Column>
			</Row>

			<Row inner>
				<Column size={2 / 3}>
					<div className='outsource-contacts__form'>
						{children}
					</div>
				</Column>
			</Row>
		</div>
	);
}
