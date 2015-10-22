import React, {PropTypes} from 'react';
import Row from 'components/row';
import Column from 'components/column';
import Title from 'components/title';
import {Options, Option} from 'components/options';


export default class OrderOptions extends React.Component {

	static propTypes = {
		options: PropTypes.object.isRequired,
		changeOption: PropTypes.func.isRequired
	}

	render() {
		const {mobile, modernBrowsers, oldBrowsers, pagesWidth, addition} = this.props.options;
		return (
			<div>
				<Row>
					<Column size={1 / 4}>
						<Title size='small'>современные браузеры</Title>
						<Options>
							{modernBrowsers.map((option, i) => (
								<Option
									checked={option.isChecked}
									onChange={e => this.props.changeOption('modernBrowsers', e.target.checked, i)}
									key={i}
								>
									{option.name}
								</Option>
							))}
						</Options>
					</Column>

					<Column size={1 / 4}>
						<Title size='small'>устаревшие браузеры</Title>
						<Options>
							{oldBrowsers.map((option, i) => (
								<Option
									checked={option.isChecked}
									onChange={e => this.props.changeOption('oldBrowsers', e.target.checked, i)}
									key={i}
								>
									{option.name}
								</Option>
							))}
						</Options>
					</Column>

					<Column size={1 / 4}>
						<Title size='small'>мобильные платформы</Title>
						<Options>
							{mobile.map((option, i) => (
								<Option
									checked={option.isChecked}
									onChange={e => this.props.changeOption('mobile', e.target.checked, i)}
									key={i}
								>
									{option.name}
								</Option>
							))}
						</Options>
					</Column>

					<Column size={1 / 4}>
						<Title size='small'>ширина страниц</Title>
						<Options type='radio'>
							{pagesWidth.map((option, i) => (
								<Option
									checked={option.isChecked}
									onChange={e => this.props.changeOption('pagesWidth', e.target.checked, i, 'radio')}
									key={i}
								>
									{option.name}
								</Option>
							))}
						</Options>
					</Column>
				</Row>

				<Row style={{marginTop: 50}}>
					<Title size='small'>дополнительно</Title>
				</Row>

				<Row>
					<Options inline>
						{addition.map((option, i) => (
							<Option
								checked={option.isChecked}
								onChange={e => this.props.changeOption('addition', e.target.checked, i)}
								key={i}
							>
								{option.name}
							</Option>
						))}
					</Options>
				</Row>
			</div>
		);
	}
}
