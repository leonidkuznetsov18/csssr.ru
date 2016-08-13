import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Row from 'components/row';
import Column from 'components/column';
import Title from 'components/title';
import Options from 'components/options';
import Checkbox from 'components/checkbox';
import Radio from 'components/radio';
import styles from './styles.css';

function generateProps(fieldProps = {}, fieldName, fieldValue, isRadio) {
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

function OrderOptions({ options, fields }) {
	const titles = [
		'Современные браузеры',
		'Устаревшие браузеры',
		'Мобильные платформы',
		'Ширина страниц',
	];

	const keys = [
		'modernBrowsers',
		'oldBrowsers',
		'mobileBrowsers',
		'pagesWidth',
	];

	const { addition } = options;

	return (
		<div>
			<Row inner>
				{keys.map((key, index) => {
					const isRadio = key === 'pagesWidth';
					const Component = isRadio ? Radio : Checkbox;

					return (
						<Column key={index} size={1 / 4}>
							<Title size='small'>
								{titles[index]}
							</Title>

							<Options>
								{options[key].map((option, optionIndex) => (
									<Component
										id={`${key}${optionIndex}`}
										key={optionIndex}
										name={key}
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

			<div className={styles.extra}>
				<Title size='small'>Дополнительно</Title>
				<Options inline>
					{addition.map((option, i) => (
						<Checkbox
							checked={option.isChecked}
							id={option.value}
							key={i}
							tip={option.tip}
							{...generateProps(fields.addition, 'addition', option.value)}
						>
							{option.name}
						</Checkbox>
					))}
				</Options>
			</div>
		</div>
	);
}

OrderOptions.propTypes = {
	fields: React.PropTypes.object.isRequired,
	options: React.PropTypes.object.isRequired,
};

OrderOptions.defaultProps = {
	fields: {},
	options: [],
};

export default withStyles(OrderOptions, styles);
