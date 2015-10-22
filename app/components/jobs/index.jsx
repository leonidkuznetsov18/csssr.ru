import React from 'react';
import Content from 'components/content';
import JobsWidget from 'components/jobs-widget';
import JobsAbout from 'components/jobs-about';
import './styles.css';

export default class Jobs extends React.Component {

	componentDidMount() {
		document.title = 'Вакансии CSSSR — удалённая работа, полная страданий, боли и отчаяния';
	}


	render() {
		return (
			<div className='jobs'>
				<div className='jobs__header' />
				<Content>
					<div className='jobs__container'>
						<div className='jobs__widget'>
							<JobsWidget />
						</div>
						<div className='jobs__content'>
							<JobsAbout />
						</div>
					</div>
				</Content>
			</div>
		);
	}
}
