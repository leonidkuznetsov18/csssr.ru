import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {changeOption} from 'actions/order';
import Row from 'components/row';
import Column from 'components/column';
import Title from 'components/title';
// import Uploader from 'components/order-uploader';
// import Options from 'components/order-options';
// import Contacts from 'components/order-contacts';
import {Options, Option} from 'components/options';


@connect(store => ({
	form: store.order.form
}))
export default class OrderForm extends React.Component {

	static propTypes = {
		form: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	onSubmit = e => {
		e.preventDefault();
		// TODO: send form to server if data is valid
		console.log('submit order form');
	}


	handleOptionClick = (list, index, value, structure) => {
		this.props.dispatch(changeOption(list, value, index, structure));
	}


	render() {
		const {mobile, modernBrowsers, oldBrowsers, pagesWidth, addition} = this.props.form.options;
		return (
			<form
				action='order/form/submit/path'
				autoComplete='off'
				method='post'
				onSubmit={this.onSubmit}
			>

				<Row>
					<Column size={1 / 4}>
						<Title size='small'>современные браузеры</Title>
						<Options>
							{modernBrowsers.map((option, i) => (
								<Option
									checked={option.isChecked}
									onChange={e => this.handleOptionClick('modernBrowsers', i, e.target.checked)}
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
									onChange={e => this.handleOptionClick('oldBrowsers', i, e.target.checked)}
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
									onChange={e => this.handleOptionClick('mobile', i, e.target.checked)}
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
									onChange={e => this.handleOptionClick('pagesWidth', i, e.target.checked, 'radio')}
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
								onChange={e => this.handleOptionClick('addition', i, e.target.checked)}
								key={i}
							>
								{option.name}
							</Option>
						))}
					</Options>
				</Row>
			</form>
		);
	}
}
