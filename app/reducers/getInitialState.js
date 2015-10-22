import FormItem from 'helpers/FormItem';
import jobs from './jobs.initial-state';
import order from './order.initial-state';

for (const key in jobs) if (jobs.hasOwnProperty(key)) {
	jobs[key] = jobs[key];
	const form = jobs[key].form;
	for (const k in form) if (form.hasOwnProperty(k)) {
		form[k] = new FormItem(form[k].value, form[k].validate, form[k].showError);
	}
}


const contacts = order.form.contacts;
for (const key in contacts) if (contacts.hasOwnProperty(key)) {
	contacts[key] = new FormItem(
		contacts[key].value,
		contacts[key].validate,
		contacts[key].showError
	);
}


export {jobs, order};
