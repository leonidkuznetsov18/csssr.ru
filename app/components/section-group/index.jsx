import React from 'react';
import Section from 'components/section';

import './styles.css';

export default class SectionGroup extends React.Component {
	static propTypes = {
		data: React.PropTypes.array.isRequired
	}

	render() {
		const { data } = this.props;

		return (
			<div className='section-group'>
				{data.map(group => (
					<div className='section-group__block'>
						<Section {...group} />
					</div>
				))};
			</div>
		);
	}
}
