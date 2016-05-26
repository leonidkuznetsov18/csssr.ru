import React from 'react';
import List from './index.jsx';
import storiesOf from 'helpers/storiesOf';

const items = [
	'Легко генерировать идеи;',
	'Легко выкидывать свой дизайн;',
	'Нормально переносить критику результатов своего труда;',
	'Пользовать <s>Photoshop</s> Sketch.',
];
const listWithProps = (props) => (
	<div
		style={{
			paddingLeft: 30,
		}}
	>
		<List items={items} props={props} />
	</div>
);

storiesOf('List')
	.add('size-s', () => listWithProps({
		size: 's',
	}))
	.add('size-xs', () => listWithProps({
		size: 'xs',
	}));
