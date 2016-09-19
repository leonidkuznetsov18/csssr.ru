import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Icon from 'components/icon';
import TinkoffTitle from 'components/tinkoff/tinkoff-title';

import styles from './styles.css';

const content = [
	{
		icon: 'tinkoff/job/thumb',
		subtitle: 'Самый крупный онлайн-банк в\u00a0мире',
		description: 'И\u00a0интересный проект с\u00a0технической точки зрения',
	},
	{
		icon: 'tinkoff/job/target',
		subtitle: 'Команда профессионалов',
		description: 'Всегда стремящихся сделать максимально крутой продукт, со\u00a0здоровым перфекционизмом',
	},
	{
		icon: 'tinkoff/job/tk',
		subtitle: 'Оформление по ТК',
		description: 'Всё как у\u00a0нормальных людей',
	},
	{
		icon: 'tinkoff/job/money',
		subtitle: 'Высокая зарплата',
		description: 'Платим больше, чем другие банки, потому что хотим, чтобы лучшие специалисты работали у\u00a0нас',
	},
];

function TinkoffJob() {
	return (
		<div className={styles.root}>
			<TinkoffTitle align='center' tag='h2'>
				Тинькофф Банк – это
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
						<div className={styles.texts}>
							<p className={styles.subtitle}>
								{item.subtitle}
							</p>
							<p className={styles.description}>
								{item.description}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default withStyles(TinkoffJob, styles);
