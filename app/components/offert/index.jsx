import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';


import styles from './styles.css';

function Offert({ data }) {
	return (
		<div className={styles.root}>
			<h1 className={styles.title}>
				{data.title}
			</h1>
			{data.content.map((section, index) => (
				<div className={styles.section} key={index}>
					<h2 className={styles.subtitle}
						dangerouslySetInnerHTML={{
							__html: section.title,
						}}
					/>
					{(section.content || []).map((item, itemIndex) => (
						<div className={styles.group} key={itemIndex}>
							<p className={styles.index}
								dangerouslySetInnerHTML={{
									__html: item.title,
								}}
							/>
							{([].concat(item.content || [])).map((paragraph, paragraphIndex) => (
								<p
									className={styles.text}
									dangerouslySetInnerHTML={{
										__html: paragraph,
									}}
									key={paragraphIndex}
								/>
							))}
						</div>
					))}
				</div>
			))}
		</div>
	);
}

Offert.propTypes = {
	data: React.PropTypes.object,
};

export default withStyles(Offert, styles);
