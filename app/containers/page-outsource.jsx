import React from 'react';
import Content from 'components/content';
import OutsourceTitle from 'components/outsource-title';
import OutsourceContent from 'components/outsource-content';
import OutsourcePower from 'components/outsource-power';
import OutsourceMagic from 'components/outsource-magic';
import OutsourceUse from 'components/outsource-use';
import OutsourceForm from 'components/outsource-form';
import FaqGroup from 'components/faq-group';
import Faq from 'components/faq';

const data = require('data/outsource.json');
const faq = require('data/faq-outsource.json');

export default class Outsource extends React.Component {
	static propTypes = {
		children: React.PropTypes.element
	}

	render() {
		return (
			<div>
				<Content>
					<OutsourceTitle />
					<OutsourceContent data={data} />
					<OutsourcePower />
					<OutsourceMagic />
					<OutsourceUse tips={data.tips} />
					<OutsourceForm data={data.form} />
				</Content>
				<FaqGroup>
					{faq.map((group, index) => (
						<Faq data={group} key={index} />
					))}
				</FaqGroup>

				{this.props.children}
			</div>
		);
	}
}
