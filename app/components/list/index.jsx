import React from 'react';
import Text from 'components/text';

import './styles.css';

export default function List({ items, props }) {
	return (
		<ul {...props} className='list'>
			{items.map((item, index) => (
				<li className='list__item' key={index}>
					<Text {...props} indent={false}>
						{item}
					</Text>
				</li>
			))}
		</ul>
	);
}

List.propTypes = {
	items: React.PropTypes.array.isRequired,
	props: React.PropTypes.object,
};
