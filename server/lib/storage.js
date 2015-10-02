import crypto from 'crypto';
import multer from 'multer';


export const errors = {
  UNKNOWN: {
    code: 'UNKNOWN',
    message: 'Unknown error'
  },
  FILE_LARGE: {
    code: 'FILE_LARGE',
    message: 'File is too big'
  }
};

export function handler(req, res) {
  if (!req.file) {
    return res.send({
      result: 'fail',
      error: errors.UNKNOWN
    });
  }
  if (!req.file.error_code) {
    return res.send({
      result: 'ok',
      file: req.file
    });
  } else {
    return res.send({
      result: 'fail',
      error: errors[req.file.error_code] || errors.UNKNOWN
    });
  }
}

export function limitHandler(err, req, res, next) {
  if (err.code === 'LIMIT_FILE_SIZE') {
    res.send({
      result: 'fail',
      error: errors.FILE_LARGE
    });
  }
  next();
}

export function getUploadFileName(req, file, cb) {
  crypto.pseudoRandomBytes(16, (err, raw) => {
    if (err) {
      console.log(err);
    }
    const filename = file.originalname.replace(/[^\w\d]/g, '_');
    cb(null, (raw.toString('hex')) + '__' + (Date.now()) + '__' + filename);
  });
}

export const upload = multer({
  storage: multer.diskStorage({
    destination: './uploads/',
    filename: getUploadFileName
  }),
  limits: {
    fileSize: 1024 * 1024 * 1024
  }
});
