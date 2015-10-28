import request from 'superagent';
import * as C from 'constants/actions';
import {updateFile, removeFile} from 'actions/order';

const updateProgress = (store, file) => ({percent}) => {
	store.dispatch(updateFile(file.id, {
		progress: Math.ceil(percent)
	}));
};

const onLoad = (store, file) => (err, res) => {
	if (err) throw err;
	if (res.body.result === 'ok') {
		store.dispatch(updateFile(file.id, {
			path: res.body.file.path,
			progress: 100
		}));
	} else {
		console.log(res.body);
		store.dispatch(removeFile(file.id));
	}
};

function sendFile(file, store) {
	const formData = new FormData();
	formData.append('file', file);
	request
		.post('/upload')
		.send(formData)
		.on('progress', updateProgress(store, file))
		.end(onLoad(store, file));
}

const filesUploader = store => next => action => {
	const result = next(action);
	if (action.type === C.ORDER_FORM_ADD_FILES) {
		const files = store.getState().order.form.files;
		for (const file of files.slice(-action.files.length)) {
			sendFile(file, store);
		}
	}
	return result;
};

export {filesUploader as default};
