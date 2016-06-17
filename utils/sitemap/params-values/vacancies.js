import jobs from '../../../app/data/jobs-vacancy.json';

export const vacancies = jobs.map((vacancy) => vacancy.id);
