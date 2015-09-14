import React from 'react';
import { Link } from 'react-router';

import './styles.css';

export default class Language extends React.Component {
	render() {
		return (
			<div className='language'>
				<Link
					className='language__link'
					to='en'
					activeClassName='language__link_active'
				>
					EN
				</Link>

				<Link
					className='language__link'
					to='de'
					activeClassName='language__link_active'
				>
					DE
				</Link>

				<Link
					className='language__link'
					to='/'
					activeClassName='language__link_active'
				>
					RU
				</Link>
			</div>
		);
	}
}
