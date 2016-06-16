import morgan from 'morgan';
import FileStreamRotator from 'file-stream-rotator';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import uaParser from 'ua-parser-js';
import isEmpty from 'lodash.isempty';

const outputFormat = [
	'[:date[iso]]',
	' ',
	':method ":url" - :status',
	':newline',
	':ip',
	' - ',
	':ua:body',
	':newline',
].join('');

const logsPath = join(__dirname, '../..', 'logs');

const skipPaths = [
	'_assets',
	'audio\\/',
	'files\\/',
	'fonts\\/',
	'uploads\\/',
	'__webpack_hmr',
	'android-',
	'apple-',
	'mstile-',
	'favicon[\\.\\-]',
	'manifest\\.json',
	'browserconfig\\.xml',
	'robots\\.txt',
	'sitemap\\.xml',
].join('|');
const rSkip = new RegExp(`^\\/(${skipPaths})`);
const options = {
	skip: (req, res) => res.statusCode < 400 && rSkip.test(req.originalUrl),
};

export default function logger({ debug = false } = { debug: false }) {
	if (debug) {
		return morgan('dev', options);
	}

	if (!existsSync(logsPath)) {
		mkdirSync(logsPath);
	}

	const logsStream = FileStreamRotator.getStream({
		date_format: 'YYYY-MM-DD',
		filename: join(logsPath, 'csssr-%DATE%.log'),
		frequency: 'daily',
		verbose: false,
	});

	morgan.token('newline', () => '\n');
	morgan.token('body', (req) => isEmpty(req.body) ? ' ' : `\n${JSON.stringify(req.body)}`);
	morgan.token('ua', (req) => {
		const ua = uaParser(req.headers['user-agent']);
		return `${ua.browser.name} ${ua.browser.version} - ${ua.os.name} ${ua.os.version}`;
	});
	// enabled trust proxy is required, add `app.enable('trust proxy');`
	morgan.token('ip', (req) => req.ip);

	return morgan(outputFormat, {
		stream: logsStream,
		...options,
	});
}
