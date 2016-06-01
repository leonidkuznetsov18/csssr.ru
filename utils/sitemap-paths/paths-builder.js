import { createRoutes } from 'react-router';
import routes from '../../app/routes';
import parser from './react-router-parser';
import { vacancies } from './data-routes';

const ignoreRules = [
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
];

const replaceRules = {
	'/jobs/:jobName': {
		param: 'jobName',
		values: vacancies,
	},
};

const filterPaths = (paths, rules) => {

	return paths.filter((path) => {

		if (!path.length) {
			return false;
		}

		return !rules.some((regex) => regex.test(path));
	});

};

const replaceParams = (paths, rules) => {

	const regexRules = (
		Object.keys(rules).map((key) => {
			return new RegExp(':' + rules[key].param);
		})
	);

	return paths.reduce((result, path, index) => {

		let current = [path];

		if (index === 1) {
			result = [result];
		}

		regexRules.forEach((regex) => {

			if (!regex.test(path)) {
				return;
			}

			const { values } = rules[path];

			current = (
				values.map((value) => {
					return path.replace(regex, value);
				})
			);
		});

		return result.concat(current);

	});
};

const rawRoutes = createRoutes(routes);
const paths = parser([], '', rawRoutes);
const filteredPaths = filterPaths(paths, ignoreRules);
const processedPaths = replaceParams(filteredPaths, replaceRules);

export default (
	processedPaths.map((path) => ({ url: path }))
);
