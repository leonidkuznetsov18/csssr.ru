import * as C from 'constants/actions';

let superagent;

if (IS_CLIENT) {
	superagent = require('superagent');
}

export function changeOption(list, value, index, structure = 'checkbox') {
	return {
		type: C.ORDER_FORM_CHANGE_OPTIONS,
		list,
		value,
		index,
		structure,
	};
}

export function changeContacts(contacts) {
	return {
		type: C.ORDER_FORM_CHANGE_CONTACTS,
		contacts,
	};
}

export function showErrors() {
	return {
		type: C.ORDER_FORM_SHOW_ERRORS,
	};
}

export function changeFilesLink(link) {
	return {
		type: C.ORDER_FORM_CHANGE_FILES_LINK,
		link,
	};
}

export function updateFile(fileId, properties) {
	return {
		type: C.ORDER_FORM_UPDATE_FILE,
		properties,
		fileId,
	};
}

export function removeFile(fileId) {
	return {
		type: C.ORDER_FORM_REMOVE_FILE,
		fileId,
	};
}

export function addFiles(files) {
	return function (dispatch, getState) {
		dispatch({
			type: C.ORDER_FORM_ADD_FILES,
			files,
		});

		const formFiles = getState().order.form.files;

		formFiles.slice(-files.length).forEach((file) => {
			const formData = new FormData();
			formData.append('file', file);
			superagent
				.post('/upload')
				.send(formData)
				.on('progress', ({percent}) => {
					console.log(percent);
					dispatch(updateFile(file.id, {
						progress: Math.ceil(percent),
					}));
				})
				.end((err, res) => {
					if (err) {
						throw err;
					}

					if (res.body.result === 'ok') {
						dispatch(updateFile(file.id, {
							filename: res.body.file.filename,
							originalname: res.body.file.originalname,
							progress: 100,
						}));
					} else {
						dispatch(removeFile(file.id));
					}
				});
		});
	};
}

export function sendOrderForm() {
	return {
		type: C.ORDER_FORM_SEND_FORM,
	};
}
