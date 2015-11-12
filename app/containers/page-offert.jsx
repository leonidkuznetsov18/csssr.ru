import React from 'react';

import Offert from 'components/offert';

const pageTitles = {
	offert: 'Общие условия оказания услуг',
	confidential: 'Положение об обработке персональных данных'
}
export default class PageOffert extends React.Component {
	static propTypes = {
		route: React.PropTypes.object.isRequired
	}

	render() {
		const { name } = this.props.route;
		const data = require(`data/${name}.json`);

		return (
			<Offert data={data}/>
		);
	}
}
