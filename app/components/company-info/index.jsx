import React from 'react';
import Row from 'components/row';
import Column from 'components/column';
import History from 'components/history';
import Title from 'components/title';
import Text from 'components/text';
import Icon from 'components/icon';

import './styles.css';

const data = require('data/company-info.json');

export default class CompanyInfo extends React.Component {
	render() {
		return (
			<div className='company-info'>
				<Row>
					<Column>
						<History/>
					</Column>
					<Column size={2 / 3}>
						{['name', 'structure'].map(group => (
							<Column size={1 / 2}>
								<Title size='medium'>
									{data[group].title}
								</Title>
								{[].concat(data[group].text).map(text => (
									<Text size='medium'>
										{text}
									</Text>
								))}
							</Column>
						))}
						<div className='company-info__rocket'>
							<Icon icon='x3'  className='company-info__rocket-count'/>
							<Title size='small'>
								В CSSSR три экипажа
							</Title>
							<Text size='medium'>
								«Восток», «Союз» и «Старт».
							</Text>
							<Text size='small'>
								Экипаж каждой рабочей группы составляют:
								<br/>
								от 4 до 6 фронтенд-разработчиков;
								<br/>
								тестировщик (ассистент менеджера);
								<br/>
								менеджер проектов.
							</Text>
						</div>

						<Title size='medium'>
							{data.work.title}
						</Title>
						{[].concat(data.work.text).map(text => (
							<Text size='medium'>
								{text}
							</Text>
						))}
					</Column>
				</Row>
			</div>
		);
	}
}
