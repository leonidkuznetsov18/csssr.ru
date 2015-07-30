import React from 'react';
import Content from 'components/content';

import './styles.css';

export default class Offert extends React.Component {
	static propTypes = {
		route: React.PropTypes.object
	}

	render() {
		const { name } = this.props.route;
		const data = require(`data/${name}.json`);
		return (
			<Content>
				<div className='offert'>
					<h1 className='offert__title'>
						{data.title}
					</h1>
					{data.content.map(section => (
						<div className='offert__section'>
							<h2 className='offert__subtitle'>
								{section.title}
							</h2>
							{(section.content || []).map(item => (
								<div className='offert__group'>
									<p className='offert__index'>
										{item.title}
									</p>
									{([].concat(item.content || [])).map(paragraph => (
										<p className='offert__text' dangerouslySetInnerHTML={{__html: paragraph}} />
									))}
								</div>
							))}
						</div>
					))}
				</div>
			</Content>
		);
	}
}
