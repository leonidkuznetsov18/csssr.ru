import React from 'react';
import Content from 'components/content';
import Row from 'components/row';
import Column from 'components/column';
import Comments from 'components/comments';
import SectionGroup from 'components/section-group';
import CompanyInfo from 'components/company-info';
import './styles.css';

const data = require('data/company-about.json');

export default class Company extends React.Component {
	componentDidMount() {
		document.title = 'О компании CSSSR';
	}

	render() {
		return (
			<div className='company'>
				<Content>
					<div className='company__content'>
						<Row>
							<Column size={2 / 3} offset={1 / 3}>
								<SectionGroup data={data} />
								<Comments/>
							</Column>
						</Row>
					</div>
					<div className='company__info'>
						<CompanyInfo/>
					</div>
				</Content>
			</div>
		);
	}
}
