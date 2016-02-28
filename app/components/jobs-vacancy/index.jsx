import React from 'react';
import { Link } from 'react-router';
import Icon from 'components/icon';

import './styles.css';

export default class JobsVacancy extends React.Component {
	static propTypes = {
		data: React.PropTypes.array.isRequired,
	}

	renderLink = (vacancy, index) => {
		const isInternalLink = !/^(https?:)?\/\//.test(vacancy.url);

		if (isInternalLink) {
			return (
				<Link to={vacancy.url} className='jobs-vacancy__link' key={index}>
					{vacancy.name}
				</Link>
			);
		}

		return (
			<a href={vacancy.url} target='_blank' className='jobs-vacancy__link' key={index}>
				{vacancy.name}
				{vacancy.hh &&
					<Icon icon='hh' className='jobs-vacancy__hh' />
				}
			</a>
		);

	}

	render() {
		const { data } = this.props;

		return (
			<ul className='jobs-vacancy'>
				{data.map((vacancy, index) => (
					<li className='jobs-vacancy__item' key={index}>
						{vacancy.name}
						{' '}
						{vacancy.vacancies.map(this.renderLink) }
					</li>
				))}
			</ul>
		);
	}
}
