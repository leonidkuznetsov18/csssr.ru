import React from 'react';

import Content from 'components/content';
import Row from 'components/row';
import Column from 'components/column';
import OrderAirship from 'components/order-airship';
import Title from 'components/title';
import Text from 'components/text';
import Comments from 'components/comments';
import SectionGroup from 'components/section-group';
import FaqGroup from 'components/faq-group';
import Faq from 'components/faq';
import OrderForm from 'containers/form-order';

const faq = require('data/faq-order.json');
const data = require('data/order-content.json');

export default class PageCompany extends React.Component {
	componentDidMount() {
		document.title = 'Вёрстка проекта в CSSSR';
	}

	render() {
		return (
			<div>
				<Content>
					<Row>
						<Column size={1 / 3}>
							<OrderAirship/>
						</Column>
						<Column size={2 / 3}>
							<Title>{data.title}</Title>
							<Text>{data.description[0]}</Text>
							{data.description.slice(1).map((content, i) => (
								<Text size='m' key={i}>{content}</Text>
							))}
							<OrderForm />
						</Column>
					</Row>
				</Content>

				<FaqGroup>
					{faq.map((group, index) => (
						<Faq data={group} key={index} />
					))}
				</FaqGroup>
			</div>
		);
	}
}
