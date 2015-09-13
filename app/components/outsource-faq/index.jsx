import React from 'react';
import FaqSingle from 'components/outsource-faq-single';

import './styles.css';


export default class OutsourceFaq extends React.Component {

	static propTypes = {
		data: React.PropTypes.object
	}

	render() {

		const fhqBlocks = this.props.data.map((block, i) => {
			return (
				<FaqSingle
					key={i}
					title={block.title}
					comment={block.comment}
					columns={block.columns}
				/>
			);
		});

		return (
			<div id='faq' className='outsource__faq'>

				{fhqBlocks}
			</div>
		);
	}
}
