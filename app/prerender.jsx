import React from 'react';
import Router from 'react-router';
import routes from 'routes';

module.exports = function(path) {
	var app;

	Router.run(routes, path, function(Application) {
		app = React.renderToString(<Application/>);
	});

	return app;
};
