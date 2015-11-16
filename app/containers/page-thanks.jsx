import React from 'react';
import Content from 'components/content';
import Row from 'components/row';
import Column from 'components/column';
import Title from 'components/title';
import Text from 'components/text';

export default class Thanks extends React.Component {
	render() {
		return (
			<Content>
				<Row>
					<Column size={1 / 2} offset={1 / 3}>
						<Title>
							Успех, товарищ!
						</Title>
						<Text>
							Ваша заявка успешно доставлена в CSSSR.
							Пока мы внимательно её изучаем, поделитесь
							вашей радостью с друзьями.
						</Text>
						<Text size='s'>
							Способы поделиться радостью с друзьями:
						</Text>
					</Column>
				</Row>
			</Content>
		);
	}
}
