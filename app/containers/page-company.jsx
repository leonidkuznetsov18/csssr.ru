import React from 'react';
import Content from 'components/content';
import Row from 'components/row';
import Column from 'components/column';
import Comments from 'components/comments';
import SectionGroup from 'components/section-group';
import CompanyInfo from 'components/company-info';

const dataAbout = require('data/company-about.json');
const dataInfo = require('data/company-info.json');
const dataComments= require('data/comments.json');
const dataHistory = require('data/history.json');

export default class PageCompany extends React.Component {
	render() {
		return (
			<Content>
				<Row>
					<Column size={2 / 3} offset={1 / 3}>
						<SectionGroup data={dataAbout} />
						<Comments data={dataComments} />
					</Column>
				</Row>
				<CompanyInfo data={dataInfo} history={dataHistory}/>
			</Content>
		);
	}
}
