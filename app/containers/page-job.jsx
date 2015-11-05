import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from 'actions/jobs';

import Content from 'components/content';
import Breadcrubms from 'components/breadcrumbs';
import Row from 'components/row';
import Column from 'components/column';
import SectionGroup from 'components/section-group';
import Quest from 'components/quest';
import JobAnswerForm from 'components/job-form';

const pages = {
	'technical-manager': 'Менеджер-технарь',
	'pixel-perfectionist': 'Верстальщик пиксель-перфекционист'
};
const dataList = {
	'pixel-perfectionist': require('data/jobs/pixel-perfectionist.json'),
	'technical-manager': require('data/jobs/technical-manager.json')
}
const fileTypes = {
	'pixel-perfectionist': {
		fileAccept: '.zip',
		fileWarning: 'ZIP, пожалуйста!'
	},
	'technical-manager': {
		fileAccept: '.docx',
		fileWarning: 'DOCX, пожалуйста!'
	}
}
@connect((store, props) => ({
	job: store.jobs[props.routeParams.jobName]
}))
export default class PageJob extends React.Component {
	static propTypes = {
		location: PropTypes.object
	}

	render() {
		const page = this.props.routeParams.jobName;
		const pageName = pages[page];
		const data = dataList[page];
		const actions = bindActionCreators(actionCreators, this.props.dispatch);

		return (
			<div>
				<Breadcrubms items={[
					{
						link: '/jobs',
						name: 'Все вакансии'
					},
					{
						name: pageName
					}
				]}/>

				<Content layout='job'>
					{data.beforeQuest &&
						<SectionGroup data={data.beforeQuest}/>
					}

					{data.quest &&
						<Quest file={data.file} horizon={page === 'technical-manager'}>
							<SectionGroup data={data.quest}/>
						</Quest>
					}

					{data.afterQuest &&
						<SectionGroup data={data.afterQuest}/>
					}

					<JobAnswerForm
						{...actions}
						{...fileTypes[page]}
						form={this.props.job.form}
						isValid={this.props.job.isValid}
						job={page}
					/>
				</Content>
			</div>
		);
	}
}
