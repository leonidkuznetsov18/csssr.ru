import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import './styles.css';

const pages = {
	'technical-manager': 'Менеджер-технарь',
	'pixel-perfectionist': 'Верстальщик пиксель-перфекционист'
};


export default class JobsWrapper extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
		location: PropTypes.object
	}

	render() {
		const page = this.props.location.pathname.match(/[^\/]*$/)[0];
		const pageName = pages[page];

		return (
			<div>
				<div className='hr-nav'>
					<Link to='/jobs' className='hr-nav__link'>Все вакансии</Link>
					<span className='hr-nav__current'> / {pageName}</span>
				</div>
				<div className='hr-main'>{this.props.children}</div>
			</div>
		);
	}
}
