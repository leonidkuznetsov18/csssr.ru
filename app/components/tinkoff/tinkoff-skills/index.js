import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Icon from 'components/icon';
import TinkoffTitle from 'components/tinkoff/tinkoff-title';

import styles from './styles.css';

const content = [
	{
		icon: 'tinkoff/skills/vanilla',
		subtitle: 'Vanilla.js',
	},
	{
		icon: 'tinkoff/skills/gulp-webpack',
		subtitle: 'Gulp и Webpack',
	},
	{
		icon: 'tinkoff/skills/babel',
		subtitle: 'Babel (ES 2015/2016)',
	},
	{
		icon: 'tinkoff/skills/ng-react',
		subtitle: 'Angular или React',
	},
	{
		icon: 'tinkoff/skills/git',
		subtitle: 'Git',
	},
	{
		icon: 'tinkoff/skills/cool',
		subtitle: 'Быть клёвым',
	},
];

function TinkoffSkills() {
	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<TinkoffTitle
					align='center'
					color='white'
					tag='h2'
				>
					Требуемые навыки
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
							<p className={styles.subtitle}>
								{item.subtitle}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default withStyles(TinkoffSkills, styles);
