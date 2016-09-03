import React from 'react';
import Projecter from './index.jsx';
import storiesOf from 'utils/storiesOf';
import { action } from '@kadira/storybook';

const data = require('data/partners.json');

Object.keys(data).forEach((partner) =>
	storiesOf('Projecter')
		.add(partner, () => (
			<Projecter
				{...data[partner]}
				active
				onClose={action('close')}
				partner={partner}
			/>
		))
);
