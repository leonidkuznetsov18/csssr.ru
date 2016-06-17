import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Content from 'components/content';
import styles from './styles.css';

function VacancyContent({ children }) {
	return (
		<Content>
			<div className={styles.root}>
				{children}
			</div>
		</Content>
	);
}

VacancyContent.propTypes = {
	children: PropTypes.node,
};

export default withStyles(VacancyContent, styles);
