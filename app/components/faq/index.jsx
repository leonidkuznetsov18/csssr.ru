import React from 'react';
import Title from 'components/title';
import Text from 'components/text';

import styles from './styles.css';

export default function Faq({ data }) {
	return (
		<div className={styles.root}>
			<div className={styles.info}>
				{data.image &&
					<div className={styles.image}>
						<img
							src={require(`images/faq/${data.image.file}.svg`)}
							alt={data.image.alt}
							width={data.image.width}
							height={data.image.height}
						/>
						{data.link &&
							<a
								href={data.link.href}
								target='_blank'
								className={styles.link}>
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

			<div className={styles.questions}>
				{data.columns.map((column, index) => (
					<div className={styles.column} key={index}>
						{column.map((item, columnIndex) => (
							<div key={columnIndex} className={styles.question}>
								<h3
									className={styles.subtitle}
									dangerouslySetInnerHTML={{ __html: item.title }}
								/>

								{[].concat(item.text).map((text, itemIndex) => (
									<Text size='m' color='blue' key={itemIndex}>
										{text}
									</Text>
								))}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

Faq.propTypes = {
	data: React.PropTypes.object,
};
