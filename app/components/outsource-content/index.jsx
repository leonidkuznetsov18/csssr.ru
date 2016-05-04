import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Title from 'components/title';
import Text from 'components/text';

import OutsourceProjects from 'components/outsource-projects';
import OutsourceService from 'components/outsource-service';

import styles from './styles.css';

function OutsourceContent({ data, projects }) {
	return (
		<div className={styles.root}>
			<div className={styles.events}>
				<div className={styles.title + ' ' + styles.title_events}>
					<Title size='medium' component='h2' indent={false}>
						{data.events.title}
					</Title>
				</div>

				<div className={styles.cols}>
					{data.events.cols.map((event, index) => (
						<OutsourceService {...event} key={index} />
					))}
				</div>
			</div>

			<div className={styles.success}>
				<div className={styles.title}>
					<Title size='medium' component='h2' indent={false}>
						{data.success.title}
					</Title>
				</div>

				<div className={styles.text}>
					<Text>
						{data.success.description}
					</Text>
				</div>

				<div className='projects'>
					<OutsourceProjects projects={projects}/>
				</div>
			</div>
		</div>
	);
}

OutsourceContent.propTypes = {
	data: React.PropTypes.object.isRequired,
	projects: React.PropTypes.array,
};

export default withStyles(OutsourceContent, styles);
