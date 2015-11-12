import FormItem from 'helpers/FormItem';
import jobs from './jobs.initial-state';
import order from './order.initial-state';
import outsource from './outsource.initial-state';

function convertFields(data) {
	for (const k in data) if (data.hasOwnProperty(k)) {
		data[k] = new FormItem(data[k].value, data[k].validate, data[k].showError);
	}
}

for (const key in jobs) if (jobs.hasOwnProperty(key)) {
	jobs[key] = jobs[key];
	convertFields(jobs[key].form);
}

convertFields(order.form.contacts);
convertFields(outsource.form);

export {jobs, order, outsource};
