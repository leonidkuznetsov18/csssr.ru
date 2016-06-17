import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';

import styles from './styles.css';

class JobsVacancy extends React.Component {
	static propTypes = {
		data: React.PropTypes.array.isRequired,
	}

	renderLink = (name, url) => {
		const isInternalLink = !/^(https?:)?\/\//.test(url);

		if (isInternalLink) {
			return (
				<Link
					className={styles.link}
					to={url}
				>
					{name}
				</Link>
			);
		}

		return (
			<a
				className={styles.link}
				href={url}
				target='_blank'
			>
				{name}
			</a>
		);

	}

	render() {
		const { data } = this.props;

		return (
			<ul className={styles.root}>
				{data.map(({ name, url }, index) => (
					<li className={styles.item} key={index}>
						{this.renderLink(name, url)}
					</li>
				))}
			</ul>
		);
	}
}

export default withStyles(JobsVacancy, styles);
