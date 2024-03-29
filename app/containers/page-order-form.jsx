import React from 'react';

import Content from 'components/content';
import Row from 'components/row';
import Column from 'components/column';
import OrderAirship from 'components/order-airship';
import Title from 'components/title';
import Text from 'components/text';
import FaqGroup from 'components/faq-group';
import Faq from 'components/faq';
import FormOrder from 'containers/form-order';

const faq = require('data/faq-order.json');
const data = require('data/order-content.json');

export default function PageCompany({ children }) {
	return (
		<div>
			<Content>
				<Row>
					<Column size={1 / 3} smallSize={0}>
						<OrderAirship />
					</Column>
					<Column size={2 / 3} smallSize={1}>
						<Title>
							{data.title}
						</Title>
						<Text>
							{data.description[0]}
						</Text>
						{data.description.slice(1).map((content, i) => (
							<Text key={i} size='m'>
								{content}
							</Text>
						))}
						<FormOrder />
					</Column>
				</Row>
			</Content>

			<FaqGroup>
				{faq.map((group, index) => (
					<Faq data={group} key={index} />
				))}
			</FaqGroup>

			{children}
		</div>
	);
}

PageCompany.propTypes = {
	children: React.PropTypes.node,
};
