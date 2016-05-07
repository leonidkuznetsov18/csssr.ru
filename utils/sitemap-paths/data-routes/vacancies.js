import jobs from '../../../app/data/jobs-vacancy.json';

export default (
	jobs
		.map((vacancy) => vacancy.vacancies)
		.reduce((result, vacancy) => result.concat(vacancy))
		.map((vacancy) => vacancy.id)
);
