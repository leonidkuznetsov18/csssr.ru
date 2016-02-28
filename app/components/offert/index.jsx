import React from 'react';
import Content from 'components/content';

import './styles.css';

export default function Offert({ data }) {
	return (
		<Content>
			<div className='offert'>
				<h1 className='offert__title'>
					{data.title}
				</h1>
				{data.content.map((section, index) => (
					<div className='offert__section' key={index}>
						<h2 className='offert__subtitle'
							dangerouslySetInnerHTML={{
								__html: section.title,
							}}
						/>
						{(section.content || []).map((item, itemIndex) => (
							<div className='offert__group' key={itemIndex}>
								<p className='offert__index'
									dangerouslySetInnerHTML={{
										__html: item.title,
									}}
								/>
								{([].concat(item.content || [])).map((paragraph, paragraphIndex) => (
									<p className='offert__text'
										key={paragraphIndex}
										dangerouslySetInnerHTML={{
											__html: paragraph,
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
	data: React.PropTypes.object,
};
