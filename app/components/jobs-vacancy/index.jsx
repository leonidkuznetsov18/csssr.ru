import React from 'react';
import Icon from 'components/icon';
import './styles.css';

const data = require('data/jobs-vacancy.json');

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

		return (
			<a href={vacancy.url} className='jobs-vacancy__link' key={index}>
				{ this.renderName(vacancy.name) }
				{ hh ? this.renderHh() : '' }
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
