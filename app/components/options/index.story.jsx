import React from 'react';
import Options from './index.jsx';
import storiesOf from 'utils/storiesOf';

import Checkbox from 'components/checkbox';
import Radio from 'components/radio';

const options = require('data/order-options.json');
const key = 'modernBrowsers';

storiesOf('Options')
	.add('checkbox', () => (
		<Options>
			{options[key].map((option, optionIndex) => (
				<Checkbox
					id={`${key}${optionIndex}`}
					key={optionIndex}
					name={key}
					tip={option.tip}
				>
					{option.name}
				</Checkbox>
			))}
		</Options>
	))
	.add('radio', () => (
		<Options>
			{options[key].map((option, optionIndex) => (
				<Radio
					id={`${key}${optionIndex}`}
					key={optionIndex}
					name={key}
					tip={option.tip}
				>
					{option.name}
				</Radio>
			))}
		</Options>
	));
