import React from 'react';
import Tooltip from './index.jsx';
import storiesOf from 'utils/storiesOf';

storiesOf('Tooltip')
	.add('default', () => (
		<div
			style={{
				marginTop: 200,
				marginLeft: 140,
			}}
		>
			<Tooltip text='По умолчанию мы допускаем погрешность до 5 пикселей в размерах блоков отступов и плашек. Однако по вашей просьбе мы готовы подогнать вёрстку под макет со 100% соответствием.'>
				?
			</Tooltip>
		</div>
	));
