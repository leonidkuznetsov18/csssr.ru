import React, { PropTypes } from 'react';
import Icon from 'components/icon';
import Title from 'components/title';
import Text from 'components/text';

import './styles.css';

export default class Contacts extends React.Component {
	static propTypes = {

	}

	render() {
		return (
			<div className='contacts'>
				<Icon />
			</div>
		);
	}
}
