import React from 'react';
import Row from 'components/row';
import Column from 'components/column';
import Title from 'components/title';
import Options from 'components/options';
import Checkbox from 'components/checkbox';
import Radio from 'components/radio';

import './styles.css';

function generateProps(fieldProps, fieldName, fieldValue, isRadio) {
	if (isRadio) {
		return {
			...fieldProps,
			checked: fieldProps.value === fieldValue,
			value: fieldValue,
		};
	}

	return {
		...fieldProps,
		checked: fieldProps.value && fieldProps.value.indexOf(fieldValue) !== -1,
		onChange: (event) => {
			const isChecked = event.target.checked;

			if (isChecked) {
				fieldProps.onChange(fieldProps.value.concat(fieldValue));
			} else {
				fieldProps.onChange(fieldProps.value.filter((value) => value !== fieldValue));
			}
		},
	};
}
export default function OrderOptions({ options, fields }) {
	const titles = [
		'Современные браузеры',
		'Устаревшие браузеры',
		'Мобильные платформы',
		'Ширина страниц',
	];

	const keys = [
		'modernBrowsers',
		'oldBrowsers',
		'mobile',
		'pagesWidth',
	];

	const { addition } = options;

	return (
		<div className='order-options'>
			<Row inner>
				{keys.map((key, index) => {
					const isRadio = key === 'pagesWidth';
					const Component = isRadio ? Radio : Checkbox;

					return (
						<Column size={1 / 4} key={index}>
							<Title size='small'>
								{titles[index]}
							</Title>

							<Options>
								{options[key].map((option, optionIndex) => (
									<Component
										key={optionIndex}
										name={key}
										id={`${key}${index}`}
										tip={option.tip}
										{...generateProps(fields[key], key, option.value, isRadio)}
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
						key={i}
						tip={option.tip}
						id={option.value}
						checked={option.isChecked}
						{...generateProps(fields.addition, 'addition', option.value)}
					>
						{option.name}
					</Checkbox>
				))}
			</Options>
		</div>
	);
}

OrderOptions.propTypes = {
	options: React.PropTypes.object.isRequired,
	fields: React.PropTypes.object.isRequired,
};
