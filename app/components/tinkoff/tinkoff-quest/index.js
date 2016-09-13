import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Icon from 'components/icon';
import TinkoffTitle from 'components/tinkoff/tinkoff-title';
import TinkoffSubtitle from 'components/tinkoff/tinkoff-subtitle';
import TinkoffButton from 'components/tinkoff/tinkoff-button';

import styles from './styles.css';

const content = [
	{
		icon: 'tinkoff/quest/toggl',
		title: 'Тайм-трекер',
		description: 'Базовое',
		href: 'https://docs.google.com/document/d/1JIeXuoGHkxb4qVHIW3MPyIbYlLucuGFphBC6TfbUiHU/',
	},
	{
		icon: 'tinkoff/quest/github',
		title: 'Интерфейс Github',
		description: 'Продвинутое',
		href: 'https://docs.google.com/document/d/1aRu2marUZqj2Nyu00GK5Y1-OYWM4I5OexE28SUyZ3LM/',
	},
];

function TinkoffQuest() {
	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<TinkoffTitle
					align='center'
					tag='h2'
				>
					Тестовый квест
				</TinkoffTitle>
				<div className={styles.subtitle}>
					<TinkoffSubtitle align='center'>
						Выберите один из&nbsp;двух текстовых квестов: «Тайм-трекер» попроще и&nbsp;«Интерфейс Github» посложнее.  Исходники и&nbsp;результат запакуйте в&nbsp;zip-архив и&nbsp;прикрепите к&nbsp;форме отклика на&nbsp;вакансию.
					</TinkoffSubtitle>
				</div>
				<ul className={styles.list}>
					{content.map((item, key) => (
						<li
							className={styles.item}
							key={key}
						>
							<div className={styles.icon}>
								<Icon icon={item.icon} />
							</div>
							<TinkoffTitle
								align='center'
								tag='h3'
							>
								{item.title}
							</TinkoffTitle>
							<p className={styles.description}>
								{item.description}
							</p>
							<TinkoffButton
								external
								href={item.href}
								tag='a'
							>
								Подробнее
							</TinkoffButton>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.nb}>
				<div className={styles.inner}>
					<div className={styles.nbIcon}>
						<Icon icon='tinkoff/quest/exclamation' />
					</div>
					<div className={styles.nbText}>
						Обратите внимание: мы принимаем работы, выполненные только по&nbsp;нашим требованиям.
					</div>
				</div>
			</div>
		</div>
	);
}

export default withStyles(TinkoffQuest, styles);
