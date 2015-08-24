import React from 'react';
import Icon from 'components/icon';
import './styles.css';

const data = require('data/jobs-vacancy.json');

export default class JobsVacancy extends React.Component {
	renderName(name) {
		return <span className='jobs-vacancy__name'>{ name }</span>;
	}

	renderHh(vacancy) {
		return (
			<Icon icon='hh' className='jobs-vacancy__hh' />
		);
	}

	renderOne(vacancy) {
		const hh = vacancy.hh;

		return (
			<a href={vacancy.url} className='jobs-vacancy__link'>
				{ this.renderName(vacancy.name) }
				{ hh ? this.renderHh() : '' }
			</a>
		);
	}

	renderMore(vacancyName, vacancies) {
		return (
			<li className='jobs-vacancy__item'>
				{ this.renderName(vacancyName + ': ') }
				{ vacancies.map(vacancy => this.renderOne(vacancy)) }
			</li>
		);
	}

	renderVacancy(vacancy) {
		const vacancies = vacancy.vacancies;
		return vacancies ? this.renderMore(vacancy.name, vacancies) : (
			<li className='jobs-vacancy__item'>
				{ this.renderOne(vacancy) }
			</li>
		);
	}

	render() {
		return (
			<ul className='jobs-vacancy'>
				{ data.map(vacancy => this.renderVacancy(vacancy)) }
			</ul>
		);
	}
}
