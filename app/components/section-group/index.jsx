import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Section from 'components/section';

import styles from './styles.css';

function SectionGroup({ data }) {
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

export default withStyles(SectionGroup, styles);
