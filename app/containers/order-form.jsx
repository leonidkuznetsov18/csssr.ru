import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {changeOption} from 'actions/order';
import Row from 'components/row';
import Column from 'components/column';
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


	handleOptionClick = (list, i, value) => {
		this.props.dispatch(changeOption(list, value, i));
	}


	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps');
		console.log(nextProps);
	}


	render() {
		const {mobile, modernBrowsers, oldBrowsers, pagesWidth} = this.props.form.options;
		return (
			<form
				action='order/form/submit/path'
				autoComplete='off'
				method='post'
				onSubmit={this.onSubmit}
			>
				<Row style={{width: '93%'}}>
					<Column size={1 / 2}>
						<Column size={1 / 2}>
							<Options type='checkbox'>
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
						<Column size={1 / 2}>
							<Options type='checkbox'>
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
					</Column>
					<Column size={1 / 2}>
						<Column size={1 / 2}>
							<Options type='checkbox'>
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
						<Column size={1 / 2}>
							<Options type='radio'>
								{pagesWidth.map((option, i) => (
									<Option
										checked={option.isChecked}
										onChange={e => this.handleOptionClick('pagesWidth', i, e.target.checked)}
										key={i}
									>
										{option.name}
									</Option>
								))}
							</Options>
						</Column>
					</Column>
				</Row>
				<Row>
					<Options inline>
						<Option>Chrome 44</Option>
						<Option>Firefox 39</Option>
						<Option>Safari 8</Option>
						<Option>Opera 30</Option>
						<Option>Edge (Windows 10)</Option>
					</Options>
				</Row>
			</form>
		);
	}
}
