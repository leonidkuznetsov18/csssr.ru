import React, {PropTypes} from 'react';
import Row from 'components/row';
import Column from 'components/column';
import Title from 'components/title';
import Options from 'components/options';
import Checkbox from 'components/checkbox';
import Radio from 'components/radio';

import './styles.css';

export default function OrderOptions({options, changeOption}) {
	const titles = [
		'Современные браузеры',
		'Устаревшие браузеры',
		'Мобильные платформы',
		'Ширина страниц'
	];
	const keys = [
		'modernBrowsers',
		'mobile',
		'oldBrowsers',
		'pagesWidth'
	];

	const {addition} = options;

	return (
		<div className='order-options'>
			<Row>
				{keys.map((key, index) => {
					const Component = key === 'pagesWidth' ? Radio : Checkbox;
					const structure = key === 'pagesWidth' ? 'radio' : 'checkbox';

					return (
						<Column size={1 / 4} key={index}>
							<Title size='small'>
								{titles[index]}
							</Title>

							<Options>
								{options[key].map((option, index) => (
									<Component
										tip={option.tip}
										checked={option.isChecked}
										name={key}
										onChange={e => changeOption(key, e.target.checked, index, structure)}
										key={index}
									>
										{option.name}
									</Component>
								))}
							</Options>
						</Column>
					);
				})}
			</Row>

			<Title size='small'>Дополнительно</Title>
			<Options inline>
				{addition.map((option, i) => (
					<Checkbox
						tip={option.tip}
						checked={option.isChecked}
						onChange={e => changeOption('addition', e.target.checked, i)}
						key={i}
					>
						{option.name}
					</Checkbox>
				))}
			</Options>
		</div>
	);
}

OrderOptions.propTypes = {
	options: PropTypes.object.isRequired,
	changeOption: PropTypes.func.isRequired
};
