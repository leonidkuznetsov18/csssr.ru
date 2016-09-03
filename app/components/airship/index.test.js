import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { Airship } from './index.jsx';
import styles from './styles.css';

const image = require('../../images/background/zeppelin_index.svg');

test('should not render without image', (t) => {
	const wrapper = shallow(<Airship />);

	t.is(wrapper.type(), null);
});

test('should render image', (t) => {
	const wrapper = shallow(<Airship image={image} />);
	const textProps = wrapper.find('.' + styles.text).props();

	t.is(textProps.style.backgroundImage, `url(${image})`);
});

test('should not render content without children', (t) => {
	const wrapper = shallow(<Airship image={image} />);

	t.is(wrapper.find('.' + styles.content).isEmpty(), true);
});

test('should render children', (t) => {
	const wrapper = shallow(<Airship image={image}>Children</Airship>);

	t.is(wrapper.find('.' + styles.content).text(), 'Children');
});
