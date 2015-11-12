import * as C from 'constants/actions';
import request from 'superagent';

export function changeOption(list, value, index, structure = 'checkbox') {
	return {
		type: C.ORDER_FORM_CHANGE_OPTIONS,
		list,
		value,
		index,
		structure
	};
}

export function changeContacts(contacts) {
	return {
		type: C.ORDER_FORM_CHANGE_CONTACTS,
		contacts
	};
}

export function showErrors() {
	return {
		type: C.ORDER_FORM_SHOW_ERRORS
	};
}

export function changeFilesLink(link) {
	return {
		type: C.ORDER_FORM_CHANGE_FILES_LINK,
		link
	};
}

export function addFiles(files) {
	return function(dispatch, getState) {
		dispatch({
			type: C.ORDER_FORM_ADD_FILES,
			files
		});

		const formFiles = getState().order.form.files;

		for (const file of formFiles.slice(-files.length)) {
			const formData = new FormData();
			formData.append('file', file);
			request
				.post('/upload')
				.send(formData)
				.on('progress', ({percent}) => {
					dispatch(updateFile(file.id, {
						progress: Math.ceil(percent)
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
							progress: 100
						}));
					} else {
						dispatch(removeFile(file.id));
					}
				});
		}
	};
}

export function removeFile(fileId) {
	return {
		type: C.ORDER_FORM_REMOVE_FILE,
		fileId
	};
}

export function updateFile(fileId, properties) {
	return {
		type: C.ORDER_FORM_UPDATE_FILE,
		properties,
		fileId
	};
}

export function sendOrderForm(fileId, properties) {
	return {
		type: C.ORDER_FORM_SEND_FORM
	};
}
