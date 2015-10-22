import FormItem from 'helpers/FormItem';
import jobs from './jobs.yml';

const newJobs = jobs;

for (const key in jobs) if (jobs.hasOwnProperty(key)) {
	newJobs[key] = jobs[key];
	const form = newJobs[key].form;
	for (const k in form) if (form.hasOwnProperty(k)) {
		const item = form[k];
		form[k] = new FormItem(item.value, item.validate, item.showError);
	}
}

export {newJobs as jobs};
