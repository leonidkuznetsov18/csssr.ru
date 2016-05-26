import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Title from 'components/title';
import Text from 'components/text';

import styles from './styles.css';

function Faq({ data }) {
	return (
		<div className={styles.root}>
			<div className={styles.info}>
				{data.image &&
					<div className={styles.image}>
						<img
							alt={data.image.alt}
							height={data.image.height}
							src={require(`images/faq/${data.image.file}.svg`)}
							width={data.image.width}
						/>
						{data.link &&
							<a
								className={styles.link}
								href={data.link.href}
								target='_blank'
							>
								{data.link.text}
							</a>
						}
					</div>
				}

				<Title color='yellow'>
					{data.title}
				</Title>

				<Text color='grey' size='l'>
					{data.comment}
				</Text>
			</div>

			<div className={styles.questions}>
				{data.columns.map((column, index) => (
					<div className={styles.column} key={index}>
						{column.map((item, columnIndex) => (
							<div className={styles.question} key={columnIndex}>
								<h3
									className={styles.subtitle}
									dangerouslySetInnerHTML={{ __html: item.title }}
								/>

								{[].concat(item.text).map((text, itemIndex) => (
									<Text
										color='grey'
										key={itemIndex}
										size='m'
									>
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

export default withStyles(Faq, styles);
