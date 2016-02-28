import React from 'react';
import { Link } from 'react-router';

import './styles.css';

export default function Breadcrumbs({ items }) {
	return (
		<div className='breadcrumbs'>
			{items.map((item, index, list) => (
				<div key={index} className='breadcrumbs__item'>
					{item.link &&
						<Link to={item.link} className='breadcrumbs__link'>
							{item.name}
						</Link>
					}

					{!item.link &&
						<span className='breadcrumbs__text'>
							{item.name}
						</span>
					}

					{index !== list.length - 1 &&
						<span className='breadcrumbs__text'>
							{' '}
							/
						</span>
					}
				</div>
			))}
		</div>
	);
}

Breadcrumbs.propTypes = {
	items: React.PropTypes.array.isRequired,
};
