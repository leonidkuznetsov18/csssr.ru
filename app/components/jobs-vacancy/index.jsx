import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import Icon from 'components/icon';

import styles from './styles.css';

class JobsVacancy extends React.Component {
	static propTypes = {
		data: React.PropTypes.array.isRequired,
	}

	renderLink = (vacancy, index) => {
		const isInternalLink = !/^(https?:)?\/\//.test(vacancy.url);

		if (isInternalLink) {
			return (
				<Link
					className={styles.link}
					key={index}
					to={vacancy.url}
				>
					{vacancy.name}
				</Link>
			);
		}

		return (
			<a
				className={styles.link}
				href={vacancy.url}
				key={index}
				target='_blank'
			>
				{vacancy.name}
				{vacancy.hh &&
					<Icon className={styles.hh} icon='hh' />
				}
			</a>
		);

	}

	render() {
		const { data } = this.props;

		return (
			<ul className={styles.root}>
				{data.map((vacancy, index) => (
					<li className={styles.item} key={index}>
						{vacancy.name}
						{' '}
						{vacancy.vacancies.map(this.renderLink)}
					</li>
				))}
			</ul>
		);
	}
}

export default withStyles(JobsVacancy, styles);
