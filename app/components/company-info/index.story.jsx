import React from 'react';
import CompanyInfo from './index.jsx';
import storiesOf from 'utils/storiesOf';

const dataInfo = require('data/company-info.json');
const dataHistory = require('data/history.json');

storiesOf('CompanyInfo')
	.add('default', () => (
		<CompanyInfo data={dataInfo} history={dataHistory} />
	));
