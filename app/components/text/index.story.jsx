import React from 'react';
import Text from './index.jsx';
import storiesOf from 'helpers/storiesOf';
import loremIpsum from 'lorem-ipsum';

const text = loremIpsum({
	count: 15,
	units: 'words',
});
const textWithProps = (props) => (
	<Text {...props}>
		{text}
	</Text>
);

storiesOf('Text')
	.add('default', () => textWithProps())
	.add('size-l', () => textWithProps({ size: 'l' }))
	.add('size-m', () => textWithProps({ size: 'm' }))
	.add('size-s', () => textWithProps({ size: 's' }))
	.add('size-xs', () => textWithProps({ size: 'xs' }))
	.add('size-xxs', () => textWithProps({ size: 'xxs' }))
	.add('noindent', () => textWithProps({ indent: false }))
	.add('centered', () => textWithProps({ center: true }))
	.add('color-grey', () => textWithProps({ color: 'grey' }))
	.add('color-white', () => textWithProps({ color: 'white' }))
	.add('weight-normal', () => textWithProps({ weight: 'normal' }));
