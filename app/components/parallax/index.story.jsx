import React from 'react';
import Icon from 'components/icon';

import Parallax from './index.jsx';
import storiesOf from 'utils/storiesOf';

storiesOf('Parallax')
	.add('default', () => (
		<div
			style={{
				marginTop: 300,
				marginBottom: 1000,
			}}
		>
			<Parallax speed={0.3}>
				<div
					style={{
						width: 300,
						height: 300,
					}}
				>
					<Icon icon='rocket' />
				</div>
			</Parallax>
		</div>
	));
