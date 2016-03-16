import React from 'react';
import Section from 'components/section';

import styles from './styles.css';

export default function SectionGroup({ data }) {
	return (
		<div className={styles.root}>
			{data.map((group, index) => (
				<div className={styles.block} key={index}>
					<Section {...group} />
				</div>
			))}
		</div>
	);
}

SectionGroup.propTypes = {
	data: React.PropTypes.array,
};
