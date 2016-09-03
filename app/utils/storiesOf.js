import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withContext } from 'recompose';

const base = require('styles/base/base.css');
const fonts = require('styles/base/fonts.css');

export default (name) => storiesOf(name, module)
	.addDecorator((story) => {
		const Component = withContext(
			{
				insertCss: React.PropTypes.func,
			},
			() => ({
				insertCss: (styles) => {
					/* eslint-disable no-underscore-dangle */
					base._insertCss();
					fonts._insertCss();
					styles._insertCss();
					/* eslint-enable no-underscore-dangle */
				},
			}),
			story
		);

		return <Component />;
	});
