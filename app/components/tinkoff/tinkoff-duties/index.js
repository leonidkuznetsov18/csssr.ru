import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Icon from 'components/icon';
import TinkoffTitle from 'components/tinkoff/tinkoff-title';

import styles from './styles.css';

const content = [
	{
		icon: 'tinkoff/duties/cards',
		description: 'Участие в\u00a0разработке интернет-банка и\u00a0других платёжных сервисов',
	},
	{
		icon: 'tinkoff/duties/team',
		description: 'Взаимодействие с\u00a0командой разработчиков разного уровня',
	},
	{
		icon: 'tinkoff/duties/code',
		description: 'Разработка нового функционала, оптимизация и\u00a0поддержка имеющегося кода',
	},
];

function TinkoffDuties() {
	return (
		<div className={styles.root}>
			<TinkoffTitle
				align='center'
				tag='h2'
			>
				Обязанности
			</TinkoffTitle>
			<ul className={styles.list}>
				{content.map((item, key) => (
					<li
						className={styles.item}
						key={key}
					>
						<div className={styles.icon}>
							<Icon icon={item.icon} />
						</div>
						<p className={styles.description}>
							{item.description}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default withStyles(TinkoffDuties, styles);
