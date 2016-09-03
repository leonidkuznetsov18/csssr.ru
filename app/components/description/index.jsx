import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Airship from 'components/airship';
import Icon from 'components/icon';
import { Link } from 'react-router';
import Parallax from 'components/parallax';
import Workflow from 'components/workflow';
import Text from 'components/text';

import styles from './styles.css';

function Description({ data }) {
	return (
		<div className={styles.root}>
			<div className={styles.logo} />
			<Parallax
				max={0}
				min={-150}
				offset={500}
				speed={0.4}
			>
				<div className={styles.clouds}>
					{[0, 1, 2, 3].map((key) => (
						<span
							className={styles.cloud}
							key={key}
						>
							<Icon icon={key === 0 ? 'cloud' : 'cloud2'} />
						</span>
					))}
				</div>
			</Parallax>
			<div className={styles.list}>
				{data.map((item, index) => (
					<div
						className={styles.item}
						key={index}
					>
						<h2 className={styles.title}>
							<span
								dangerouslySetInnerHTML={{ __html: item.title }}
							/>
							{item.link &&
								<Link
									className={styles.link}
									to={item.link}
								>
									{item.linkText}
								</Link>
							}
						</h2>
						<Text size='s'>
							{item.description}
						</Text>
					</div>
				))}
			</div>
			<div className={styles.flow}>
				<Parallax
					max={310}
					min={0}
					offset={1600}
					speed={-0.7}
				>
					<div className={styles.airship}>
						<Airship image={require('../../images/background/zeppelin_index.svg')} />
					</div>
				</Parallax>
				<Workflow />
			</div>
		</div>
	);
}

Description.propTypes = {
	data: React.PropTypes.array.isRequired,
};

export default withStyles(Description, styles);
