import React from 'react';
import Icon from './index.jsx';
import storiesOf from 'utils/storiesOf';

const icons = require.context('images/icons/', true, /\.svg$/);

icons.keys().map((icon) => icon.slice(2, -4)).forEach((icon) =>
	storiesOf('Icon')
		.add(icon, () => (
			<div
				style={{
					width: 100,
					height: 100,
				}}
			>
				<Icon icon={icon} />
			</div>
		))
);
