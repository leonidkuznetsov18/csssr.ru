import React from 'react';
import Brick from 'components/brick'
import FormGroup from 'components/form-group'

import './styles.css';


export default class OutsourceForm extends React.Component {

	static PropTypes = {
		data: React.PropTypes.object
	}


	constructor(props) {
		super(props);
		this.state = {
			validate: false
		}
	}


	onSubmit = (e) => {
		this.setState({
			validate: true
		});

		let fields = [];
		for (let ref in this.refs) {
			if (ref.indexOf('formGroups.') === 0) {
				fields.push(this.refs[ref]);
			}
		}

		var preventDefault = false;
		for (var key in fields) {
			preventDefault = preventDefault || !fields[key].isRight();
		}

		if (preventDefault) e.preventDefault();
	}


	render() {
		const data = this.props.data;

		let fields = []

		for (let field of data.fields) {
			fields.push(
				<FormGroup
					key={field.key}
					_id={`outsource${field.key}`}
					_name={field.key}
					ref={'formGroups.' + field.key}
					label={field.text}
					regexp={field.validation}
					validate={this.state.validate}
				/>
			);
		}

		return (
			<form
				id="outsourceForm"
				className="outsource-form"
				ref='smth'
				name="form"
				action="classes/mailer-outsource.php"
				role="form"
				autoComplete="off"
				method="post"
				onSubmit={this.onSubmit}
			>

				<input type="hidden" name="lang" value="ru" />
				<div className="outsource-form__container">
					<h2 className="outsource-form__title">{data.title}</h2>
					<p className="outsource-form__text">{data.info}</p>
					<div className="outsource-form__fields">
						{fields}

						<div className="confirm-rules">
							<label className="label checkbox label-last">
								<span className="corner-cover">Принимаю&nbsp;</span>
							</label>
							<a href="confidential" target="_blank" className="label-last-link blue-link">{'положение об обработке персональных данных'}</a>
						</div>
					</div>

					<div className="outsource-form__submit">
						<Brick text={data.button} />
					</div>
				</div>
				<div className="outsource-form__recruting">
					<div className="outsource-form__recruting-title">Рекрутинг</div>
					<div className="outsource-form__recruting-text">
						{'Хотите чтобы мы нашли вам фронтендера и испыстали его в боевых условиях? Пишите на '}
						<a href="mailto:wanted@csssr.com" className="blue-link outsource-form__recruting-link">wanted@csssr.com</a>
					</div>
				</div>
			</form>

		);
	}
}
