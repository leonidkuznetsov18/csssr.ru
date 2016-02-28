import multer from 'multer';

function getUploadFileName(req, file, cb) {
	const filename = file.originalname.split('.');
	filename[0] += `__${Date.now()}`;

	cb(null, filename.join('.'));
}

const errors = {
	UNKNOWN: {
		code: 'UNKNOWN',
		message: 'Unknown error',
	},
	FILE_LARGE: {
		code: 'FILE_LARGE',
		message: 'File is too big',
	},
};

export function handler(req, res) {
	if (!req.file) {
		return res.send({
			result: 'fail',
			error: errors.UNKNOWN,
		});
	}

	if (!req.file.error_code) {
		return res.send({
			result: 'ok',
			file: req.file,
		});
	}

	return res.send({
		result: 'fail',
		error: errors[req.file.error_code] || errors.UNKNOWN,
	});
}

export function limitHandler(err, req, res, next) {
	if (err.code === 'LIMIT_FILE_SIZE') {
		res.send({
			result: 'fail',
			error: errors.FILE_LARGE,
		});
	}

	next();
}

export const upload = multer({
	storage: multer.diskStorage({
		destination: process.env.FILES_FOLDER,
		filename: getUploadFileName,
	}),
	limits: {
		fileSize: 1024 * 1024 * 1024,
	},
});
