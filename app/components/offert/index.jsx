import React from 'react';
import Content from 'components/content';

import styles from './styles.css';

export default function Offert({ data, children }) {
	return (
		<Content>
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
									<p className={styles.text}
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
			{children}
		</Content>
	);
}

Offert.propTypes = {
	data: React.PropTypes.object,
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
};
