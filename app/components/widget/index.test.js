import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { Widget } from './index.jsx';

test('should not render without type', (t) => {
	const wrapper = shallow(<Widget />);

	t.is(wrapper.type(), null);
});

test('should not render with incorrect type', (t) => {
	const wrapper = shallow(<Widget type='qwerty' />);

	t.is(wrapper.type(), null);
});

test('should render <a> on twitter widget', (t) => {
	const wrapper = shallow(<Widget type='tw' />);

	t.is(wrapper.find('a').length, 1);
});

test('should render <iframe> on widget', (t) => {
	const wrapper = shallow(<Widget type='vk' />);

	t.is(wrapper.find('iframe').length, 1);
});
