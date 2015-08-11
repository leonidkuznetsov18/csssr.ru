import React from 'react';
import Icon from 'components/icon';
import Content from 'components/content';
import Row from 'components/row';
import Column from 'components/column';
import Comments from 'components/comments';
import CompanyAbout from 'components/company-about';
import CompanyInfo from 'components/company-info';
import './styles.css';

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
								<CompanyAbout/>
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
