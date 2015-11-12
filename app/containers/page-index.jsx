import React from 'react';

import IndexService from 'components/index-service';
import IndexAbout from 'components/index-about';

const dataDescription = require('data/description.json');
const dataService = require('data/service.json');
export default class PageIndex extends React.Component {
	render() {
		return (
			<div>
				<IndexService data={dataService}/>
				<IndexAbout data={dataDescription}/>
			</div>
		);
	}
}
