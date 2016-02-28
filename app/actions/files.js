import superagent from 'superagent';
import { ADD_FILES, UPDATE_FILE, REMOVE_FILE } from 'constants/actions';

export function updateFile(fileId, properties) {
	return {
		type: UPDATE_FILE,
		properties,
		fileId,
	};
}

export function removeFile(fileId) {
	return {
		type: REMOVE_FILE,
		fileId,
	};
}

export function addFiles(files) {
	return function (dispatch, getState) {
		dispatch({
			type: ADD_FILES,
			files,
		});

		getState().files.slice(-files.length).forEach((file) => {
			const formData = new FormData();
			formData.append('file', file.file);

			superagent
				.post('/upload')
				.send(formData)
				.on('progress', ({ percent }) => {
					dispatch(updateFile(file.id, {
						progress: Math.ceil(percent),
					}));
				})
				.end((err, res) => {
					if (err) {
						dispatch(removeFile(file.id));
					}

					if (res.status === 200) {
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
