import React from 'react';
import { Link } from 'react-router';
import Icon from 'components/icon';
import './styles.css';

const data = require('data/jobs-vacancy.json');

function hasPrefix(str, prefix) {
	return str.slice(0, prefix.length) === prefix;
}

export default class JobsVacancy extends React.Component {
	renderName(name) {
		return <span className='jobs-vacancy__name'>{ name }</span>;
	}

	renderHh() {
		return (
			<Icon icon='hh' className='jobs-vacancy__hh' />
		);
	}

	renderOne = (vacancy, index) => {
		const hh = vacancy.hh;

		const linkContent = [
			this.renderName(vacancy.name),
			hh ? this.renderHh() : ''
		];

		const isInternalLink = !(
			hasPrefix(vacancy.url, '//') ||
			hasPrefix(vacancy.url, 'http://') ||
			hasPrefix(vacancy.url, 'https://')
		);

		if (isInternalLink) {
			return (
				<Link to={vacancy.url} className='jobs-vacancy__link'>
					{linkContent}
				</Link>
			);
		}

		return (
			<a href={vacancy.url} target='_blank' className='jobs-vacancy__link'  key={index}>
				{linkContent}
			</a>
		);

	}

	renderMore = (vacancyName, vacancies, index) => {
		return (
			<li className='jobs-vacancy__item' key={index}>
				{ this.renderName(vacancyName + ': ') }
				{ vacancies.map(this.renderOne) }
			</li>
		);
	}

	renderVacancy = (vacancy, index) => {
		const vacancies = vacancy.vacancies;
		return vacancies ? this.renderMore(vacancy.name, vacancies, index) : (
			<li className='jobs-vacancy__item' key={index}>
				{ this.renderOne(vacancy) }
			</li>
		);
	}

	render() {
		return (
			<ul className='jobs-vacancy'>
				{ data.map(this.renderVacancy) }
			</ul>
		);
	}
}
