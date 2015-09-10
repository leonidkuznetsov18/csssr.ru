import React from 'react';
import UseExamples from 'components/outsource-use-examples'

import './styles.css';


export default class OutsourceUse extends React.Component {

	render() {
		const cloud = require('images/background/cloudx3.svg');
		return (
			<div className="outsource-use">
				<h2 className="outsource-use__title">
					<div className="outsource-use__title-text">Идеи Применения</div>
				</h2>

				<img
					className='outsource-use__cloud outsource-use__cloud_left'
					src={cloud}
				/>
				<img
					className='outsource-use__cloud outsource-use__cloud_right'
					src={cloud}
				/>

				<div className="outsource-use__how">
					<h3 className="outsource-use__subtitle">
						как применить
						<br />
						наш сервис
						<br />
						в вашем бизнесе?
					</h3>
					<div className="outsource-use__text">
						— Что такое «Frontend аутсосринг», как это может быть полезно?
						<br />
						— Ок, сейчас объясним наглядно...
					</div>

					<UseExamples />

				</div>

			</div>
		);
	}
}
