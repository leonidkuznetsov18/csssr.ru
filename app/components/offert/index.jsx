import React from 'react';
import Content from 'components/content';

import './styles.css';

export default function Offert({data}) {
	return (
		<Content>
			<div className='offert'>
				<h1 className='offert__title'>
					{data.title}
				</h1>
				{data.content.map((section, index) => (
					<div className='offert__section' key={index}>
						<h2 className='offert__subtitle'>
							{section.title}
						</h2>
						{(section.content || []).map((item, index) => (
							<div className='offert__group' key={index}>
								<p className='offert__index'>
									{item.title}
								</p>
								{([].concat(item.content || [])).map((paragraph, index) => (
									<p className='offert__text'
										key={index}
										dangerouslySetInnerHTML={{
											__html: paragraph
										}}
									/>
								))}
							</div>
						))}
					</div>
				))}
			</div>
		</Content>
	);
}

Offert.propTypes = {
	data: React.PropTypes.object
};
