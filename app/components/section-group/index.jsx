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
				{data.map((group, index) => (
					<div className='section-group__block' key={index}>
						<Section {...group} />
					</div>
				))};
			</div>
		);
	}
}
