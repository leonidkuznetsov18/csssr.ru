import React from 'react';
import Title from 'components/title';
import Text from 'components/text';
import OutsourceExamples from 'components/outsource-examples';

import './styles.css';

export default class OutsourceUse extends React.Component {
	static propTypes = {
		tips: React.PropTypes.object,
	}

	render() {
		const cloud = require('images/background/cloudx3.svg');

		return (
			<div className='outsource-use'>
				<h2 className='outsource-use__title'>
					<div className='outsource-use__title-text'>
						Идеи Применения
					</div>
				</h2>

				<img
					className='outsource-use__cloud outsource-use__cloud_left'
					src={cloud}
				/>
				<img
					className='outsource-use__cloud outsource-use__cloud_right'
					src={cloud}
				/>

				<div className='outsource-use__content'>
					<div className='outsource-use__how'>
						<Title component='h3'>
							КАК ПРИМЕНИТЬ
							<br />
							НАШ СЕРВИС
							<br />
							В ВАШЕМ БИЗНЕСЕ?
						</Title>

						<Text size='s'>
							— Что такое «Frontend аутсосринг», как это может быть полезно?
							<br />
							— Ок, сейчас объясним наглядно...
						</Text>
					</div>

					<OutsourceExamples tips={this.props.tips} />
				</div>
			</div>
		);
	}
}
