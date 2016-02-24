import FormItem from 'helpers/FormItem';
import order from './order.initial-state';
import outsource from './outsource.initial-state';

function convertFields(data) {
	for (const k in data) if (data.hasOwnProperty(k)) {
		data[k] = new FormItem(data[k].value, data[k].validate, data[k].showError);
	}
}

convertFields(order.form.contacts);
convertFields(outsource.form);

export { order, outsource };
