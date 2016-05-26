import React from 'react';

import Content from 'components/content';
import OutsourceTitle from 'components/outsource-title';
import OutsourceContent from 'components/outsource-content';
import OutsourcePower from 'components/outsource-power';
import OutsourceMagic from 'components/outsource-magic';
import OutsourceUse from 'components/outsource-use';
import OutsourceContacts from 'components/outsource-contacts';
import FormOutsource from 'containers/form-outsource';
import FaqGroup from 'components/faq-group';
import Faq from 'components/faq';

const data = require('data/outsource.json');
const faq = require('data/faq-outsource.json');
const partners = require('data/partners.js').default;

export default function Outsource({ children }) {
	return (
		<div>
			<Content>
				<OutsourceTitle />
				<OutsourceContent data={data} partners={partners} />
				<OutsourcePower />
				<OutsourceMagic />
				<OutsourceUse tips={data.tips} />
				<OutsourceContacts>
					<FormOutsource />
				</OutsourceContacts>
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

Outsource.propTypes = {
	children: React.PropTypes.element,
};
