import React from 'react';
import Title from 'components/title';
import Text from 'components/text';

import './styles.css';

export default function Faq({data}) {
	return (
		<div className='faq'>
			<div className='faq__info'>
				{data.image &&
					<div className='faq__image'>
						<img
							src={require(`images/faq/${data.image.file}.svg`)}
							alt={data.image.alt}
							width={data.image.width}
							height={data.image.height}
						/>
						{data.link &&
							<a href={data.link.href} className='faq__link'>
								{data.link.text}
							</a>
						}
					</div>
				}

				<Title color='yellow'>
					{data.title}
				</Title>

				<Text size='l' color='blue'>
					{data.comment}
				</Text>
			</div>

			<div className='faq__questions'>
				{data.columns.map((column, index) => (
					<div className='faq__column' key={index}>
						{column.map((item, index) => (
							<div key={index} className='faq__question'>
								<h3 className='faq__subtitle'>
									{item.title}
								</h3>

								<Text size='m' color='blue'>
									{item.text}
								</Text>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

Faq.propTypes = {
	data: React.PropTypes.object
};
