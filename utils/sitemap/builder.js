import Sitemap from 'react-router-sitemap';
import router from '../../app/routes';
import { vacancies } from './params-values';

const filterConfig = {
	isValid: false,
	rules: [
		/\*/,
		/^\/portfolio\/.+/,
		/^\/timeline/,
		/^\/vacancy/,
		/^\/order\/.+/,
		/^\/offert/,
		/^\/portfolio/,
		/^\/confidential/,
		/^\/outsource\/.+/,
		/^\/jobs\/.+\/.+/,
	],
};

const paramsConfig = {
	'/jobs/:jobName': [
		{ jobName: vacancies },
	],
};

export default (hostname, dist) => {
	return (
		new Sitemap(router)
			.filterPaths(filterConfig)
			.applyParams(paramsConfig)
			.build(hostname)
			.save(dist)
	);
};
