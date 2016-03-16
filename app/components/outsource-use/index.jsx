import React from 'react';
import cx from 'classnames';
import Title from 'components/title';
import Text from 'components/text';
import OutsourceExamples from 'components/outsource-examples';

import styles from './styles.css';

export default class OutsourceUse extends React.Component {
	static propTypes = {
		tips: React.PropTypes.object,
	}

	render() {
		const cloud = require('images/background/cloudx3.svg');
		const cloudClass = (position) => cx({
			[styles.cloud]: true,
			[styles[`cloud_${position}`]]: position,
		});

		return (
			<div className={styles.root}>
				<h2 className={styles.title}>
					<div className={styles.text}>
						Идеи Применения
					</div>
				</h2>

				<img
					className={cloudClass('left')}
					src={cloud}
				/>
				<img
					className={cloudClass('right')}
					src={cloud}
				/>

				<div className={styles.content}>
					<div className={styles.how}>
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
