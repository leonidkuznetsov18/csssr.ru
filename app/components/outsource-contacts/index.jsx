import React from 'react';

import Column from 'components/column';
import Row from 'components/row';
import Title from 'components/title';
import Text from 'components/text';

import styles from './styles.css';

export default function OutsourceContacts({ children }) {
	return (
		<div className={styles.root}>
			<Row inner>
				<Column size={2 / 3}>
					<Title size='medium'>
						связь с центром
					</Title>
					<Text>
						Как гласит древняя китайская пословица: написание 1000
						строк кода начинается с заполнения формы.
					</Text>
				</Column>
			</Row>

			<Row inner>
				<Column size={2 / 3}>
					<div className={styles.form}>
						{children}
					</div>
				</Column>
			</Row>
		</div>
	);
}

OutsourceContacts.propTypes = {
	children: React.PropTypes.element,
};
