import React from 'react';
import { Link } from 'react-router';
import Icon from 'components/icon';

import styles from './styles.css';

export default class JobsVacancy extends React.Component {
	static propTypes = {
		data: React.PropTypes.array.isRequired,
	}

	renderLink = (vacancy, index) => {
		const isInternalLink = !/^(https?:)?\/\//.test(vacancy.url);

		if (isInternalLink) {
			return (
				<Link
					to={vacancy.url}
					className={styles.link}
					key={index}
				>
					{vacancy.name}
				</Link>
			);
		}

		return (
			<a
				href={vacancy.url}
				target='_blank'
				className={styles.link}
				key={index}
			>
				{vacancy.name}
				{vacancy.hh &&
					<Icon icon='hh' className={styles.hh} />
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
						{vacancy.vacancies.map(this.renderLink) }
					</li>
				))}
			</ul>
		);
	}
}
