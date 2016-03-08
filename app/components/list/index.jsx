import React from 'react';
import cx from 'classNames';
import Text from 'components/text';

import './styles.css';

export default function List({ items, props }) {
	const classList = cx({
		list__item: true,
		list__item_size_s: props.size === 's',
	});

	return (
		<ul {...props} className='list'>
			{items.map((item, index) => (
				<li className={classList} key={index}>
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
	size: React.PropTypes.string,
	props: React.PropTypes.object,
};
