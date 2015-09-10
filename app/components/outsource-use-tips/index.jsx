import React from 'react';

import './styles.css';


export default class OutsourceUseTips extends React.Component {

	static propTypes = {
		data: React.PropTypes.array.isRequired
	}


	getSubtitle(subtitle) {
		if (subtitle && subtitle.text) {

			if (subtitle.size === 'medium') {
				return (
					<h4
						className="outsource-use__subtitle outsource-use__subtitle_medium"
					>{subtitle.text}</h4>
				)

			} else { // default size is small
				return (
					<h5
						className="outsource-use__subtitle outsource-use__subtitle_small"
					>{subtitle.text}</h5>
				)
			}
		}
	}


	getText(text) {
		if (text && text.text) {

			if (text.size === 'big') {
				return (

					<h5
						className="outsource-use__text outsource-use__text_big"
					>{text.text}</h5>

				)
			} else {
				return (

					<div
						className="outsource-use__text"
					>{text.text}</div>

				)
			}
		}

	}


	render() {
		let tips = [];
		for (const tip of this.props.data) {
			tips.push(this.getSubtitle(tip.subtitle));
			tips.push(this.getText(tip.text));
		}

		return (

			<div className="outsource-use__tab" id="outsourceUseTabs">
				<div className="outsource-use__content outsource-use__content_active js-outsource-use-tab" id="bank">
					{tips}
				</div>
			</div>

		);
	}
}
