import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import './styles.css';


export default class JobsWrapper extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
		location: PropTypes.object
	}

	render() {
		const page = this.props.location.pathname.match(/[^\/]*$/)[0];

		// TODO: get pageName from json file
		const pageName = page;

		return (
			<div>
				<div className='job-wrapper-nav'>
					<Link to='/jobs' className='job-wrapper-nav__link'>Все вакансии</Link>
					<span className='job-wrapper-nav__current'> / {pageName}</span>
				</div>
				<div className='job-wrapper__main'>{this.props.children}</div>
			</div>
		);
	}
}
