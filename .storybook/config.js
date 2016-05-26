import { configure } from '@kadira/storybook';

const req = require.context('../app/components/', true, /story\.jsx$/);

configure(function () {
	req.keys().forEach(req);
}, module);
